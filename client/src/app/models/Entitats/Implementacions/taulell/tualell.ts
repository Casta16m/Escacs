import { iCasella } from '../../../Entitats/Interficies/casella/iCasella';
import { iPeça } from '../../../Entitats/Interficies/peça/iPeça';
import { iTaulell } from '../../../Entitats/Interficies/taulell/iTaulell';
import { casella } from '../casella/casella';

export class taulell implements iTaulell {

    matriu!: Array<Array<iCasella>>;
    pecesBlanques!: Array<iPeça>;
    pecesNegres!: Array<iPeça>;
    numero!: number;

    constructor(matriu: Array<Array<iCasella>>, pecesBlanques: Array<iPeça>, pecesNegres: Array<iPeça>, numero: number) {
        this.matriu = matriu;
        this.pecesBlanques = pecesBlanques;
        this.pecesNegres = pecesNegres;
        this.numero = numero;
    }

    emplenarTaulell() {
        this.matriu = new Array<Array<iCasella>>();
        for (let i = 0; i < 8; i++) {
            this.matriu[i] = new Array<iCasella>();
            for (let j = 0; j < 8; j++) {
                this.matriu[i][j] = new casella(String.fromCharCode(65 + j), i + 1, "blanc");
            }
        }
    }
};