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
}
export const useExperimentStore = defineStore("experiment", {
  state: () => ({
    userInfo: {} as User,
    experimentData: [] as Experiment[],
  }),
});
