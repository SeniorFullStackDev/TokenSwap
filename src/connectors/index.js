import { Connectors } from 'web3-react'
const { InjectedConnector, NetworkOnlyConnector } = Connectors

const POLLING_INTERVAL = 12500
const NETWORK_URL = process.env.REACT_APP_NETWORK_URL
const FORMATIC_KEY = process.env.REACT_APP_FORTMATIC_KEY

if (typeof NETWORK_URL === 'undefined') {
  throw new Error(`REACT_APP_NETWORK_URL must be a defined environment variable`)
}

export const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] })

export const Infura = new NetworkOnlyConnector({
  providerURL: NETWORK_URL
})