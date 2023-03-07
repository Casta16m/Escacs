import { iPeça } from "../../Interficies/peça/iPeça";

export class peça implements iPeça {
    numero!: number;
    color!: string;
    tipus!: string;

    constructor(numero: number, color: string, tipus: string) {
        this.numero = numero;
        this.color = color;
        this.tipus = tipus;
    }
}