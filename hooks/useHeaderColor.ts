import { create } from 'zustand'

interface HeaderColorState {
  color: boolean
  setColor: (color: boolean) => void
}

export const useHeaderColor = create<HeaderColorState>()((set) => ({
    color: false,
    setColor: (color: boolean) => set({ color: color })
}))