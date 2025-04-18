import { create } from "zustand";

const useProfileStore = create((set) => ({
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
}));

export default useProfileStore;
