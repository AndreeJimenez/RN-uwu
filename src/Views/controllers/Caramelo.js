import create from "zustand";

const Caramelo = create((set) => ({
  TrufaCaramelo: 0,
  ComprarCaramelo: () =>
    set((state) => ({
      TrufaCaramelo: state.TrufaCaramelo + 1,
    })),
}));

export default Caramelo;
