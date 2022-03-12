import { ICertificate } from "./ICertificate";
import { IFact } from "./IFact";
import { IPhotoURL } from "./IPhotoURL";
import { IWorkout } from "./IWorkout";

export interface IInfoCard {
    name: string,
    type: string,
    certificates?: ICertificate[],
    photo?: IPhotoURL,
    workout?: IWorkout,
    facts?: IFact[]
}