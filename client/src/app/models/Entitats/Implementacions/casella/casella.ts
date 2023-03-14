import { iCasella } from "../../Interficies/casella/iCasella";
import { iPeça } from "../../Interficies/peça/iPeça";
import { peça } from "../peça/peça";

export class casella implements iCasella {
    lletra!: string;
    numero!: number;
    color!: string;
    peça!: iPeça;

    constructor(lletra: string, numero: number, color: string, peça: iPeça) {
        this.lletra = lletra;
        this.numero = numero;
        this.color = color;
        this.peça = peça;
    }
}
