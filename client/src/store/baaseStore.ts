import create from "zustand";
import { Payment } from "../components/PaymentsList";
interface Base {
  grid?: string[][];
  code?: string;
  payments?: Payment[];
  biasCharacter?: string;
  intervalRunning?: boolean;
  setGrid: (newGrid: string[][]) => void;
  setCode: (newCode: string) => void;
  setPayments: (payments: Payment[]) => void;
  setBiasCharacter: (newBiasCharacter: string) => void;
  setIntervalRunning: (intervalRunning: boolean) => void;
}

export const useBaseStore = create<Base>((set) => ({
  grid: undefined,
  code: undefined,
  payments: undefined,
  biasCharacter: undefined,
  intervalRunning: undefined,
  setGrid: (newGrid: string[][]) => set({ grid: newGrid }),
  setCode: (newCode: string) => set({ code: newCode }),
  setPayments: (payments: Payment[]) => set({ payments: payments }),
  setBiasCharacter: (newBiasCharacter: string) =>
    set({ biasCharacter: newBiasCharacter }),
  setIntervalRunning: (intervalRunning: boolean) =>
    set({ intervalRunning: intervalRunning }),
}));
