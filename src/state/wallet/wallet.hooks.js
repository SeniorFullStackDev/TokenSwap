import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as walletActions from './wallet.action';


const useWallet = () => {

    const dispatch = useDispatch();
    const tokens = useSelector((state) => state.wallet.tokens);
    const orderType = useSelector((state) => state.wallet.selectedPair.orderType);
    const selectedPair = useSelector((state) => state.wallet.selectedPair);
    const transactionStatus = useSelector((state) => state.wallet.transactionStatus);
    const transactionData = useSelector((state) => state.wallet.transactionData);
    const transactionHistory = useSelector((state) => state.wallet.transactionHistory);

    const fetchAllTokenList = useCallback(
        (account, ChainId) => dispatch(walletActions.fetchAllTokenListSaga(account, ChainId)),
        [dispatch]
    );

    const fetchTransactionHistory = useCallback(
        (account) => dispatch(walletActions.getTransactionsByAccountSaga(account)),
        [dispatch]
    );

    const reviewOrder = useCallback(
        (orderType, account) => {
            dispatch(walletActions.swapQuoteSaga(orderType, account))
        },
        [dispatch]
    );


    const initTransactionStatus = useCallback(
        () => dispatch(walletActions.initTransactionStatus()),
        [dispatch]
    );

    const setPairPrice = useCallback(
        (price) => dispatch(walletActions.setPairPrice(price)),
        [dispatch]
    );
    const setOrderType = useCallback(
        (orderType) => dispatch(walletActions.setOrderType(orderType)),
        [dispatch]
    );

    const initWallet = useCallback(
        () => dispatch(walletActions.initWallet()),
        [dispatch]
    );

    const swapSelectedPair = useCallback(
        () => dispatch(walletActions.swapSelectedPair()),
        [dispatch]
    );

    const confirmTransaction = useCallback(
        () => dispatch(walletActions.confirmTransactionSaga()),
        [dispatch]
    );

    const setSellAmount = useCallback(
        (amount) => dispatch(walletActions.setSellAmount(amount)),
        [dispatch]
    );

    const setBuyAmount = useCallback(
        (amount) => dispatch(walletActions.setSellAmount(amount)),
        [dispatch]
    );

    const fetchSelectedPair = useCallback(
        (symbol, type) => {
            console.log("selectedPair ===>", selectedPair);
            let token;
            for (var i = 0; i < tokens.length; i++) {
                if (tokens[i].symbol.trim().toUpperCase() == symbol.trim().toUpperCase()) {
                    token = tokens[i];
                }
            }
            dispatch(walletActions.fetchSelectedPairSaga(token, type))
        },
        [dispatch, tokens]
    );

    return {
        transactionData,
        transactionStatus,
        transactionHistory,
        initTransactionStatus,
        setSellAmount,
        setBuyAmount,
        fetchTransactionHistory,
        swapSelectedPair,
        initWallet,
        confirmTransaction,
        tokens,
        orderType,
        selectedPair,
        fetchAllTokenList,
        fetchSelectedPair,
        setPairPrice,
        reviewOrder,
        setOrderType
    };
};

export default useWallet;
