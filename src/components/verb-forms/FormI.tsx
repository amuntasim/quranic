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
        this.mdMjSukunBase = this.fa + symbols.dammah + this.ain + symbols.kasrah + this.lam;
        this.mdrMjSukunBase = this.fa + symbols.sukun + this.ain + symbols.fatah + this.lam;
        if(this.mdrM1()[3] === symbols.sukun){// mudari fa qalima has sukun, alif is required in amr
            this.amrSukunBase = symbols.alif + amrVowel + this.mdrSukunBase;
        } else {
            this.amrSukunBase = this.mdrSukunBase;
        }
        this.setDefaults();
        if (this.isMudaAf()) {
            this.overrideMudaAfRules({mdrAinVowel})
        } else if (this.isAjoaf()) {
            this.overrideAjwafRules({mdrAinVowel})
        } else if (this.isMithal()) {
            this.overrideMithalRules({mdrAinVowel})
        } else if (this.isNaqis()) {
            this.overrideNaqisRules({mdAinVowel})
        }
    }

    public overrideNaqisRules({mdAinVowel}) {
        const weakLettersMap = {
            'و': 'ا', 'ي': 'ى'
        }
        if(this.opts.bab !== 'ea'){
            this.mdSukunBase = this.fa + symbols.fatah + this.ain;
            this.mdM1 = () => this.fa + symbols.fatah + this.ain + mdAinVowel + weakLettersMap[this.lam]
        }
        this.mdM2 = () => this.fa + symbols.fatah + this.ain + mdAinVowel + this.lam + symbols.fatah + symbols.alif;
        this.mdMP = () => this.replaceRules(this.fa + symbols.fatah + this.ain + mdAinVowel + symbols.oao +
            symbols.alif + symbols.sukun)
        if(this.isNaqisOaoe()){
            this.mdrMjSukunBase = this.fa + symbols.sukun + this.ain + symbols.fatah + symbols.ea;
            this.mdrMjMutahrrkBase = this.mdrMjSukunBase;
            this.amrM1 = () => super.amrM1().replace(/وْ$/, '');
            this.nahiM1 = () => super.nahiM1().replace(/وْ$/, '');
        }else if (this.isNaqisEae()){
            this.amrM1 = () => {
                return (super.amrM1()).replace(/(يْ|ىْ)$/, '');
            }
            this.nahiM1 = () => super.nahiM1().replace(/(يْ|ىْ)$/, '');
        }

    }

    public overrideMithalRules({mdrAinVowel}) {
        if (this.isMithalOaoe()) {
            if(this.opts.bab !== 'ea'){
                this.mdrSukunBase = this.ain + mdrAinVowel + this.lam;
                this.mdrMutahrrkBase = this.mdrSukunBase;
                this.amrSukunBase = this.mdrSukunBase;
                this.amrMutahrrkBase = this.mdrSukunBase;
            }else {
                this.amrSukunBase = symbols.alif + symbols.kasrah + symbols.ea + symbols.sukun +
                    this.ain + mdrAinVowel + this.lam;
                this.amrMutahrrkBase = this.amrSukunBase;
            }

        }
    }

    public overrideMudaAfRules({mdrAinVowel}) {
        // reset sukun bases with shadda
        this.mdSukunBase = this.fa + symbols.fatah + this.ain + symbols.shadda;
        this.mdrSukunBase = this.fa + mdrAinVowel + this.ain + symbols.shadda;
        this.amrSukunBase = this.mdrSukunBase;
        this.mdMjSukunBase = this.fa + symbols.dammah + this.ain + symbols.shadda;
        this.mdrMjSukunBase = this.fa + symbols.fatah + this.ain + symbols.shadda;
        // special case, fatah at the end to avoid two sukun join
        this.amrM1 = () => this.replaceRules(this.fa + mdrAinVowel + this.ain + symbols.shadda + symbols.fatah);
        this.nahiM1 = () => this.replaceRules(nahiPrefix + this.mdrVowel + this.mdrSukunBase + symbols.fatah)
    }

    public overrideAjwafRules({mdrAinVowel}) {
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
        return this.replaceRules(this.fa + symbols.fatah + symbols.alif + middlePart + symbols.dun);
    }

    // Ism maf'ul
    public ismMfl() {
        let modifiedAin = symbols.sukun + this.ain + symbols.dammah + symbols.oao;
        if (this.isAjoafOaoe()) modifiedAin = symbols.dammah + symbols.oao;
        if (this.isAjoafEae()) modifiedAin = symbols.kasrah + symbols.ea;
        return this.replaceRules(symbols.mim + symbols.fatah + this.fa + modifiedAin +  this.lam + symbols.dun);
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
