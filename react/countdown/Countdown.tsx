import React, { useState } from 'react'
import { TimeSplit } from '../typings/countdown'
import { tick, getTwoDaysFromNow } from './utils/time'

interface CountdownProps {
  targetDate: string
}

const DEFAULT_TARGET_DATE = getTwoDaysFromNow()

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({targetDate = DEFAULT_TARGET_DATE}) => {
  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  tick(targetDate, setTime)

  return <div>
    <h1>Countdown {targetDate}</h1>
    <h1>{`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}</h1>
  </div>
}


//Schema para exibir o componente no site editor
Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    targetDate: {
      title: 'Data Final',
      description: "Data final do contador",
      type:'string',
      default: null
    }
  },
}

export default Countdown
