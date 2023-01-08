import FormI from "./verb-forms/FormI";
import FormII from "./verb-forms/FormII";
import FormIII from "./verb-forms/FormIII";
import FormIV from "./verb-forms/FormIV";
import FormV from "./verb-forms/FormV";
import FormVI from "./verb-forms/FormVI";
import FormVII from "./verb-forms/FormVII";
import FormVIII from "./verb-forms/FormVIII";
import FormIX from "./verb-forms/FormIX";
import FormX from "./verb-forms/FormX";
import FormXI from "./verb-forms/FormXI";
import FormXII from "./verb-forms/FormXII";

const formMap = {
    'I': FormI, 'II': FormII, 'III': FormIII,
    'IV': FormIV, 'V': FormV, 'VI': FormVI,
    'VII': FormVII, 'VIII': FormVIII, 'IX': FormIX,
    'X': FormX, 'XI': FormXI, 'XII': FormXII,
}

export function verbFormInst(opts: any) {
    const instance = new (formMap[opts.form])(opts);
    // console.log(getAllMethodNames(instance))
    return instance;
}

function getAllMethodNames(obj) {
    let methods = new Set();
    while (obj = Reflect.getPrototypeOf(obj)) {
        let keys = Reflect.ownKeys(obj)
        keys.forEach((k) => {
            let method = obj[k];
            if (method instanceof Function && k !== 'constructor' && k[0] !== '_')
                methods.add(k)
        });
    }
    return methods;
}
