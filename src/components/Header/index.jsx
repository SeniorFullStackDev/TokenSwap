import React from 'react'
import { useActiveWeb3React } from '../../hooks'
// import { useETHBalances } from '../../state/wallet/hooks'
import Web3Status from "../Web3Status";

export default function Header() {
  const { account, chainId } = useActiveWeb3React()
  // const userEthBalance = useETHBalances([account])[account]
  console.log("account -->", account);
  return (
    <div style={{ position: "absolute", "top": "0px", "right": "0px" }}>
      {/* <Web3Status /> */}
      {/* <div>{userEthBalance?.toSignificant(4)} ETH</div> */}
    </div>
  )
}
