import axios from 'axios'

import { AppError } from '../utils/AppError'

// import MockAdapter from 'axios-mock-adapter'

// Simula todos os erros
// const mock = new MockAdapter(axios)
// mock.onGet('/data').reply(500)

const api = axios.create({
  baseURL: 'https://games-test-api-81e9fb0d564a.herokuapp.com/api',
  headers: {
    'dev-email-address': 'yagofer12@gmail.com',
  },
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message))
    } else if ([500, 502, 503, 504, 507, 508, 509].includes(error.response.status)) {
      return Promise.reject(new AppError('O servidor falhou em responder, tente recarregar a página'))
    } else {
      return Promise.reject(
        new AppError('O servidor não conseguirá responder por agora, tente voltar novamente mais tarde'),
      )
    }
  },
)

export { api }
