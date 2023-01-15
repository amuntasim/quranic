import {symbols, nahiPrefix} from "./resources";

export default class VerbForm {
    protected opts: object;
    protected rootLetters: any;
    protected root: string;
    protected fa: string;
    protected ain: string;
    protected lam: string;

    protected mdSukunBase: any;
    protected mdMutahrrkBase: any;
    protected mdrSukunBase: any;
    protected mdrMutahrrkBase: any;
    protected mdrVowel: any;
    protected amrSukunBase: any;
    protected amrMutahrrkBase: any;
    protected mdMjSukunBase: any;
    protected mdMjMutahrrkBase: any;
    protected mdrMjSukunBase: any;
    protected mdrMjMutahrrkBase: any;

    constructor(opts: any) {
        this.opts = opts
        this.root = opts.root;
        this.rootLetters = opts.root.replace(/\s+/g, '').split('');
        this.fa = this.rootLetters[0];
        this.ain = this.rootLetters[1];
        this.lam = this.rootLetters[2];
    }

    public setDefaults(){
        this.mdMutahrrkBase = this.mdSukunBase;
        this.mdrMutahrrkBase = this.mdrSukunBase;
        this.mdMjMutahrrkBase = this.mdMjSukunBase;
        this.mdrMjMutahrrkBase = this.mdrMjSukunBase;
        this.amrMutahrrkBase = this.amrSukunBase;
    }
    //madi masculine singular
    public mdM1() {
        return this.mdSukunBase + symbols.fatah;
    }

    //madi masculine dual
    public mdM2() {
        return this.mdM1() + symbols.alif;
    }

    //madi masculine plural
    public mdMP() {
        return this.mdSukunBase + symbols.dammah + symbols.oao +
            symbols.sukun + symbols.alif;
    }

    //madi feminine singular
    public mdF1() {
        return this.mdM1() + symbols.ta + symbols.sukun;
    }

    //madi feminine dual
    public mdF2() {
        return this.mdM1() + symbols.ta + symbols.fatah + symbols.alif;
    }

    //madi feminine plural
    public mdFP() {
        return this.mdMutahrrkBase + symbols.sukun + symbols.nun + symbols.fatah;
    }

    //madi masculine 2nd person singular
    public mdM21() {
        return this.mdMutahrrkBase + symbols.sukun + symbols.ta + symbols.fatah;
    }

    //madi masculine 2nd person dual
    public mdM22() {
        return this.mdMutahrrkBase + symbols.sukun + symbols.ta + symbols.dammah + symbols.mim +  symbols.fatah + symbols.alif;
    }

    //madi masculine 2nd person plural
    public mdM2P() {
        return this.mdMutahrrkBase + symbols.sukun + symbols.ta + symbols.dammah + symbols.mim + symbols.sukun;
    }

    //madi feminine 2nd person singular
    public mdF21() {
        return this.mdMutahrrkBase + symbols.sukun + symbols.ta + symbols.kasrah;
    }

    //madi feminine 2nd person dual
    public mdF22() {
        return this.mdM22();
    }

    //madi feminine 2nd person plural
    public mdF2P() {
        return this.mdMutahrrkBase + symbols.sukun + symbols.ta + symbols.dammah + symbols.nun + symbols.shadda + symbols.fatah;
    }

    //madi 1st  person singular (both)
    public mdB1() {
        return this.mdMutahrrkBase + symbols.sukun + symbols.ta + symbols.dammah;
    }

    //madi 1st  person all (both)
    public mdB3() {
        return this.mdFP() + symbols.alif;
    }

    // madi majhul masculine singular
    public mdMjM1() {
        return this.mdMjSukunBase + symbols.fatah;
    }

    public mdMjM2() {
        return this.mdMjM1() + symbols.alif;
    }

    public mdMjMP() {
        return this.mdMjSukunBase + symbols.dammah + symbols.oao +
            symbols.sukun + symbols.alif;
    }

    public mdMjF1() {
        return this.mdMjM1() + symbols.ta + symbols.sukun;
    }

    public mdMjF2() {
        return this.mdMjM1() + symbols.ta + symbols.fatah + symbols.alif;
    }

    public mdMjFP() {
        return this.mdMjMutahrrkBase + symbols.sukun + symbols.nun + symbols.fatah;
    }

