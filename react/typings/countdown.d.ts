import { FunctionComponent } from 'react'

declare global {
  interface StorefrontFunctionComponent<P = GenericObject>
    extends FunctionComponent<P> {
    getSchema?(props: P): GenericObject
    schema?: GenericObject
  }

  interface StorefrontComponent<P = GenericObject, S = GenericObject>
    extends Component<P, S> {
    getSchema?(props: P): GenericObject
    schema: GenericObject
  }
}


export interface TimeSplit {
  hours: string
  minutes: string
  seconds: string
}

type GenericObject = Record<string, any>
