import { createReducer, nanoid } from 'redux-act'
import * as actions from "./actions";

const initialState = {
  blockNumber: {},
  popupList: [],
  walletModalOpen: false,
  settingsMenuOpen: false
}

const reducer = {
  [actions.addPopup]: (state) => ({
    ...state
  })
};

export default createReducer(reducer, initialState);
