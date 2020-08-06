import BTC from "cryptocurrency-icons/svg/black/btc.svg";
import ETH from "cryptocurrency-icons/svg/black/eth.svg";
import BCH from "cryptocurrency-icons/svg/black/bch.svg";
import XLM from "cryptocurrency-icons/svg/black/xlm.svg";
import XRP from "cryptocurrency-icons/svg/black/xrp.svg";
import EOS from "cryptocurrency-icons/svg/black/eos.svg";
import ETC from "cryptocurrency-icons/svg/black/etc.svg";
import XTZ from "cryptocurrency-icons/svg/black/xtz.svg";
import ZRX from "cryptocurrency-icons/svg/black/zrx.svg";
import LINK from "cryptocurrency-icons/svg/black/link.svg";
import ATOM from "cryptocurrency-icons/svg/black/atom.svg";
import MKR from "cryptocurrency-icons/svg/black/mkr.svg";
import ZEC from "cryptocurrency-icons/svg/black/zec.svg";
import REP from "cryptocurrency-icons/svg/black/rep.svg";
import BNT from "cryptocurrency-icons/svg/black/bnt.svg";
import REN from "cryptocurrency-icons/svg/black/ren.svg";
import BAT from "cryptocurrency-icons/svg/black/bat.svg";
import CVC from "cryptocurrency-icons/svg/black/cvc.svg";
import DAI from "cryptocurrency-icons/svg/black/dai.svg";
import DASH from "cryptocurrency-icons/svg/black/dash.svg";
import KNC from "cryptocurrency-icons/svg/black/knc.svg";
import LOOM from "cryptocurrency-icons/svg/black/loom.svg";
import LTC from "cryptocurrency-icons/svg/black/ltc.svg";
import MANA from "cryptocurrency-icons/svg/black/mana.svg";
import OMG from "cryptocurrency-icons/svg/black/omg.svg";
import USDC from "cryptocurrency-icons/svg/black/usdc.svg";
import GNT from "cryptocurrency-icons/svg/black/gnt.svg";
import ANT from "cryptocurrency-icons/svg/black/ant.svg";
import BNB from "cryptocurrency-icons/svg/black/bnb.svg";
import erc20json from "./erc20.json";
import tokens from "./tokens.json";
export const NetworkContextName = 'NETWORK';
export const ERC20ABI = erc20json;
export const defaultTokenList = () => {
    let arr = [];
    tokens.tokens.forEach(element => {
        element.logoURI = findLogo(element.symbol);
        arr.push(element);
    });
    function findLogo(ticker) {
        let logo = "";
        allProducts.forEach((element) => {
            if (element.ticker_symbol == ticker) {
                logo = element.logo_url;
            }
        });
        return logo;
    }
    return arr;
};
export const ChainId = {
    MAINNET: 1
}
export const allProducts = [
    {
        ticker_symbol: "BTC",
        logo_url: BTC,
    },
    {
        ticker_symbol: "WETH",
        logo_url: ETH,
    },
    {
        ticker_symbol: "ETH",
        logo_url: ETH,
    },
    {
        ticker_symbol: "XRP",



        logo_url: XRP,
    },

    {
        ticker_symbol: "ALTBULL",

        logo_url: null,
    },
    {
        ticker_symbol: "FTXTOKEN",

        logo_url: null,
    },
    {
        ticker_symbol: "BULLSHIT",

        logo_url: null,
    },

    {
        ticker_symbol: "BTCBULL",

        logo_url: null,
    },
    {
        ticker_symbol: "BEARSHIT",

        logo_url: null,
    },
    {
        ticker_symbol: "BTCBULL",

        logo_url: null,
    },

    {
        ticker_symbol: "FTXWARREN",

        logo_url: null,
    },
    {
        ticker_symbol: "FTXBLOOMBERG",

        logo_url: null,
    },
    {
        ticker_symbol: "FTXBIDEN",

        logo_url: null,
    },
    {
        ticker_symbol: "FTXPETE",

        logo_url: null,
    },
    {
        ticker_symbol: "FTXTRUMP",

        logo_url: null,
    },
    {
        ticker_symbol: "FTXBERNIE",

        logo_url: null,
    },

    {
        ticker_symbol: "BCH",



        logo_url: BCH,
    },
    {
        ticker_symbol: "BSV",

        logo_url: null,
    },
    {
        ticker_symbol: "USDT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
    },
    {
        ticker_symbol: "LTC",



        logo_url: LTC,
    },
    {
        ticker_symbol: "EOS",



        logo_url: EOS,
    },
    {
        ticker_symbol: "BNB",



        logo_url: BNB,
    },
    {
        ticker_symbol: "ADA",

        logo_url: null,
    },
    {
        ticker_symbol: "XLM",



        logo_url: XLM,
    },
    {
        ticker_symbol: "XMR",

        logo_url: "XMR",
    },
    {
        ticker_symbol: "TRX",

        logo_url: null,
    },
    {
        ticker_symbol: "ETC",



        logo_url: ETC,
    },
    {
        ticker_symbol: "XTZ",



        logo_url: XTZ,
    },
    {
        ticker_symbol: "DASH",



        logo_url: DASH,
    },
    {
        ticker_symbol: "LINK",



        logo_url: LINK,
    },
    {
        ticker_symbol: "LEO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3.png",
    },
    {
        ticker_symbol: "ATOM",



        logo_url: ATOM,
    },
    {
        ticker_symbol: "OKB",

        logo_url: null,
    },
    {
        ticker_symbol: "NEO",

        logo_url: null,
    },
    {
        ticker_symbol: "HT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6f259637dcd74c767781e37bc6133cd6a68aa161.png",
    },
    {
        ticker_symbol: "MIOTA",

        logo_url: null,
    },
    {
        ticker_symbol: "CRO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b.png",
    },
    {
        ticker_symbol: "ZEC",



        logo_url: ZEC,
    },
    {
        ticker_symbol: "USDC",



        logo_url: USDC,
    },
    {
        ticker_symbol: "MKR",



        logo_url: MKR,
    },
    {
        ticker_symbol: "ONT",

        logo_url: null,
    },
    {
        ticker_symbol: "XEM",

        logo_url: null,
    },
    {
        ticker_symbol: "VET",

        logo_url: null,
    },
    {
        ticker_symbol: "BAT",



        logo_url: BAT,
    },
    {
        ticker_symbol: "DOGE",

        logo_url: null,
    },
    {
        ticker_symbol: "PAX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8e870d67f660d95d5be530380d0ec0bd388289e1.png",
    },
    {
        ticker_symbol: "BTG",

        logo_url: null,
    },
    {
        ticker_symbol: "DCR",

        logo_url: null,
    },
    {
        ticker_symbol: "QTUM",

        logo_url: null,
    },
    {
        ticker_symbol: "REP",



        logo_url: REP,
    },
    {
        ticker_symbol: "RVN",

        logo_url: null,
    },
    {
        ticker_symbol: "ZRX",



        logo_url: ZRX,
    },
    {
        ticker_symbol: "TUSD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0000000000085d4780b73119b644ae5ecd22b376.png",
    },
    {
        ticker_symbol: "ALGO",



        logo_url: "ALGO",
    },
    {
        ticker_symbol: "BTM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xcb97e65f07da24d46bcdd078ebebd7c6e6e3d750.png",
    },
    {
        ticker_symbol: "HOT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9af839687f6c94542ac5ece2e317daae355493a1.png",
    },
    {
        ticker_symbol: "SXP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9.png",
    },
    {
        ticker_symbol: "BCD",

        logo_url: null,
    },
    {
        ticker_symbol: "OMG",



        logo_url: OMG,
    },
    {
        ticker_symbol: "LSK",

        logo_url: null,
    },
    {
        ticker_symbol: "THETA",

        logo_url: null,
    },
    {
        ticker_symbol: "DAI",
        logo_url: DAI,
    },
    {
        ticker_symbol: "NANO",

        logo_url: null,
    },
    {
        ticker_symbol: "ICX",

        logo_url: null,
    },
    {
        ticker_symbol: "WAVES",

        logo_url: null,
    },
    {
        ticker_symbol: "MONA",

        logo_url: null,
    },
    {
        ticker_symbol: "KCS",

        logo_url: null,
    },
    {
        ticker_symbol: "GT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe66747a101bff2dba3697199dcce5b743b454759.png",
    },
    {
        ticker_symbol: "CKB",

        logo_url: null,
    },
    {
        ticker_symbol: "ZEN",

        logo_url: null,
    },
    {
        ticker_symbol: "DGB",

        logo_url: null,
    },
    {
        ticker_symbol: "SEELE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb1eef147028e9f480dbc5ccaa3277d417d1b85f0.png",
    },
    {
        ticker_symbol: "ENJ",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c.png",
    },
    {
        ticker_symbol: "MCO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb63b606ac810a52cca15e44bb630fd42d8d1d83d.png",
    },
    {
        ticker_symbol: "BTT",

        logo_url: null,
    },
    {
        ticker_symbol: "KMD",

        logo_url: null,
    },
    {
        ticker_symbol: "FTT",

        logo_url: null,
    },
    {
        ticker_symbol: "HC",

        logo_url: null,
    },
    {
        ticker_symbol: "IOST",

        logo_url: null,
    },
    {
        ticker_symbol: "SC",

        logo_url: null,
    },
    {
        ticker_symbol: "VSYS",

        logo_url: null,
    },
    {
        ticker_symbol: "NEXO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206.png",
    },
    {
        ticker_symbol: "DGD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe0b7927c4af23765cb51314a0e0521a9645f0e2a.png",
    },
    {
        ticker_symbol: "DX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x973e52691176d36453868d9d86572788d27041a9.png",
    },
    {
        ticker_symbol: "XVG",

        logo_url: null,
    },
    {
        ticker_symbol: "AE",

        logo_url: null,
    },
    {
        ticker_symbol: "BCN",

        logo_url: null,
    },
    {
        ticker_symbol: "STEEM",

        logo_url: null,
    },
    {
        ticker_symbol: "ZIL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27.png",
    },
    {
        ticker_symbol: "KNC",



        logo_url: KNC,
    },
    {
        ticker_symbol: "BTS",

        logo_url: null,
    },
    {
        ticker_symbol: "STX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x006bea43baa3f7a6f765f14f10a1a1b08334ef45.png",
    },
    {
        ticker_symbol: "XZC",

        logo_url: null,
    },
    {
        ticker_symbol: "BTMX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf45f0e16b5e096286e1fb463d34be9f3df5e3602.png",
    },
    {
        ticker_symbol: "MANA",



        logo_url: MANA,
    },
    {
        ticker_symbol: "MAID",

        logo_url: null,
    },
    {
        ticker_symbol: "RIF",

        logo_url: null,
    },
    {
        ticker_symbol: "NRG",

        logo_url: null,
    },
    {
        ticker_symbol: "ARDR",

        logo_url: null,
    },
    {
        ticker_symbol: "CEL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d.png",
    },
    {
        ticker_symbol: "MATIC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
    },
    {
        ticker_symbol: "ETN",

        logo_url: null,
    },
    {
        ticker_symbol: "SNT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x744d70fdbe2ba4cf95131626614a1763df805b9e.png",
    },
    {
        ticker_symbol: "LAMB",

        logo_url: null,
    },
    {
        ticker_symbol: "RLC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x607f4c5bb672230e8672085532f7e901544a7375.png",
    },
    {
        ticker_symbol: "GNT",



        logo_url: GNT,
    },
    {
        ticker_symbol: "REN",



        logo_url: REN,
    },
    {
        ticker_symbol: "LUNA",

        logo_url: null,
    },
    {
        ticker_symbol: "STRAT",

        logo_url: null,
    },
    {
        ticker_symbol: "CRPT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x80a7e048f37a50500351c204cb407766fa3bae7f.png",
    },
    {
        ticker_symbol: "QNT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4a220e6096b25eadb88358cb44068a3248254675.png",
    },
    {
        ticker_symbol: "BEAM",

        logo_url: null,
    },
    {
        ticker_symbol: "GRIN",

        logo_url: null,
    },
    {
        ticker_symbol: "YCC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x37e1160184f7dd29f00b78c050bf13224780b0b0.png",
    },
    {
        ticker_symbol: "TOMO",

        logo_url: null,
    },
    {
        ticker_symbol: "DGTX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1c83501478f1320977047008496dacbd60bb15ef.png",
    },
    {
        ticker_symbol: "TT",

        logo_url: null,
    },
    {
        ticker_symbol: "CHZ",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x3506424f91fd33084466f402d5d97f05f8e3b4af.png",
    },
    {
        ticker_symbol: "ENG",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4.png",
    },
    {
        ticker_symbol: "NPXS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3.png",
    },
    {
        ticker_symbol: "SOLVE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x446c9033e7516d820cc9a2ce2d0b7328b579406f.png",
    },
    {
        ticker_symbol: "XMX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0f8c45b896784a1e408526b9300519ef8660209c.png",
    },
    {
        ticker_symbol: "AION",

        logo_url: null,
    },
    {
        ticker_symbol: "NMR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1776e1f26f98b1a5df9cd347953a26dd3cb46671.png",
    },
    {
        ticker_symbol: "GXC",

        logo_url: null,
    },
    {
        ticker_symbol: "LRC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xbbbbca6a901c926f240b89eacb641d8aec7aeafd.png",
    },
    {
        ticker_symbol: "ELF",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xbf2179859fc6d5bee9bf9158632dc51678a4100e.png",
    },
    {
        ticker_symbol: "ETP",

        logo_url: null,
    },
    {
        ticker_symbol: "SAI",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359.png",
    },
    {
        ticker_symbol: "YOU",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x34364bee11607b1963d66bca665fde93fca666a8.png",
    },
    {
        ticker_symbol: "LEND",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x80fb784b7ed66730e8b1dbd9820afd29931aab03.png",
    },
    {
        ticker_symbol: "NEX",

        logo_url: null,
    },
    {
        ticker_symbol: "RCN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6.png",
    },
    {
        ticker_symbol: "USDK",

        logo_url: null,
    },
    {
        ticker_symbol: "HBAR",

        logo_url: null,
    },
    {
        ticker_symbol: "ZB",

        logo_url: null,
    },
    {
        ticker_symbol: "ELA",

        logo_url: null,
    },
    {
        ticker_symbol: "ARK",

        logo_url: null,
    },
    {
        ticker_symbol: "WIN",

        logo_url: null,
    },
    {
        ticker_symbol: "NULS",

        logo_url: null,
    },
    {
        ticker_symbol: "BZ",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4375e7ad8a01b8ec3ed041399f62d9cd120e0063.png",
    },
    {
        ticker_symbol: "FTM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4e15361fd6b4bb609fa63c81a2be19d873717870.png",
    },
    {
        ticker_symbol: "WAN",

        logo_url: null,
    },
    {
        ticker_symbol: "CDAI",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5d3a536e4d6dbd6114cc1ead35777bab948e3643.png",
    },
    {
        ticker_symbol: "ZT",

        logo_url: null,
    },
    {
        ticker_symbol: "OTO",

        logo_url: null,
    },
    {
        ticker_symbol: "ANT",



        logo_url: ANT,
    },
    {
        ticker_symbol: "ONE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x68ac1affe00cf64ebc71e7e835a6871a379c5587.png",
    },
    {
        ticker_symbol: "RDD",

        logo_url: null,
    },
    {
        ticker_symbol: "WAXP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x39bb259f66e1c59d5abef88375979b4d20d98022.png",
    },
    {
        ticker_symbol: "GBYTE",

        logo_url: null,
    },
    {
        ticker_symbol: "IGNIS",

        logo_url: null,
    },
    {
        ticker_symbol: "TNT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8.png",
    },
    {
        ticker_symbol: "NAS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5d65d971895edc438f465c17db6992698a52318d.png",
    },
    {
        ticker_symbol: "POWR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x595832f8fc6bf59c85c527fec3740a1b7a361269.png",
    },
    {
        ticker_symbol: "BNK",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xc80c5e40220172b36adee2c951f26f2a577810c5.png",
    },
    {
        ticker_symbol: "DIVI",

        logo_url: null,
    },
    {
        ticker_symbol: "JEX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xff98a08c143311719ca492e4b8c950c940f26872.png",
    },
    {
        ticker_symbol: "TRAT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0cbc9b02b8628ae08688b5cc8134dc09e36c443b.png",
    },
    {
        ticker_symbol: "FUN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x419d0d8bdd9af5e606ae2232ed285aff190e711b.png",
    },
    {
        ticker_symbol: "GO",

        logo_url: null,
    },
    {
        ticker_symbol: "CHSB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xba9d4199fab4f26efe3551d490e3821486f135ba.png",
    },
    {
        ticker_symbol: "R",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x48f775efbe4f5ece6e0df2f7b5932df56823b990.png",
    },
    {
        ticker_symbol: "PIVX",

        logo_url: null,
    },
    {
        ticker_symbol: "IOTX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6fb3e0a217407efff7ca062d46c26e5d60a14d69.png",
    },
    {
        ticker_symbol: "C20",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x26e75307fc0c021472feb8f727839531f112f317.png",
    },
    {
        ticker_symbol: "QASH",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x618e75ac90b12c6049ba3b27f5d5f8651b0037f6.png",
    },
    {
        ticker_symbol: "FCT",

        logo_url: null,
    },
    {
        ticker_symbol: "EDC",

        logo_url: null,
    },
    {
        ticker_symbol: "STORJ",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac.png",
    },
    {
        ticker_symbol: "LPT",



        logo_url:
            "https://logos.covalenthq.com/tokens/0x58b6a8a3302369daec383334672404ee733ab239.png",
    },
    {
        ticker_symbol: "GAS",

        logo_url: null,
    },
    {
        ticker_symbol: "BNT",



        logo_url: BNT,
    },
    {
        ticker_symbol: "LOKI",

        logo_url: null,
    },
    {
        ticker_symbol: "ERD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf9986d445ced31882377b5d6a5f58eaea72288c3.png",
    },
    {
        ticker_symbol: "MTL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf433089366899d83a9f26a773d59ec7ecf30355e.png",
    },
    {
        ticker_symbol: "MXM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8e766f57f7d16ca50b4a0b90b88f6468a09b0439.png",
    },
    {
        ticker_symbol: "KAVA",

        logo_url: null,
    },
    {
        ticker_symbol: "MDA",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x51db5ad35c671a87207d88fc11d593ac0c8415bd.png",
    },
    {
        ticker_symbol: "LOOM",



        logo_url: LOOM,
    },
    {
        ticker_symbol: "RSR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8762db106b2c2a0bccb3a80d1ed41273552616e8.png",
    },
    {
        ticker_symbol: "CVC",



        logo_url: CVC,
    },
    {
        ticker_symbol: "TKX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x667102bd3413bfeaa3dffb48fa8288819e480a88.png",
    },
    {
        ticker_symbol: "AXEL",

        logo_url: null,
    },
    {
        ticker_symbol: "HYN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe99a894a69d7c2e3c92e61b64c505a6a57d2bc07.png",
    },
    {
        ticker_symbol: "BRD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x558ec3152e2eb2174905cd19aea4e34a23de9ad6.png",
    },
    {
        ticker_symbol: "AGI",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8eb24319393716668d768dcec29356ae9cffe285.png",
    },
    {
        ticker_symbol: "TLOS",

        logo_url: null,
    },
    {
        ticker_symbol: "GNO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6810e776880c02933d47db1b9fc05908e5386b96.png",
    },
    {
        ticker_symbol: "DAG",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa8258abc8f2811dd48eccd209db68f25e3e34667.png",
    },
    {
        ticker_symbol: "VITAE",

        logo_url: null,
    },
    {
        ticker_symbol: "EURS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xdb25f211ab05b1c97d595516f45794528a807ad8.png",
    },
    {
        ticker_symbol: "RUNE",

        logo_url: null,
    },
    {
        ticker_symbol: "BIX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb3104b4b9da82025e8b9f8fb28b3553ce2f67069.png",
    },
    {
        ticker_symbol: "FET",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1d287cc25dad7ccaf76a26bc660c5f7c8e2a05bd.png",
    },
    {
        ticker_symbol: "DENT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x3597bfd533a99c9aa083587b074434e61eb0a258.png",
    },
    {
        ticker_symbol: "OCEAN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x985dd3d42de1e256d09e1c10f112bccb8015ad41.png",
    },
    {
        ticker_symbol: "BNANA",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x07ef9e82721ac16809d24dafbe1792ce01654db4.png",
    },
    {
        ticker_symbol: "ABT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb98d4c97425d9908e66e53a6fdf673acca0be986.png",
    },
    {
        ticker_symbol: "PPT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a.png",
    },
    {
        ticker_symbol: "SYS",

        logo_url: null,
    },
    {
        ticker_symbol: "BLOCK",

        logo_url: null,
    },
    {
        ticker_symbol: "GRS",

        logo_url: null,
    },
    {
        ticker_symbol: "WXT",

        logo_url: null,
    },
    {
        ticker_symbol: "LBA",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xfe5f141bf94fe84bc28ded0ab966c16b17490657.png",
    },
    {
        ticker_symbol: "BOA",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x746dda2ea243400d5a63e0700f190ab79f06489e.png",
    },
    {
        ticker_symbol: "SERO",

        logo_url: null,
    },
    {
        ticker_symbol: "CELR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4f9254c83eb525f9fcf346490bbb3ed28a81c667.png",
    },
    {
        ticker_symbol: "NKN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5cf04716ba20127f1e2297addcf4b5035000c9eb.png",
    },
    {
        ticker_symbol: "ODE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xbf52f2ab39e26e0951d2a02b49b7702abe30406a.png",
    },
    {
        ticker_symbol: "DMT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x2ccbff3a042c68716ed2a2cb0c544a9f1d1935e1.png",
    },
    {
        ticker_symbol: "KAN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1410434b0346f5be678d0fb554e5c7ab620f8f4a.png",
    },
    {
        ticker_symbol: "ROX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x574f84108a98c575794f75483d801d1d5dc861a5.png",
    },
    {
        ticker_symbol: "WTC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb7cb1c96db6b22b0d3d9536e0108d062bd488f74.png",
    },
    {
        ticker_symbol: "COS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x7d3cb11f8c13730c24d01826d8f2005f0e1b348f.png",
    },
    {
        ticker_symbol: "MED",

        logo_url: null,
    },
    {
        ticker_symbol: "VTHO",

        logo_url: null,
    },
    {
        ticker_symbol: "IRIS",

        logo_url: null,
    },
    {
        ticker_symbol: "NXT",

        logo_url: null,
    },
    {
        ticker_symbol: "POLY",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec.png",
    },
    {
        ticker_symbol: "CND",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd4c435f5b09f855c3317c8524cb1f586e42795fa.png",
    },
    {
        ticker_symbol: "DATA",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0cf0ee63788a0849fe5297f3407f701e122cc023.png",
    },
    {
        ticker_symbol: "CS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x46b9ad944d1059450da1163511069c718f699d31.png",
    },
    {
        ticker_symbol: "WGR",

        logo_url: null,
    },
    {
        ticker_symbol: "NXS",

        logo_url: null,
    },
    {
        ticker_symbol: "EMC2",

        logo_url: null,
    },
    {
        ticker_symbol: "LINKA",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x578b49c45961f98d8df92854b53f1641af0a5036.png",
    },
    {
        ticker_symbol: "WIX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x7ba19b7f7d106a9a1e0985397b94f38eee0b555e.png",
    },
    {
        ticker_symbol: "ULT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x09617f6fd6cf8a71278ec86e23bbab29c04353a7.png",
    },
    {
        ticker_symbol: "DUSK",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x940a2db1b7008b6c776d4faaca729d6d4a4aa551.png",
    },
    {
        ticker_symbol: "QKC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xea26c4ac16d4a5a106820bc8aee85fd0b7b2b664.png",
    },
    {
        ticker_symbol: "VTC",

        logo_url: null,
    },
    {
        ticker_symbol: "DRGN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e.png",
    },
    {
        ticker_symbol: "COCOS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0c6f5f7d555e7518f6841a79436bd2b1eef03381.png",
    },
    {
        ticker_symbol: "PPP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xc42209accc14029c1012fb5680d95fbd6036e2a0.png",
    },
    {
        ticker_symbol: "BAX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9a0242b7a33dacbe40edb927834f96eb39f8fbcb.png",
    },
    {
        ticker_symbol: "B2B",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5d51fcced3114a8bb5e90cdd0f9d682bcbcc5393.png",
    },
    {
        ticker_symbol: "LTO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x3db6ba6ab6f95efed1a6e794cad492faaabf294d.png",
    },
    {
        ticker_symbol: "REQ",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8f8221afbb33998d8584a2b05749ba73c37a938a.png",
    },
    {
        ticker_symbol: "CMT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf85feea2fdd81d51177f6b8f35f0e6734ce45f5f.png",
    },
    {
        ticker_symbol: "APL",

        logo_url: null,
    },
    {
        ticker_symbol: "TEL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x85e076361cc813a908ff672f9bad1541474402b2.png",
    },
    {
        ticker_symbol: "ZNN",

        logo_url: null,
    },
    {
        ticker_symbol: "POLIS",

        logo_url: null,
    },
    {
        ticker_symbol: "PERL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb5a73f5fc8bbdbce59bfd01ca8d35062e0dad801.png",
    },
    {
        ticker_symbol: "GMAT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa110eeebc0751407bdcaea4cd230f04a2b82a33a.png",
    },
    {
        ticker_symbol: "SKY",

        logo_url: null,
    },
    {
        ticker_symbol: "LOC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x2ca76b74c148ce6c4f51f47278ef089030e03178.png",
    },
    {
        ticker_symbol: "CNNS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6c3be406174349cfa4501654313d97e6a31072e1.png",
    },
    {
        ticker_symbol: "ITC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5e6b6d9abad9093fdc861ea1600eba1b355cd940.png",
    },
    {
        ticker_symbol: "DCN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x08d32b0da63e2c3bcf8019c9c5d849d7a9d791e6.png",
    },
    {
        ticker_symbol: "OST",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x2c4e8f2d746113d0696ce89b35f0d8bf88e0aeca.png",
    },
    {
        ticker_symbol: "CHT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x3277dd536471a3cbeb0c9486acad494c95a31e73.png",
    },
    {
        ticker_symbol: "UIP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4290563c2d7c255b5eec87f2d3bd10389f991d68.png",
    },
    {
        ticker_symbol: "BURST",

        logo_url: null,
    },
    {
        ticker_symbol: "NMC",

        logo_url: null,
    },
    {
        ticker_symbol: "NLG",

        logo_url: null,
    },
    {
        ticker_symbol: "FOAM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4946fcea7c692606e8908002e55a582af44ac121.png",
    },
    {
        ticker_symbol: "QDAO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x3166c570935a7d8554c8f4ea792ff965d2efe1f2.png",
    },
    {
        ticker_symbol: "NEBL",

        logo_url: null,
    },
    {
        ticker_symbol: "ADX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4470bb87d77b963a013db939be332f927f2b992e.png",
    },
    {
        ticker_symbol: "WABI",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x286bda1413a2df81731d4930ce2f862a35a609fe.png",
    },
    {
        ticker_symbol: "STORM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd0a4b8946cb52f0661273bfbc6fd0e0c75fc6433.png",
    },
    {
        ticker_symbol: "1WO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xfdbc1adc26f0f8f8606a5d63b7d3a3cd21c22b23.png",
    },
    {
        ticker_symbol: "OCE",

        logo_url: null,
    },
    {
        ticker_symbol: "LBC",

        logo_url: null,
    },
    {
        ticker_symbol: "MFT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xdf2c7238198ad8b389666574f2d8bc411a4b7428.png",
    },
    {
        ticker_symbol: "SMART",

        logo_url: null,
    },
    {
        ticker_symbol: "EDO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xced4e93198734ddaff8492d525bd258d49eb388e.png",
    },
    {
        ticker_symbol: "KSM",

        logo_url: null,
    },
    {
        ticker_symbol: "INT",

        logo_url: null,
    },
    {
        ticker_symbol: "IONC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xbc647aad10114b89564c0a7aabe542bd0cf2c5af.png",
    },
    {
        ticker_symbol: "AOA",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9ab165d795019b6d8b3e971dda91071421305e5a.png",
    },
    {
        ticker_symbol: "QSP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d.png",
    },
    {
        ticker_symbol: "SUSD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x57ab1e02fee23774580c119740129eac7081e9d3.png",
    },
    {
        ticker_symbol: "RDN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6.png",
    },
    {
        ticker_symbol: "HYDRO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xebbdf302c940c6bfd49c6b165f457fdb324649bc.png",
    },
    {
        ticker_symbol: "GEN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x543ff227f64aa17ea132bf9886cab5db55dcaddf.png",
    },
    {
        ticker_symbol: "FOR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1fcdce58959f536621d76f5b7ffb955baa5a672f.png",
    },
    {
        ticker_symbol: "XAUT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4922a015c4407f87432b179bb209e125432e4a2a.png",
    },
    {
        ticker_symbol: "TRUE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa4d17ab1ee0efdd23edc2869e7ba96b89eecf9ab.png",
    },
    {
        ticker_symbol: "BLTV",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe08854b668958657064fa20f309f6ba7a19d5af2.png",
    },
    {
        ticker_symbol: "NAV",

        logo_url: null,
    },
    {
        ticker_symbol: "SBD",

        logo_url: null,
    },
    {
        ticker_symbol: "VITE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1b793e49237758dbd8b752afc9eb4b329d5da016.png",
    },
    {
        ticker_symbol: "UTNP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9e3319636e2126e3c0bc9e3134aec5e1508a46c7.png",
    },
    {
        ticker_symbol: "PART",

        logo_url: null,
    },
    {
        ticker_symbol: "STPT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xde7d85157d9714eadf595045cc12ca4a5f3e2adb.png",
    },
    {
        ticker_symbol: "TROY",

        logo_url: null,
    },
    {
        ticker_symbol: "BITCNY",

        logo_url: null,
    },
    {
        ticker_symbol: "EGT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8e1b448ec7adfc7fa35fc2e885678bd323176e34.png",
    },
    {
        ticker_symbol: "INS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5b2e4a700dfbc560061e957edec8f6eeeb74a320.png",
    },
    {
        ticker_symbol: "XSN",

        logo_url: null,
    },
    {
        ticker_symbol: "UGAS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8716fc5da009d3a208f0178b637a50f4ef42400f.png",
    },
    {
        ticker_symbol: "CUT",

        logo_url: null,
    },
    {
        ticker_symbol: "ARRR",

        logo_url: null,
    },
    {
        ticker_symbol: "QRL",

        logo_url: null,
    },
    {
        ticker_symbol: "RUFF",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf278c1ca969095ffddded020290cf8b5c424ace2.png",
    },
    {
        ticker_symbol: "EVX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8.png",
    },
    {
        ticker_symbol: "ZRC",

        logo_url: null,
    },
    {
        ticker_symbol: "SMT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x21f15966e07a10554c364b988e91dab01d32794a.png",
    },
    {
        ticker_symbol: "XPX",

        logo_url: null,
    },
    {
        ticker_symbol: "EOSDT",

        logo_url: null,
    },
    {
        ticker_symbol: "UCT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x3c4bea627039f0b7e7d21e34bb9c9fe962977518.png",
    },
    {
        ticker_symbol: "FSN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd0352a019e9ab9d757776f532377aaebd36fd541.png",
    },
    {
        ticker_symbol: "MHC",

        logo_url: null,
    },
    {
        ticker_symbol: "UOS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c.png",
    },
    {
        ticker_symbol: "MLN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xec67005c4e498ec7f55e092bd1d35cbc47c91892.png",
    },
    {
        ticker_symbol: "DGX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf.png",
    },
    {
        ticker_symbol: "PPC",

        logo_url: null,
    },
    {
        ticker_symbol: "TCT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4824a7b64e3966b0133f4f4ffb1b9d6beb75fff7.png",
    },
    {
        ticker_symbol: "TNB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf7920b0768ecb20a123fac32311d07d193381d6f.png",
    },
    {
        ticker_symbol: "PROM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xfc82bb4ba86045af6f327323a46e80412b91b27d.png",
    },
    {
        ticker_symbol: "UBT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e.png",
    },
    {
        ticker_symbol: "CVNT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6400b5522f8d448c0803e6245436dd1c81df09ce.png",
    },
    {
        ticker_symbol: "MBL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb879da8b24c9b8685de8526cf492e954f165d74b.png",
    },
    {
        ticker_symbol: "ACT",

        logo_url: null,
    },
    {
        ticker_symbol: "1ST",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xaf30d2a7e90d7dc361c8c4585e9bb7d2f6f15bc7.png",
    },
    {
        ticker_symbol: "IDEX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb705268213d593b8fd88d3fdeff93aff5cbdcfae.png",
    },
    {
        ticker_symbol: "BCV",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1014613e2b3cbc4d575054d4982e580d9b99d7b1.png",
    },
    {
        ticker_symbol: "PLR",

        logo_url: null,
    },
    {
        ticker_symbol: "SNM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x983f6d60db79ea8ca4eb9968c6aff8cfa04b3c63.png",
    },
    {
        ticker_symbol: "ANKR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8290333cef9e6d528dd5618fb97a76f268f3edd4.png",
    },
    {
        ticker_symbol: "TOP",

        logo_url: null,
    },
    {
        ticker_symbol: "VOL",

        logo_url: null,
    },
    {
        ticker_symbol: "UTK",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x70a72833d6bf7f508c8224ce59ea1ef3d0ea3a38.png",
    },
    {
        ticker_symbol: "GET",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8a854288a5976036a725879164ca3e91d30c6a1b.png",
    },
    {
        ticker_symbol: "MTC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xdfdc0d82d96f8fd40ca0cfb4a288955becec2088.png",
    },
    {
        ticker_symbol: "HXRO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4bd70556ae3f8a6ec6c4080a0c327b24325438f3.png",
    },
    {
        ticker_symbol: "JNT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa5fd1a791c4dfcaacc963d4f73c6ae5824149ea7.png",
    },
    {
        ticker_symbol: "STACS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x286708f069225905194673755f12359e6aff6fe1.png",
    },
    {
        ticker_symbol: "MET",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa3d58c4e56fedcae3a7c43a725aee9a71f0ece4e.png",
    },
    {
        ticker_symbol: "GTO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xc5bbae50781be1669306b9e001eff57a2957b09d.png",
    },
    {
        ticker_symbol: "SWFTC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0bb217e40f8a5cb79adf04e1aab60e5abd0dfc1e.png",
    },
    {
        ticker_symbol: "MITH",

        logo_url: null,
    },
    {
        ticker_symbol: "TKN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xaaaf91d9b90df800df4f55c205fd6989c977e73a.png",
    },
    {
        ticker_symbol: "PAY",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb97048628db6b661d4c2aa833e95dbe1a905b280.png",
    },
    {
        ticker_symbol: "FLO",

        logo_url: null,
    },
    {
        ticker_symbol: "XAS",

        logo_url: null,
    },
    {
        ticker_symbol: "MOC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x865ec58b06bf6305b886793aa20a2da31d034e68.png",
    },
    {
        ticker_symbol: "GVT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x103c3a209da59d3e7c4a89307e66521e081cfdf0.png",
    },
    {
        ticker_symbol: "BAND",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xba11d00c5f74255f56a5e366f4f77f5a186d7f55.png",
    },
    {
        ticker_symbol: "CBT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x076c97e1c869072ee22f8c91978c99b4bcb02591.png",
    },
    {
        ticker_symbol: "VIA",

        logo_url: null,
    },
    {
        ticker_symbol: "DROP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4672bad527107471cb5067a887f4656d585a8a31.png",
    },
    {
        ticker_symbol: "BFT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x01ff50f8b7f74e4f00580d9596cd3d0d6d6e326f.png",
    },
    {
        ticker_symbol: "INNBC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xeb70bbf15fd1c0542896a80f2af90c8fd40a9ec5.png",
    },
    {
        ticker_symbol: "BAAS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x3e65e1eefde5ea7ccfc9a9a1634abe90f32262f8.png",
    },
    {
        ticker_symbol: "TRIO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8b40761142b9aa6dc8964e61d0585995425c3d94.png",
    },
    {
        ticker_symbol: "PRO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x226bb599a12c826476e3a771454697ea52e9e220.png",
    },
    {
        ticker_symbol: "DNT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0abdace70d3790235af448c88547603b945604ea.png",
    },
    {
        ticker_symbol: "OCN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4092678e4e78230f46a1534c0fbc8fa39780892b.png",
    },
    {
        ticker_symbol: "CDT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x177d39ac676ed1c67a2b268ad7f1e58826e5b0af.png",
    },
    {
        ticker_symbol: "TFD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe5f166c0d8872b68790061317bb6cca04582c912.png",
    },
    {
        ticker_symbol: "LA",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe50365f5d679cb98a1dd62d6f6e58e59321bcddf.png",
    },
    {
        ticker_symbol: "KEY",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4cd988afbad37289baaf53c13e98e2bd46aaea8c.png",
    },
    {
        ticker_symbol: "GUSD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x056fd409e1d7a124bd7017459dfea2f387b6d5cd.png",
    },
    {
        ticker_symbol: "DOCK",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe5dada80aa6477e85d09747f2842f7993d0df71c.png",
    },
    {
        ticker_symbol: "TAAS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe7775a6e9bcf904eb39da2b68c5efb4f9360e08c.png",
    },
    {
        ticker_symbol: "XRC",

        logo_url: null,
    },
    {
        ticker_symbol: "NPC",

        logo_url: null,
    },
    {
        ticker_symbol: "TRAC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f.png",
    },
    {
        ticker_symbol: "SOC",

        logo_url: null,
    },
    {
        ticker_symbol: "DTX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x765f0c16d1ddc279295c1a7c24b0883f62d33f75.png",
    },
    {
        ticker_symbol: "MDT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x814e0908b12a99fecf5bc101bb5d0b8b5cdf7d26.png",
    },
    {
        ticker_symbol: "HNDC",

        logo_url: null,
    },
    {
        ticker_symbol: "SNGLS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009.png",
    },
    {
        ticker_symbol: "DERO",

        logo_url: null,
    },
    {
        ticker_symbol: "STM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x2e8c6bbe8e3aa834ef5a851b2cdfc52403d61b87.png",
    },
    {
        ticker_symbol: "ECA",

        logo_url: null,
    },
    {
        ticker_symbol: "TAU",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xc27a2f05fa577a83ba0fdb4c38443c0718356501.png",
    },
    {
        ticker_symbol: "NBX",

        logo_url: null,
    },
    {
        ticker_symbol: "CSAI",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf5dce57282a584d2746faf1593d3121fcac444dc.png",
    },
    {
        ticker_symbol: "BLZ",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5732046a883704404f284ce41ffadd5b007fd668.png",
    },
    {
        ticker_symbol: "UPP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xc86d054809623432210c107af2e3f619dcfbf652.png",
    },
    {
        ticker_symbol: "NPX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x28b5e12cce51f15594b0b91d5b5adaa70f684a02.png",
    },
    {
        ticker_symbol: "SALT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4156d3342d5c385a87d264f90653733592000581.png",
    },
    {
        ticker_symbol: "ZEL",

        logo_url: null,
    },
    {
        ticker_symbol: "PEPECASH",

        logo_url: null,
    },
    {
        ticker_symbol: "PMA",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x846c66cf71c43f80403b51fe3906b3599d63336f.png",
    },
    {
        ticker_symbol: "USE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd9485499499d66b175cf5ed54c0a19f1a6bcb61a.png",
    },
    {
        ticker_symbol: "WPR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4cf488387f035ff08c371515562cba712f9015d4.png",
    },
    {
        ticker_symbol: "POE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195.png",
    },
    {
        ticker_symbol: "CHAI",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x06af07097c9eeb7fd685c692751d5c66db49c215.png",
    },
    {
        ticker_symbol: "LCC",

        logo_url: null,
    },
    {
        ticker_symbol: "VGX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5af2be193a6abca9c8817001f45744777db30756.png",
    },
    {
        ticker_symbol: "MAN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe25bcec5d3801ce3a794079bf94adf1b8ccd802d.png",
    },
    {
        ticker_symbol: "SXUT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x2c82c73d5b34aa015989462b2948cd616a37641f.png",
    },
    {
        ticker_symbol: "MDS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x66186008c1050627f979d464eabb258860563dbe.png",
    },
    {
        ticker_symbol: "EMC",

        logo_url: null,
    },
    {
        ticker_symbol: "HMC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xaa0bb10cec1fa372eb3abc17c933fc6ba863dd9e.png",
    },
    {
        ticker_symbol: "XCP",

        logo_url: null,
    },
    {
        ticker_symbol: "AVA",

        logo_url: null,
    },
    {
        ticker_symbol: "XHV",

        logo_url: null,
    },
    {
        ticker_symbol: "VRSC",

        logo_url: null,
    },
    {
        ticker_symbol: "PEG",

        logo_url: null,
    },
    {
        ticker_symbol: "TERN",

        logo_url: null,
    },
    {
        ticker_symbol: "NEU",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa823e6722006afe99e91c30ff5295052fe6b8e32.png",
    },
    {
        ticker_symbol: "DBC",

        logo_url: null,
    },
    {
        ticker_symbol: "MWAT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6425c6be902d692ae2db752b3c268afadb099d3b.png",
    },
    {
        ticker_symbol: "HPB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x38c6a68304cdefb9bec48bbfaaba5c5b47818bb2.png",
    },
    {
        ticker_symbol: "PNK",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d.png",
    },
    {
        ticker_symbol: "RFR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd0929d411954c47438dc1d871dd6081f5c5e149c.png",
    },
    {
        ticker_symbol: "VIB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724.png",
    },
    {
        ticker_symbol: "CNN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8713d26637cf49e1b6b4a7ce57106aabc9325343.png",
    },
    {
        ticker_symbol: "QUN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x264dc2dedcdcbb897561a57cba5085ca416fb7b4.png",
    },
    {
        ticker_symbol: "BDT",

        logo_url: null,
    },
    {
        ticker_symbol: "IQN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0db8d8b76bc361bacbb72e2c491e06085a97ab31.png",
    },
    {
        ticker_symbol: "MTH",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xaf4dce16da2877f8c9e00544c93b62ac40631f16.png",
    },
    {
        ticker_symbol: "HYC",

        logo_url: null,
    },
    {
        ticker_symbol: "APPC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1a7a8bd9106f2b8d977e08582dc7d24c723ab0db.png",
    },
    {
        ticker_symbol: "AST",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x27054b13b1b798b345b591a4d22e6562d47ea75a.png",
    },
    {
        ticker_symbol: "TKY",

        logo_url: null,
    },
    {
        ticker_symbol: "DLT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x07e3c70653548b04f0a75970c1f81b4cbbfb606f.png",
    },
    {
        ticker_symbol: "AERGO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xae31b85bfe62747d0836b82608b4830361a3d37a.png",
    },
    {
        ticker_symbol: "TWDT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x35a4e77ae040afc9743157911d39d1451cf2f05d.png",
    },
    {
        ticker_symbol: "PHX",

        logo_url: null,
    },
    {
        ticker_symbol: "BOX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe1a178b681bd05964d3e3ed33ae731577d9d96dd.png",
    },
    {
        ticker_symbol: "VEE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x340d2bde5eb28c1eed91b2f790723e3b160613b7.png",
    },
    {
        ticker_symbol: "DTA",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x69b148395ce0015c13e36bffbad63f49ef874e03.png",
    },
    {
        ticker_symbol: "UBQ",

        logo_url: null,
    },
    {
        ticker_symbol: "NYZO",

        logo_url: null,
    },
    {
        ticker_symbol: "ZANO",

        logo_url: null,
    },
    {
        ticker_symbol: "VIDT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x445f51299ef3307dbd75036dd896565f5b4bf7a5.png",
    },
    {
        ticker_symbol: "CAG",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x7d4b8cce0591c9044a22ee543533b72e976e36c3.png",
    },
    {
        ticker_symbol: "UQC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd01db73e047855efb414e6202098c4be4cd2423b.png",
    },
    {
        ticker_symbol: "BAY",

        logo_url: null,
    },
    {
        ticker_symbol: "COLX",

        logo_url: null,
    },
    {
        ticker_symbol: "PGN",

        logo_url: null,
    },
    {
        ticker_symbol: "TIG",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xeee2d00eb7deb8dd6924187f5aa3496b7d06e62a.png",
    },
    {
        ticker_symbol: "UUU",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x3543638ed4a9006e4840b105944271bcea15605d.png",
    },
    {
        ticker_symbol: "QLC",

        logo_url: null,
    },
    {
        ticker_symbol: "XDAG",

        logo_url: null,
    },
    {
        ticker_symbol: "YEE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x922105fad8153f516bcfb829f56dc097a0e1d705.png",
    },
    {
        ticker_symbol: "SNC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf4134146af2d511dd5ea8cdb1c4ac88c57d60404.png",
    },
    {
        ticker_symbol: "SRN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25.png",
    },
    {
        ticker_symbol: "DAPS",

        logo_url: null,
    },
    {
        ticker_symbol: "N8V",

        logo_url: null,
    },
    {
        ticker_symbol: "CONI",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x2c949199cff14aeaf1b33d64db01f48fb57f592f.png",
    },
    {
        ticker_symbol: "PI",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb9bb08ab7e9fa0a1356bd4a39ec0ca267e03b0b3.png",
    },
    {
        ticker_symbol: "DEC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x89c6c856a6db3e46107163d0cda7a7ff211bd655.png",
    },
    {
        ticker_symbol: "SNET",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xff19138b039d938db46bdda0067dc4ba132ec71c.png",
    },
    {
        ticker_symbol: "PRA",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9041fe5b3fdea0f5e4afdc17e75180738d877a01.png",
    },
    {
        ticker_symbol: "SWTH",

        logo_url: null,
    },
    {
        ticker_symbol: "XDB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb9eefc4b0d472a44be93970254df4f4016569d27.png",
    },
    {
        ticker_symbol: "HIT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x7995ab36bb307afa6a683c24a25d90dc1ea83566.png",
    },
    {
        ticker_symbol: "NPER",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4ce6b362bc77a24966dda9078f9cef81b3b886a7.png",
    },
    {
        ticker_symbol: "OGN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8207c1ffc5b6804f6024322ccf34f29c3541ae26.png",
    },
    {
        ticker_symbol: "MRX",

        logo_url: null,
    },
    {
        ticker_symbol: "CHP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf3db7560e820834658b590c96234c333cd3d5e5e.png",
    },
    {
        ticker_symbol: "BZNT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe1aee98495365fc179699c1bb3e761fa716bee62.png",
    },
    {
        ticker_symbol: "XSPEC",

        logo_url: null,
    },
    {
        ticker_symbol: "AMLT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xca0e7269600d353f70b14ad118a49575455c0f2f.png",
    },
    {
        ticker_symbol: "POA",

        logo_url: null,
    },
    {
        ticker_symbol: "BMX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x986ee2b944c42d017f52af21c4c69b84dbea35d8.png",
    },
    {
        ticker_symbol: "AXE",

        logo_url: null,
    },
    {
        ticker_symbol: "ONION",

        logo_url: null,
    },
    {
        ticker_symbol: "FUEL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xea38eaa3c86c8f9b751533ba2e562deb9acded40.png",
    },
    {
        ticker_symbol: "LXT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xbc46d9961a3932f7d6b64abfdec80c1816c4b835.png",
    },
    {
        ticker_symbol: "XAUR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4df812f6064def1e5e029f1ca858777cc98d2d81.png",
    },
    {
        ticker_symbol: "GBT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd8bd3958725f216eb236e9dc65b169de48101c6a.png",
    },
    {
        ticker_symbol: "BCPT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1c4481750daa5ff521a2a7490d9981ed46465dbd.png",
    },
    {
        ticker_symbol: "OAX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x701c244b988a513c945973defa05de933b23fe1d.png",
    },
    {
        ticker_symbol: "NCT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9e46a38f5daabe8683e10793b06749eef7d733d1.png",
    },
    {
        ticker_symbol: "MT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9b4e2b4b13d125238aa0480dd42b4f6fc71b37cc.png",
    },
    {
        ticker_symbol: "UAT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x01c0987e88f778df6640787226bc96354e1a9766.png",
    },
    {
        ticker_symbol: "LUN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xfa05a73ffe78ef8f1a739473e462c54bae6567d9.png",
    },
    {
        ticker_symbol: "VIBE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe8ff5c9c75deb346acac493c463c8950be03dfba.png",
    },
    {
        ticker_symbol: "ARN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xba5f11b16b155792cf3b2e6880e8706859a8aeb6.png",
    },
    {
        ticker_symbol: "SKM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd99b8a7fa48e25cce83b81812220a3e03bf64e5f.png",
    },
    {
        ticker_symbol: "PLA",

        logo_url: null,
    },
    {
        ticker_symbol: "WWB",

        logo_url: null,
    },
    {
        ticker_symbol: "BOS",

        logo_url: null,
    },
    {
        ticker_symbol: "SNL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa806b3fed6891136940cf81c4085661500aa2709.png",
    },
    {
        ticker_symbol: "SCAP",

        logo_url: null,
    },
    {
        ticker_symbol: "CBC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x26db5439f651caf491a87d48799da81f191bdb6b.png",
    },
    {
        ticker_symbol: "PVT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x7869c4a1a3f6f8684fbcc422a21ad7abe3167834.png",
    },
    {
        ticker_symbol: "BTX",

        logo_url: null,
    },
    {
        ticker_symbol: "TFL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa7f976c360ebbed4465c2855684d1aae5271efa9.png",
    },
    {
        ticker_symbol: "XDN",

        logo_url: null,
    },
    {
        ticker_symbol: "GAME",

        logo_url: null,
    },
    {
        ticker_symbol: "MOBI",

        logo_url: null,
    },
    {
        ticker_symbol: "FTC",

        logo_url: null,
    },
    {
        ticker_symbol: "DAGT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x56d1ae30c97288da4b58bc39f026091778e4e316.png",
    },
    {
        ticker_symbol: "OLT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x64a60493d888728cf42616e034a0dfeae38efcf0.png",
    },
    {
        ticker_symbol: "VEIL",

        logo_url: null,
    },
    {
        ticker_symbol: "AT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xbf8fb919a8bbf28e590852aef2d284494ebc0657.png",
    },
    {
        ticker_symbol: "TUBE",

        logo_url: null,
    },
    {
        ticker_symbol: "REM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x83984d6142934bb535793a82adb0a46ef0f66b6d.png",
    },
    {
        ticker_symbol: "RNT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xff603f43946a3a28df5e6a73172555d8c8b02386.png",
    },
    {
        ticker_symbol: "SUMO",

        logo_url: null,
    },
    {
        ticker_symbol: "TRB",

        logo_url: null,
    },
    {
        ticker_symbol: "BLT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x107c4504cd79c5d2696ea0030a8dd4e92601b82e.png",
    },
    {
        ticker_symbol: "DDD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9f5f3cfd7a32700c93f971637407ff17b91c7342.png",
    },
    {
        ticker_symbol: "COTI",

        logo_url: null,
    },
    {
        ticker_symbol: "NIM",

        logo_url: null,
    },
    {
        ticker_symbol: "XST",

        logo_url: null,
    },
    {
        ticker_symbol: "XMY",

        logo_url: null,
    },
    {
        ticker_symbol: "LYM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xc690f7c7fcffa6a82b79fab7508c466fefdfc8c5.png",
    },
    {
        ticker_symbol: "AUTO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x622dffcc4e83c64ba959530a5a5580687a57581b.png",
    },
    {
        ticker_symbol: "AMB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce.png",
    },
    {
        ticker_symbol: "EOSDAC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x7e9e431a0b8c4d532c745b1043c7fa29a48d4fba.png",
    },
    {
        ticker_symbol: "RADS",

        logo_url: null,
    },
    {
        ticker_symbol: "UCASH",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x92e52a1a235d9a103d970901066ce910aacefd37.png",
    },
    {
        ticker_symbol: "SENT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa44e5137293e855b1b7bc7e2c6f8cd796ffcb037.png",
    },
    {
        ticker_symbol: "NCASH",

        logo_url: null,
    },
    {
        ticker_symbol: "GNX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6ec8a24cabdc339a06a172f8223ea557055adaa5.png",
    },
    {
        ticker_symbol: "PAC",

        logo_url: null,
    },
    {
        ticker_symbol: "BBR",

        logo_url: null,
    },
    {
        ticker_symbol: "NGC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x72dd4b6bd852a3aa172be4d6c5a6dbec588cf131.png",
    },
    {
        ticker_symbol: "LGO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x123ab195dd38b1b40510d467a6a359b201af056f.png",
    },
    {
        ticker_symbol: "OK",

        logo_url: null,
    },
    {
        ticker_symbol: "ZCL",

        logo_url: null,
    },
    {
        ticker_symbol: "BPT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x327682779bab2bf4d1337e8974ab9de8275a7ca8.png",
    },
    {
        ticker_symbol: "ZIP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa9d2927d3a04309e008b6af6e2e282ae2952e7fd.png",
    },
    {
        ticker_symbol: "ABYSS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6.png",
    },
    {
        ticker_symbol: "VBK",

        logo_url: null,
    },
    {
        ticker_symbol: "CRE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x115ec79f1de567ec68b7ae7eda501b406626478e.png",
    },
    {
        ticker_symbol: "OWC",

        logo_url: null,
    },
    {
        ticker_symbol: "ADT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd0d6d6c5fe4a677d343cc433536bb717bae167dd.png",
    },
    {
        ticker_symbol: "VRC",

        logo_url: null,
    },
    {
        ticker_symbol: "VIN",

        logo_url: null,
    },
    {
        ticker_symbol: "UBEX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6704b673c70de9bf74c8fba4b4bd748f0e2190e1.png",
    },
    {
        ticker_symbol: "ETZ",

        logo_url: null,
    },
    {
        ticker_symbol: "GMB",

        logo_url: null,
    },
    {
        ticker_symbol: "AIDOC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x584b44853680ee34a0f337b712a8f66d816df151.png",
    },
    {
        ticker_symbol: "STREAM",

        logo_url: null,
    },
    {
        ticker_symbol: "GSE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe530441f4f73bdb6dc2fa5af7c3fc5fd551ec838.png",
    },
    {
        ticker_symbol: "VEX",

        logo_url: null,
    },
    {
        ticker_symbol: "WINGS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x667088b212ce3d06a1b553a7221e1fd19000d9af.png",
    },
    {
        ticker_symbol: "TDX",

        logo_url: null,
    },
    {
        ticker_symbol: "BXY",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x827d53c8170af52625f414bde00326fc8a085e86.png",
    },
    {
        ticker_symbol: "LYL",

        logo_url: null,
    },
    {
        ticker_symbol: "CZR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0223fc70574214f65813fe336d870ac47e147fae.png",
    },
    {
        ticker_symbol: "TPAY",

        logo_url: null,
    },
    {
        ticker_symbol: "LET",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xfa3118b34522580c35ae27f6cf52da1dbb756288.png",
    },
    {
        ticker_symbol: "OPQ",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x77599d2c6db170224243e255e6669280f11f1473.png",
    },
    {
        ticker_symbol: "VID",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x2c9023bbc572ff8dc1228c7858a280046ea8c9e5.png",
    },
    {
        ticker_symbol: "SIX",

        logo_url: null,
    },
    {
        ticker_symbol: "APIS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4c0fbe1bb46612915e7967d2c3213cd4d87257ad.png",
    },
    {
        ticker_symbol: "BQQQ",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1b80eeeadcc590f305945bcc258cfa770bbe1890.png",
    },
    {
        ticker_symbol: "XYO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x55296f69f40ea6d20e478533c15a6b08b654e758.png",
    },
    {
        ticker_symbol: "MOON",

        logo_url: null,
    },
    {
        ticker_symbol: "QNTU",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4234f63b1d202f6c016ca3b6a0d41d7d85f17716.png",
    },
    {
        ticker_symbol: "TERA",

        logo_url: null,
    },
    {
        ticker_symbol: "GARD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5c64031c62061865e5fd0f53d3cdaef80f72e99d.png",
    },
    {
        ticker_symbol: "SPANK",



        logo_url:
            "https://logos.covalenthq.com/tokens/0x42d6622dece394b54999fbd73d108123806f6a18.png",
    },
    {
        ticker_symbol: "CLO",

        logo_url: null,
    },
    {
        ticker_symbol: "BTO",

        logo_url: null,
    },
    {
        ticker_symbol: "BLK",

        logo_url: null,
    },
    {
        ticker_symbol: "YOYOW",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xcbeaec699431857fdb4d37addbbdc20e132d4903.png",
    },
    {
        ticker_symbol: "UT",

        logo_url: null,
    },
    {
        ticker_symbol: "DMD",

        logo_url: null,
    },
    {
        ticker_symbol: "CPC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xfae4ee59cdd86e3be9e8b90b53aa866327d7c090.png",
    },
    {
        ticker_symbol: "FDZ",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x23352036e911a22cfc692b5e2e196692658aded9.png",
    },
    {
        ticker_symbol: "EDR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xc528c28fec0a90c083328bc45f587ee215760a0f.png",
    },
    {
        ticker_symbol: "TELOS",

        logo_url: null,
    },
    {
        ticker_symbol: "PAYX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x62a56a4a2ef4d355d34d10fbf837e747504d38d4.png",
    },
    {
        ticker_symbol: "AMPL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd46ba6d942050d489dbd938a2c909a5d5039a161.png",
    },
    {
        ticker_symbol: "LND",

        logo_url: null,
    },
    {
        ticker_symbol: "INSTAR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xc72fe8e3dd5bef0f9f31f259399f301272ef2a2d.png",
    },
    {
        ticker_symbol: "SOUL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xbb1f24c0c1554b9990222f036b0aad6ee4caec29.png",
    },
    {
        ticker_symbol: "SWM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9e88613418cf03dca54d6a2cf6ad934a78c7a17a.png",
    },
    {
        ticker_symbol: "POT",

        logo_url: null,
    },
    {
        ticker_symbol: "BOLT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9f235d23354857efe6c541db92a9ef1877689bcb.png",
    },
    {
        ticker_symbol: "PHR",

        logo_url: null,
    },
    {
        ticker_symbol: "TEN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xdd16ec0f66e54d453e6756713e533355989040e4.png",
    },
    {
        ticker_symbol: "SKB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4af328c52921706dcb739f25786210499169afe6.png",
    },
    {
        ticker_symbol: "ENQ",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x16ea01acb4b0bca2000ee5473348b6937ee6f72f.png",
    },
    {
        ticker_symbol: "C3W",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x19055b944806fba2717dc694cf0173a1eb2d1604.png",
    },
    {
        ticker_symbol: "OGO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xff0e5e014cf97e0615cb50f6f39da6388e2fae6e.png",
    },
    {
        ticker_symbol: "CREDO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4e0603e2a27a30480e5e3a4fe548e29ef12f64be.png",
    },
    {
        ticker_symbol: "VIPS",

        logo_url: null,
    },
    {
        ticker_symbol: "CTXC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xea11755ae41d889ceec39a63e6ff75a02bc1c00d.png",
    },
    {
        ticker_symbol: "BKBT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6a27348483d59150ae76ef4c0f3622a78b0ca698.png",
    },
    {
        ticker_symbol: "SPC",

        logo_url: null,
    },
    {
        ticker_symbol: "POLL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x705ee96c1c160842c92c1aecfcffccc9c412e3d9.png",
    },
    {
        ticker_symbol: "TOC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe02784175c3be0dea7cc0f284041b64503639e66.png",
    },
    {
        ticker_symbol: "CHX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1460a58096d80a50a2f1f956dda497611fa4f165.png",
    },
    {
        ticker_symbol: "MCASH",

        logo_url: null,
    },
    {
        ticker_symbol: "MITX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4a527d8fc13c5203ab24ba0944f4cb14658d1db6.png",
    },
    {
        ticker_symbol: "QRK",

        logo_url: null,
    },
    {
        ticker_symbol: "URAC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xff8be4b22cedc440591dcb1e641eb2a0dd9d25a5.png",
    },
    {
        ticker_symbol: "PNT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x53066cddbc0099eb6c96785d9b3df2aaeede5da3.png",
    },
    {
        ticker_symbol: "ZCO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x2008e3057bd734e10ad13c9eae45ff132abc1722.png",
    },
    {
        ticker_symbol: "VRA",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xdf1d6405df92d981a2fb3ce68f6a03bac6c0e41f.png",
    },
    {
        ticker_symbol: "NBC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9f195617fa8fbad9540c5d113a99a0a0172aaedc.png",
    },
    {
        ticker_symbol: "EFL",

        logo_url: null,
    },
    {
        ticker_symbol: "BITG",

        logo_url: null,
    },
    {
        ticker_symbol: "EAC",

        logo_url: null,
    },
    {
        ticker_symbol: "EDN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x05860d453c7974cbf46508c06cba14e211c629ce.png",
    },
    {
        ticker_symbol: "BET",

        logo_url: null,
    },
    {
        ticker_symbol: "VGW",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x94236591125e935f5ac128bb3d5062944c24958c.png",
    },
    {
        ticker_symbol: "LNX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5e3845a1d78db544613edbe43dc1ea497266d3b8.png",
    },
    {
        ticker_symbol: "DCT",

        logo_url: null,
    },
    {
        ticker_symbol: "UKG",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x24692791bc444c5cd0b81e3cbcaba4b04acd1f3b.png",
    },
    {
        ticker_symbol: "ABL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf8b358b3397a8ea5464f8cc753645d42e14b79ea.png",
    },
    {
        ticker_symbol: "ADS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x422866a8f0b032c5cf1dfbdef31a20f4509562b0.png",
    },
    {
        ticker_symbol: "HBZ",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe34e1944e776f39b9252790a0527ebda647ae668.png",
    },
    {
        ticker_symbol: "SEN",

        logo_url: null,
    },
    {
        ticker_symbol: "FRM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe5caef4af8780e59df925470b050fb23c43ca68c.png",
    },
    {
        ticker_symbol: "NTY",

        logo_url: null,
    },
    {
        ticker_symbol: "TRTL",

        logo_url: null,
    },
    {
        ticker_symbol: "INK",

        logo_url: null,
    },
    {
        ticker_symbol: "IMG",

        logo_url: null,
    },
    {
        ticker_symbol: "FTI",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x943ed852dadb5c3938ecdc6883718df8142de4c8.png",
    },
    {
        ticker_symbol: "CHI",

        logo_url: null,
    },
    {
        ticker_symbol: "PLU",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd8912c10681d8b21fd3742244f44658dba12264e.png",
    },
    {
        ticker_symbol: "CHR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x915044526758533dfb918eceb6e44bc21632060d.png",
    },
    {
        ticker_symbol: "XCASH",

        logo_url: null,
    },
    {
        ticker_symbol: "COV",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe2fb6529ef566a080e6d23de0bd351311087d567.png",
    },
    {
        ticker_symbol: "SHA",

        logo_url: null,
    },
    {
        ticker_symbol: "UDOO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0df721639ca2f7ff0e1f618b918a65ffb199ac4e.png",
    },
    {
        ticker_symbol: "DREP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x3aca71c508e06dc6b2758dab6eb20f7654572fb7.png",
    },
    {
        ticker_symbol: "CDC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x87026f792d09960232ca406e80c89bd35bafe566.png",
    },
    {
        ticker_symbol: "YEED",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xca2796f9f61dc7b238aab043971e49c6164df375.png",
    },
    {
        ticker_symbol: "PRE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x88a3e4f35d64aad41a6d4030ac9afe4356cb84fa.png",
    },
    {
        ticker_symbol: "CAN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1d462414fe14cf489c7a21cac78509f4bf8cd7c0.png",
    },
    {
        ticker_symbol: "BCDN",

        logo_url: null,
    },
    {
        ticker_symbol: "JUR",

        logo_url: null,
    },
    {
        ticker_symbol: "CRW",

        logo_url: null,
    },
    {
        ticker_symbol: "XLQ",

        logo_url: null,
    },
    {
        ticker_symbol: "GRC",

        logo_url: null,
    },
    {
        ticker_symbol: "WCO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd44bb6663936cab1310584a277f7daa6943d4904.png",
    },
    {
        ticker_symbol: "BIS",

        logo_url: null,
    },
    {
        ticker_symbol: "GENE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6dd4e4aad29a40edd6a409b9c1625186c9855b4d.png",
    },
    {
        ticker_symbol: "CXO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb6ee9668771a79be7967ee29a63d4184f8097143.png",
    },
    {
        ticker_symbol: "HMQ",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xcbcc0f036ed4788f63fc0fee32873d6a7487b908.png",
    },
    {
        ticker_symbol: "NOIA",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xfc858154c0b2c4a3323046fb505811f110ebda57.png",
    },
    {
        ticker_symbol: "PASC",

        logo_url: null,
    },
    {
        ticker_symbol: "IHT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xeda8b016efa8b1161208cf041cd86972eee0f31e.png",
    },
    {
        ticker_symbol: "IDH",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5136c98a80811c3f46bdda8b5c4555cfd9f812f0.png",
    },
    {
        ticker_symbol: "ZAP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6781a0f84c7e9e846dcb84a9a5bd49333067b104.png",
    },
    {
        ticker_symbol: "EXRN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe469c4473af82217b30cf17b10bcdb6c8c796e75.png",
    },
    {
        ticker_symbol: "DIT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf14922001a2fb8541a433905437ae954419c2439.png",
    },
    {
        ticker_symbol: "SUB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8d75959f1e61ec2571aa72798237101f084de63a.png",
    },
    {
        ticker_symbol: "CHAT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x442bc47357919446eabc18c7211e57a13d983469.png",
    },
    {
        ticker_symbol: "HSC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x2bba3cf6de6058cc1b4457ce00deb359e2703d7f.png",
    },
    {
        ticker_symbol: "XPM",

        logo_url: null,
    },
    {
        ticker_symbol: "PST",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe3fedaecd47aa8eab6b23227b0ee56f092c967a9.png",
    },
    {
        ticker_symbol: "PND",

        logo_url: null,
    },
    {
        ticker_symbol: "DPY",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6c2adc2073994fb2ccc5032cc2906fa221e9b391.png",
    },
    {
        ticker_symbol: "DRT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9af4f26941677c706cfecf6d3379ff01bb85d5ab.png",
    },
    {
        ticker_symbol: "IOC",

        logo_url: null,
    },
    {
        ticker_symbol: "MERI",

        logo_url: null,
    },
    {
        ticker_symbol: "LUX",

        logo_url: null,
    },
    {
        ticker_symbol: "EMT",

        logo_url: null,
    },
    {
        ticker_symbol: "ORS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xeb9a4b185816c354db92db09cc3b50be60b901b6.png",
    },
    {
        ticker_symbol: "ION",

        logo_url: null,
    },
    {
        ticker_symbol: "MRC",

        logo_url: null,
    },
    {
        ticker_symbol: "SPND",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xddd460bbd9f79847ea08681563e8a9696867210c.png",
    },
    {
        ticker_symbol: "SYC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe49214e4c92dc9bcb3b56c1309afe0d626dd730e.png",
    },
    {
        ticker_symbol: "RBY",

        logo_url: null,
    },
    {
        ticker_symbol: "CLOAK",

        logo_url: null,
    },
    {
        ticker_symbol: "FLOT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x049399a6b048d52971f7d122ae21a1532722285f.png",
    },
    {
        ticker_symbol: "NTK",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5d4d57cd06fa7fe99e26fdc481b468f77f05073c.png",
    },
    {
        ticker_symbol: "DPN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xfb8bf095ebcdad57d2e37573a505e7d3bafdd3cc.png",
    },
    {
        ticker_symbol: "IIC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb6f43025b29196af2dddd69b0a58afba079cd600.png",
    },
    {
        ticker_symbol: "CV",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xda6cb58a0d0c01610a29c5a65c303e13e885887c.png",
    },
    {
        ticker_symbol: "EDG",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c.png",
    },
    {
        ticker_symbol: "PTN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xfe76be9cec465ed3219a9972c21655d57d21aec6.png",
    },
    {
        ticker_symbol: "TRST",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b.png",
    },
    {
        ticker_symbol: "IVY",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa4ea687a2a7f29cf2dc66b39c68e4411c0d00c49.png",
    },
    {
        ticker_symbol: "XBASE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4d13d624a87baa278733c068a174412afa9ca6c8.png",
    },
    {
        ticker_symbol: "EFX",

        logo_url: null,
    },
    {
        ticker_symbol: "IOV",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0e69d0a2bbb30abcb7e5cfea0e4fde19c00a8d47.png",
    },
    {
        ticker_symbol: "DAT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x81c9151de0c8bafcd325a57e3db5a5df1cebf79c.png",
    },
    {
        ticker_symbol: "WLO",

        logo_url: null,
    },
    {
        ticker_symbol: "CPAY",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0ebb614204e47c09b6c3feb9aaecad8ee060e23e.png",
    },
    {
        ticker_symbol: "ATL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x78b7fada55a64dd895d8c8c35779dd8b67fa8a05.png",
    },
    {
        ticker_symbol: "QBX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x2467aa6b5a2351416fd4c3def8462d841feeecec.png",
    },
    {
        ticker_symbol: "KIN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5.png",
    },
    {
        ticker_symbol: "MTV",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8aa688ab789d1848d131c65d98ceaa8875d97ef1.png",
    },
    {
        ticker_symbol: "ETM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6020da0f7c1857dbe4431ec92a15cc318d933eaa.png",
    },
    {
        ticker_symbol: "TOS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xfb5a551374b656c6e39787b1d3a03feab7f3a98e.png",
    },
    {
        ticker_symbol: "TAC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xca694eb79ef355ea0999485d211e68f39ae98493.png",
    },
    {
        ticker_symbol: "ZMN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x554ffc77f4251a9fb3c0e3590a6a205f8d4e067d.png",
    },
    {
        ticker_symbol: "BEET",

        logo_url: null,
    },
    {
        ticker_symbol: "SLX",

        logo_url: null,
    },
    {
        ticker_symbol: "IMT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x13119e34e140097a507b07a5564bde1bc375d9e6.png",
    },
    {
        ticker_symbol: "DAX",

        logo_url: null,
    },
    {
        ticker_symbol: "KAT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x88fcfbc22c6d3dbaa25af478c578978339bde77a.png",
    },
    {
        ticker_symbol: "HLM",

        logo_url: null,
    },
    {
        ticker_symbol: "MUE",

        logo_url: null,
    },
    {
        ticker_symbol: "YEC",

        logo_url: null,
    },
    {
        ticker_symbol: "QWC",

        logo_url: null,
    },
    {
        ticker_symbol: "HLC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x58c69ed6cd6887c0225d1fccecc055127843c69b.png",
    },
    {
        ticker_symbol: "PPY",

        logo_url: null,
    },
    {
        ticker_symbol: "PCH",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe3f4b4a5d91e5cb9435b947f090a319737036312.png",
    },
    {
        ticker_symbol: "WEBD",

        logo_url: null,
    },
    {
        ticker_symbol: "NOTE",

        logo_url: null,
    },
    {
        ticker_symbol: "ADM",

        logo_url: null,
    },
    {
        ticker_symbol: "BGBP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xc9a2c4868f0f96faaa739b59934dc9cb304112ec.png",
    },
    {
        ticker_symbol: "CLB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb1c1cb8c7c1992dba24e628bf7d38e71dad46aeb.png",
    },
    {
        ticker_symbol: "HORUS",

        logo_url: null,
    },
    {
        ticker_symbol: "EVT",

        logo_url: null,
    },
    {
        ticker_symbol: "LIT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x763fa6806e1acf68130d2d0f0df754c93cc546b2.png",
    },
    {
        ticker_symbol: "TOL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd07d9fe2d2cc067015e2b4917d24933804f42cfa.png",
    },
    {
        ticker_symbol: "MYST",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa645264c5603e96c3b0b078cdab68733794b0a71.png",
    },
    {
        ticker_symbol: "INSUR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6ea6531b603f270d23d9edd2d8279135dc5d6773.png",
    },
    {
        ticker_symbol: "SRH",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xc350e846e2c57f9eece90febc253d14c8080871b.png",
    },
    {
        ticker_symbol: "SIN",

        logo_url: null,
    },
    {
        ticker_symbol: "CURE",

        logo_url: null,
    },
    {
        ticker_symbol: "RAVEN",

        logo_url: null,
    },
    {
        ticker_symbol: "CAPP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x04f2e7221fdb1b52a68169b25793e51478ff0329.png",
    },
    {
        ticker_symbol: "SSP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x624d520bab2e4ad83935fa503fb130614374e850.png",
    },
    {
        ticker_symbol: "LEDU",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5b26c5d0772e5bbac8b3182ae9a13f9bb2d03765.png",
    },
    {
        ticker_symbol: "CPX",

        logo_url: null,
    },
    {
        ticker_symbol: "SNTVT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x7865af71cf0b288b4e7f654f4f7851eb46a2b7f8.png",
    },
    {
        ticker_symbol: "CARD",

        logo_url: null,
    },
    {
        ticker_symbol: "UND",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xbe6ac6b50f577205c9d107f37b6e205aa6acc5d4.png",
    },
    {
        ticker_symbol: "BTCP",

        logo_url: null,
    },
    {
        ticker_symbol: "AKRO",

        logo_url: null,
    },
    {
        ticker_symbol: "MTN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x41dbecc1cdc5517c6f76f6a6e836adbee2754de3.png",
    },
    {
        ticker_symbol: "COVAL",

        logo_url: null,
    },
    {
        ticker_symbol: "CREA",

        logo_url: null,
    },
    {
        ticker_symbol: "INFT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x83d60e7aed59c6829fb251229061a55f35432c4d.png",
    },
    {
        ticker_symbol: "TRC",

        logo_url: null,
    },
    {
        ticker_symbol: "DIME",

        logo_url: null,
    },
    {
        ticker_symbol: "VSF",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xac9ce326e95f51b5005e9fe1dd8085a01f18450c.png",
    },
    {
        ticker_symbol: "FTX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd559f20296ff4895da39b5bd9add54b442596a61.png",
    },
    {
        ticker_symbol: "B2N",

        logo_url: null,
    },
    {
        ticker_symbol: "RMT",

        logo_url: null,
    },
    {
        ticker_symbol: "INF",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x00e150d741eda1d49d341189cae4c08a73a49c95.png",
    },
    {
        ticker_symbol: "SLR",

        logo_url: null,
    },
    {
        ticker_symbol: "SLT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x851017523ae205adc9195e7f97d029f4cfe7794c.png",
    },
    {
        ticker_symbol: "AD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf6dbe88ba55f1793ff0773c9b1275300f830914f.png",
    },
    {
        ticker_symbol: "SCC",

        logo_url: null,
    },
    {
        ticker_symbol: "42",

        logo_url: null,
    },
    {
        ticker_symbol: "FAIR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9b20dabcec77f6289113e61893f7beefaeb1990a.png",
    },
    {
        ticker_symbol: "TIME",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6531f133e6deebe7f2dce5a0441aa7ef330b4e53.png",
    },
    {
        ticker_symbol: "BEPRO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x786001c9c5ca6e502deb8a8a72480d2147891f32.png",
    },
    {
        ticker_symbol: "ZCN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb9ef770b6a5e12e45983c5d80545258aa38f3b78.png",
    },
    {
        ticker_symbol: "AVT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0d88ed6e74bbfd96b831231638b66c05571e824f.png",
    },
    {
        ticker_symbol: "EDU",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf263292e14d9d8ecd55b58dad1f1df825a874b7c.png",
    },
    {
        ticker_symbol: "CRC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf41e5fbc2f6aac200dd8619e121ce1f05d150077.png",
    },
    {
        ticker_symbol: "AAA",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6aba1623ea906d1164cbb007e764ebde2514a2ba.png",
    },
    {
        ticker_symbol: "AMN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x737f98ac8ca59f2c68ad658e3c3d8c8963e40a4c.png",
    },
    {
        ticker_symbol: "IQF",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x15223c63a203731db1a2ebfe5277a55f77a453b9.png",
    },
    {
        ticker_symbol: "EBC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x31f3d9d1bece0c033ff78fa6da60a6048f3e13c5.png",
    },
    {
        ticker_symbol: "PIB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1864ce27e9f7517047933caae530674e8c70b8a7.png",
    },
    {
        ticker_symbol: "SMLY",

        logo_url: null,
    },
    {
        ticker_symbol: "PDX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5f33d158ca7275848f70a3f149b421190df85b32.png",
    },
    {
        ticker_symbol: "KRL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x464ebe77c293e473b48cfe96ddcf88fcf7bfdac0.png",
    },
    {
        ticker_symbol: "IFC",

        logo_url: null,
    },
    {
        ticker_symbol: "WCT",

        logo_url: null,
    },
    {
        ticker_symbol: "FLP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x3a1bda28adb5b0a812a7cf10a1950c920f79bcd3.png",
    },
    {
        ticker_symbol: "ATN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x461733c17b0755ca5649b6db08b3e213fcf22546.png",
    },
    {
        ticker_symbol: "OMNI",

        logo_url: null,
    },
    {
        ticker_symbol: "USDS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa4bdb11dc0a2bec88d24a3aa1e6bb17201112ebe.png",
    },
    {
        ticker_symbol: "MIDAS",

        logo_url: null,
    },
    {
        ticker_symbol: "SAFE",

        logo_url: null,
    },
    {
        ticker_symbol: "GAT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x687174f8c49ceb7729d925c3a961507ea4ac7b28.png",
    },
    {
        ticker_symbol: "CMCT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x47bc01597798dcd7506dcca36ac4302fc93a8cfb.png",
    },
    {
        ticker_symbol: "IPL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x64cdf819d3e75ac8ec217b3496d7ce167be42e80.png",
    },
    {
        ticker_symbol: "BC",

        logo_url: null,
    },
    {
        ticker_symbol: "ACAT",

        logo_url: null,
    },
    {
        ticker_symbol: "EKO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa6a840e50bcaa50da017b91a0d86b8b2d41156ee.png",
    },
    {
        ticker_symbol: "AAC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe75ad3aab14e4b0df8c5da4286608dabb21bd864.png",
    },
    {
        ticker_symbol: "0XBTC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb6ed7644c69416d67b522e20bc294a9a9b405b31.png",
    },
    {
        ticker_symbol: "BKX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x45245bc59219eeaaf6cd3f382e078a461ff9de7b.png",
    },
    {
        ticker_symbol: "AID",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x37e8789bb9996cac9156cd5f5fd32599e6b91289.png",
    },
    {
        ticker_symbol: "DYN",

        logo_url: null,
    },
    {
        ticker_symbol: "AXPR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xc39e626a04c5971d770e319760d7926502975e47.png",
    },
    {
        ticker_symbol: "CCX",

        logo_url: null,
    },
    {
        ticker_symbol: "BOOM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xdb7eab9ba6be88b869f738f6deeba96d49fe13fd.png",
    },
    {
        ticker_symbol: "NOS",

        logo_url: null,
    },
    {
        ticker_symbol: "ZIPT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xedd7c94fd7b4971b916d15067bc454b9e1bad980.png",
    },
    {
        ticker_symbol: "NTRN",

        logo_url: null,
    },
    {
        ticker_symbol: "MEME",

        logo_url: null,
    },
    {
        ticker_symbol: "PLTC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0c6e8a8358cbde54f8e4cd7f07d5ac38aec8c5a4.png",
    },
    {
        ticker_symbol: "RTE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x436f0f3a982074c4a05084485d421466a994fe53.png",
    },
    {
        ticker_symbol: "EOSC",

        logo_url: null,
    },
    {
        ticker_symbol: "MESG",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x420167d87d35c3a249b32ef6225872fbd9ab85d2.png",
    },
    {
        ticker_symbol: "HAC",

        logo_url: null,
    },
    {
        ticker_symbol: "SPN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x20f7a3ddf244dc9299975b4da1c39f8d5d75f05a.png",
    },
    {
        ticker_symbol: "STK",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xae73b38d1c9a8b274127ec30160a4927c4d71824.png",
    },
    {
        ticker_symbol: "TNC",

        logo_url: null,
    },
    {
        ticker_symbol: "ZPR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb5b8f5616fe42d5ceca3e87f3fddbdd8f496d760.png",
    },
    {
        ticker_symbol: "MAS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x23ccc43365d9dd3882eab88f43d515208f832430.png",
    },
    {
        ticker_symbol: "ZER",

        logo_url: null,
    },
    {
        ticker_symbol: "DEEX",

        logo_url: null,
    },
    {
        ticker_symbol: "AIT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x79650799e7899a802cb96c0bc33a6a8d4ce4936c.png",
    },
    {
        ticker_symbol: "EXP",

        logo_url: null,
    },
    {
        ticker_symbol: "UNIC",

        logo_url: null,
    },
    {
        ticker_symbol: "ZSC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x7a41e0517a5eca4fdbc7fbeba4d4c47b9ff6dc63.png",
    },
    {
        ticker_symbol: "1337",

        logo_url: null,
    },
    {
        ticker_symbol: "PORTAL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8db90e3e7d04c875a51997092f9178fcac9defdb.png",
    },
    {
        ticker_symbol: "QCH",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x687bfc3e73f6af55f0ccca8450114d107e781a0e.png",
    },
    {
        ticker_symbol: "BEAT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x2fb12bccf6f5dd338b76be784a93ade072425690.png",
    },
    {
        ticker_symbol: "TIPS",

        logo_url: null,
    },
    {
        ticker_symbol: "NOR",

        logo_url: null,
    },
    {
        ticker_symbol: "LTNX",

        logo_url: null,
    },
    {
        ticker_symbol: "ZPT",

        logo_url: null,
    },
    {
        ticker_symbol: "IPC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x622cd54deb2bb7a051515192417109bcf3fe098f.png",
    },
    {
        ticker_symbol: "TRY",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe431a4c5db8b73c773e06cf2587da1eb53c41373.png",
    },
    {
        ticker_symbol: "A",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xffc63b9146967a1ba33066fb057ee3722221acf0.png",
    },
    {
        ticker_symbol: "RATING",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe8663a64a96169ff4d95b4299e7ae9a76b905b31.png",
    },
    {
        ticker_symbol: "HKN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9e6b2b11542f2bc52f3029077ace37e8fd838d7f.png",
    },
    {
        ticker_symbol: "CSPN",

        logo_url: null,
    },
    {
        ticker_symbol: "MAGN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe6923e9b56db1eed1c9f430ea761da7565e260fe.png",
    },
    {
        ticker_symbol: "CLN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4162178b78d6985480a308b2190ee5517460406d.png",
    },
    {
        ticker_symbol: "ESP",

        logo_url: null,
    },
    {
        ticker_symbol: "ROM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xacaca5b8805636608e14c64b0bfffc2deb2c6cec.png",
    },
    {
        ticker_symbol: "XPC",

        logo_url: null,
    },
    {
        ticker_symbol: "TOK",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9a49f02e128a8e989b443a8f94843c0918bf45e7.png",
    },
    {
        ticker_symbol: "PINK",

        logo_url: null,
    },
    {
        ticker_symbol: "GIO",

        logo_url: null,
    },
    {
        ticker_symbol: "ARCO",

        logo_url: null,
    },
    {
        ticker_symbol: "SPHTX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x3833dda0aeb6947b98ce454d89366cba8cc55528.png",
    },
    {
        ticker_symbol: "VGT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xcc394f10545aeef24483d2347b32a34a44f20e6f.png",
    },
    {
        ticker_symbol: "EXRT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb20043f149817bff5322f1b928e89abfc65a9925.png",
    },
    {
        ticker_symbol: "MNC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9f0f1be08591ab7d990faf910b38ed5d60e4d5bf.png",
    },
    {
        ticker_symbol: "KARMA",

        logo_url: null,
    },
    {
        ticker_symbol: "TTN",

        logo_url: null,
    },
    {
        ticker_symbol: "FOOD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x2a093bcf0c98ef744bb6f69d74f2f85605324290.png",
    },
    {
        ticker_symbol: "BITTO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa101e27f06a97985b925e244111b61560ecd97db.png",
    },
    {
        ticker_symbol: "BBTC",

        logo_url: null,
    },
    {
        ticker_symbol: "BTCZ",

        logo_url: null,
    },
    {
        ticker_symbol: "BGG",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xea54c81fe0f72de8e86b6dc78a9271aa3925e3b5.png",
    },
    {
        ticker_symbol: "IXC",

        logo_url: null,
    },
    {
        ticker_symbol: "BZE",

        logo_url: null,
    },
    {
        ticker_symbol: "3DC",

        logo_url: null,
    },
    {
        ticker_symbol: "SIB",

        logo_url: null,
    },
    {
        ticker_symbol: "TIE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x999967e2ec8a74b7c8e9db19e039d920b31d39d0.png",
    },
    {
        ticker_symbol: "UFO",

        logo_url: null,
    },
    {
        ticker_symbol: "EMB",

        logo_url: null,
    },
    {
        ticker_symbol: "BKC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x34bdf48a8f753de4822a6cfb1fee275f9b4d662e.png",
    },
    {
        ticker_symbol: "NXC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x45e42d659d9f9466cd5df622506033145a9b89bc.png",
    },
    {
        ticker_symbol: "RPD",

        logo_url: null,
    },
    {
        ticker_symbol: "MGO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x40395044ac3c0c57051906da938b54bd6557f212.png",
    },
    {
        ticker_symbol: "MVP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8a77e40936bbc27e80e9a3f526368c967869c86d.png",
    },
    {
        ticker_symbol: "TZC",

        logo_url: null,
    },
    {
        ticker_symbol: "LOT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6556d2ec4d96da39cf75cbe50d58fae90079800a.png",
    },
    {
        ticker_symbol: "ZXC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x83e2be8d114f9661221384b3a50d24b96a5653f5.png",
    },
    {
        ticker_symbol: "CVN",

        logo_url: null,
    },
    {
        ticker_symbol: "PIRL",

        logo_url: null,
    },
    {
        ticker_symbol: "BOB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xdf347911910b6c9a4286ba8e2ee5ea4a39eb2134.png",
    },
    {
        ticker_symbol: "VRM",

        logo_url: null,
    },
    {
        ticker_symbol: "SENC",

        logo_url: null,
    },
    {
        ticker_symbol: "ADB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x2baac9330cf9ac479d819195794d79ad0c7616e3.png",
    },
    {
        ticker_symbol: "LQD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd29f0b5b3f50b07fe9a9511f7d86f4f4bac3f8c4.png",
    },
    {
        ticker_symbol: "BBC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe7d3e4413e29ae35b0893140f4500965c74365e5.png",
    },
    {
        ticker_symbol: "RFOX",

        logo_url: null,
    },
    {
        ticker_symbol: "VDX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x91e64f39c1fe14492e8fdf5a8b0f305bd218c8a1.png",
    },
    {
        ticker_symbol: "EXY",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5c743a35e903f6c584514ec617acee0611cf44f3.png",
    },
    {
        ticker_symbol: "ACM",

        logo_url: null,
    },
    {
        ticker_symbol: "CNUS",

        logo_url: null,
    },
    {
        ticker_symbol: "WICC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4f878c0852722b0976a955d68b376e4cd4ae99e5.png",
    },
    {
        ticker_symbol: "PTT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4689a4e169eb39cc9078c0940e21ff1aa8a39b9c.png",
    },
    {
        ticker_symbol: "NCC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9344b383b1d59b5ce3468b234dab43c7190ba735.png",
    },
    {
        ticker_symbol: "START",

        logo_url: null,
    },
    {
        ticker_symbol: "FACE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1ccaa0f2a7210d76e1fdec740d5f323e2e1b1672.png",
    },
    {
        ticker_symbol: "UBC",

        logo_url: null,
    },
    {
        ticker_symbol: "AUR",

        logo_url: null,
    },
    {
        ticker_symbol: "HTB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6be61833fc4381990e82d7d4a9f4c9b3f67ea941.png",
    },
    {
        ticker_symbol: "INXT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa8006c4ca56f24d6836727d106349320db7fef82.png",
    },
    {
        ticker_symbol: "PING",

        logo_url: null,
    },
    {
        ticker_symbol: "XEL",

        logo_url: null,
    },
    {
        ticker_symbol: "HUZU",

        logo_url: null,
    },
    {
        ticker_symbol: "OOT",

        logo_url: null,
    },
    {
        ticker_symbol: "MOG",

        logo_url: null,
    },
    {
        ticker_symbol: "GRFT",

        logo_url: null,
    },
    {
        ticker_symbol: "DXT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8db54ca569d3019a2ba126d03c37c44b5ef81ef6.png",
    },
    {
        ticker_symbol: "PHT",

        logo_url: null,
    },
    {
        ticker_symbol: "FXT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1829aa045e21e0d59580024a951db48096e01782.png",
    },
    {
        ticker_symbol: "HVN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xc0eb85285d83217cd7c891702bcbc0fc401e2d9d.png",
    },
    {
        ticker_symbol: "BAN",

        logo_url: null,
    },
    {
        ticker_symbol: "BOMB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1c95b093d6c236d3ef7c796fe33f9cc6b8606714.png",
    },
    {
        ticker_symbol: "SHND",

        logo_url: null,
    },
    {
        ticker_symbol: "KRB",

        logo_url: null,
    },
    {
        ticker_symbol: "SHARD",

        logo_url: null,
    },
    {
        ticker_symbol: "SFX",

        logo_url: null,
    },
    {
        ticker_symbol: "OPEN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x69c4bb240cf05d51eeab6985bab35527d04a8c64.png",
    },
    {
        ticker_symbol: "BTR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x499a6b77bc25c26bcf8265e2102b1b3dd1617024.png",
    },
    {
        ticker_symbol: "BIR",

        logo_url: null,
    },
    {
        ticker_symbol: "FCN",

        logo_url: null,
    },
    {
        ticker_symbol: "SDS",

        logo_url: null,
    },
    {
        ticker_symbol: "XBC",

        logo_url: null,
    },
    {
        ticker_symbol: "HUSH",

        logo_url: null,
    },
    {
        ticker_symbol: "PTOY",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06.png",
    },
    {
        ticker_symbol: "XWP",

        logo_url: null,
    },
    {
        ticker_symbol: "KORE",

        logo_url: null,
    },
    {
        ticker_symbol: "MTX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0af44e2784637218dd1d32a322d44e603a8f0c6a.png",
    },
    {
        ticker_symbol: "NANJ",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xffe02ee4c69edf1b340fcad64fbd6b37a7b9e265.png",
    },
    {
        ticker_symbol: "REAL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9214ec02cb71cba0ada6896b8da260736a67ab10.png",
    },
    {
        ticker_symbol: "GOT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x423b5f62b328d0d6d44870f4eee316befa0b2df5.png",
    },
    {
        ticker_symbol: "PCX",

        logo_url: null,
    },
    {
        ticker_symbol: "ETBS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1b9743f556d65e757c4c650b4555baf354cb8bd3.png",
    },
    {
        ticker_symbol: "OWN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x170b275ced089fffaebfe927f445a350ed9160dc.png",
    },
    {
        ticker_symbol: "KB3",

        logo_url: null,
    },
    {
        ticker_symbol: "CBIX",

        logo_url: null,
    },
    {
        ticker_symbol: "ETNX",

        logo_url: null,
    },
    {
        ticker_symbol: "TOA",

        logo_url: null,
    },
    {
        ticker_symbol: "COIN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xeb547ed1d8a3ff1461abaa7f0022fed4836e00a4.png",
    },
    {
        ticker_symbol: "KEK",

        logo_url: null,
    },
    {
        ticker_symbol: "DOS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x70861e862e1ac0c96f853c8231826e469ead37b1.png",
    },
    {
        ticker_symbol: "COT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5c872500c00565505f3624ab435c222e558e9ff8.png",
    },
    {
        ticker_symbol: "HNST",

        logo_url: null,
    },
    {
        ticker_symbol: "XBG",

        logo_url: null,
    },
    {
        ticker_symbol: "GAM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf67451dc8421f0e0afeb52faa8101034ed081ed9.png",
    },
    {
        ticker_symbol: "SCP",

        logo_url: null,
    },
    {
        ticker_symbol: "EMRALS",

        logo_url: null,
    },
    {
        ticker_symbol: "ESS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xfc05987bd2be489accf0f509e44b0145d68240f7.png",
    },
    {
        ticker_symbol: "CATT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6e605c269e0c92e70beeb85486f1fc550f9380bd.png",
    },
    {
        ticker_symbol: "KLN",

        logo_url: null,
    },
    {
        ticker_symbol: "RYO",

        logo_url: null,
    },
    {
        ticker_symbol: "IXT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xfca47962d45adfdfd1ab2d972315db4ce7ccf094.png",
    },
    {
        ticker_symbol: "GOLOS",

        logo_url: null,
    },
    {
        ticker_symbol: "LOBS",

        logo_url: null,
    },
    {
        ticker_symbol: "X8X",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x910dfc18d6ea3d6a7124a6f8b5458f281060fa4c.png",
    },
    {
        ticker_symbol: "FKX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x009e864923b49263c7f10d19b7f8ab7a9a5aad33.png",
    },
    {
        ticker_symbol: "GBX",

        logo_url: null,
    },
    {
        ticker_symbol: "LX",

        logo_url: null,
    },
    {
        ticker_symbol: "COVA",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb37a769b37224449d92aac57de379e1267cd3b00.png",
    },
    {
        ticker_symbol: "HLI",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6baf7fcea90b0968dc5ed7b8dcb76c986637ff55.png",
    },
    {
        ticker_symbol: "CPY",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf44745fbd41f6a1ba151df190db0564c5fcc4410.png",
    },
    {
        ticker_symbol: "BANCA",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x998b3b82bc9dba173990be7afb772788b5acb8bd.png",
    },
    {
        ticker_symbol: "BETHER",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x14c926f2290044b647e1bf2072e67b495eff1905.png",
    },
    {
        ticker_symbol: "ESBC",

        logo_url: null,
    },
    {
        ticker_symbol: "DEV",

        logo_url: null,
    },
    {
        ticker_symbol: "QBT",

        logo_url: null,
    },
    {
        ticker_symbol: "ERG",

        logo_url: null,
    },
    {
        ticker_symbol: "XSG",

        logo_url: null,
    },
    {
        ticker_symbol: "PTM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x7c32db0645a259fae61353c1f891151a2e7f8c1e.png",
    },
    {
        ticker_symbol: "ABLX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x865bfd8232778f00cae81315bf75ef1fe6e30cdd.png",
    },
    {
        ticker_symbol: "MBN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4eeea7b48b9c3ac8f70a9c932a8b1e8a5cb624c7.png",
    },
    {
        ticker_symbol: "HQX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1b957dc4aefeed3b4a2351a6a6d5cbfbba0cecfa.png",
    },
    {
        ticker_symbol: "KGC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa8262eb913fccea4c3f77fc95b8b4043b384cfbb.png",
    },
    {
        ticker_symbol: "TWINS",

        logo_url: null,
    },
    {
        ticker_symbol: "TCASH",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x7051620d11042c4335069aaa4f10cd3b4290c681.png",
    },
    {
        ticker_symbol: "SS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xbbff862d906e348e9946bfb2132ecb157da3d4b4.png",
    },
    {
        ticker_symbol: "BITBTC",

        logo_url: null,
    },
    {
        ticker_symbol: "PYLNT",

        logo_url: null,
    },
    {
        ticker_symbol: "REF",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x89303500a7abfb178b274fd89f2469c264951e1f.png",
    },
    {
        ticker_symbol: "BUZZ",

        logo_url: null,
    },
    {
        ticker_symbol: "XLR",

        logo_url: null,
    },
    {
        ticker_symbol: "BDG",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1961b3331969ed52770751fc718ef530838b6dee.png",
    },
    {
        ticker_symbol: "XBI",

        logo_url: null,
    },
    {
        ticker_symbol: "OZC",

        logo_url: null,
    },
    {
        ticker_symbol: "HEAT",

        logo_url: null,
    },
    {
        ticker_symbol: "TRTT",

        logo_url: null,
    },
    {
        ticker_symbol: "BCZ",

        logo_url: null,
    },
    {
        ticker_symbol: "SINS",

        logo_url: null,
    },
    {
        ticker_symbol: "JAN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xaf80e6612d9c2e883122e7f2292ee6c34176ad4f.png",
    },
    {
        ticker_symbol: "OMX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb5dbc6d3cf380079df3b27135664b6bcf45d1869.png",
    },
    {
        ticker_symbol: "ZLA",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xfd8971d5e8e1740ce2d0a84095fca4de729d0c16.png",
    },
    {
        ticker_symbol: "CET",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x081f67afa0ccf8c7b17540767bbe95df2ba8d97f.png",
    },
    {
        ticker_symbol: "LATX",

        logo_url: null,
    },
    {
        ticker_symbol: "RITO",

        logo_url: null,
    },
    {
        ticker_symbol: "BLOC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6f919d67967a97ea36195a2346d9244e60fe0ddb.png",
    },
    {
        ticker_symbol: "PC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa6714a2e5f0b1bdb97b895b0913b4fcd3a775e4d.png",
    },
    {
        ticker_symbol: "CAI",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4fe9f52ec23f6805f2fd0332a34da4f1c135b024.png",
    },
    {
        ticker_symbol: "BSP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5d551fa77ec2c7dd1387b626c4f33235c3885199.png",
    },
    {
        ticker_symbol: "CBX",

        logo_url: null,
    },
    {
        ticker_symbol: "TYPE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xeaf61fc150cd5c3bea75744e830d916e60ea5a9f.png",
    },
    {
        ticker_symbol: "MUSIC",

        logo_url: null,
    },
    {
        ticker_symbol: "ALV",

        logo_url: null,
    },
    {
        ticker_symbol: "NGOT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1ebd8d3ca115451b9b6bbaa7ee2f7b0f96e49fd8.png",
    },
    {
        ticker_symbol: "KUBO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4f76e85d067e219779a863ff18577846b3152f1f.png",
    },
    {
        ticker_symbol: "NET",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xcfb98637bcae43c13323eaa1731ced2b716962fd.png",
    },
    {
        ticker_symbol: "THRT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4f27053f32eda8af84956437bc00e5ffa7003287.png",
    },
    {
        ticker_symbol: "DUO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x56e0b2c7694e6e10391e870774daa45cf6583486.png",
    },
    {
        ticker_symbol: "SKILL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x417d6feeae8b2fcb73d14d64be7f192e49431978.png",
    },
    {
        ticker_symbol: "DXO",

        logo_url: null,
    },
    {
        ticker_symbol: "SNTR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x2859021ee7f2cb10162e67f33af2d22764b31aff.png",
    },
    {
        ticker_symbol: "FURT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xdde45247da97491efd04e96518ae71288f11e0e6.png",
    },
    {
        ticker_symbol: "FRC",

        logo_url: null,
    },
    {
        ticker_symbol: "SIFT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8a187d5285d316bcbc9adafc08b51d70a0d8e000.png",
    },
    {
        ticker_symbol: "DOPE",

        logo_url: null,
    },
    {
        ticker_symbol: "CREDIT",

        logo_url: null,
    },
    {
        ticker_symbol: "UGC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf485c5e679238f9304d986bb2fc28fe3379200e5.png",
    },
    {
        ticker_symbol: "SKYFT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5dd0815a4cf119ad91ba045bbbf879f3f7de3c68.png",
    },
    {
        ticker_symbol: "TGAME",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf8e06e4e4a80287fdca5b02dccecaa9d0954840f.png",
    },
    {
        ticker_symbol: "ELEC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd49ff13661451313ca1553fd6954bd1d9b6e02b9.png",
    },
    {
        ticker_symbol: "ETHO",

        logo_url: null,
    },
    {
        ticker_symbol: "MAO",

        logo_url: null,
    },
    {
        ticker_symbol: "PAL",

        logo_url: null,
    },
    {
        ticker_symbol: "S",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x96b0bf939d9460095c15251f71fda11e41dcbddb.png",
    },
    {
        ticker_symbol: "SNOV",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xbdc5bac39dbe132b1e030e898ae3830017d7d969.png",
    },
    {
        ticker_symbol: "HUNT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9aab071b4129b083b01cb5a0cb513ce7eca26fa5.png",
    },
    {
        ticker_symbol: "MONK",

        logo_url: null,
    },
    {
        ticker_symbol: "UP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6ba460ab75cd2c56343b3517ffeba60748654d26.png",
    },
    {
        ticker_symbol: "RVT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x3d1ba9be9f66b8ee101911bc36d3fb562eac2244.png",
    },
    {
        ticker_symbol: "OVC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x49d09cda1deb8a1680f1270c5ed15218fc4b18f0.png",
    },
    {
        ticker_symbol: "LCS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xaa19961b6b858d9f18a115f25aa1d98abc1fdba8.png",
    },
    {
        ticker_symbol: "COFI",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x3136ef851592acf49ca4c825131e364170fa32b3.png",
    },
    {
        ticker_symbol: "SSS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x7d3e7d41da367b4fdce7cbe06502b13294deb758.png",
    },
    {
        ticker_symbol: "TCC",

        logo_url: null,
    },
    {
        ticker_symbol: "AC3",

        logo_url: null,
    },
    {
        ticker_symbol: "BLUE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x539efe69bcdd21a83efd9122571a64cc25e0282b.png",
    },
    {
        ticker_symbol: "MER",

        logo_url: null,
    },
    {
        ticker_symbol: "EXCL",

        logo_url: null,
    },
    {
        ticker_symbol: "NPXSXEM",

        logo_url: null,
    },
    {
        ticker_symbol: "PLUS1",

        logo_url: null,
    },
    {
        ticker_symbol: "PLAY",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe477292f1b3268687a29376116b0ed27a9c76170.png",
    },
    {
        ticker_symbol: "FNKOS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0707681f344deb24184037fc0228856f2137b02e.png",
    },
    {
        ticker_symbol: "ONG",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd341d1680eeee3255b8c4c75bcce7eb57f144dae.png",
    },
    {
        ticker_symbol: "BBP",

        logo_url: null,
    },
    {
        ticker_symbol: "TSL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x03806ce5ef69bd9780edfb04c29da1f23db96294.png",
    },
    {
        ticker_symbol: "GRP",

        logo_url: null,
    },
    {
        ticker_symbol: "RED",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x76960dccd5a1fe799f7c29be9f19ceb4627aeb2f.png",
    },
    {
        ticker_symbol: "EGC",

        logo_url: null,
    },
    {
        ticker_symbol: "SINOC",

        logo_url: null,
    },
    {
        ticker_symbol: "PRIX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x3adfc4999f77d04c8341bac5f3a76f58dff5b37a.png",
    },
    {
        ticker_symbol: "CYL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x26cb3641aaa43911f1d4cb2ce544eb652aac7c47.png",
    },
    {
        ticker_symbol: "ZNZ",

        logo_url: null,
    },
    {
        ticker_symbol: "EQUAD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xc28e931814725bbeb9e670676fabbcb694fe7df2.png",
    },
    {
        ticker_symbol: "FLIXX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf04a8ac553fcedb5ba99a64799155826c136b0be.png",
    },
    {
        ticker_symbol: "SPHR",

        logo_url: null,
    },
    {
        ticker_symbol: "ZET",

        logo_url: null,
    },
    {
        ticker_symbol: "ORME",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xc96df921009b790dffca412375251ed1a2b75c60.png",
    },
    {
        ticker_symbol: "SVD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xbdeb4b83251fb146687fa19d1c660f99411eefe3.png",
    },
    {
        ticker_symbol: "ZEIT",

        logo_url: null,
    },
    {
        ticker_symbol: "SHIFT",

        logo_url: null,
    },
    {
        ticker_symbol: "ZP",

        logo_url: null,
    },
    {
        ticker_symbol: "XMG",

        logo_url: null,
    },
    {
        ticker_symbol: "EBTC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xeb7c20027172e5d143fb030d50f91cece2d1485d.png",
    },
    {
        ticker_symbol: "ERO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x74ceda77281b339142a36817fa5f9e29412bab85.png",
    },
    {
        ticker_symbol: "ZCC",

        logo_url: null,
    },
    {
        ticker_symbol: "CAR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4d9e23a3842fe7eb7682b9725cf6c507c424a41b.png",
    },
    {
        ticker_symbol: "NEOS",

        logo_url: null,
    },
    {
        ticker_symbol: "SST",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4257d36df231dc71f7b7a6e1be3ef9c99b9181fd.png",
    },
    {
        ticker_symbol: "MIB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x146d8d942048ad517479c9bab1788712af180fde.png",
    },
    {
        ticker_symbol: "BTI",

        logo_url: null,
    },
    {
        ticker_symbol: "USDX",

        logo_url: null,
    },
    {
        ticker_symbol: "TOPB",

        logo_url: null,
    },
    {
        ticker_symbol: "TCH",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9b39a0b97319a9bd5fed217c1db7b030453bac91.png",
    },
    {
        ticker_symbol: "MSP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x68aa3f232da9bdc2343465545794ef3eea5209bd.png",
    },
    {
        ticker_symbol: "HOTC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4d09c5e758ca68be27240f29fb681e5a5341ca98.png",
    },
    {
        ticker_symbol: "BTCS",

        logo_url: null,
    },
    {
        ticker_symbol: "NLC2",

        logo_url: null,
    },
    {
        ticker_symbol: "MSR",

        logo_url: null,
    },
    {
        ticker_symbol: "1X2",

        logo_url: null,
    },
    {
        ticker_symbol: "ATM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9b11efcaaa1890f6ee52c6bb7cf8153ac5d74139.png",
    },
    {
        ticker_symbol: "XNK",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xbc86727e770de68b1060c91f6bb6945c73e10388.png",
    },
    {
        ticker_symbol: "MNTP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x83cee9e086a77e492ee0bb93c2b0437ad6fdeccc.png",
    },
    {
        ticker_symbol: "WTL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9a0587eae7ef64b2b38a10442a44cfa43edd7d2a.png",
    },
    {
        ticker_symbol: "SPD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1dea979ae76f26071870f824088da78979eb91c8.png",
    },
    {
        ticker_symbol: "HBN",

        logo_url: null,
    },
    {
        ticker_symbol: "AMS",

        logo_url: null,
    },
    {
        ticker_symbol: "YUN",

        logo_url: null,
    },
    {
        ticker_symbol: "FOTA",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4270bb238f6dd8b1c3ca01f96ca65b2647c06d3c.png",
    },
    {
        ticker_symbol: "MM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xcd23ef2cba177a1b5f5d3818d055868e4b599d18.png",
    },
    {
        ticker_symbol: "JRT",

        logo_url: null,
    },
    {
        ticker_symbol: "PIX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8effd494eb698cc399af6231fccd39e08fd20b15.png",
    },
    {
        ticker_symbol: "EUNO",

        logo_url: null,
    },
    {
        ticker_symbol: "DOV",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xac3211a5025414af2866ff09c23fc18bc97e79b1.png",
    },
    {
        ticker_symbol: "FYP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8f0921f30555624143d427b340b1156914882c10.png",
    },
    {
        ticker_symbol: "SDC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4212fea9fec90236ecc51e41e2096b16ceb84555.png",
    },
    {
        ticker_symbol: "BTB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x06e0feb0d74106c7ada8497754074d222ec6bcdf.png",
    },
    {
        ticker_symbol: "RVR",

        logo_url: null,
    },
    {
        ticker_symbol: "AUX",

        logo_url: null,
    },
    {
        ticker_symbol: "IDXM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xcc13fc627effd6e35d2d2706ea3c4d7396c610ea.png",
    },
    {
        ticker_symbol: "CDN",

        logo_url: null,
    },
    {
        ticker_symbol: "BRO",

        logo_url: null,
    },
    {
        ticker_symbol: "FJC",

        logo_url: null,
    },
    {
        ticker_symbol: "TMT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x3209f98bebf0149b769ce26d71f7aea8e435efea.png",
    },
    {
        ticker_symbol: "KNOW",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb41f09a973a85c7f497c10b00a939de667b55a78.png",
    },
    {
        ticker_symbol: "CHL",

        logo_url: null,
    },
    {
        ticker_symbol: "MMO",

        logo_url: null,
    },
    {
        ticker_symbol: "FSBT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1ed7ae1f0e2fa4276dd7ddc786334a3df81d50c0.png",
    },
    {
        ticker_symbol: "DTH",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190.png",
    },
    {
        ticker_symbol: "RCT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x13f25cd52b21650caa8225c9942337d914c9b030.png",
    },
    {
        ticker_symbol: "FREC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x17e67d1cb4e349b9ca4bc3e17c7df2a397a7bb64.png",
    },
    {
        ticker_symbol: "THPC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x38a19ba829f192a30ec7e03cda1368c50dad9785.png",
    },
    {
        ticker_symbol: "MVC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb17df9a3b09583a9bdcf757d6367171476d4d8a3.png",
    },
    {
        ticker_symbol: "ZCR",

        logo_url: null,
    },
    {
        ticker_symbol: "NETKO",

        logo_url: null,
    },
    {
        ticker_symbol: "GUARD",

        logo_url: null,
    },
    {
        ticker_symbol: "LHT",

        logo_url: null,
    },
    {
        ticker_symbol: "SOAR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd65960facb8e4a2dfcb2c2212cb2e44a02e2a57e.png",
    },
    {
        ticker_symbol: "BTH",

        logo_url: null,
    },
    {
        ticker_symbol: "LIGHT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1295b55fa04fbac6d9e7c351ecb3486e88129027.png",
    },
    {
        ticker_symbol: "DATX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xabbbb6447b68ffd6141da77c18c7b5876ed6c5ab.png",
    },
    {
        ticker_symbol: "ONL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6863be0e7cf7ce860a574760e9020d519a8bdc47.png",
    },
    {
        ticker_symbol: "ASAFE2",

        logo_url: null,
    },
    {
        ticker_symbol: "CPA",

        logo_url: null,
    },
    {
        ticker_symbol: "FLS",

        logo_url: null,
    },
    {
        ticker_symbol: "NIO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xcc2ad789f459bc73e5fb33364964b658a62c1ee7.png",
    },
    {
        ticker_symbol: "FRD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0abefb7611cb3a01ea3fad85f33c3c934f8e2cf4.png",
    },
    {
        ticker_symbol: "PTC",

        logo_url: null,
    },
    {
        ticker_symbol: "OBITS",

        logo_url: null,
    },
    {
        ticker_symbol: "BBO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x84f7c44b6fed1080f647e354d552595be2cc602f.png",
    },
    {
        ticker_symbol: "J8T",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0d262e5dc4a06a0f1c90ce79c7a60c09dfc884e4.png",
    },
    {
        ticker_symbol: "HGT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xba2184520a1cc49a6159c57e61e1844e085615b6.png",
    },
    {
        ticker_symbol: "GEM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xc7bba5b765581efb2cdd2679db5bea9ee79b201f.png",
    },
    {
        ticker_symbol: "IMVR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x7878424e994d8a2b8e329d31096922b7ceabe660.png",
    },
    {
        ticker_symbol: "AXN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x304281f3d1023a2039ea930c65f8f721d7c746c8.png",
    },
    {
        ticker_symbol: "PRX",

        logo_url: null,
    },
    {
        ticker_symbol: "THC",

        logo_url: null,
    },
    {
        ticker_symbol: "SWT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb9e7f8568e08d5659f5d29c4997173d84cdf2607.png",
    },
    {
        ticker_symbol: "TDP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5b11aacb6bddb9ffab908fdce739bf4aed554327.png",
    },
    {
        ticker_symbol: "LABX",

        logo_url: null,
    },
    {
        ticker_symbol: "ECOM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x171d750d42d661b62c277a6b486adb82348c3eca.png",
    },
    {
        ticker_symbol: "XVP",

        logo_url: null,
    },
    {
        ticker_symbol: "PENG",

        logo_url: null,
    },
    {
        ticker_symbol: "BIRD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x026e62dded1a6ad07d93d39f96b9eabd59665e0d.png",
    },
    {
        ticker_symbol: "ADC",

        logo_url: null,
    },
    {
        ticker_symbol: "PWR",

        logo_url: null,
    },
    {
        ticker_symbol: "UPX",

        logo_url: null,
    },
    {
        ticker_symbol: "INX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x018d7d179350f1bb9853d04982820e37cce13a92.png",
    },
    {
        ticker_symbol: "BTWTY",

        logo_url: null,
    },
    {
        ticker_symbol: "COB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb2f7eb1f2c37645be61d73953035360e768d81e6.png",
    },
    {
        ticker_symbol: "1SG",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0f72714b35a366285df85886a2ee174601292a17.png",
    },
    {
        ticker_symbol: "BITX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xff2b3353c3015e9f1fbf95b9bda23f58aa7ce007.png",
    },
    {
        ticker_symbol: "BNTY",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd2d6158683aee4cc838067727209a0aaf4359de3.png",
    },
    {
        ticker_symbol: "FUNDZ",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xbf5496122cf1bb778e0cbe5eab936f2be5fc0940.png",
    },
    {
        ticker_symbol: "SUPER",

        logo_url: null,
    },
    {
        ticker_symbol: "SEND",

        logo_url: null,
    },
    {
        ticker_symbol: "MFG",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6710c63432a2de02954fc0f851db07146a6c0312.png",
    },
    {
        ticker_symbol: "STQ",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5c3a228510d246b78a3765c20221cbf3082b44a4.png",
    },
    {
        ticker_symbol: "INDI",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe8c09672cfb9cfce6e2edbb01057d9fa569f97c1.png",
    },
    {
        ticker_symbol: "IPSX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x001f0aa5da15585e5b2305dbab2bac425ea71007.png",
    },
    {
        ticker_symbol: "XDNA",

        logo_url: null,
    },
    {
        ticker_symbol: "MNX",

        logo_url: null,
    },
    {
        ticker_symbol: "XFE",

        logo_url: null,
    },
    {
        ticker_symbol: "READ",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x13d0bf45e5f319fa0b58900807049f23cae7c40d.png",
    },
    {
        ticker_symbol: "REX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf05a9382a4c3f29e2784502754293d88b835109c.png",
    },
    {
        ticker_symbol: "AEM",

        logo_url: null,
    },
    {
        ticker_symbol: "VLS",

        logo_url: null,
    },
    {
        ticker_symbol: "IMGC",

        logo_url: null,
    },
    {
        ticker_symbol: "ETK",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x3c4a3ffd813a107febd57b2f01bc344264d90fde.png",
    },
    {
        ticker_symbol: "PIPL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe64509f0bf07ce2d29a7ef19a8a9bc065477c1b4.png",
    },
    {
        ticker_symbol: "TROLL",

        logo_url: null,
    },
    {
        ticker_symbol: "CDZC",

        logo_url: null,
    },
    {
        ticker_symbol: "SCT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x63b992e6246d88f07fc35a056d2c365e6d441a3d.png",
    },
    {
        ticker_symbol: "AMP",

        logo_url: null,
    },
    {
        ticker_symbol: "VGR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x16987c021c14ca1045cd0afebb33c124a58bf16c.png",
    },
    {
        ticker_symbol: "PAR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1beef31946fbbb40b877a72e4ae04a8d1a5cee06.png",
    },
    {
        ticker_symbol: "TNS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb0280743b44bf7db4b6be482b2ba7b75e5da096c.png",
    },
    {
        ticker_symbol: "CFT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xc5d350b854a6cff0fc5a38a115a90c774dcae1b9.png",
    },
    {
        ticker_symbol: "WOMEN",

        logo_url: null,
    },
    {
        ticker_symbol: "INC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4bffc9b4d4dcf730820a2edcad48ff5d7e0ae807.png",
    },
    {
        ticker_symbol: "MAGE",

        logo_url: null,
    },
    {
        ticker_symbol: "CNB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xc538143202f3b11382d8606aae90a96b042a19db.png",
    },
    {
        ticker_symbol: "TIX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xea1f346faf023f974eb5adaf088bbcdf02d761f4.png",
    },
    {
        ticker_symbol: "FYD",

        logo_url: null,
    },
    {
        ticker_symbol: "BEZ",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x3839d8ba312751aa0248fed6a8bacb84308e20ed.png",
    },
    {
        ticker_symbol: "DAV",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd82df0abd3f51425eb15ef7580fda55727875f14.png",
    },
    {
        ticker_symbol: "DACC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf8c595d070d104377f58715ce2e6c93e49a87f3c.png",
    },
    {
        ticker_symbol: "MZC",

        logo_url: null,
    },
    {
        ticker_symbol: "PAK",

        logo_url: null,
    },
    {
        ticker_symbol: "FGC",

        logo_url: null,
    },
    {
        ticker_symbol: "NAVI",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x588047365df5ba589f923604aac23d673555c623.png",
    },
    {
        ticker_symbol: "SSC",

        logo_url: null,
    },
    {
        ticker_symbol: "BCO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x865d176351f287fe1b0010805b110d08699c200a.png",
    },
    {
        ticker_symbol: "BTCV",

        logo_url: null,
    },
    {
        ticker_symbol: "MFC",

        logo_url: null,
    },
    {
        ticker_symbol: "1UP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x07597255910a51509ca469568b048f2597e72504.png",
    },
    {
        ticker_symbol: "MCM",

        logo_url: null,
    },
    {
        ticker_symbol: "EQT",

        logo_url: null,
    },
    {
        ticker_symbol: "TEAM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1c79ab32c66acaa1e9e81952b8aaa581b43e54e7.png",
    },
    {
        ticker_symbol: "GUN",

        logo_url: null,
    },
    {
        ticker_symbol: "BRDG",

        logo_url: null,
    },
    {
        ticker_symbol: "DOW",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x76974c7b79dc8a6a109fd71fd7ceb9e40eff5382.png",
    },
    {
        ticker_symbol: "MAX",

        logo_url: null,
    },
    {
        ticker_symbol: "SHDW",

        logo_url: null,
    },
    {
        ticker_symbol: "EMD",

        logo_url: null,
    },
    {
        ticker_symbol: "REOSC",

        logo_url: null,
    },
    {
        ticker_symbol: "BOXX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x780116d91e5592e58a3b3c76a351571b39abcec6.png",
    },
    {
        ticker_symbol: "SOVE",

        logo_url: null,
    },
    {
        ticker_symbol: "HOLD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd6e1401a079922469e9b965cb090ea6ff64c6839.png",
    },
    {
        ticker_symbol: "ESN",

        logo_url: null,
    },
    {
        ticker_symbol: "ANON",

        logo_url: null,
    },
    {
        ticker_symbol: "NBAI",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x17f8afb63dfcdcc90ebe6e84f060cc306a98257d.png",
    },
    {
        ticker_symbol: "VULC",

        logo_url: null,
    },
    {
        ticker_symbol: "SCOI",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x3f5b26b0fa3e9d8547b7cf6725871f96ee91313a.png",
    },
    {
        ticker_symbol: "SNRG",

        logo_url: null,
    },
    {
        ticker_symbol: "BOLI",

        logo_url: null,
    },
    {
        ticker_symbol: "MINTME",

        logo_url: null,
    },
    {
        ticker_symbol: "WIB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x3f17dd476faf0a4855572f0b6ed5115d9bba22ad.png",
    },
    {
        ticker_symbol: "DEAL",

        logo_url: null,
    },
    {
        ticker_symbol: "CIV",

        logo_url: null,
    },
    {
        ticker_symbol: "ELY",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa95592dcffa3c080b4b40e459c5f5692f67db7f8.png",
    },
    {
        ticker_symbol: "ADI",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8810c63470d38639954c6b41aac545848c46484a.png",
    },
    {
        ticker_symbol: "BITS",

        logo_url: null,
    },
    {
        ticker_symbol: "GST",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x67a9099f0008c35c61c00042cd9fb03684451097.png",
    },
    {
        ticker_symbol: "STEEP",

        logo_url: null,
    },
    {
        ticker_symbol: "SPX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x05aaaa829afa407d83315cded1d45eb16025910c.png",
    },
    {
        ticker_symbol: "LANA",

        logo_url: null,
    },
    {
        ticker_symbol: "GUP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf7b098298f7c69fc14610bf71d5e02c60792894c.png",
    },
    {
        ticker_symbol: "MON",

        logo_url: null,
    },
    {
        ticker_symbol: "BGC",

        logo_url: null,
    },
    {
        ticker_symbol: "EBET",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x7d5edcd23daa3fb94317d32ae253ee1af08ba14d.png",
    },
    {
        ticker_symbol: "SIGN",

        logo_url: null,
    },
    {
        ticker_symbol: "IQ",

        logo_url: null,
    },
    {
        ticker_symbol: "SUR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe120c1ecbfdfea7f0a8f0ee30063491e8c26fedf.png",
    },
    {
        ticker_symbol: "METM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xfef3884b603c33ef8ed4183346e093a173c94da6.png",
    },
    {
        ticker_symbol: "CRYPT",

        logo_url: null,
    },
    {
        ticker_symbol: "CEN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0bc61dded5f6710c637cf8288eb6058766ce1921.png",
    },
    {
        ticker_symbol: "FMF",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb4d0fdfc8497aef97d3c2892ae682ee06064a2bc.png",
    },
    {
        ticker_symbol: "BSD",

        logo_url: null,
    },
    {
        ticker_symbol: "EVED",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5aaefe84e0fb3dd1f0fcff6fa7468124986b91bd.png",
    },
    {
        ticker_symbol: "X42",

        logo_url: null,
    },
    {
        ticker_symbol: "EVE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x923108a439c4e8c2315c4f6521e5ce95b44e9b4c.png",
    },
    {
        ticker_symbol: "ABX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9a794dc1939f1d78fa48613b89b8f9d0a20da00e.png",
    },
    {
        ticker_symbol: "EVN",

        logo_url: null,
    },
    {
        ticker_symbol: "DTB",

        logo_url: null,
    },
    {
        ticker_symbol: "SGN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb2135ab9695a7678dd590b1a996cb0f37bcb0718.png",
    },
    {
        ticker_symbol: "PHO",

        logo_url: null,
    },
    {
        ticker_symbol: "FDR",

        logo_url: null,
    },
    {
        ticker_symbol: "BLUR",

        logo_url: null,
    },
    {
        ticker_symbol: "EQLI",

        logo_url: null,
    },
    {
        ticker_symbol: "DGC",

        logo_url: null,
    },
    {
        ticker_symbol: "PUT",

        logo_url: null,
    },
    {
        ticker_symbol: "DEB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x151202c9c18e495656f372281f493eb7698961d5.png",
    },
    {
        ticker_symbol: "FBN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x568f9f32969e29b5ce1a4545be5398e8cc7c4401.png",
    },
    {
        ticker_symbol: "LKN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9f549ebfd4974cd4ed4a1550d40394b44a7382aa.png",
    },
    {
        ticker_symbol: "EZW",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x78a2a1029e3168b49d3a276c787050ff5106dcf2.png",
    },
    {
        ticker_symbol: "ADH",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe69a353b3152dd7b706ff7dd40fe1d18b7802d31.png",
    },
    {
        ticker_symbol: "GBG",

        logo_url: null,
    },
    {
        ticker_symbol: "NCP",

        logo_url: null,
    },
    {
        ticker_symbol: "ODIN",

        logo_url: null,
    },
    {
        ticker_symbol: "CP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xfd45e61e085b3e7a1990a47828d757755b206eee.png",
    },
    {
        ticker_symbol: "NRVE",

        logo_url: null,
    },
    {
        ticker_symbol: "BANK",

        logo_url: null,
    },
    {
        ticker_symbol: "BOUTS",

        logo_url: null,
    },
    {
        ticker_symbol: "KAI",

        logo_url: null,
    },
    {
        ticker_symbol: "OTB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa86a0da9d05d0771955df05b44ca120661af16de.png",
    },
    {
        ticker_symbol: "SHMN",

        logo_url: null,
    },
    {
        ticker_symbol: "HQT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x3e1d5a855ad9d948373ae68e4fe1f094612b1322.png",
    },
    {
        ticker_symbol: "NUSD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0c6144c16af288948c8fdb37fd8fec94bff3d1d9.png",
    },
    {
        ticker_symbol: "BLTG",

        logo_url: null,
    },
    {
        ticker_symbol: "GEX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x66142b81db17d7c0bd91f502d00382e326a24c2a.png",
    },
    {
        ticker_symbol: "BON",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xcc34366e3842ca1bd36c1f324d15257960fcc801.png",
    },
    {
        ticker_symbol: "OPAL",

        logo_url: null,
    },
    {
        ticker_symbol: "FUNC",

        logo_url: null,
    },
    {
        ticker_symbol: "EGEM",

        logo_url: null,
    },
    {
        ticker_symbol: "ARMS",

        logo_url: null,
    },
    {
        ticker_symbol: "CRED",

        logo_url: null,
    },
    {
        ticker_symbol: "MEDIBIT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x737fa0372c8d001904ae6acaf0552d4015f9c947.png",
    },
    {
        ticker_symbol: "DWS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf4b54874cd8a6c863e3a904c18fda964661ec363.png",
    },
    {
        ticker_symbol: "MYB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc.png",
    },
    {
        ticker_symbol: "LCP",

        logo_url: null,
    },
    {
        ticker_symbol: "ACE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x06147110022b768ba8f99a8f385df11a151a9cc8.png",
    },
    {
        ticker_symbol: "GTM",

        logo_url: null,
    },
    {
        ticker_symbol: "EPIC",

        logo_url: null,
    },
    {
        ticker_symbol: "MSCN",

        logo_url: null,
    },
    {
        ticker_symbol: "BTCT",

        logo_url: null,
    },
    {
        ticker_symbol: "AUC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xc12d099be31567add4e4e4d0d45691c3f58f5663.png",
    },
    {
        ticker_symbol: "JSE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x2d184014b5658c453443aa87c8e9c4d57285620b.png",
    },
    {
        ticker_symbol: "MANO",

        logo_url: null,
    },
    {
        ticker_symbol: "DAKU",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa353d00fa6d940cb625045d74fef8406854dd0da.png",
    },
    {
        ticker_symbol: "KOLIN",

        logo_url: null,
    },
    {
        ticker_symbol: "WAND",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x27f610bf36eca0939093343ac28b1534a721dbb4.png",
    },
    {
        ticker_symbol: "MVG",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x71396a6410249725c5609646c4e449c6c4d41e27.png",
    },
    {
        ticker_symbol: "WISH",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1b22c32cd936cb97c28c5690a0695a82abf688e6.png",
    },
    {
        ticker_symbol: "TKP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd31695a1d35e489252ce57b129fd4b1b05e6acac.png",
    },
    {
        ticker_symbol: "GCN",

        logo_url: null,
    },
    {
        ticker_symbol: "GIN",

        logo_url: null,
    },
    {
        ticker_symbol: "GIC",

        logo_url: null,
    },
    {
        ticker_symbol: "XBP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x28dee01d53fed0edf5f6e310bf8ef9311513ae40.png",
    },
    {
        ticker_symbol: "BECN",

        logo_url: null,
    },
    {
        ticker_symbol: "GWAY",

        logo_url: null,
    },
    {
        ticker_symbol: "SHEL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x59a17c58daaee299b39a060b9de67bf7c829e4d3.png",
    },
    {
        ticker_symbol: "KLKS",

        logo_url: null,
    },
    {
        ticker_symbol: "XNOS",

        logo_url: null,
    },
    {
        ticker_symbol: "DIM",

        logo_url: null,
    },
    {
        ticker_symbol: "XCLR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1e26b3d07e57f453cae30f7ddd2f945f5bf3ef33.png",
    },
    {
        ticker_symbol: "PIGGY",

        logo_url: null,
    },
    {
        ticker_symbol: "NOBL",

        logo_url: null,
    },
    {
        ticker_symbol: "CIC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xad640689e6950b7453729a4686edb3fdfd754616.png",
    },
    {
        ticker_symbol: "ARCT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1245ef80f4d9e02ed9425375e8f649b9221b31d8.png",
    },
    {
        ticker_symbol: "SCR",

        logo_url: null,
    },
    {
        ticker_symbol: "USDQ",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4954db6391f4feb5468b6b943d4935353596aec9.png",
    },
    {
        ticker_symbol: "ARQ",

        logo_url: null,
    },
    {
        ticker_symbol: "STAR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf70a642bd387f94380ffb90451c2c81d4eb82cbc.png",
    },
    {
        ticker_symbol: "IFT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x7654915a1b82d6d2d0afc37c52af556ea8983c7e.png",
    },
    {
        ticker_symbol: "AHT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4cef5a02c36253cfb06825ace2a356e78000145f.png",
    },
    {
        ticker_symbol: "PRIV",

        logo_url: null,
    },
    {
        ticker_symbol: "TVND",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x3dc0501c32bee0cc1e629d590302a4b909797474.png",
    },
    {
        ticker_symbol: "PATS",

        logo_url: null,
    },
    {
        ticker_symbol: "XSTC",

        logo_url: null,
    },
    {
        ticker_symbol: "XCO",

        logo_url: null,
    },
    {
        ticker_symbol: "KYD",

        logo_url: null,
    },
    {
        ticker_symbol: "HER",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x491c9a23db85623eed455a8efdd6aba9b911c5df.png",
    },
    {
        ticker_symbol: "EVC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb62d18dea74045e822352ce4b3ee77319dc5ff2f.png",
    },
    {
        ticker_symbol: "EXO",

        logo_url: null,
    },
    {
        ticker_symbol: "NBR",

        logo_url: null,
    },
    {
        ticker_symbol: "ORI",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd2fa8f92ea72abb35dbd6deca57173d22db2ba49.png",
    },
    {
        ticker_symbol: "GXX",

        logo_url: null,
    },
    {
        ticker_symbol: "CRB",

        logo_url: null,
    },
    {
        ticker_symbol: "OPT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4355fc160f74328f9b383df2ec589bb3dfd82ba0.png",
    },
    {
        ticker_symbol: "CHESS",

        logo_url: null,
    },
    {
        ticker_symbol: "LTHN",

        logo_url: null,
    },
    {
        ticker_symbol: "GP",

        logo_url: null,
    },
    {
        ticker_symbol: "HAND",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x48c1b2f3efa85fbafb2ab951bf4ba860a08cdbb7.png",
    },
    {
        ticker_symbol: "TX",

        logo_url: null,
    },
    {
        ticker_symbol: "ARO",

        logo_url: null,
    },
    {
        ticker_symbol: "WIKI",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x66bad545596fb17a0b4ebdc003a85def10e8f6ae.png",
    },
    {
        ticker_symbol: "PAWS",

        logo_url: null,
    },
    {
        ticker_symbol: "CRAD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x608f006b6813f97097372d0d31fb0f11d1ca3e4e.png",
    },
    {
        ticker_symbol: "HELP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xbbc2045d335cb224228f1850b29173d9d7d7b989.png",
    },
    {
        ticker_symbol: "XOXO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x222139425bcb172721dd4c22c29dd841d4358f69.png",
    },
    {
        ticker_symbol: "FT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x78a73b6cbc5d183ce56e786f6e905cadec63547b.png",
    },
    {
        ticker_symbol: "AMM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8b1f49491477e0fb46a29fef53f1ea320d13c349.png",
    },
    {
        ticker_symbol: "BERRY",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6aeb95f06cda84ca345c2de0f3b7f96923a44f4c.png",
    },
    {
        ticker_symbol: "WOW",

        logo_url: null,
    },
    {
        ticker_symbol: "VDL",

        logo_url: null,
    },
    {
        ticker_symbol: "CPL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4b3c89e986b12f83eed896f02410429a7289526e.png",
    },
    {
        ticker_symbol: "IND",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf8e386eda857484f5a12e4b5daa9984e06e73705.png",
    },
    {
        ticker_symbol: "ESK",

        logo_url: null,
    },
    {
        ticker_symbol: "TBX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x3a92bd396aef82af98ebc0aa9030d25a23b11c6b.png",
    },
    {
        ticker_symbol: "EZY",

        logo_url: null,
    },
    {
        ticker_symbol: "SWIFT",

        logo_url: null,
    },
    {
        ticker_symbol: "ARM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa9ff725189fe00da9c5f27a580dc67fea61e3fb2.png",
    },
    {
        ticker_symbol: "XEQ",

        logo_url: null,
    },
    {
        ticker_symbol: "PNY",

        logo_url: null,
    },
    {
        ticker_symbol: "COW",

        logo_url: null,
    },
    {
        ticker_symbol: "EDRC",

        logo_url: null,
    },
    {
        ticker_symbol: "CROAT",

        logo_url: null,
    },
    {
        ticker_symbol: "APR",

        logo_url: null,
    },
    {
        ticker_symbol: "SETH",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x78b039921e84e726eb72e7b1212bb35504c645ca.png",
    },
    {
        ticker_symbol: "MEC",

        logo_url: null,
    },
    {
        ticker_symbol: "EMPR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe7d7b37e72510309db27c460378f957b1b04bd5d.png",
    },
    {
        ticker_symbol: "CATO",

        logo_url: null,
    },
    {
        ticker_symbol: "TALK",

        logo_url: null,
    },
    {
        ticker_symbol: "XP",

        logo_url: null,
    },
    {
        ticker_symbol: "MAR",

        logo_url: null,
    },
    {
        ticker_symbol: "SWING",

        logo_url: null,
    },
    {
        ticker_symbol: "REL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x61bfc979ea8160ede9b862798b7833a97bafa02a.png",
    },
    {
        ticker_symbol: "XPAT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xbb1fa4fdeb3459733bf67ebc6f893003fa976a82.png",
    },
    {
        ticker_symbol: "WGO",

        logo_url: null,
    },
    {
        ticker_symbol: "KTS",

        logo_url: null,
    },
    {
        ticker_symbol: "BOT",

        logo_url: null,
    },
    {
        ticker_symbol: "ALT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x419b8ed155180a8c9c64145e76dad49c0a4efb97.png",
    },
    {
        ticker_symbol: "POP",

        logo_url: null,
    },
    {
        ticker_symbol: "HORSE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5b0751713b2527d7f002c0c4e2a37e1219610a6b.png",
    },
    {
        ticker_symbol: "MEK",

        logo_url: null,
    },
    {
        ticker_symbol: "OTR",

        logo_url: null,
    },
    {
        ticker_symbol: "ARC",

        logo_url: null,
    },
    {
        ticker_symbol: "ONX",

        logo_url: null,
    },
    {
        ticker_symbol: "DOGEC",

        logo_url: null,
    },
    {
        ticker_symbol: "SAT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xc56b13ebbcffa67cfb7979b900b736b3fb480d78.png",
    },
    {
        ticker_symbol: "WEB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x840fe75abfadc0f2d54037829571b2782e919ce4.png",
    },
    {
        ticker_symbol: "NTR",

        logo_url: null,
    },
    {
        ticker_symbol: "PMNT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x81b4d08645da11374a03749ab170836e4e539767.png",
    },
    {
        ticker_symbol: "PIRATE",

        logo_url: null,
    },
    {
        ticker_symbol: "FND",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4df47b4969b2911c966506e3592c41389493953b.png",
    },
    {
        ticker_symbol: "SYNX",

        logo_url: null,
    },
    {
        ticker_symbol: "MOIN",

        logo_url: null,
    },
    {
        ticker_symbol: "IG",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8a88f04e0c905054d2f33b26bb3a46d7091a039a.png",
    },
    {
        ticker_symbol: "DEM",

        logo_url: null,
    },
    {
        ticker_symbol: "ETHPLO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe0c6ce3e73029f201e5c0bedb97f67572a93711c.png",
    },
    {
        ticker_symbol: "GGC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1be7cfd61aa8daaa9ff2f3b8820888f09462d037.png",
    },
    {
        ticker_symbol: "KREDS",

        logo_url: null,
    },
    {
        ticker_symbol: "BTCONE",

        logo_url: null,
    },
    {
        ticker_symbol: "300",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xaec98a708810414878c3bcdf46aad31ded4a4557.png",
    },
    {
        ticker_symbol: "WCH",

        logo_url: null,
    },
    {
        ticker_symbol: "PLURA",

        logo_url: null,
    },
    {
        ticker_symbol: "DEEP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6cbedec4f1ac9d874987d2769596544e0d9161ab.png",
    },
    {
        ticker_symbol: "CASH2",

        logo_url: null,
    },
    {
        ticker_symbol: "WTT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x84119cb33e8f590d75c2d6ea4e6b0741a7494eda.png",
    },
    {
        ticker_symbol: "WILD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd3c00772b24d997a812249ca637a921e81357701.png",
    },
    {
        ticker_symbol: "RMESH",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8d5682941ce456900b12d47ac06a88b47c764ce1.png",
    },
    {
        ticker_symbol: "DAN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9b70740e708a083c6ff38df52297020f5dfaa5ee.png",
    },
    {
        ticker_symbol: "ADZ",

        logo_url: null,
    },
    {
        ticker_symbol: "VOISE",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x83eea00d838f92dec4d1475697b9f4d3537b56e3.png",
    },
    {
        ticker_symbol: "REDFISH",

        logo_url: null,
    },
    {
        ticker_symbol: "ABET",

        logo_url: null,
    },
    {
        ticker_symbol: "XNN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xab95e915c123fded5bdfb6325e35ef5515f1ea69.png",
    },
    {
        ticker_symbol: "RIC",

        logo_url: null,
    },
    {
        ticker_symbol: "BETR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x763186eb8d4856d536ed4478302971214febc6a9.png",
    },
    {
        ticker_symbol: "ESTX",

        logo_url: null,
    },
    {
        ticker_symbol: "404",

        logo_url: null,
    },
    {
        ticker_symbol: "TRVC",

        logo_url: null,
    },
    {
        ticker_symbol: "BTDX",

        logo_url: null,
    },
    {
        ticker_symbol: "INSN",

        logo_url: null,
    },
    {
        ticker_symbol: "QVT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1183f92a5624d68e85ffb9170f16bf0443b4c242.png",
    },
    {
        ticker_symbol: "SPF",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x85089389c14bd9c77fc2b8f0c3d1dc3363bf06ef.png",
    },
    {
        ticker_symbol: "GLT",

        logo_url: null,
    },
    {
        ticker_symbol: "SHUF",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x3a9fff453d50d4ac52a6890647b823379ba36b9e.png",
    },
    {
        ticker_symbol: "GMT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb3bd49e28f8f832b8d1e246106991e546c323502.png",
    },
    {
        ticker_symbol: "WLK",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf6b55acbbc49f4524aa48d19281a9a77c54de10f.png",
    },
    {
        ticker_symbol: "CRP",

        logo_url: null,
    },
    {
        ticker_symbol: "BTA",

        logo_url: null,
    },
    {
        ticker_symbol: "TES",

        logo_url: null,
    },
    {
        ticker_symbol: "ATB",

        logo_url: null,
    },
    {
        ticker_symbol: "BEN",

        logo_url: null,
    },
    {
        ticker_symbol: "MNE",

        logo_url: null,
    },
    {
        ticker_symbol: "ETGP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa96f31f1c187c28980176c3a27ba7069f48abde4.png",
    },
    {
        ticker_symbol: "JET",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8727c112c712c4a03371ac87a74dd6ab104af768.png",
    },
    {
        ticker_symbol: "GRMD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xb444208cb0516c150178fcf9a52604bc04a1acea.png",
    },
    {
        ticker_symbol: "UCN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xaaf37055188feee4869de63464937e683d61b2a1.png",
    },
    {
        ticker_symbol: "VRS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x92e78dae1315067a8819efd6dca432de9dcde2e9.png",
    },
    {
        ticker_symbol: "TQN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6613876533bc69b9dd628611a4d5dd2ccd8c7638.png",
    },
    {
        ticker_symbol: "NKA",

        logo_url: null,
    },
    {
        ticker_symbol: "BAD",

        logo_url: null,
    },
    {
        ticker_symbol: "PKG",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x02f2d4a04e6e01ace88bd2cd632875543b2ef577.png",
    },
    {
        ticker_symbol: "SGP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x33c623a2baafeb8d15dfaf3ce44095efec83d72c.png",
    },
    {
        ticker_symbol: "BCF",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x225927f8fa71d16ee07968b8746364d1d9f839bd.png",
    },
    {
        ticker_symbol: "DOR",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x906b3f8b7845840188eab53c3f5ad348a787752f.png",
    },
    {
        ticker_symbol: "QUIN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x86e44543164d9b97b14ef7f6f3ab7ba670cab346.png",
    },
    {
        ticker_symbol: "REEX",

        logo_url: null,
    },
    {
        ticker_symbol: "IRD",

        logo_url: null,
    },
    {
        ticker_symbol: "AVINOC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf1ca9cb74685755965c7458528a36934df52a3ef.png",
    },
    {
        ticker_symbol: "SPRKL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4b7ad3a56810032782afce12d7d27122bdb96eff.png",
    },
    {
        ticker_symbol: "XD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x24dcc881e7dd730546834452f21872d5cb4b5293.png",
    },
    {
        ticker_symbol: "JUMP",

        logo_url: null,
    },
    {
        ticker_symbol: "BURN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x91ca1146073b0cc9f57a1dde38a0ccb1ab2a3317.png",
    },
    {
        ticker_symbol: "THM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xf1dd5964eabcc6e86230fa6f222677cfdaaf9f0e.png",
    },
    {
        ticker_symbol: "VIVID",

        logo_url: null,
    },
    {
        ticker_symbol: "JURM",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x34dd5edfed51c632d1d4d2502bc901efb5fdfcd4.png",
    },
    {
        ticker_symbol: "TRYB",

        logo_url: null,
    },
    {
        ticker_symbol: "AER",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xac4d22e40bf0b8ef4750a99ed4e935b99a42685e.png",
    },
    {
        ticker_symbol: "KNDC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8e5610ab5e39d26828167640ea29823fe1dd5843.png",
    },
    {
        ticker_symbol: "XMCT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x44449fa4d607f807d1ed4a69ad942971728391c8.png",
    },
    {
        ticker_symbol: "KOBO",

        logo_url: null,
    },
    {
        ticker_symbol: "ICOS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x014b50466590340d41307cc54dcee990c8d58aa8.png",
    },
    {
        ticker_symbol: "CAT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x56ba2ee7890461f463f7be02aac3099f6d5811a8.png",
    },
    {
        ticker_symbol: "SKIN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x2bdc0d42996017fce214b21607a515da41a9e0c5.png",
    },
    {
        ticker_symbol: "CHG",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xc4a86561cb0b7ea1214904f26e6d50fd357c7986.png",
    },
    {
        ticker_symbol: "DGS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6aedbf8dff31437220df351950ba2a3362168d1b.png",
    },
    {
        ticker_symbol: "ENGT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5dbac24e98e2a4f43adc0dc82af403fca063ce2c.png",
    },
    {
        ticker_symbol: "TIC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x72430a612adc007c50e3b6946dbb1bb0fd3101d1.png",
    },
    {
        ticker_symbol: "GALI",

        logo_url: null,
    },
    {
        ticker_symbol: "WBT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe2ee1ac57b2e5564522b2de064a47b3f98b0e9c9.png",
    },
    {
        ticker_symbol: "MNP",

        logo_url: null,
    },
    {
        ticker_symbol: "COF",

        logo_url: null,
    },
    {
        ticker_symbol: "EVI",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x920db6c38cf5a2a12554e812d4b3ac2daa8eba4d.png",
    },
    {
        ticker_symbol: "CRU",

        logo_url: null,
    },
    {
        ticker_symbol: "ONIX",

        logo_url: null,
    },
    {
        ticker_symbol: "IMPL",

        logo_url: null,
    },
    {
        ticker_symbol: "HB",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x877c7deb5eb1fc5faad30c71e3a6e39dc8b1519f.png",
    },
    {
        ticker_symbol: "MASH",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xa0d440c6da37892dc06ee7930b2eede0634fd681.png",
    },
    {
        ticker_symbol: "ELET",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0568025c55c21bda4bc488f3107ebfc8b3d3ef2d.png",
    },
    {
        ticker_symbol: "SONIQ",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x1c62aca2b7605db3606eacda7bc67a1857ddb8ff.png",
    },
    {
        ticker_symbol: "LUD",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe64b47931f28f89cc7a0c6965ecf89eadb4975f5.png",
    },
    {
        ticker_symbol: "WRC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x72adadb447784dd7ab1f472467750fc485e4cb2d.png",
    },
    {
        ticker_symbol: "HYPX",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xd35833f9255fb28cc6b91acb8a66ba6429d6ef5a.png",
    },
    {
        ticker_symbol: "XUEZ",

        logo_url: null,
    },
    {
        ticker_symbol: "BTXC",

        logo_url: null,
    },
    {
        ticker_symbol: "XSD",

        logo_url: null,
    },
    {
        ticker_symbol: "PGL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x089a6d83282fb8988a656189f1e7a73fa6c1cac2.png",
    },
    {
        ticker_symbol: "CV2",

        logo_url: null,
    },
    {
        ticker_symbol: "XTA",

        logo_url: null,
    },
    {
        ticker_symbol: "DBET",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x9b68bfae21df5a510931a262cecf63f41338f264.png",
    },
    {
        ticker_symbol: "BZX",

        logo_url: null,
    },
    {
        ticker_symbol: "ACED",

        logo_url: null,
    },
    {
        ticker_symbol: "CNO",

        logo_url: null,
    },
    {
        ticker_symbol: "QUAN",

        logo_url: null,
    },
    {
        ticker_symbol: "BSTN",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x2f8472dd7ecf7ca760c8f6b45db20ca7cf52f8d7.png",
    },
    {
        ticker_symbol: "ARION",

        logo_url: null,
    },
    {
        ticker_symbol: "BRAZ",

        logo_url: null,
    },
    {
        ticker_symbol: "ITT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x0aef06dcccc531e581f0440059e6ffcc206039ee.png",
    },
    {
        ticker_symbol: "SCRIV",

        logo_url: null,
    },
    {
        ticker_symbol: "FXP",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x14ddda446688b73161aa1382f4e4343353af6fc8.png",
    },
    {
        ticker_symbol: "GSR",

        logo_url: null,
    },
    {
        ticker_symbol: "KIT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x080eb7238031f97ff011e273d6cad5ad0c2de532.png",
    },
    {
        ticker_symbol: "PARETO",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xea5f88e54d982cbb0c441cde4e79bc305e5b43bc.png",
    },
    {
        ticker_symbol: "ECASH",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x5d21ef5f25a985380b65c8e943a0082feda0db84.png",
    },
    {
        ticker_symbol: "BERN",

        logo_url: null,
    },
    {
        ticker_symbol: "MEDIC",

        logo_url: null,
    },
    {
        ticker_symbol: "MOT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x263c618480dbe35c300d8d5ecda19bbb986acaed.png",
    },
    {
        ticker_symbol: "SIERRA",

        logo_url: null,
    },
    {
        ticker_symbol: "JOT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xdb455c71c1bc2de4e80ca451184041ef32054001.png",
    },
    {
        ticker_symbol: "ELT",

        logo_url: null,
    },
    {
        ticker_symbol: "TDS",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x6295ab2be04a617747481b292c390bfca592cf28.png",
    },
    {
        ticker_symbol: "OBT",

        logo_url: null,
    },
    {
        ticker_symbol: "INV",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xece83617db208ad255ad4f45daf81e25137535bb.png",
    },
    {
        ticker_symbol: "ITL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x122a86b5dff2d085afb49600b4cd7375d0d94a5f.png",
    },
    {
        ticker_symbol: "GEEM",

        logo_url: null,
    },
    {
        ticker_symbol: "ELLA",

        logo_url: null,
    },
    {
        ticker_symbol: "GENX",

        logo_url: null,
    },
    {
        ticker_symbol: "JC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0xe2d82dc7da0e6f882e96846451f4fabcc8f90528.png",
    },
    {
        ticker_symbol: "EST",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x18f5b4908e8861e3114ba9a0a9a4e84c5f180cc0.png",
    },
    {
        ticker_symbol: "KIND",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x4618519de4c304f3444ffa7f812dddc2971cc688.png",
    },
    {
        ticker_symbol: "JOINT",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x347c099f110ca6761779329d2879957b606b6ace.png",
    },
    {
        ticker_symbol: "BIT",

        logo_url: null,
    },
    {
        ticker_symbol: "ETNXP",

        logo_url: null,
    },
    {
        ticker_symbol: "ONEX",

        logo_url: null,
    },
    {
        ticker_symbol: "ZND",

        logo_url: null,
    },
    {
        ticker_symbol: "KGS",

        logo_url: null,
    },
    {
        ticker_symbol: "HLIX",

        logo_url: null,
    },
    {
        ticker_symbol: "SHL",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x8542325b72c6d9fc0ad2ca965a78435413a915a0.png",
    },
    {
        ticker_symbol: "SDUSD",

        logo_url: null,
    },
    {
        ticker_symbol: "YTN",

        logo_url: null,
    },
    {
        ticker_symbol: "EXCC",

        logo_url: null,
    },
    {
        ticker_symbol: "WBTC",

        logo_url:
            "https://logos.covalenthq.com/tokens/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png",
    }
];