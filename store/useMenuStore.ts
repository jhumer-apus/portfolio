import { create } from 'zustand'

type MenuState = {
    openSideBar: boolean;
    setOpenSideBar: (value: boolean) => void;
};

export const useMenuStore = create<MenuState>((set) => ({
    openSideBar: false,
    setOpenSideBar: (value:boolean) => set({ openSideBar: value }),
}))