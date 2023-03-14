import { iPeça } from "../../Interficies/peça/iPeça";

export class peça implements iPeça {
    color: string;
    imatge: string;

    constructor(color: string, imatge: string) {
        this.color = color;
        this.imatge = imatge;
    }
}