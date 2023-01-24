import VerbForm from "./VerbForm";
import {nahiPrefix, symbols} from "./resources";

const babConfig = {
    'aa': {
        // madi Ain kalima vowel
        'mdAinVowel': symbols.fatah,
        // mudari Ain kalima vowel
        'mdrAinVowel': symbols.fatah,
    },
    'au': {
        'mdAinVowel': symbols.fatah,
        'mdrAinVowel': symbols.dammah,
        'amrVowel': symbols.dammah,
    },
    'ae': {
        'mdAinVowel': symbols.fatah,
        'mdrAinVowel': symbols.kasrah,
    },
    'ea': {
        'mdAinVowel': symbols.kasrah,
        'mdrAinVowel': symbols.fatah,
    },
    'ee': {
        'mdAinVowel': symbols.kasrah,
        'mdrAinVowel': symbols.kasrah,
    },
    'uu': {
        'mdAinVowel': symbols.dammah,
        'mdrAinVowel': symbols.dammah,
        'amrVowel': symbols.dammah,
    },
}

export default class FormI extends VerbForm {
    constructor(opts: any) {
        super(opts);
        const {mdAinVowel, mdrAinVowel, amrVowel = symbols.kasrah} =
        babConfig[opts.bab] || {}
        this.mdSukunBase = this.fa + symbols.fatah + this.ain + mdAinVowel + this.lam;
        this.mdrVowel = symbols.fatah;
        this.mdrSukunBase = this.fa + symbols.sukun + this.ain + mdrAinVowel + this.lam;
        this.amrSukunBase = symbols.alif + amrVowel + this.mdrSukunBase;
        this.mdMjSukunBase = this.fa + symbols.dammah + this.ain + symbols.kasrah + this.lam;
        this.mdrMjSukunBase = this.fa + symbols.sukun + this.ain + symbols.fatah + this.lam;
        this.setDefaults();
        if (this.isMudaAf()) {
            this.overrideMudaAfRules({mdrAinVowel})
        } else if (this.isAjoaf()) {
            this.overrideAjwafRules({mdrAinVowel})
        }else if(this.isMithal()){
            this.overrideMithalRules({mdrAinVowel})
        }
    }

    public overrideMithalRules({mdrAinVowel}){
        if(this.isMithalOaoe() && this.opts.bab !== 'ea'){
            this.mdrSukunBase =  this.ain + mdrAinVowel + this.lam;
            this.mdrMutahrrkBase = this.mdrSukunBase;
            this.amrSukunBase = this.mdrSukunBase;
            this.amrMutahrrkBase = this.mdrSukunBase;
        }
        // this.mdMutahrrkBase = this.fa + mdMutahrrkFaVowel + this.lam;
        // this.mdMjSukunBase = this.fa + symbols.kasrah + symbols.ea + this.lam;
        // this.mdMjMutahrrkBase = this.fa + symbols.kasrah + this.lam;
        // this.mdrMutahrrkBase = this.fa + mdrAinVowel + this.lam;
        // this.mdrMjSukunBase = this.fa + symbols.fatah + symbols.alif + this.lam;
        // this.mdrMjMutahrrkBase = this.fa + symbols.fatah + this.lam;
        // this.amrSukunBase = this.mdrSukunBase;
        // this.amrMutahrrkBase = this.mdrSukunBase;
    }

    public overrideMudaAfRules({mdrAinVowel}){
        // reset sukun bases with shadda
        this.mdSukunBase = this.fa + symbols.fatah + this.ain + symbols.shadda;
        this.mdrSukunBase = this.fa + mdrAinVowel + this.ain + symbols.shadda;
        this.amrSukunBase = this.mdrSukunBase;
        this.mdMjSukunBase = this.fa + symbols.dammah + this.ain + symbols.shadda;
        this.mdrMjSukunBase = this.fa + symbols.fatah + this.ain + symbols.shadda;
        // special case, fatah at the end to avoid two sukun join
        this.amrM1 = () => this.fa + mdrAinVowel + this.ain + symbols.shadda + symbols.fatah
        this.nahiM1 = () => nahiPrefix + this.mdrVowel + this.mdrSukunBase + symbols.fatah
    }

    public overrideAjwafRules({mdrAinVowel}){
        const mdMutahrrkFaVowel = this.opts.bab == 'au' ? symbols.dammah : symbols.kasrah
        this.mdSukunBase = this.fa + symbols.fatah + symbols.alif + this.lam;
        this.mdMutahrrkBase = this.fa + mdMutahrrkFaVowel + this.lam;
        this.mdMjSukunBase = this.fa + symbols.kasrah + symbols.ea + this.lam;
        this.mdMjMutahrrkBase = this.fa + symbols.kasrah + this.lam;
        this.mdrMutahrrkBase = this.fa + mdrAinVowel + this.lam;
        this.mdrMjSukunBase = this.fa + symbols.fatah + symbols.alif + this.lam;
        this.mdrMjMutahrrkBase = this.fa + symbols.fatah + this.lam;
        this.amrSukunBase = this.mdrSukunBase;
        this.amrMutahrrkBase = this.mdrSukunBase;
    }

    // Ism fa'eel
    public ismF() {
        const modifiedAin = this.isAjoafOaoe() ? symbols.hamzaQursi : this.ain;
        const middlePart = this.isMudaAf() ? (this.ain + symbols.shadda) : (modifiedAin + symbols.kasrah + this.lam)
        return this.replaceRules(this.fa + symbols.fatah  + symbols.alif +  middlePart + symbols.dun);
    }

    // Ism maf'ul
    public ismMfl() {
        let modifiedAin = symbols.sukun + this.ain + symbols.dammah;
        if(this.isAjoafOaoe() ) modifiedAin = symbols.dammah ;
        if(this.isAjoafEae() ) modifiedAin = symbols.kasrah ;
        return this.replaceRules(symbols.mim + symbols.fatah + this.fa + modifiedAin + symbols.oao + this.lam + symbols.dun);
    }

    // masder
    public msdr() {
        // @ts-ignore
        return this.opts.msdr;
    }

}
// const skippableMethods = ['constructor']
//
// Object.get(FormI.prototype).forEach(name => {
//     FormI.prototype["_" + name] = FormI.prototype[name];
//     console.log(name)
//     if(!skippableMethods.includes(name.toString())) {
//         FormI.prototype[name] = function () {
//             console.log(`Method call: method1(${Object.values(arguments).join(", ")})`);
//             const result = this["_" + name](...arguments);
//             console.log(`Method result: ${result}`);
//             return result;
//         }
//     }
// });
