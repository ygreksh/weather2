import create from "zustand";

const useSelectedCityStore = create (
    set => ({
        selectedCity: null,
        setSelectedCity: (city) => set(state => ({selectedCity: city})),
        resetSelectedCity: () => set(state => ({selectedCity: null}))
    })
)
export default useSelectedCityStore;