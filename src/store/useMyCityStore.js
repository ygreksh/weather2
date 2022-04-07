import create from "zustand";

const useMyCityStore = create (
    set => ({
        myCity: null,
        // myCity: {name: "", country: ""},
        setMyCity: (city) => set(state => ({myCity: city})),
    })
)
export default useMyCityStore;