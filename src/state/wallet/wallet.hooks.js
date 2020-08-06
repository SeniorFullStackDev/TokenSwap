import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as walletActions from './wallet.action';


const useWallet = () => {

    const dispatch = useDispatch();
    const tokens = useSelector((state) => state.wallet.tokens);
    const orderType = useSelector((state) => state.wallet.selectedPair.orderType);
    const selectedPair = useSelector((state) => state.wallet.selectedPair);
    const transactionStatus = useSelector((state) => state.wallet.transactionStatus);

    const fetchAllTokenList = useCallback(
        (account, ChainId) => dispatch(walletActions.fetchAllTokenListSaga(account, ChainId)),
        [dispatch]
    );
    const reviewOrder = useCallback(
        (sellAmount, buyAmount, orderType, account) => dispatch(walletActions.swapQuoteSaga(sellAmount, buyAmount, orderType, account)),
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
        transactionStatus,
        initTransactionStatus,
        initWallet,
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
