import { create } from "zustand";
import { persist } from "zustand/middleware";

const useProfileStore = create(
  persist(
    (set) => ({
      avatarUrl: "",
      setAvatarUrl: (url) => set({ avatarUrl: url }),

      phoneNumber: "",
      setPhoneNumber: (phone) => set({ phoneNumber: phone }),

      occupation: "",
      setOccupation: (occ) => set({ occupation: occ }),

      bio: "",
      setBio: (b) => set({ bio: b }),

      secondaryEmail: "",
      setSecondaryEmail: (email) => set({ secondaryEmail: email }),
    }),
    {
      name: "profile-storage",
    },
  ),
);

export default useProfileStore;
