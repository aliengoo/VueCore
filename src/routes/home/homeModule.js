import homeApi from './homeApi'

const state = {
  message: 'Waiting for message...',
  fetching: false
}

const types = {
  setMessage: 'setMessage',
  setFetching: 'setFetching'
}

const mutations = {
  [types.setMessage] (state, payload = '') {
    state.message = payload
  },

  [types.setFetching] (state, payload = false) {
    state.fetching = payload
  }
}

const actions = {
  async getMessage ({ commit }) {
    try {
      commit(types.setMessage, '')
      commit(types.setFetching, true)

      const message = await homeApi.getMessage()

      commit(types.setMessage, message)
    } catch (err) {
      console.error('Action failed: homeModule.getMessage')
      console.error(err)
    } finally {
      commit(types.setFetching, false)
    }
  }
}

const namespaced = true

export default {
  state, mutations, actions, namespaced
}
