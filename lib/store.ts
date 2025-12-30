import { create } from 'zustand'

export type ServiceType = "solar" | "battery" | "aerotermia" | "charger" | "domotica"

interface SimulatorState {
    selectedServices: ServiceType[]
    consumption: number
    budget: number // Added budget
    buildingType: "house" | "flat" | "industrial"

    // Actions
    toggleService: (service: ServiceType) => void
    setConsumption: (amount: number) => void
    setBudget: (amount: number) => void
    setBuildingType: (type: "house" | "flat" | "industrial") => void
}

export const useSimulatorStore = create<SimulatorState>((set) => ({
    selectedServices: [],
    consumption: 150,
    budget: 10000, // Default budget
    buildingType: "house",

    toggleService: (service) => set((state) => {
        const exists = state.selectedServices.includes(service)
        if (exists) {
            return { selectedServices: state.selectedServices.filter((s) => s !== service) }
        } else {
            return { selectedServices: [...state.selectedServices, service] }
        }
    }),

    setConsumption: (amount) => set({ consumption: amount }),
    setBudget: (amount) => set({ budget: amount }),
    setBuildingType: (type) => set({ buildingType: type }),
}))
