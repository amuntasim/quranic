import VerbForm from "./VerbForm";
import {symbols, nahiPrefix} from "./resources";

export default class FormIX extends VerbForm {
    constructor(opts: any) {
        super(opts);
        this.mdSukunBase = symbols.alif + symbols.kasrah + this.fa + symbols.sukun +
             this.ain + symbols.fatah + this.lam + symbols.shadda;
        this.mdMutahrrkBase = symbols.alif + symbols.kasrah + this.fa + symbols.sukun +
             this.ain + symbols.fatah + this.lam + symbols.fatah + this.lam;
        this.mdrVowel = symbols.fatah;
        this.mdrSukunBase = this.fa + symbols.sukun +  this.ain + symbols.fatah + this.lam + symbols.shadda;
        this.mdrMutahrrkBase = this.fa + symbols.sukun +  this.ain + symbols.fatah + this.lam +
        symbols.kasrah +this.lam;
        this.amrSukunBase = symbols.alif + symbols.kasrah + this.fa + symbols.sukun +
            this.ain + symbols.fatah + this.lam + symbols.shadda;
        this.amrMutahrrkBase = symbols.alif + symbols.kasrah + this.fa + symbols.sukun +
            this.ain + symbols.fatah + this.lam + symbols.kasrah + this.lam;
        this.mdMjSukunBase = symbols.alif + symbols.dammah + this.fa + symbols.sukun +
            this.ain + symbols.dammah + this.lam + symbols.shadda;
        this.mdMjMutahrrkBase = symbols.alif + symbols.dammah + this.fa + symbols.sukun +
            this.ain + symbols.dammah + this.lam + symbols.kasrah + this.lam;
        this.mdrMjSukunBase = this.fa + symbols.sukun +
            this.ain + symbols.fatah + this.lam + symbols.shadda;
        this.mdrMjMutahrrkBase = this.fa + symbols.sukun +
            this.ain + symbols.fatah + this.lam + symbols.fatah + this.lam;
    }

    // masder
    public msdr() {
        return symbols.alif + symbols.kasrah + this.fa + symbols.sukun +
            this.ain + symbols.kasrah + this.lam + symbols.alif + symbols.fatah +this.lam + symbols.dun;
    }

    // fel amr masculine singular
    public amrM1() {
        return  this.amrSukunBase + symbols.fatah;
    }

    public nahiM1() {
        return nahiPrefix + this.mdrVowel + this.mdrSukunBase + symbols.fatah;
    }

}

