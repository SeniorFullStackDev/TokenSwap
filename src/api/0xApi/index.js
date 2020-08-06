import axios from "axios";
import * as qs from 'qs';
import { generatePseudoRandomSalt, Order, signatureUtils } from '@0x/order-utils';

const baseURL = "https://api.0x.org";

export const getQuote = async (buyToken, sellToken, amount) => {
    const url = `${baseURL}/swap/v0/quote?`;
    const params = { buyToken, sellToken, buyAmount: amount };
    const response = await fetch(`${url}${qs.stringify(params)}`);
    return await response.json();
}
export const getPrice = async (sellToken) => {
    const params = { sellToken }
    const url = `${baseURL}/swap/v0/prices?`;
    const response = await fetch(`${url}${qs.stringify(params)}`);
    return await response.json();
}

export const getOrderConfig = async (orderConfigRequest) => {
    const url = `${baseURL}/sra/v3/order_config`;
    const response = await fetch(`${url}`, { method: 'post', body: JSON.stringify(orderConfigRequest) });
    const orderConfig = await response.json();
    // Create the order
    const order = {
        salt: generatePseudoRandomSalt(),
        chainId: 1337,
        ...orderConfigRequest,
        ...orderConfig,
    };

    return order;
}