/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { saveNewsletter } from './resolvers/saveNewsletter'
import { getNewsletter } from './resolvers/getNewsletter'
import{ Clients } from "./clients/index"

import type {
  ParamsContext,
  ServiceContext,
  RecorderState,
} from '@vtex/api'
import { Service } from '@vtex/api'

const TREE_SECONDS_MS = 3 * 1000
const CONCURRENCY = 10

declare global {
  type Context = ServiceContext<Clients, State>

  interface State extends RecorderState {
    code: number
  }
}

export default new Service<Clients, State, ParamsContext>({
  clients: {
    options: {
      events: {
        exponentialTimeoutCoefficient: 2,
        exponentialBackoffCoefficient: 2,
        initialBackoffDelay: 50,
        retries: 1,
        timeout: TREE_SECONDS_MS,
        concurrency: CONCURRENCY,
      },
    },
  },
  graphql: {
    resolvers: {
      Mutation: {
        saveNewsletter
      },
      Query: {
        getNewsletter
      }
    }
  }
})
