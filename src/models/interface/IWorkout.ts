import { IInfoCard } from "./IInfoCard";
import { IPhotoURL } from "./IPhotoURL";

export interface IWorkout {
    name: string,
    description?: string,
    photos?: IPhotoURL[],
    cards?: IInfoCard[]
}