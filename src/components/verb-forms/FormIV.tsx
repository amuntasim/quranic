import VerbForm from "./VerbForm";
import {symbols} from "./resources";

export default class FormIV extends VerbForm {

    constructor(opts: any) {
        super(opts);
        this.mdSukunBase = symbols.qata + symbols.fatah + this.fa + symbols.sukun +
            this.ain + symbols.fatah + this.lam;
        this.mdrVowel = symbols.dammah;
        this.mdrSukunBase = this.fa + symbols.sukun +
            this.ain + symbols.kasrah + this.lam;
        this.amrSukunBase = symbols.qata + symbols.fatah + this.mdrSukunBase;
        this.mdMjSukunBase = symbols.qata + symbols.dammah + this.fa + symbols.sukun +
            this.ain + symbols.kasrah + this.lam;
        this.mdrMjSukunBase = this.fa + symbols.sukun +
            this.ain + symbols.fatah + this.lam;
        this.setDefaults();
    }

    // masder
    public msdr() {
        return symbols.alif + symbols.kasrah + this.fa + symbols.sukun +
            this.ain + symbols.fatah + symbols.alif + this.lam;
    }
}
