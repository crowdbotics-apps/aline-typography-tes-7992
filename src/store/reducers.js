import * as types from "./constants"

const initialState = {}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.PLUGIN11_GET__LIST:
    case types.PLUGIN11_GET__LIST_SUCCEEDED:
    case types.PLUGIN11_GET__LIST_FAILED:
    default:
      return state
  }
}
