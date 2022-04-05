import create from "zustand";

const useCurrentWeatherStore = create (
    set => ({
        currentWeather: null,
        setCurrentWeather: (weather) => set(state => ({currentWeather: weather})),
        resetCurrentWeather: () => set(state => ({currentWeather: null}))
    })
)
export default useCurrentWeatherStore;