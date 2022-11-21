import create from 'zustand'

const useStore = create((set) => ({
  currentUser: {},
  setCurrentUser: (data) => set((state) => ({ currentUser: data })),
}))

export default useStore