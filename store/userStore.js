import { create } from "zustand";
import { persist } from "zustand/middleware";

function useStore(set) {
  return {
    user: null,
    setUserInformation: (userObj) => {
      set({ user: userObj });
    },
    removeUserInformation: () => {
      set({ user: null });
    },
  };
}

const useUserStore = create(persist(useStore, { name: "user-data" }));

export default useUserStore;
