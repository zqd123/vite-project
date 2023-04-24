import { defineStore } from "pinia";
export interface Experiment {
  selectFirstTime: number;
  errorSelectSum: number;
  selectTrueTimes: number;
}
export const useExperimentStore = defineStore("experiment", {
  state: () => ({
    experimentData: [] as Experiment[],
  }),
});
