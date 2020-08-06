import Web3 from 'web3';
import { ContractWrappers, ERC20TokenContract, OrderStatus } from '@0x/contract-wrappers';
import { BigNumber } from '@0x/utils';
import { getContractAddressesForChainOrThrow } from '@0x/contract-addresses';
import { ChainId } from "../../constants";
import { defaultTokenList } from "../../constants";
import { ERC20ABI } from "../../constants";
import { toFixed } from "../../utils";
import { generatePseudoRandomSalt, Order, signatureUtils } from '@0x/order-utils';

const contractWrappers = new ContractWrappers(window.ethereum, {
    chainId: 1, // Ganache snapshot chain id
});
const zrxTokenAddress = contractWrappers.contractAddresses.zrxToken;
const exchangeAddress = contractWrappers.contractAddresses.exchange;
console.log("exchangeAddress =====>", exchangeAddress);


const listCache = 'WeakMap' in window ? new WeakMap() : null
const web3 = new Web3(window.ethereum);

export const connectMetaMask = () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
        return true;
    }
    return false;
}

export const getTokenBalance = async (account, token) => {
    if (token.symbol == "ETH") {
        const balance = await web3.eth.getBalance(account)
        console.log("fromWei ==>", balance);
        return web3.utils.fromWei(balance, "ether");
    } else {
        let tixContract = new web3.eth.Contract(ERC20ABI, token.address);
        const balance = await tixContract.methods.balanceOf(account).call();
        return web3.utils.fromWei(balance, "ether");;
    }
}

export const fetchAllTokens = () => {
    const EMPTY_LIST = {
        [ChainId.MAINNET]: {}
    }
    const result = listCache.get(defaultTokenList())
    if (result) return result
    const map = defaultTokenList().filter((element) => (element.logoURI && element.logoURI != "")).reduce(
        (tokenMap, tokenInfo) => {
            if (tokenMap[tokenInfo.chainId][tokenInfo.address] !== undefined) throw Error('Duplicate tokens.')
            return {
                ...tokenMap,
                [tokenInfo.chainId]: {
                    ...tokenMap[tokenInfo.chainId],
                    [tokenInfo.address]: tokenInfo
                }
            }
        },
        { ...EMPTY_LIST }
    )
    listCache.set(defaultTokenList, map)
    return map
}

export const excuteTransaction = async (data) => {
    return await web3.eth.sendTransaction(data);
}

// export const approveToken = async (account, sellTokenAddress) => {
//     // Set up proxy approval
//     const SellTokenContract = new ERC20TokenContract(sellTokenAddress, web3.eth.currentProvider);
//     const maxApproval = new BigNumber(2).pow(256).minus(1);

//     // Send the approval to the 0x ERC20Proxy smart contract
//     const chainId = 1;
//     const contractAddresses = getContractAddressesForChainOrThrow(chainId);
//     let approvalTxData = SellTokenContract
//         .approve(contractAddresses.erc20Proxy, maxApproval);
//     console.log("approvalTxData ===>", approvalTxData);

//     const tx = {
//         from: account,
//         to: sellTokenAddress,
//         gas: await approvalTxData.estimateGasAsync({ from: account }),
//         gasPrice: web3.utils.toHex(1e9),
//         data: approvalTxData.getABIEncodedTransactionData()
//     }

//     return await web3.eth.sendTransaction(tx);

//     // const web3 = window.web3;
//     // // Set up proxy approval
//     // const USDCaddress = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
//     // const USDCcontract = new ERC20TokenContract(USDCaddress, web3.eth.currentProvider);
//     // const maxApproval = new BigNumber(2).pow(256).minus(1);

//     // // Send the approval to the 0x ERC20Proxy smart contract
//     // const chainId = 1;
//     // const contractAddresses = getContractAddressesForChainOrThrow(chainId);
//     // const approvalTxData = USDCcontract
//     //     .approve(contractAddresses.erc20Proxy, maxApproval)
//     //     .getABIEncodedTransactionData();
//     // await window.web3.eth.sendTransaction(approvalTxData);
// }

export const approveToken = async (account, sellTokenAddress, amount) => {
    const chainId = 1;
    const contractAddresses = getContractAddressesForChainOrThrow(chainId);
    const spender = contractAddresses.erc20Proxy;
    let tix = new web3.eth.Contract(ERC20ABI, sellTokenAddress);
    console.log("maxApproval ===>", amount);

    const _tx = tix.methods.approve(spender, `${amount}`);
    const approvalTxData = {
        // nonce: await web3.eth.getTransactionCount(account),
        from: account,
        to: sellTokenAddress,
        // gas: await _tx.estimateGas({ from: account }),
        // gasPrice: web3.utils.toHex(1e9),
        data: _tx.encodeABI()
    }
    return await web3.eth.sendTransaction(approvalTxData);
}

export const signOrder = async (order) => {
    const signedOrder = await signatureUtils.ecSignOrderAsync(window.ethereum, order, order.makerAddress);
    //validate order
    // Validate this order
    const [
        { orderStatus, orderHash },
        remainingFillableAmount,
        isValidSignature,
    ] = await contractWrappers.devUtils.getOrderRelevantState(signedOrder, signedOrder.signature).callAsync();

    if (orderStatus === OrderStatus.Fillable && remainingFillableAmount.isGreaterThan(0) && isValidSignature) {
        console.log("Order is fillable");
    } else {
        console.log("invalid order");
    }
    return signedOrder;
}