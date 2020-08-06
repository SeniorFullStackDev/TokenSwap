import React, { useState, useEffect } from 'react'
import { useWeb3Context } from 'web3-react'
import { network } from '../../connectors'
import { useEagerConnect, useInactiveListener } from '../../hooks'
import { NetworkContextName } from '../../constants'

export default function Web3ReactManager({ children }) {
  return children
}
