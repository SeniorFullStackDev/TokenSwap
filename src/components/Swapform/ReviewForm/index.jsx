import React, { useEffect, useState } from "react";
import PropTypes, { string } from 'prop-types';
import {
    IconButton,
    Button
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import classes from "./style.module.scss";
import useWallet from "../../../state/wallet/wallet.hooks";

export default function ReviewForm({ open, onClose }) {

    const { selectedPair, transactionData, confirmTransaction, transactionStatus } = useWallet();
    const { sellAmount, buyAmount } = selectedPair;

    useEffect(() => {
    }, [selectedPair])


    const onClickReviewOrderBtn = () => {
        confirmTransaction();
    }

    if (open) {
        return (

            <div className={classes.container}>
                <div className={classes.header}>
                    <div>Review Limit Order</div>
                    <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={onClose} className={classes.menuButton}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <div className={classes.body}>
                    <div className={classes.paySection}>
                        <div>You Pay</div>
                        <div className={classes.detail}>
                            <h3>{sellAmount} {selectedPair.base.symbol}</h3> <div></div>
                        </div>
                    </div>
                    <div className={classes.recieiveSection}>
                        <div>You Receive</div>
                        <div className={classes.detail}>
                            <h3>{buyAmount} {selectedPair.target.symbol}</h3> <div></div>
                        </div>
                    </div>
                    <div className={classes.detailRate}>
                        <div>Rate</div>
                        <div>1{selectedPair.target.symbol} @ {parseFloat(1 / selectedPair.price).toFixed(5)}{selectedPair.base.symbol}</div>
                    </div>
                    <div className={classes.detailFee}>
                        <div>protocolFee</div>
                        <div>{(transactionData.protocolFee) / (10 ** 18)} ETH</div>
                    </div>
                    <div className={classes.placeOrderBtnContainer}>
                        {transactionStatus.step != "confirm" && <Button className={classes.reviewBtn} variant="outlined" color="primary" onClick={onClickReviewOrderBtn}>Place Order</Button>}
                        {transactionStatus.step == "confirm" && <Button className={classes.reviewBtn} variant="outlined" color="primary">Confirm in Wallet</Button>}
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

ReviewForm.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func
};
ReviewForm.defaultProps = {
    open: false,
    onClose: () => { },
};