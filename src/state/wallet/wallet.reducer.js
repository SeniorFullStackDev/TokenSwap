import { createReducer } from "redux-act";
import * as actions from "./wallet.action";

const initialState = {
    tokens: [],
    selectedPair: {
        base: {
            balance: 0
        }, //sell
        target: {
            balance: 0
        }, //buy
        price: 0,
        orderType: "Market",
        sellAmount: 0,
        buyAmount: 0
    },
    priceList: {},
    transactionStatus: {
        waiting: false,
        expirationTimeSeconds: 0,
        message: "",
        step: ""
    },
    transactionData: {},
    transactionHistory: []
};

const reducer = {
    [actions.setTokenList]: (state, data) => {
        let tokens = Array.from(data.tokens);
        return {
            ...state,
            tokens
        }
    },
    [actions.setSelectedPair]: (state, data) => {
        let { token, type } = data;
        return {
            ...state,
            selectedPair: { ...state.selectedPair, [type]: token, price: 0, buyAmount: 0 }
        }
    },
    [actions.setSellAmount]: (state, data) => {
        let { sellAmount } = data;
        let price = state.selectedPair.price;
        let buyAmount = parseFloat(price) * parseFloat(sellAmount);
        return {
            ...state,
            selectedPair: { ...state.selectedPair, sellAmount, buyAmount }
        }
    },
    [actions.setBuyAmount]: (state, data) => {
        let { buyAmount } = data;
        let price = state.selectedPair.price;
        let sellAmount = parseFloat(buyAmount) / parseFloat(price);
        return {
            ...state,
            selectedPair: { ...state.selectedPair, sellAmount, buyAmount }
        }
    },
    [actions.setSelectedPairPrice]: (state, data) => {
        let { price } = data;
        let { sellAmount } = state.selectedPair;
        let buyAmount = parseFloat(price) * parseFloat(sellAmount);
        return {
            ...state,
            selectedPair: { ...state.selectedPair, price, sellAmount, buyAmount }
        }
    },
    [actions.setTokenPriceList]: (state, data) => {
        let priceList = Array.from(data.priceList);
        return {
            ...state,
            priceList
        }
    },
    [actions.setTransactionProgress]: (state, data) => {
        let { transactionStatus } = data;
        console.log("transactionStatus ===>", transactionStatus);
        return {
            ...state,
            transactionStatus: { ...state.transactionStatus, ...transactionStatus }
        }
    },
    [actions.setPairPrice]: (state, data) => {
        let { price } = data;
        let { sellAmount } = state.selectedPair;
        let buyAmount = parseFloat(price) * parseFloat(sellAmount);
        return {
            ...state,
            selectedPair: { ...state.selectedPair, price, sellAmount, buyAmount }
        }
    },
    [actions.setOrderType]: (state, data) => {
        let { orderType } = data;
        return {
            ...state,
            selectedPair: { ...state.selectedPair, orderType }
        }
    },
    [actions.swapSelectedPair]: (state, data) => {
        const baseToken = state.selectedPair.target;
        const targetToken = state.selectedPair.base;
        const sellAmount = state.selectedPair.buyAmount;
        let price = 0;
        if (state.selectedPair.price != 0) {
            price = 1 / state.selectedPair.price;
        }
        const buyAmount = price * sellAmount;

        return {
            ...state,
            selectedPair: { ...state.selectedPair, base: baseToken, target: targetToken, price, buyAmount, sellAmount }
        }
    },
    [actions.initWallet]: (state, data) => {
        return initialState;
    },
    [actions.setTransactionData]: (state, data) => {
        const { transactionData } = data;
        return {
            ...state,
            transactionData
        }
    },
    [actions.initSelectedPair]: (state, data) => {
        return {
            ...state,
            selectedPair: {
                base: { balance: 0 }, //sell
                target: { balance: 0 }, //buy
                price: 0,
                orderType: "Market",
                sellAmount: 0,
                buyAmount: 0
            }
        }
    },
    [actions.setTransactionHistory]: (state, data) => {
        let transactionHistory = Array.from(data.transactionHistory);
        return {
            ...state,
            transactionHistory
        }
    }
};

export default createReducer(reducer, initialState);