import { createReducer } from "redux-act";
import * as actions from "./wallet.action";

const initialState = {
    tokens: [],
    selectedPair: {
        base: {}, //sell
        target: {}, //buy
        price: 0,
        orderType: "Market"
    },
    priceList: {},
    transactionStatus: {
        waiting: false,
        expirationTimeSeconds: 0,
        message: ""
    }
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
            selectedPair: { ...state.selectedPair, [type]: token }
        }
    },
    [actions.setSelectedPairPrice]: (state, data) => {
        let { price } = data;
        if (state.selectedPair.orderType == "Market") {
            return {
                ...state,
                selectedPair: { ...state.selectedPair, price }
            }
        } else {
            return state;
        }
    },
    [actions.setTokenPriceList]: (state, data) => {
        let priceList = Array.from(data.priceList);
        return {
            ...state,
            priceList
        }
    },
    [actions.setTransactionStarted]: (state, data) => {
        let { transactionStatus } = data;
        console.log("transactionStatus ===>", transactionStatus);
        return {
            ...state,
            transactionStatus: { ...state.transactionStatus, ...transactionStatus }
        }
    },
    [actions.setPairPrice]: (state, data) => {
        let { price } = data;
        return {
            ...state,
            selectedPair: { ...state.selectedPair, price }
        }
    },
    [actions.setOrderType]: (state, data) => {
        let { orderType } = data;
        return {
            ...state,
            selectedPair: { ...state.selectedPair, orderType }
        }
    },
    [actions.initWallet]: (state, data) => {
        return initialState;
    }
};

export default createReducer(reducer, initialState);