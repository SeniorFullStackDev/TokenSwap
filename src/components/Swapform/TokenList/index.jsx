import React, { useEffect, useState } from "react";
import PropTypes, { string } from 'prop-types';
import {
    IconButton
} from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';

import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';

import classes from "./style.module.scss";

export default function TokenList({ open, target, onClose, onChange }) {
    if (open) {
        return (
            <div className={classes.tokenListContainer}>
                <div className={classes.header}>
                    <div>You Pay</div>
                    <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={onClose} className={classes.menuButton}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <div className={classes.searchInput}>
                    <InputBase
                        className={classes.input}
                        placeholder='Try "ETH"'
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </div>
                <div className={classes.searchedTokenListContainer}>
                    <div className={classes.tokenList}>
                        <h1>this is token</h1>
                        <h1>this is token</h1>
                        <h1>this is token</h1>
                        <h1>this is token</h1>
                        <h1>this is token</h1>
                        <h1>this is token</h1>
                        <h1>this is token</h1>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}
TokenList.propTypes = {
    target: PropTypes.string,
    open: PropTypes.string,
    onClose: PropTypes.func,
    onChange: PropTypes.func

};
TokenList.defaultProps = {
    target: '',
    open: false,
    onClose: () => { },
    onChange: () => { }
};