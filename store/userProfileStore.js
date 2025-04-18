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

      firstName: "",
      setFirstName: (name) => set({ firstName: name }),

      lastName: "",
      setLastName: (name) => set({ lastName: name }),

      email: "",
      setEmail: (email) => set({ email: email }),

      username: "",
      setUsername: (username) => set({ username: username }),
    }),
    {
      name: "profile-storage",
    },
  ),
);

export default useProfileStore;
