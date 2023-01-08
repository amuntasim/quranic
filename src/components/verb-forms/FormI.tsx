import VerbForm from "./VerbForm";
import {symbols} from "./resources";

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
        this.mdBase = this.fa + symbols.fatah +
            this.ain + mdAinVowel + this.lam;
        this.mdrVowel = symbols.fatah;
        this.mdrBase = this.fa + symbols.sukun +
            this.ain + mdrAinVowel + this.lam;
        this.amrBase = symbols.alif + amrVowel + this.mdrBase;
        this.mdMjBase = this.fa + symbols.dammah +
            this.ain + symbols.kasrah + this.lam;
        this.mdrMjBase = this.fa + symbols.sukun +
            this.ain + symbols.fatah + this.lam;
    }

    // Ism fa'eel
    public ismF() {
        return this.fa + symbols.alif + symbols.fatah + this.ain + symbols.kasrah
            + this.lam + symbols.dun;
    }

    // Ism maf'ul
    public ismMfl() {
        return symbols.mim + symbols.fatah + this.fa + symbols.sukun +
            this.ain +  symbols.dammah + symbols.oao + this.lam + symbols.dammah;
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
