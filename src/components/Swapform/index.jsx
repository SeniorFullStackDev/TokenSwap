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
import SwapVertIcon from '@material-ui/icons/SwapVert';

import { AccessAlarm, MoreVert } from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import useWallet from "../../state/wallet/wallet.hooks";
// import { useActiveWeb3React } from '../../hooks';
import { useWeb3Context } from 'web3-react'
import ReviewButton from "./ReviewButton";

import TransactionStatus from "./TransactionStatus";
import classes from "./style.module.scss";
import TokenList from "./TokenList";
import ReviewForm from "./ReviewForm";
import Web3Status from "../Web3Status";
import ApproveCoinForm from "./ApproveCoinForm";


export default function SwapForm({ baseCryto }) {

    const { account } = useWeb3Context()
    const { orderType, tokens, selectedPair, transactionData, setSellAmount, setBuyAmount, reviewOrder, setPairPrice, setOrderType, swapSelectedPair, confirmTransaction } = useWallet();
    const [anchorEl, setAnchorEl] = useState(null);
    const [orderActive, setOrderActive] = useState(true);
    const [visibleTokenList, setVisibleTokenList] = useState({ open: false, target: "base" });
    const [expireDate, setExpireDate] = useState(24);
    const [reviewFormOpen, setReviewformOpen] = useState(false);
    const [approveFormOpen, setApproveFormOpen] = useState(false);
    const { price, sellAmount, buyAmount } = selectedPair;

    useEffect(() => {
        console.log("selectedPair ====>", selectedPair.base.balance, sellAmount)
        if (parseFloat(selectedPair.base.balance) < sellAmount) {
            setOrderActive(false);
        } else {
            setOrderActive(true);
        }
    }, [selectedPair])

    useEffect(() => {
        console.log(transactionData);
        if (transactionData.data) {
            setReviewformOpen(true);
        }
    }, [transactionData])

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
            setSellAmount(e.target.value);
        }
        if (e.target.name == "buyAmount") {
            setBuyAmount(e.target.value);
        }
        if (e.target.name == "limitPrice") {
            setPairPrice(e.target.value);
        }
    }


    const onClickReviewOrderBtn = () => {
        const sellToken = selectedPair.base.symbol;
        const buyToken = selectedPair.target.symbol;

        if (sellToken != "ETH") {
            setApproveFormOpen(true);
        } else {
            //market order
            reviewOrder(sellAmount, buyAmount, orderType, account);
        }
    }

    const onCloseRevewiForm = () => {
        setReviewformOpen(false);
    }

    const onChangeExpireDate = (e) => {
        setExpireDate(e.target.value);
    }

    const swapPaire = () => {
        swapSelectedPair();
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
                        <Button onClick={onOpenTokenList("base")}><div className={classes.tokenBtn}>{(selectedPair.base.symbol) ? selectedPair.base.symbol : "Choose Token"}</div> <ExpandMoreIcon /></Button>
                        {
                            selectedPair.base.symbol &&
                            <TextField className={classes.tokenInput} label="" variant="outlined" name="sellAmount" value={sellAmount} onChange={onChangeInput} />

                        }
                    </div>
                </div>
                <div className={classes.targetToken}>
                    <IconButton className={classes.swapBtn} onClick={swapPaire}>
                        <SwapVertIcon />
                    </IconButton>
                    <div className={classes.header}>
                        <span>You Receive</span>
                        {selectedPair.price && <span>1{selectedPair.base.symbol}={parseFloat(selectedPair.price).toFixed(4)}{selectedPair.target.symbol}</span>}
                    </div>
                    <div className={classes.tokenInputContainer}>
                        <Button onClick={onOpenTokenList("target")}><div className={classes.tokenBtn}>{(selectedPair.target.symbol) ? selectedPair.target.symbol : "Choose Token"}</div> <ExpandMoreIcon /></Button>
                        {
                            selectedPair.target.symbol &&
                            <TextField className={classes.tokenInput} label="" variant="outlined" name="buyAmount" value={buyAmount} onChange={onChangeInput} />
                        }
                    </div>
                    <ReviewButton selectedPair={selectedPair} onClick={onClickReviewOrderBtn} active={orderActive} />
                </div>
            </div>
            {tokens.length > 0 && <TokenList open={visibleTokenList.open} baseCryto={baseCryto} onChange={onChangeToken} onClose={onCloseTokenList} target={visibleTokenList.target} tokens={tokens} />}

            <ApproveCoinForm open={approveFormOpen} onClose={() => { setApproveFormOpen(false) }} />
            <ReviewForm open={reviewFormOpen} onClose={onCloseRevewiForm} />
            <TransactionStatus />
        </div>
    )
}

SwapForm.propTypes = {
    baseCryto: PropTypes.string,

};
SwapForm.defaultProps = {
    baseCryto: ''
};