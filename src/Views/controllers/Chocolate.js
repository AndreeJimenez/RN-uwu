import create from "zustand";

const Chocolate = create((set) => ({
  TrufaChocolate: 0,
  ComprarChocolate: () =>
    set((state) => ({
      TrufaChocolate: state.TrufaChocolate + 1,
    })),
}));

export default Chocolate;
