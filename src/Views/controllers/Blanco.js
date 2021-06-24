import create from "zustand";

const Blanco = create((set) => ({
  TrufaBlanco: 0,
  ComprarBlanco: () =>
    set((state) => ({
      TrufaBlanco: state.TrufaBlanco + 1,
    })),
}));

export default Blanco;
