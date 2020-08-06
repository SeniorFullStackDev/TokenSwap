import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import config from "../common/config.js";
import { styled } from "@material-ui/core/styles";
import { createDatastructure } from "./fakeProducts";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import TradeCard from "./tradeCard";
//import "firebase/auth";
//import "firebase/firestore";
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import SwapForm from "../Swapform";
import useWallet from "../../state/wallet/wallet.hooks";
import { useWeb3Context } from 'web3-react'
// import { useActiveWeb3React } from '../../hooks'

const MyGrid = styled(Grid)({
  padding: "2% 2% 64px",
  "@media screen and (max-width: 599px)": {
    padding: "8px 8px 64px",
  },
});

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    border: '0px solid #000',
    padding: 10,
    width: 360,
    background: "#fff"
  },
}));

// const StyledDialog = withStyles({
//   root: {
//     background: '#fff',
//   }
// })(Dialog);

export default function TradePanel() {

  const classes = useStyles();
  const { fetchAllTokenList, initWallet } = useWallet();
  const context = useWeb3Context()
  // const { account, chainId } = useActiveWeb3React()

  const [visibleSwapModal, setVisibleSwapModal] = useState(true);
  const [baseCrytop, setBaseCryto] = useState("eth");

  const onClickTradeCard = (ticker) => {
    console.log("ticker -->", ticker);
    setVisibleSwapModal(true);
    setBaseCryto(ticker);
  }
  const handleClose = () => {
    setVisibleSwapModal(false);
  }

  useEffect(() => {
    console.log("account =====>", context.account);
    if (context.account) {
      fetchAllTokenList(context.account, 1);
    } else {
      initWallet();
    }
  }, [context.account]);


  return (
    <div
      style={{
        "minHeight": "600px",
        margin: "auto",
      }}
    >
      <MyGrid
        container
        spacing={3}
        justify="flex-start"
        alignContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <Typography
            style={{
              fontFamily: config.landingFont,
              fontSize: config.defaultLargeTextSize,
              color: config.secondaryTextColor,
              textAlign: `center`,
            }}
          >
            Top Coins By Social Media Mentions Today
          </Typography>
        </Grid>
        {createDatastructure().map((asset, i) => {
          return (
            <Grid key={i} item xs={12} md={6} lg={6}>
              <TradeCard
                name={asset.name}
                ticker={asset.ticker}
                logo={asset.logo}
                coinbase={asset.coinbase}
                zeroExAPI={asset.zeroExAPI}
                address={asset.address}
                onClickTradeCard={onClickTradeCard}
              ></TradeCard>
            </Grid>
          );
        })}
      </MyGrid>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={visibleSwapModal}
        onClose={handleClose}
        closeAfterTransition
        // BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={visibleSwapModal}>
          <div className={classes.paper}>
            <SwapForm baseCryto={baseCrytop} />
          </div>
        </Fade>
      </Modal>

    </div>
  );
}
//)export default Profile;
