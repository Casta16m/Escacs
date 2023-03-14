import { iPeça } from "../peça/iPeça";

export interface iCasella {
    lletra: string;
    numero: number;
    color: string;
    peça: iPeça;
}