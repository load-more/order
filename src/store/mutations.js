import {
  RECEIVE_TITLE,
  RECEIVE_SORT,
  RECEIVE_PAGE,
  RECEIVE_LIST,
  RECEIVE_FOOD,
} from './mutation-types'

export default {
  [RECEIVE_TITLE](state, payload) {
    state.title = payload.title
  },
  [RECEIVE_SORT](state, payload) {
    state.sort = payload.sort
  },
  [RECEIVE_PAGE](state, payload) {
    state.page = payload.page
  },
  [RECEIVE_LIST](state, payload) {
    state.list = payload.list
  },
  [RECEIVE_FOOD](state, payload) {
    state.food = payload.food
  },
}