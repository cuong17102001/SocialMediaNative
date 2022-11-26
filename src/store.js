import create from 'zustand'

const useStore = create((set) => ({
  currentUser: null,
  setCurrentUser: (data) => set((state) => ({ currentUser: data })),

  listPosts : [],
  setListPosts : (data) => set((state) => ({ listPosts: data })),

  listPostsProfile : [],
  setListPostsProfile : (data) => set((state) => ({ listPostsProfile: data })),
}))

export default useStore