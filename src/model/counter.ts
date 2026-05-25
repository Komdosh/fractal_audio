import { createEvent, createStore } from 'effector'

export const incremented = createEvent()
export const decremented = createEvent()
export const reset = createEvent()

export const $counter = createStore(0)
  .on(incremented, (n) => n + 1)
  .on(decremented, (n) => n - 1)
  .reset(reset)
