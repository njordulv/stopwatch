import { create } from 'zustand'
import { StoreStates } from '../interfaces'

export const useStore = create<StoreStates>((set) => ({
  count: 0,
  setCount: (newCount) => set({ count: newCount }),
  isRunning: false,
  setRunning: (isRunning) => set({ isRunning }),
}))
