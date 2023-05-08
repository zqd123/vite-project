import { defineStore } from "pinia";
export interface Experiment {
  selectFirstTime: number;
  errorSelectSum: number;
  selectTrueTimes: number;
}
export interface User {
  studyCode?: string;
  studyName: string;
  email?: string;
  experimentData?: Experiment[];
}
export interface CheckQuestion {
  question1: number;
  question2: number;
  secondCount: number;
}
export const useExperimentStore = defineStore("experiment", {
  state: () => ({
    userInfo: {} as User,
    experimentData: [] as Experiment[],
    checkQuestion: [] as CheckQuestion[],
  }),
  getters: {},
  actions: {
    saveStoreLocal() {
      localStorage.setItem("experiment", JSON.stringify(this.userInfo));
    },
  },
});
