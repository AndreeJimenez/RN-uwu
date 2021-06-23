import create from "zustand";

export const [Coria] = create((set) => ({
  count: 0,
  increase: () =>
    set((state) => ({
      count: state.count + 1,
    })),
}));
