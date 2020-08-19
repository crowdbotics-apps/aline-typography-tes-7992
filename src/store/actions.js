import * as types from "./constants"
export const plugin11_get__list = () => ({ type: types.PLUGIN11_GET__LIST })
export const plugin11_get__listSucceeded = response => ({
  type: types.PLUGIN11_GET__LIST_SUCCEEDED,
  response
})
export const plugin11_get__listFailed = error => ({
  type: types.PLUGIN11_GET__LIST_FAILED,
  error
})
