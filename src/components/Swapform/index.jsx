import React, { useEffect, useState } from "react";
import PropTypes, { string } from 'prop-types';
// import div from '@material-ui/core/div';
import { makeStyles } from '@material-ui/core/styles';

import {
    Box,
    Button,
    Menu,
    MenuItem,
    AppBar,
    Toolbar,
    IconButton,
    Menu as MenuIcon,
    Divider,
    Grid,
    TextField
} from '@material-ui/core';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

import { AccessAlarm, MoreVert } from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import useWallet from "../../state/wallet/wallet.hooks";
import { useActiveWeb3React } from '../../hooks';
import ReviewButton from "./ReviewButton";

import TransactionStatus from "./TransactionStatus";
import classes from "./style.module.scss";
import TokenList from "./TokenList";
import ReviewForm from "./ReviewForm";
import Web3Status from "../Web3Status";


export default function SwapForm({ baseCryto }) {

    const { account, chainId } = useActiveWeb3React()
    const { orderType, tokens, selectedPair, reviewOrder, setPairPrice, setOrderType } = useWallet();
    const [anchorEl, setAnchorEl] = useState(null);
    const [orderActive, setOrderActive] = useState(true);
    const [visibleTokenList, setVisibleTokenList] = useState({ open: false, target: "base" });
    const [expireDate, setExpireDate] = useState(24);
    const [reviewFormOpen, setReviewformOpen] = useState(false);
    const [sellAmount, setSellAmount] = useState(0);
    const [buyAmount, setBuyAmount] = useState(0);

    const sellInputRef = React.createRef();
    const buyInputRef = React.createRef();
    const limitPriceInputRef = React.createRef();

    useEffect(() => {
        if (sellInputRef.current) {
            updateBuyAmount(sellInputRef.current.value);
        }
    }, [selectedPair])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (orderType) => () => {
        setAnchorEl(null);
        setOrderType(orderType);
    };

    const onChangeToken = (val) => {
        console.log("onChangeToken==>", val);
    }

    const onOpenTokenList = (target) => () => {
        setVisibleTokenList({ ...visibleTokenList, open: true, target });
    }

    const onCloseTokenList = () => {
        setVisibleTokenList({ ...visibleTokenList, open: false });
    }

    const onChangeInput = (e) => {
        console.log(e.target.name, e.target.value);
        if (e.target.name == "sellAmount") {
            updateBuyAmount(e.target.value);
        }
        if (e.target.name == "buyAmount") {
            updateSellAmount(e.target.value);
        }
        if (e.target.name == "limitPrice") {
            setPairPrice(e.target.value);
        }

        const sellAmount = sellInputRef.current.value;
        if (selectedPair.base.balance < sellAmount) {
            setOrderActive(false);
        } else {
            setOrderActive(true);
        }
    }

    const updateBuyAmount = (sellAmount) => {
        const pairPrice = parseFloat(selectedPair.price);
        const amount = (pairPrice * parseFloat(sellAmount)).toFixed(2);
        if (buyInputRef.current) buyInputRef.current.value = amount;
        setSellAmount(amount);
        setBuyAmount(buyAmount);
    }

    const updateSellAmount = (buyAmount) => {
        const pairPrice = parseFloat(selectedPair.price);
        const amount = (1 / pairPrice * parseFloat(buyAmount)).toFixed(2);
        if (sellInputRef.current) sellInputRef.current.value = amount;
        setSellAmount(amount);
        setBuyAmount(buyAmount);
    }

    const onClickReviewOrderBtn = () => {
        const sellAmount = sellInputRef.current.value;
        const buyAmount = buyInputRef.current.value;
        const sellToken = selectedPair.base.symbol;
        const buyToken = selectedPair.target.symbol;
        if (orderType == "Limit") {
            setReviewformOpen(true);
        } else {
            //market order
            reviewOrder(sellAmount, buyAmount, orderType, account);
        }
    }

    const onCloseLimitOrderReview = () => {
        setReviewformOpen(false);
    }

    const onChangeExpireDate = (e) => {
        setExpireDate(e.target.value);
    }


    return (
        <div className={classes.swapFormContainer}>
            <Web3Status />
            <div className={classes.topBar}>
                <div className={classes.orderType}>{orderType}</div>
                <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.menuButton}>
                    <MoreVert />
                </IconButton>
                {/* <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose("Market")}>Market Order</MenuItem>
                    <MenuItem onClick={handleClose("Limit")}>Limit Order</MenuItem>
                </Menu> */}
            </div>
            <Divider />
            <div>
                <div className={classes.baseToken}>
                    <div className={classes.header}>
                        <span>You pay</span>
                        {selectedPair.base.symbol && <span className={(orderActive) ? classes.orderActive : classes.orderDective}>Max {parseFloat(selectedPair.base.balance).toFixed(8)}</span>}
                    </div>
                    <div className={classes.tokenInputContainer}>
                        <Button onClick={onOpenTokenList("target")}><div className={classes.tokenBtn}>{(selectedPair.base.symbol) ? selectedPair.base.symbol : "Choose Token"}</div> <ExpandMoreIcon /></Button>
                        {
                            selectedPair.base.symbol &&
                            <TextField className={classes.tokenInput} label="" variant="outlined" name="sellAmount" onChange={onChangeInput} inputRef={sellInputRef} />

                        }
                    </div>
                    {orderType == "Limit" &&
                        <>
                            <div className={classes.tokenInputContainer}>
                                <div className={classes.label}>Limit Price</div>
                                <TextField className={classes.tokenInput} label="" variant="outlined" name="limitPrice" onChange={onChangeInput} inputRef={limitPriceInputRef} />
                            </div>
                            <div className={classes.tokenInputContainer}>
                                <div className={classes.label}>Expires In</div>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <Select
                                        native
                                        value={expireDate}
                                        onChange={onChangeExpireDate}
                                        inputProps={{
                                            name: 'expireDate'
                                        }}
                                    >
                                        <option value={1}>24 Hours</option>
                                        <option value={3}>3 Days</option>
                                        <option value={7}>7 Days</option>
                                        <option value={0}>Untill Canceled</option>
                                    </Select>
                                </FormControl>
                            </div>
                        </>
                    }
                </div>
                <div className={classes.targetToken}>
                    <IconButton>this</IconButton>
                    <div className={classes.header}>
                        <span>You Receive</span>
                        {selectedPair.price && <span>1{selectedPair.base.symbol}={parseFloat(selectedPair.price).toFixed(2)}{selectedPair.target.symbol}</span>}
                    </div>
                    <div className={classes.tokenInputContainer}>
                        <Button onClick={onOpenTokenList("target")}><div className={classes.tokenBtn}>{(selectedPair.target.symbol) ? selectedPair.target.symbol : "Choose Token"}</div> <ExpandMoreIcon /></Button>
                        {
                            selectedPair.target.symbol &&
                            <TextField className={classes.tokenInput} label="" variant="outlined" name="buyAmount" onChange={onChangeInput} inputRef={buyInputRef} />
                        }
                    </div>
                    <ReviewButton selectedPair={selectedPair} onClick={onClickReviewOrderBtn} active={orderActive} />
                </div>
            </div>
            {tokens.length > 0 && <TokenList open={visibleTokenList.open} baseCryto={baseCryto} onChange={onChangeToken} onClose={onCloseTokenList} target={visibleTokenList.target} tokens={tokens} />}
            <TransactionStatus />
            <ReviewForm open={reviewFormOpen} detail={{ selectedPair, sellAmount, buyAmount }} onClose={onCloseLimitOrderReview} />
        </div>
    )
}

SwapForm.propTypes = {
    baseCryto: PropTypes.string,

};
SwapForm.defaultProps = {
    baseCryto: ''
};