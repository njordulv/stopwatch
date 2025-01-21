import { create } from 'zustand'
import { StoreStates } from '../interfaces'

export const useStore = create<StoreStates>((set) => ({
  count: 0,
  setCount: (newCount) => set({ count: newCount }),
  isRunning: false,
  setRunning: (isRunning) => set({ isRunning }),
  lap: false,
  setLap: (lap) => set({ lap }),
  laps: [],
  setLapse: (laps) => set({ laps }),
  lapStart: 0,
  setLapStart: (timeOrUpdater) =>
    set((state) => ({
      lapStart:
        typeof timeOrUpdater === 'function'
          ? timeOrUpdater(state.lapStart)
          : timeOrUpdater,
    })),
  lapPauseTime: null,
  setLapPauseTime: (time: number | null) => set({ lapPauseTime: time }),
  showLapArrow: false,
  setShowLapArrow: (showLapArrow: boolean) => set({ showLapArrow }),
}))
