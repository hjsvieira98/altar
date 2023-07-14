import create from 'zustand';
import { Payment } from '../components/PaymentsList';
interface Base {
    grid?: string[][] ,
    code?:string,
    paymets?:Payment,
    biasChareter?:string,
    intervalId?:number | null
    intervalRunning?:boolean
    setGrid: (newGrid: string[][]) => void,
    setCode: (newCode: string ) => void,
    setPaymets: (newPayment: Payment) => void,
    setBiasChareter: (newBiasChareter: string) => void,
    setIntervalId:(newIntervalId: number | null) => void,
    setIntervalRunning:(intervalRunning: boolean) => void,
}

export const useBaseStore = create<Base>( (set) => ({
    grid: undefined,
    code:undefined,
    paymets: undefined,
    setGrid: (newGrid: string[][] ) => set({ grid: newGrid }),
    setCode: (newCode: string ) => set({ code: newCode }),
    setPaymets: (newPayment: Payment) => set({ paymets: newPayment }),
    setBiasChareter: (newBiasChareter: string) => set({ biasChareter: newBiasChareter }),
    setIntervalId: (newIntervalId: number | null) => set({ intervalId: newIntervalId }),
    setIntervalRunning: (intervalRunning: boolean) => set({ intervalRunning: intervalRunning })


}));