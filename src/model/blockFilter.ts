import { createEvent, createStore } from 'effector'

/**
 * Free-text search across block names, abbreviations, summaries, and
 * type names / based-on pedals. Wired to the search box on the blocks index.
 */
export const setSearch = createEvent<string>()
export const $search = createStore<string>('').on(setSearch, (_, value) => value)
