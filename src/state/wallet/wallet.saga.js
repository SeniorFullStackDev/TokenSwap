import * as actions from "./wallet.action";
import { takeEvery, put, select, call, all, take, wait, delay } from "redux-saga/effects";
import * as ethClient from "../../api/ethclient";
import * as OXApi from "../../api/0xApi";
import { toFixed } from "../../utils";

const getSelectedPair = (state) => state.wallet.selectedPair;
const getTokenPriceList = (state) => state.wallet.priceList;
const getTransactonData = (state) => state.wallet.transactionData;

function* fetchTokenList(data) {
    const { account, ChainId } = data.payload;
    const tokenList = yield ethClient.fetchAllTokens();
    const tks = tokenList[ChainId];
    let tokenArr = [];
    for (let key in tks) {
        tokenArr.push(tks[key]);
    }
    for (var i = 0; i < tokenArr.length; i++) {
        let token = tokenArr[i];
        const balance = yield ethClient.getTokenBalance(account, token);
        token.balance = balance;
        yield put(actions.setTokenList(tokenArr))
    }
    yield put(actions.setTokenList(tokenArr));
}
function* fetchTokenBalanceList() {
    console.log("fetchTokenBalanceList");
}

function* updatePairPrice(selectedPair, tokenPriceList) {
    const buyTokenSymbol = selectedPair.target.symbol;
    for (var i = 0; i < tokenPriceList.length; i++) {
        const tk = tokenPriceList[i];
        if (tk.symbol == buyTokenSymbol) {
            yield put(actions.setSelectedPairPrice(1 / parseFloat(tk.price)));
        }
    }
}

function* fetchTokenPriceList(selectedPair) {


    const sellTokenSymbol = selectedPair.base.symbol;
    try {
        const data = yield OXApi.getPrice(sellTokenSymbol);
        const tokenPriceList = data.records;

        yield put(actions.setTokenPriceList(tokenPriceList));
        selectedPair = yield select(getSelectedPair);
        yield updatePairPrice(selectedPair, tokenPriceList);

    } catch (e) {
        console.log(e);
    }
}

function* fetchSelectedPair(data) {
    const { token, type } = data.payload;
    yield put(actions.setSelectedPair(token, type));
    let selectedPair = yield select(getSelectedPair);
    let tokenPriceList = yield select(getTokenPriceList);

    console.log("tokenPriceList ==>", tokenPriceList);

    selectedPair = { ...selectedPair, [type]: token };
    if (type == "base") {
        yield fetchTokenPriceList(selectedPair);
    }
    if (type == "target") {
        yield updatePairPrice(selectedPair, tokenPriceList);
    }
}

function* fetchSwapQuote(data) {
    const { orderType, account } = data.payload;
    let selectedPair = yield select(getSelectedPair);
    const { sellAmount, buyAmount } = selectedPair;
    const selamt = parseFloat(sellAmount) * (10 ** parseInt(selectedPair.base.decimals));
    const buyamt = parseFloat(buyAmount) * (10 ** parseInt(selectedPair.target.decimals));
    const maxApproval = parseFloat(selectedPair.base.balance) * (10 ** parseInt(selectedPair.target.decimals));
    yield put(actions.setTransactionProgress({ waiting: true, message: "Review Market Order", step: "review" }));

    try {
        if (selectedPair.base.symbol != "ETH") {
            yield put(actions.setTransactionProgress({ waiting: true, message: `waiting`, step: "approve" }));
            let approvedData = yield ethClient.approveToken(account, selectedPair.base.address, maxApproval);
            yield put(actions.setTransactionProgress({ waiting: true, message: `done` }));
        }
        let transactonData = yield OXApi.getQuote(selectedPair.target.symbol, selectedPair.base.symbol, buyamt);
        transactonData.from = account;
        const expirationTimeSeconds = transactonData.orders[0].expirationTimeSeconds;
        yield put(actions.setTransactionData(transactonData));
        yield put(actions.setTransactionProgress({ waiting: true, expirationTimeSeconds, message: "Review Market Order", step: "review" }));

    } catch (e) {
        console.log(e);
    }
}

function* confirmTransaction() {
    let transactonData = yield select(getTransactonData);
    console.log("transactonData --->", transactonData);
    try {
        yield put(actions.setTransactionProgress({ step: "confirm", message: "Progressing" }));
        const txResult = yield ethClient.excuteTransaction(transactonData);
        console.log("txData ===>", txResult);
        yield put(actions.setTransactionProgress({ step: "confirm", message: "Successful" }));
    } catch (e) {
        console.log("E ===========>", e);
        yield put(actions.setTransactionProgress({ expirationTimeSeconds: 0, message: "Transaction Failed!" }));
    }

}

function* initTransactionStatus() {
    yield put(actions.setTransactionProgress({ waiting: false, expirationTimeSeconds: 0, message: "" }));
}

function* fetchOrderConfig(data) {
    const { orderDetail } = data;
    // const {sellAmount, buyAmount, }

    try {
        let order = yield OXApi.getOrderConfig(orderDetail);
        //sign order
        const signedOrder = yield ethClient.signOrder(order);
        console.log("signedOrder ===>", signedOrder);

    } catch (e) {
        console.log(e);
    }

}

function* getTransactionsByAccount(data) {
    const { account } = data.payload;
    console.log("account ====>", account);
    try {
        let transactions = yield ethClient.getTransactionsByAccount(account);
        console.log("transactions ---->", transactions);
        yield put(actions.setTransactionHistory(transactions));
    } catch (e) {
        console.log(e);
    }
}

export default function* walletSaga() {
    yield takeEvery(actions.fetchAllTokenListSaga, fetchTokenList);
    yield takeEvery(actions.fetchTokenBalaneSaga, fetchTokenBalanceList);
    yield takeEvery(actions.fetchSelectedPairSaga, fetchSelectedPair);
    yield takeEvery(actions.swapQuoteSaga, fetchSwapQuote);
    yield takeEvery(actions.initTransactionStatus, initTransactionStatus);
    yield takeEvery(actions.fetchOrderConfigSaga, fetchOrderConfig);
    yield takeEvery(actions.confirmTransactionSaga, confirmTransaction);
    yield takeEvery(actions.getTransactionsByAccountSaga, getTransactionsByAccount);
} 