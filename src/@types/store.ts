import { store } from '@/store'

export type TAppState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
