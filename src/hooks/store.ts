import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux'

import { TAppDispatch, TAppState } from '@/@types/store'

export const useAppDispatch = useDispatch as () => TAppDispatch
export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector
