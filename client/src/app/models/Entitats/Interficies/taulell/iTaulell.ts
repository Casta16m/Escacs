import { iPeça } from '../peça/iPeça';
import { iCasella } from '../casella/iCasella';

export interface iTaulell {
    matriu: Array<Array<iCasella>>;
    pecesBlanques: Array<iPeça>;
    pecesNegres: Array<iPeça>;
    numero: number;
}