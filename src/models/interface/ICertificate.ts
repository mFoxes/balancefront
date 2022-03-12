import { IPhotoURL } from "./IPhotoURL";

export interface ICertificate {
    description: string,
    type?: string,
    certificatePhoto?: IPhotoURL
}