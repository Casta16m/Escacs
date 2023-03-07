import { iCasella } from "../../Interficies/casella/iCasella";

export class casella implements iCasella {
    lletra!: string;
    numero!: number;
    color!: string;

    constructor(lletra: string, numero: number, color: string) {
        this.lletra = lletra;
        this.numero = numero;
        this.color = color;
    }
}
