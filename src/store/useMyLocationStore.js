import create from "zustand";

const useMyLocationStore = create (
    set => ({
        myLocation: null,
        setMyLocation: (location) => set(state => ({myLocation: location}))
    })
)
export default useMyLocationStore;