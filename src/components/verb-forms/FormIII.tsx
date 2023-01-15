import VerbForm from "./VerbForm";
import {symbols} from "./resources";

export default class FormIII extends VerbForm {

    constructor(opts: any) {
        super(opts);
        this.mdSukunBase = this.fa + symbols.fatah + symbols.alif +
            this.ain + symbols.fatah + this.lam;
        this.mdrVowel = symbols.dammah;
        this.mdrSukunBase = this.fa + symbols.fatah + symbols.alif +
            this.ain + symbols.kasrah + this.lam;
        this.amrSukunBase = this.mdrSukunBase;
        this.mdMjSukunBase = this.fa + symbols.dammah + symbols.oao +
            this.ain + symbols.kasrah + this.lam;
        this.mdrMjSukunBase = this.mdSukunBase;
        this.setDefaults();
    }

    // masder
    public msdr() {
        return symbols.alif + symbols.kasrah + this.fa + symbols.sukun +
            this.ain + symbols.fatah + symbols.alif + this.lam;
    }
}
