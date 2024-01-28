import { defineStore } from "pinia";
import type { User } from '../api/types'

export interface UserStore {
  user: User;
}

export const useUserStore = defineStore("user", {
  state: (): UserStore => ({
    user: {} as User,
  }),
  actions: {
    addUser(newUser) {
      this.user = newUser;
    }
  }
});
