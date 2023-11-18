import { create } from "zustand";
type WarehouseState = {
	tender: any;
	setTender: any;
};
const useLoginData = create<WarehouseState>((set) => ({
	tender: {},

	setTender: async (data: WarehouseState) => set({ tender: { ...data } }),
}));

export default useLoginData;
