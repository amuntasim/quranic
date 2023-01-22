import VerbForm from "./VerbForm";
import {symbols} from "./resources";

export default class FormX extends VerbForm {
    constructor(opts: any) {
        super(opts);
        this.mdSukunBase = symbols.alif + symbols.kasrah + symbols.sin + symbols.sukun +
            symbols.ta + symbols.fatah + this.fa + symbols.sukun + this.ain + symbols.fatah + this.lam;
        this.mdrVowel = symbols.fatah;
        this.mdrSukunBase = symbols.sin + symbols.sukun + symbols.ta + symbols.fatah + this.fa +
            symbols.sukun + this.ain + symbols.kasrah + this.lam;
        this.amrSukunBase = symbols.alif + symbols.kasrah + this.mdrSukunBase;
        this.mdMjSukunBase = symbols.alif + symbols.dammah + symbols.sin + symbols.sukun + symbols.ta +
            symbols.dammah + this.fa + symbols.sukun + this.ain + symbols.kasrah + this.lam;
        this.mdrMjSukunBase = symbols.sin + symbols.sukun +
            symbols.ta + symbols.fatah + this.fa + symbols.sukun + this.ain + symbols.fatah + this.lam
        this.setDefaults();
    }

    // masder
    public msdr() {
        return symbols.alif + symbols.kasrah + this.fa + symbols.sukun + symbols.ta +
            symbols.kasrah + this.ain + symbols.fatah + this.lam + symbols.dun;
    }
}