    public mdMjM21() {
        return this.mdMjMutahrrkBase + symbols.sukun + symbols.ta + symbols.fatah;
    }

    public mdMjM22() {
        return this.mdMjMutahrrkBase + symbols.sukun + symbols.ta + symbols.dammah + symbols.mim + symbols.fatah + symbols.alif;
    }

    public mdMjM2P() {
        return this.mdMjMutahrrkBase + symbols.sukun + symbols.ta + symbols.dammah + symbols.mim + symbols.sukun;
    }

    public mdMjF21() {
        return this.mdMjMutahrrkBase + symbols.sukun + symbols.ta + symbols.kasrah;
    }

    public mdMjF22() {
        return this.mdMjM22();
    }

    public mdMjF2P() {
        return this.mdMjMutahrrkBase + symbols.sukun + symbols.ta + symbols.dammah + symbols.nun + symbols.shadda + symbols.fatah;
    }

    public mdMjB1() {
        return this.mdMjMutahrrkBase + symbols.sukun + symbols.ta + symbols.dammah;
    }

    public mdMjB3() {
        return this.mdMjMutahrrkBase + symbols.sukun + symbols.nun + symbols.fatah + symbols.alif;
    }

    // Ism fa'eel
    public ismF() {
        return symbols.mim + symbols.dammah + this.mdrSukunBase + symbols.dun;
    }

    // Ism maf'ul
    public ismMfl() {
        return symbols.mim + symbols.dammah + this.mdrSukunBase + symbols.dan;
    }

    // fel amr masculine singular
    public amrM1() {
        return  this.amrSukunBase + symbols.sukun;
    }
    // fel amr masculine dual
    public amrM2() {
        return  this.amrSukunBase + symbols.fatah + symbols.alif;
    }
    // fel amr masculine plural
    public amrMP() {
        return  this.amrSukunBase + symbols.dammah + symbols.oao +
            symbols.sukun + symbols.alif ;
    }
    // fel amr feminine singular
    public amrF1() {
        return  this.amrSukunBase + symbols.kasrah + symbols.ea + symbols.sukun;
    }
    // fel amr feminine dual
    public amrF2() {
        return  this.amrM2();
    }
    // fel amr feminine plural
    public amrFP() {
        return  this.amrMutahrrkBase + symbols.sukun + symbols.nun + symbols.fatah;
    }

    // fel nahi masculine singular
    public nahiM1() {
        return nahiPrefix + this.mdrVowel + this.mdrSukunBase + symbols.sukun;
    }

    public nahiM2() {
        return nahiPrefix + this.mdrVowel + this.mdrSukunBase + symbols.fatah + symbols.alif;
    }

    public nahiMP() {
        return nahiPrefix + this.mdrVowel + this.mdrSukunBase + symbols.dammah
            + symbols.oao + symbols.sukun + symbols.alif;
    }

    public nahiF1() {
        return nahiPrefix + this.mdrVowel + this.mdrSukunBase + symbols.kasrah +
            symbols.ea + symbols.sukun;
    }

    public nahiF2() {
        return this.nahiM2();
    }

    public nahiFP() {
        return nahiPrefix + this.mdrVowel + this.mdrMutahrrkBase + symbols.sukun +
            symbols.nun + symbols.fatah;
    }

    public zarf() {
        return this.ismMfl();
    }

    // mudari masculine singular
    public mdrM1() {
        return symbols.ea + this.mdrVowel + this.mdrSukunBase + symbols.dammah;
    }

    //mudari masculine dual
    public mdrM2() {
        return symbols.ea + this.mdrVowel + this.mdrSukunBase + symbols.fatah +
            symbols.alif + symbols.nun + symbols.kasrah;
    }

    //mudari masculine plural
    public mdrMP() {
        return symbols.ea + this.mdrVowel + this.mdrSukunBase + symbols.dammah +
            symbols.oao + symbols.sukun + symbols.nun + symbols.fatah;
    }

    //mudari feminine singular
    public mdrF1() {
        return symbols.ta + this.mdrVowel + this.mdrSukunBase + symbols.dammah;
    }

    //mudari feminine dual
    public mdrF2() {
        return symbols.ta + this.mdrVowel + this.mdrSukunBase + symbols.fatah +
            symbols.alif + symbols.nun + symbols.kasrah;
    }

