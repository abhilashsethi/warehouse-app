import { create } from "zustand";
type FormStoreState = {
	warehouse: any;
	setWareHouse: any;
};
const useWarehouseData = create<FormStoreState>((set) => ({
	warehouse: {},

	setWareHouse: async (data: FormStoreState) => set({ warehouse: data }),
}));

export default useWarehouseData;
