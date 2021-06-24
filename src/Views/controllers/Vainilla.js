import create from "zustand";

const Vainilla = create((set) => ({
  TrufaVainilla: 0,
  ComprarVainilla: () =>
    set((state) => ({
      TrufaVainilla: state.TrufaVainilla + 1,
    })),
}));

export default Vainilla;
