import create from "zustand";

type LoginStore = {
  isLogin: boolean,
  setIsLogin: () => void,
  setLogin: () => void
  setLogout: () => void
}

const isLoginStore = create<LoginStore>((set) => ({
  isLogin: true,
  setIsLogin: () => set((state) => ({ isLogin: !state.isLogin })),
  setLogin: () => set(() => ({ isLogin: true })),
  setLogout: () => set(() => ({ isLogin: false })),
}));

export default isLoginStore;