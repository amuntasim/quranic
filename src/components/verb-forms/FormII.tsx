import VerbForm from "./VerbForm";
import {symbols} from "./resources";

export default class FormII extends VerbForm {
    constructor(opts: any) {
        super(opts);
        this.mdSukunBase = this.fa + symbols.fatah +
            this.ain + symbols.shadda + symbols.fatah + this.lam;
        this.mdrVowel = symbols.dammah;
        this.mdrSukunBase = this.fa + symbols.fatah +
            this.ain + symbols.shadda + symbols.kasrah + this.lam;
        this.amrSukunBase = this.mdrSukunBase;
        this.mdMjSukunBase = this.fa + symbols.dammah +
            this.ain + symbols.shadda + symbols.kasrah + this.lam;
        this.mdrMjSukunBase = this.mdSukunBase;
        this.setDefaults();
    }

    // masder
    public msdr() {
        return symbols.ta + symbols.fatah  + this.fa + symbols.sukun +
            this.ain + symbols.kasrah+ symbols.ea +  this.lam + symbols.dun;
    }

}
