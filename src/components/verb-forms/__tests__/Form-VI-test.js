import {verbFormInst} from "../../VerbForms";

let verbInstance;
describe("Form-VI", () => {

    describe("root `ف ت ح`", () => {
        beforeEach(() => {
            const root = "ف ت ح";
            verbInstance = verbFormInst({
                form: 'VI', root
            })
        })

        it("mdM1() (madi masculine singular) returns تَفَاتَحَ", () => {
            expect(verbInstance.mdM1()).toEqual("تَفَاتَحَ");
        })
        it("mdM2() (madi masculine dual) returns تَفَاتَحَا", () => {
            expect(verbInstance.mdM2()).toEqual("تَفَاتَحَا");
        })
        it("mdMP() (madi masculine plural) returns تَفَاتَحُواْ", () => {
            expect(verbInstance.mdMP()).toEqual("تَفَاتَحُواْ");
        })
        it("mdF1() (madi faminine singular) returns تَفَاتَحَتْ", () => {
            expect(verbInstance.mdF1()).toEqual("تَفَاتَحَتْ");
        })
        it("mdF2() (madi faminine dual) returns تَفَاتَحَتَا", () => {
            expect(verbInstance.mdF2()).toEqual("تَفَاتَحَتَا");
        })
        it("mdFP() (madi faminine plural) returns تَفَاتَحْنَ", () => {
            expect(verbInstance.mdFP()).toEqual("تَفَاتَحْنَ");
        })
        it("mdM21() (madi masculine 2nd person singular) returns تَفَاتَحْتَ", () => {
            expect(verbInstance.mdM21()).toEqual("تَفَاتَحْتَ");
        })
        it("mdM22() (madi masculine 2nd person dual) returns تَفَاتَحْتُمَا", () => {
            expect(verbInstance.mdM22()).toEqual("تَفَاتَحْتُمَا");
        })
        it("mdM2P() (madi masculine 2nd person plural) returns تَفَاتَحْتُمْ", () => {
            expect(verbInstance.mdM2P()).toEqual("تَفَاتَحْتُمْ");
        })
        it("mdF21() (madi feminine 2nd person singular) returns تَفَاتَحْتِ", () => {
            expect(verbInstance.mdF21()).toEqual("تَفَاتَحْتِ");
        })
        it("mdF22() (madi feminine 2nd person dual) returns تَفَاتَحْتُمَا", () => {
            expect(verbInstance.mdF22()).toEqual("تَفَاتَحْتُمَا");
        })
        it("mdF2P() (madi feminine 2nd person plural) returns تَفَاتَحْتُنَّ", () => {
            expect(verbInstance.mdF2P()).toEqual("تَفَاتَحْتُنَّ");
        })
        it("mdB1() (madi 1st  person singular (both)) returns تَفَاتَحْتُ", () => {
            expect(verbInstance.mdB1()).toEqual("تَفَاتَحْتُ");
        })
        it("mdB3() (madi 1st  person all (both)) returns تَفَاتَحْنَا", () => {
            expect(verbInstance.mdB3()).toEqual("تَفَاتَحْنَا");
        })

        // madi majhul
        it("mdMjM1() (madi majhul masculine singular) returns تُفُوتِحَ", () => {
            expect(verbInstance.mdMjM1()).toEqual("تُفُوتِحَ");
        })
        it("mdMjM2() (madi majhul masculine dual) returns تُفُوتِحَا", () => {
            expect(verbInstance.mdMjM2()).toEqual("تُفُوتِحَا");
        })
        it("mdMjMP() (madi majhul masculine plural) returns تُفُوتِحُواْ", () => {
            expect(verbInstance.mdMjMP()).toEqual("تُفُوتِحُواْ");
        })
        it("mdMjF1() (madi majhul faminine singular) returns تُفُوتِحَتْ", () => {
            expect(verbInstance.mdMjF1()).toEqual("تُفُوتِحَتْ");
        })
        it("mdMjF2() (madi majhul faminine dual) returns تُفُوتِحَتَا", () => {
            expect(verbInstance.mdMjF2()).toEqual("تُفُوتِحَتَا");
        })
        it("mdMjFP() (madi majhul faminine plural) returns تُفُوتِحْنَ", () => {
            expect(verbInstance.mdMjFP()).toEqual("تُفُوتِحْنَ");
        })
        it("mdMjM21() (madi majhul masculine 2nd person singular) returns تُفُوتِحْتَ", () => {
            expect(verbInstance.mdMjM21()).toEqual("تُفُوتِحْتَ");
        })
        it("mdMjM22() (madi majhul masculine 2nd person dual) returns تُفُوتِحْتُمَا", () => {
            expect(verbInstance.mdMjM22()).toEqual("تُفُوتِحْتُمَا");
        })
        it("mdMjM2P() (madi majhul masculine 2nd person plural) returns تُفُوتِحْتُمْ", () => {
            expect(verbInstance.mdMjM2P()).toEqual("تُفُوتِحْتُمْ");
        })
        it("mdMjF21() (madi majhul feminine 2nd person singular) returns تُفُوتِحْتِ", () => {
            expect(verbInstance.mdMjF21()).toEqual("تُفُوتِحْتِ");
        })
        it("mdMjF22() (madi majhul feminine 2nd person dual) returns تُفُوتِحْتُمَا", () => {
            expect(verbInstance.mdMjF22()).toEqual("تُفُوتِحْتُمَا");
        })
        it("mdMjF2P() (madi majhul feminine 2nd person plural) returns تُفُوتِحْتُنَّ", () => {
            expect(verbInstance.mdMjF2P()).toEqual("تُفُوتِحْتُنَّ");
        })
        it("mdMjB1() (madi majhul 1st  person singular (both)) returns تُفُوتِحْتُ", () => {
            expect(verbInstance.mdMjB1()).toEqual("تُفُوتِحْتُ");
        })
        it("mdMjB3() (madi majhul 1st  person all (both)) returns تُفُوتِحْنَا", () => {
            expect(verbInstance.mdMjB3()).toEqual("تُفُوتِحْنَا");
        })

        // mudari starts here
        it("mdrM1() (mudari masculine singular) returns يَتَفَاتَحُ", () => {
            expect(verbInstance.mdrM1()).toEqual("يَتَفَاتَحُ");
        })
        it("mdrM2() (mudari masculine dual) returns يَتَفَاتَحَانِ", () => {
            expect(verbInstance.mdrM2()).toEqual("يَتَفَاتَحَانِ");
        })
        it("mdrMP() (mudari masculine plural) returns يَتَفَاتَحُوْنَ", () => {
            expect(verbInstance.mdrMP()).toEqual("يَتَفَاتَحُوْنَ");
        })
        it("mdrF1() (mudari faminine singular) returns تَتَفَاتَحُ", () => {
            expect(verbInstance.mdrF1()).toEqual("تَتَفَاتَحُ");
        })
        it("mdrF2() (mudari faminine dual) returns تَتَفَاتَحَانِ", () => {
            expect(verbInstance.mdrF2()).toEqual("تَتَفَاتَحَانِ");
        })
        it("mdrFP() (mudari faminine plural) returns يَتَفَاتَحْنَ", () => {
            expect(verbInstance.mdrFP()).toEqual("يَتَفَاتَحْنَ");
        })
        it("mdrM21() (mudari masculine 2nd person singular) returns تَتَفَاتَحُ", () => {
            expect(verbInstance.mdrM21()).toEqual("تَتَفَاتَحُ");
        })
        it("mdrM22() (mudari masculine 2nd person dual) returns تَتَفَاتَحَانِ", () => {
            expect(verbInstance.mdrM22()).toEqual("تَتَفَاتَحَانِ");
        })
        it("mdrM2P() (mudari masculine 2nd person plural) returns تَتَفَاتَحُوْنَ", () => {
            expect(verbInstance.mdrM2P()).toEqual("تَتَفَاتَحُوْنَ");
        })
        it("mdrF21() (mudari feminine 2nd person singular) returns تَتَفَاتَحِيْنَ", () => {
            expect(verbInstance.mdrF21()).toEqual("تَتَفَاتَحِيْنَ");
        })
        it("mdrF22() (mudari feminine 2nd person dual) returns تَتَفَاتَحَانِ", () => {
            expect(verbInstance.mdrF22()).toEqual("تَتَفَاتَحَانِ");
        })
        it("mdrF2P() (mudari feminine 2nd person plural) returns تَتَفَاتَحْنَ", () => {
            expect(verbInstance.mdrF2P()).toEqual("تَتَفَاتَحْنَ");
        })
        it("mdrB1() (mudari 1st  person singular (both)) returns أَتَفَاتَحُ", () => {
            expect(verbInstance.mdrB1()).toEqual("أَتَفَاتَحُ");
        })
        it("mdrB3() (mudari 1st  person all (both)) returns نَتَفَاتَحُ", () => {
            expect(verbInstance.mdrB3()).toEqual("نَتَفَاتَحُ");
        })

        // mudari majhul
        it("mdrMjM1() (mudari majhul masculine singular) returns يُتَفَاتَحُ", () => {
            expect(verbInstance.mdrMjM1()).toEqual("يُتَفَاتَحُ");
        })
        it("mdrMjM2() (mudari majhul masculine dual) returns يُتَفَاتَحَانِ", () => {
            expect(verbInstance.mdrMjM2()).toEqual("يُتَفَاتَحَانِ");
        })
        it("mdrMjMP() (mudari majhul masculine plural) returns يُتَفَاتَحُوْنَ", () => {
            expect(verbInstance.mdrMjMP()).toEqual("يُتَفَاتَحُوْنَ");
        })
        it("mdrMjF1() (mudari majhul faminine singular) returns تُتَفَاتَحُ", () => {
            expect(verbInstance.mdrMjF1()).toEqual("تُتَفَاتَحُ");
        })
        it("mdrMjF2() (mudari majhul faminine dual) returns تُتَفَاتَحَانِ", () => {
            expect(verbInstance.mdrMjF2()).toEqual("تُتَفَاتَحَانِ");
        })
        it("mdrMjFP() (mudari majhul faminine plural) returns يُتَفَاتَحْنَ", () => {
            expect(verbInstance.mdrMjFP()).toEqual("يُتَفَاتَحْنَ");
        })
        it("mdrMjM21() (mudari majhul masculine 2nd person singular) returns تُتَفَاتَحُ", () => {
            expect(verbInstance.mdrMjM21()).toEqual("تُتَفَاتَحُ");
        })
        it("mdrMjM22() (mudari majhul masculine 2nd person dual) returns تُتَفَاتَحَانِ", () => {
            expect(verbInstance.mdrMjM22()).toEqual("تُتَفَاتَحَانِ");
        })
        it("mdrMjM2P() (mudari majhul masculine 2nd person plural) returns تُتَفَاتَحُوْنَ", () => {
            expect(verbInstance.mdrMjM2P()).toEqual("تُتَفَاتَحُوْنَ");
        })
        it("mdrMjF21() (mudari majhul feminine 2nd person singular) returns تُتَفَاتَحِيْنَ", () => {
            expect(verbInstance.mdrMjF21()).toEqual("تُتَفَاتَحِيْنَ");
        })
        it("mdrMjF22() (mudari majhul feminine 2nd person dual) returns تُتَفَاتَحَانِ", () => {
            expect(verbInstance.mdrMjF22()).toEqual("تُتَفَاتَحَانِ");
        })
        it("mdrMjF2P() (mudari majhul feminine 2nd person plural) returns تُتَفَاتَحْنَ", () => {
            expect(verbInstance.mdrMjF2P()).toEqual("تُتَفَاتَحْنَ");
        })
        it("mdrMjB1() (mudari majhul 1st  person singular (both)) returns أُتَفَاتَحُ", () => {
            expect(verbInstance.mdrMjB1()).toEqual("أُتَفَاتَحُ");
        })
        it("mdrMjB3() (mudari majhul 1st  person all (both)) returns نُتَفَاتَحُ", () => {
            expect(verbInstance.mdrMjB3()).toEqual("نُتَفَاتَحُ");
        })

        it("ismF() (Ism fa'eel) returns مُتَفَاتِحٌ", () => {
            expect(verbInstance.ismF()).toEqual("مُتَفَاتِحٌ");
        })
        it("ismMfl() (Ism maf'ul) returns مُتَفَاتَحً", () => {
            expect(verbInstance.ismMfl()).toEqual("مُتَفَاتَحً");
        })
        // amr
        it("amrM1() (fel amr masculine singular) returns تَفَاتَحْ", () => {
            expect(verbInstance.amrM1()).toEqual("تَفَاتَحْ");
        })
        it("amrM2() (fel amr masculine dual) returns تَفَاتَحَا", () => {
            expect(verbInstance.amrM2()).toEqual("تَفَاتَحَا");
        })
        it("amrMP() (fel amr masculine plural) returns تَفَاتَحُواْ", () => {
            expect(verbInstance.amrMP()).toEqual("تَفَاتَحُواْ");
        })
        it("amrF1() (fel amr feminine singular) returns تَفَاتَحِيْ", () => {
            expect(verbInstance.amrF1()).toEqual("تَفَاتَحِيْ");
        })
        it("amrF2() (fel amr feminine dual) returns تَفَاتَحَا", () => {
            expect(verbInstance.amrF2()).toEqual("تَفَاتَحَا");
        })
        it("amrFP() (fel amr feminine plural) returns تَفَاتَحْنَ", () => {
            expect(verbInstance.amrFP()).toEqual("تَفَاتَحْنَ");
        })
        // nahi
        it("nahiM1() (fel nahi masculine singular) returns لاَ تَتَفَاتَحْ", () => {
            expect(verbInstance.nahiM1()).toEqual("لاَ تَتَفَاتَحْ");
        })
        it("nahiM2() (fel nahi masculine dual) returns لاَ تَتَفَاتَحَا", () => {
            expect(verbInstance.nahiM2()).toEqual("لاَ تَتَفَاتَحَا");
        })
        it("nahiMP() (fel nahi masculine plural) returns لاَ تَتَفَاتَحُواْ", () => {
            expect(verbInstance.nahiMP()).toEqual("لاَ تَتَفَاتَحُواْ");
        })
        it("nahiF1() (fel nahi feminine singular) returns لاَ تَتَفَاتَحِيْ", () => {
            expect(verbInstance.nahiF1()).toEqual("لاَ تَتَفَاتَحِيْ");
        })
        it("nahiF2() (fel nahi feminine dual) returns لاَ تَتَفَاتَحَا", () => {
            expect(verbInstance.nahiF2()).toEqual("لاَ تَتَفَاتَحَا");
        })
        it("nahiFP() (fel nahi feminine plural) returns لاَ تَتَفَاتَحْنَ", () => {
            expect(verbInstance.nahiFP()).toEqual("لاَ تَتَفَاتَحْنَ");
        })
        it("msdr() (masder) returns تَفَاتُحٌ", () => {
            expect(verbInstance.msdr()).toEqual("تَفَاتُحٌ");
        })
        it("zarf() (fel nahi feminine plural) returns مُتَفَاتَحً", () => {
            expect(verbInstance.zarf()).toEqual("مُتَفَاتَحً");
        })
    });

})
