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
import { AccessAlarm, MoreVert } from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

import classes from "./style.module.scss";
import TokenList from "./TokenList";

// const useStyles = makeStyles((theme) => ({
//     root: {

//     },
//     topBar: {
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center"
//     },
//     menuButton: {

//     },
//     orderType: {
//         fontSize: "24px",
//         fontStyle: "bold",
//     },
// }));

export default function SwapForm({ baseCryto }) {

    const [anchorEl, setAnchorEl] = useState(null);
    const [orderType, setOrderType] = useState("limit");
    const [visibleTokenList, setVisibleTokenList] = useState({ open: true, target: "base" });

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

    return (
        <div className={classes.swapFormContainer}>
            <div className={classes.topBar}>
                <div className={classes.orderType}>{orderType}</div>
                <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.menuButton}>
                    <MoreVert />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose("Market")}>Market Order</MenuItem>
                    <MenuItem onClick={handleClose("Limit")}>Limit Order</MenuItem>
                </Menu>
            </div>
            <Divider />
            <div>
                <div className={classes.baseToken}>
                    <div className={classes.header}>
                        <span>You pay</span>
                        <span>0.03322</span>
                    </div>
                    <div className={classes.tokenInputContainer}>
                        <Button onClick={onOpenTokenList("base")}><div className={classes.tokenBtn}>DAI</div> <ExpandMoreIcon /></Button>
                        <TextField className={classes.tokenInput} label="" variant="outlined" />
                    </div>
                </div>
                <div className={classes.targetToken}>
                    <div className={classes.header}>
                        <span>You Receive</span>
                        <span>0.03322</span>
                    </div>
                    <div className={classes.tokenInputContainer}>
                        <Button onClick={onOpenTokenList("target")}><div className={classes.tokenBtn}>DAI</div> <ExpandMoreIcon /></Button>
                        <TextField className={classes.tokenInput} label="" variant="outlined" />
                    </div>
                </div>
            </div>
            <TokenList open={visibleTokenList.open} onChange={onChangeToken} onClose={onCloseTokenList} target={visibleTokenList.target} />
        </div>
    )
}

SwapForm.propTypes = {
    baseCryto: PropTypes.string,

};
SwapForm.defaultProps = {
    baseCryto: ''
};