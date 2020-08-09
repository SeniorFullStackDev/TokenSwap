import React, { useEffect, useState } from "react";
import { useWeb3Context } from 'web3-react'
import PropTypes, { string } from 'prop-types';
import {
    IconButton,
    Button
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import classes from "./style.module.scss";
import useWallet from "../../../state/wallet/wallet.hooks";
import CircularProgress from '@material-ui/core/CircularProgress';

export default function ApproveCoinForm({ open, onClose }) {

    const { account } = useWeb3Context()
    const { selectedPair, reviewOrder, transactionStatus } = useWallet();
    const { sellAmount, buyAmount } = selectedPair;

    const onClickReviewOrderBtn = () => {
        reviewOrder("Market", account);
    }

    useEffect(() => {
        if (transactionStatus.step == "review") {
            onClose();
        }
    }, [transactionStatus])

    if (open) {
        if (transactionStatus.message.includes("waiting")) {
            return (
                <div className={classes.container}>
                    <div className={classes.header}>
                        <div>Approving permission to sell your {selectedPair.base.symbol}</div>
                        <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={onClose} className={classes.menuButton}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div className={classes.body}>
                        <div className={classes.content}>
                            <CircularProgress color="secondary" size={80} />
                            <h2>Activiating {selectedPair.base.symbol}</h2>
                        </div>
                        <div className={classes.confrmBtn}>
                            <Button className={classes.reviewBtn} variant="outlined" color="primary" disabled={transactionStatus.step == "approve"} onClick={onClickReviewOrderBtn} >Approve My  {selectedPair.base.symbol}</Button>
                        </div>
                    </div>
                </div>
                // <div className={classes.container}>
                //     <div className={classes.header}>
                //         <div>Approve permission to sell your {selectedPair.base.symbol}</div>
                //         <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={onClose} className={classes.menuButton}>
                //             <CloseIcon />
                //         </IconButton>
                //     </div>
                //     <div className={classes.body}>
                //         <div className={classes.content}>
                //             <h1>Please confirm the allowance approval</h1>
                //         </div>
                //     </div>
                // </div>
            )
        } else {
            return (
                <div className={classes.container}>
                    <div className={classes.header}>
                        <div>Approve permission to sell your {selectedPair.base.symbol}</div>
                        <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={onClose} className={classes.menuButton}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div className={classes.body}>
                        <div className={classes.content}>
                            <h2>We need permission to use your {selectedPair.base.symbol}</h2>
                        </div>
                        <div className={classes.confrmBtn}>
                            <Button className={classes.reviewBtn} variant="outlined" color="primary" disabled={transactionStatus.step == "approve"} onClick={onClickReviewOrderBtn} >Approve My  {selectedPair.base.symbol}</Button>
                        </div>
                    </div>
                </div>
            )
        }
    } else {
        return null;
    }
}

ApproveCoinForm.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func
};
ApproveCoinForm.defaultProps = {
    open: false,
    onClose: () => { },
};