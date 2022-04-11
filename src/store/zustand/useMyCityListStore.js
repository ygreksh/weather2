import create from "zustand";

const useMyCityListStore = create (
    set => ({
        myCityList: [],
        setMyCityList: (myCityList) => set(state => ({myCityList: myCityList})),
        addCity: (city) => set(state => ({myCityList: state.myCityList.push(city)})),
        subCity: (city) => set(state => ({myCityList: state.myCityList.filter(item => item.name !== city.name)})),
        resetMyCityList: () => set(state => ({myCityList: []}))
    })
)
export default useMyCityListStore;