import { createAction } from 'redux-act'

// export type PopupContent =
//   | {
//       txn: {
//         hash: string
//         success: boolean
//         summary?: string
//       }
//     }
//   | {
//       listUpdate: {
//         listUrl: string
//         oldList: TokenList
//         newList: TokenList
//         auto: boolean
//       }
//     }

export const updateBlockNumber = createAction('updateBlockNumber')
export const toggleWalletModal = createAction('toggleWalletModal')
export const toggleSettingsMenu = createAction('toggleSettingsMenu')
export const addPopup = createAction('addPopup')
export const removePopup = createAction('removePopup')
