import { iCasella } from '../../../Entitats/Interficies/casella/iCasella';
import { iPeça } from '../../../Entitats/Interficies/peça/iPeça';
import { iTaulell } from '../../../Entitats/Interficies/taulell/iTaulell';
import { casella } from '../casella/casella';
import { peça } from '../peça/peça';

export class taulell implements iTaulell {

    matriu!: any;
    pecesBlanques!: any;
    pecesNegres!: any;
    numero!: number;

    constructor(numero: number) {
        this.matriu = new Array<Array<iCasella>>();
        this.numero = numero;
        this.emplenarTaulell();
    }

    public emplenarTaulell(): void {

        for (let i = 0; i < 8; i++) {
            this.matriu[i] = [];
            for (let j = 0; j < 8; j++) {
                this.matriu[i][j] = new casella(
                    String.fromCharCode(65 + j - 1),
                    i + 1,
                    (i + j) % 2 == 0 ? "#2AD707" : "#A0A0A0",
                    new peça("", "")
                );
            }
        }
    }

    PosicionarPeces() {

        let ImgPecesNegres = new Array("/assets/bTorre", "/assets/bCavall", "/assets/bAlfil", "/assets/bRei", "/assets/bReina", "/assets/bPeo"); // array de imagenes

        let ImgPecesBlanques = new Array("/assets/wTorre", "/assets/wCavall", "/assets/wAlfil", "/assets/wRei", "/assets/wReina", "/assets/wPeo");

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                this.matriu[i][j] = new peça();
            }
        }

        // array de imagenes, y hacer lo mismo que en el de las casillas pero canviando pieza por lo necesario

        // posicions peces negres / blanques.
    }

}