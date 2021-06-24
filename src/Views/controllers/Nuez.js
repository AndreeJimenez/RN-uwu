import create from "zustand";

const Nuez = create((set) => ({
  TrufaNuez: 0,
  ComprarNuez: () =>
    set((state) => ({
      TrufaNuez: state.TrufaNuez + 1,
    })),
}));

export default Nuez;