    //mudari feminine plural
    public mdrFP() {
        return symbols.ea + this.mdrVowel + this.mdrMutahrrkBase +
            symbols.sukun + symbols.nun + symbols.fatah;
    }

    //mudari masculine 2nd person singular
    public mdrM21() {
        return this.mdrF1();
    }

    //mudari masculine 2nd person dual
    public mdrM22() {
        return this.mdrF2();
    }

    //mudari masculine 2nd person plural
    public mdrM2P() {
        return symbols.ta + this.mdrVowel + this.mdrSukunBase + symbols.dammah +
            symbols.oao + symbols.sukun + symbols.nun + symbols.fatah;
    }

    //mudari feminine 2nd person singular
    public mdrF21() {
        return symbols.ta + this.mdrVowel + this.mdrSukunBase + symbols.kasrah +
            symbols.ea + symbols.sukun + symbols.nun + symbols.fatah;
    }

    //mudari feminine 2nd person dual
    public mdrF22() {
        return this.mdrF2();
    }

    //mudari feminine 2nd person plural
    public mdrF2P() {
        return symbols.ta + this.mdrVowel + this.mdrMutahrrkBase +
            symbols.sukun + symbols.nun + symbols.fatah;
    }

    //mudari 1st  person singular (both)
    public mdrB1() {
        return symbols.qata + this.mdrVowel + this.mdrSukunBase + symbols.dammah;
    }

    //mudari 1st  person all (both)
    public mdrB3() {
        return symbols.nun + this.mdrVowel + this.mdrSukunBase + symbols.dammah;
    }

    // mudari majhul masculine singullar
    public mdrMjM1() {
        return symbols.ea + symbols.dammah + this.mdrMjSukunBase + symbols.dammah;
    }

    //mudari majhul masculine dual
    public mdrMjM2() {
        return symbols.ea + symbols.dammah + this.mdrMjSukunBase + symbols.fatah +
            symbols.alif + symbols.nun + symbols.kasrah;
    }

    //mudari majhul masculine plural
    public mdrMjMP() {
        return symbols.ea + symbols.dammah + this.mdrMjSukunBase + symbols.dammah +
            symbols.oao + symbols.sukun + symbols.nun + symbols.fatah;
    }

    //mudari majhul feminine singular
    public mdrMjF1() {
        return symbols.ta + symbols.dammah + this.mdrMjSukunBase + symbols.dammah;
    }

    //mudari majhul feminine dual
    public mdrMjF2() {
        return symbols.ta + symbols.dammah + this.mdrMjSukunBase + symbols.fatah +
            symbols.alif + symbols.nun + symbols.kasrah;
    }

    //mudari majhul feminine plural
    public mdrMjFP() {
        return symbols.ea + symbols.dammah + this.mdrMjMutahrrkBase +
            symbols.sukun + symbols.nun + symbols.fatah;
    }

    //mudari majhul masculine 2nd person singular
    public mdrMjM21() {
        return this.mdrMjF1();
    }

    //mudari majhul masculine 2nd person dual
    public mdrMjM22() {
        return this.mdrMjF2();
    }

    //mudari majhul masculine 2nd person plural
    public mdrMjM2P() {
        return symbols.ta + symbols.dammah + this.mdrMjSukunBase + symbols.dammah +
            symbols.oao + symbols.sukun + symbols.nun + symbols.fatah;
    }

    //mudari majhul feminine 2nd person singular
    public mdrMjF21() {
        return symbols.ta + symbols.dammah + this.mdrMjSukunBase + symbols.kasrah +
            symbols.ea + symbols.sukun + symbols.nun + symbols.fatah;
    }

    //mudari majhul feminine 2nd person dual
    public mdrMjF22() {
        return this.mdrMjF2();
    }

    //mudari majhul feminine 2nd person plural
    public mdrMjF2P() {
        return symbols.ta + symbols.dammah + this.mdrMjMutahrrkBase +
            symbols.sukun + symbols.nun + symbols.fatah;
    }

    //mudari majhul 1st  person singular (both)
    public mdrMjB1() {
        return symbols.qata + symbols.dammah + this.mdrMjSukunBase + symbols.dammah;
    }

    //mudari majhul 1st  person all (both)
    public mdrMjB3() {
        return symbols.nun + symbols.dammah + this.mdrMjSukunBase + symbols.dammah;
    }

    public isMudaAf(){
        return this.ain === this.lam;
    }

}
