import { IOClients } from '@vtex/api'

import { Data } from './data'

export class Clients extends IOClients {
  public get data() {
    return this.getOrSet('data', Data)
  }
}
