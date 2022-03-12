import { $host } from "."

export const fetchSlider = async () => {
    const { data } = await $host.get("api/Slider/GetAllWithPhotoURL");
    return data;
}

export const fetchWorkoutByType = async (type: string) => {
    const { data } = await $host.get(`api/Workout/GetAllWithInfoCardsAndPhotoURLByType?type=${type.replace(' ', '%20')}`);
    return data;
}

export const fetchAllWorkoutWithPhoto = async () => {
    const { data } = await $host.get("api/Workout/GetAllWithPhotos");
    return data;
}