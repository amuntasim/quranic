import {verbFormInst} from "../../VerbForms";

let verbInstance;
describe("Form-V", () => {

    describe("root `ف ت ح`", () => {
        beforeEach(() => {
            const root = "ف ت ح";
            verbInstance = verbFormInst({
                form: 'V', root
            })
        })

        it("mdM1() (madi masculine singular) returns تَفَتَّحَ", () => {
            expect(verbInstance.mdM1()).toEqual("تَفَتَّحَ");
        })
        it("mdM2() (madi masculine dual) returns تَفَتَّحَا", () => {
            expect(verbInstance.mdM2()).toEqual("تَفَتَّحَا");
        })
        it("mdMP() (madi masculine plural) returns تَفَتَّحُوْا", () => {
            expect(verbInstance.mdMP()).toEqual("تَفَتَّحُوْا");
        })
        it("mdF1() (madi faminine singular) returns تَفَتَّحَتْ", () => {
            expect(verbInstance.mdF1()).toEqual("تَفَتَّحَتْ");
        })
        it("mdF2() (madi faminine dual) returns تَفَتَّحَتَا", () => {
            expect(verbInstance.mdF2()).toEqual("تَفَتَّحَتَا");
        })
        it("mdFP() (madi faminine plural) returns تَفَتَّحْنَ", () => {
            expect(verbInstance.mdFP()).toEqual("تَفَتَّحْنَ");
        })
        it("mdM21() (madi masculine 2nd person singular) returns تَفَتَّحْتَ", () => {
            expect(verbInstance.mdM21()).toEqual("تَفَتَّحْتَ");
        })
        it("mdM22() (madi masculine 2nd person dual) returns تَفَتَّحْتُمَا", () => {
            expect(verbInstance.mdM22()).toEqual("تَفَتَّحْتُمَا");
        })
        it("mdM2P() (madi masculine 2nd person plural) returns تَفَتَّحْتُمْ", () => {
            expect(verbInstance.mdM2P()).toEqual("تَفَتَّحْتُمْ");
        })
        it("mdF21() (madi feminine 2nd person singular) returns تَفَتَّحْتِ", () => {
            expect(verbInstance.mdF21()).toEqual("تَفَتَّحْتِ");
        })
        it("mdF22() (madi feminine 2nd person dual) returns تَفَتَّحْتُمَا", () => {
            expect(verbInstance.mdF22()).toEqual("تَفَتَّحْتُمَا");
        })
        it("mdF2P() (madi feminine 2nd person plural) returns تَفَتَّحْتُنَّ", () => {
            expect(verbInstance.mdF2P()).toEqual("تَفَتَّحْتُنَّ");
        })
        it("mdB1() (madi 1st  person singular (both)) returns تَفَتَّحْتُ", () => {
            expect(verbInstance.mdB1()).toEqual("تَفَتَّحْتُ");
        })
        it("mdB3() (madi 1st  person all (both)) returns تَفَتَّحْنَا", () => {
            expect(verbInstance.mdB3()).toEqual("تَفَتَّحْنَا");
        })

        // madi majhul
        it("mdMjM1() (madi majhul masculine singular) returns تُفُتِّحَ", () => {
            expect(verbInstance.mdMjM1()).toEqual("تُفُتِّحَ");
        })
        it("mdMjM2() (madi majhul masculine dual) returns تُفُتِّحَا", () => {
            expect(verbInstance.mdMjM2()).toEqual("تُفُتِّحَا");
        })
        it("mdMjMP() (madi majhul masculine plural) returns تُفُتِّحُوْا", () => {
            expect(verbInstance.mdMjMP()).toEqual("تُفُتِّحُوْا");
        })
        it("mdMjF1() (madi majhul faminine singular) returns تُفُتِّحَتْ", () => {
            expect(verbInstance.mdMjF1()).toEqual("تُفُتِّحَتْ");
        })
        it("mdMjF2() (madi majhul faminine dual) returns تُفُتِّحَتَا", () => {
            expect(verbInstance.mdMjF2()).toEqual("تُفُتِّحَتَا");
        })
        it("mdMjFP() (madi majhul faminine plural) returns تُفُتِّحْنَ", () => {
            expect(verbInstance.mdMjFP()).toEqual("تُفُتِّحْنَ");
        })
        it("mdMjM21() (madi majhul masculine 2nd person singular) returns تُفُتِّحْتَ", () => {
            expect(verbInstance.mdMjM21()).toEqual("تُفُتِّحْتَ");
        })
        it("mdMjM22() (madi majhul masculine 2nd person dual) returns تُفُتِّحْتُمَا", () => {
            expect(verbInstance.mdMjM22()).toEqual("تُفُتِّحْتُمَا");
        })
        it("mdMjM2P() (madi majhul masculine 2nd person plural) returns تُفُتِّحْتُمْ", () => {
            expect(verbInstance.mdMjM2P()).toEqual("تُفُتِّحْتُمْ");
        })
        it("mdMjF21() (madi majhul feminine 2nd person singular) returns تُفُتِّحْتِ", () => {
            expect(verbInstance.mdMjF21()).toEqual("تُفُتِّحْتِ");
        })
        it("mdMjF22() (madi majhul feminine 2nd person dual) returns تُفُتِّحْتُمَا", () => {
            expect(verbInstance.mdMjF22()).toEqual("تُفُتِّحْتُمَا");
        })
        it("mdMjF2P() (madi majhul feminine 2nd person plural) returns تُفُتِّحْتُنَّ", () => {
            expect(verbInstance.mdMjF2P()).toEqual("تُفُتِّحْتُنَّ");
        })
        it("mdMjB1() (madi majhul 1st  person singular (both)) returns تُفُتِّحْتُ", () => {
            expect(verbInstance.mdMjB1()).toEqual("تُفُتِّحْتُ");
        })
        it("mdMjB3() (madi majhul 1st  person all (both)) returns تُفُتِّحْنَا", () => {
            expect(verbInstance.mdMjB3()).toEqual("تُفُتِّحْنَا");
        })

        // mudari starts here
        it("mdrM1() (mudari masculine singular) returns يَتَفَتَّحُ", () => {
            expect(verbInstance.mdrM1()).toEqual("يَتَفَتَّحُ");
        })
        it("mdrM2() (mudari masculine dual) returns يَتَفَتَّحَانِ", () => {
            expect(verbInstance.mdrM2()).toEqual("يَتَفَتَّحَانِ");
        })
        it("mdrMP() (mudari masculine plural) returns يَتَفَتَّحُوْنَ", () => {
            expect(verbInstance.mdrMP()).toEqual("يَتَفَتَّحُوْنَ");
        })
        it("mdrF1() (mudari faminine singular) returns تَتَفَتَّحُ", () => {
            expect(verbInstance.mdrF1()).toEqual("تَتَفَتَّحُ");
        })
        it("mdrF2() (mudari faminine dual) returns تَتَفَتَّحَانِ", () => {
            expect(verbInstance.mdrF2()).toEqual("تَتَفَتَّحَانِ");
        })
        it("mdrFP() (mudari faminine plural) returns يَتَفَتَّحْنَ", () => {
            expect(verbInstance.mdrFP()).toEqual("يَتَفَتَّحْنَ");
        })
        it("mdrM21() (mudari masculine 2nd person singular) returns تَتَفَتَّحُ", () => {
            expect(verbInstance.mdrM21()).toEqual("تَتَفَتَّحُ");
        })
        it("mdrM22() (mudari masculine 2nd person dual) returns تَتَفَتَّحَانِ", () => {
            expect(verbInstance.mdrM22()).toEqual("تَتَفَتَّحَانِ");
        })
        it("mdrM2P() (mudari masculine 2nd person plural) returns تَتَفَتَّحُوْنَ", () => {
            expect(verbInstance.mdrM2P()).toEqual("تَتَفَتَّحُوْنَ");
        })
        it("mdrF21() (mudari feminine 2nd person singular) returns تَتَفَتَّحِيْنَ", () => {
            expect(verbInstance.mdrF21()).toEqual("تَتَفَتَّحِيْنَ");
        })
        it("mdrF22() (mudari feminine 2nd person dual) returns تَتَفَتَّحَانِ", () => {
            expect(verbInstance.mdrF22()).toEqual("تَتَفَتَّحَانِ");
        })
        it("mdrF2P() (mudari feminine 2nd person plural) returns تَتَفَتَّحْنَ", () => {
            expect(verbInstance.mdrF2P()).toEqual("تَتَفَتَّحْنَ");
        })
        it("mdrB1() (mudari 1st  person singular (both)) returns أَتَفَتَّحُ", () => {
            expect(verbInstance.mdrB1()).toEqual("أَتَفَتَّحُ");
        })
        it("mdrB3() (mudari 1st  person all (both)) returns نَتَفَتَّحُ", () => {
            expect(verbInstance.mdrB3()).toEqual("نَتَفَتَّحُ");
        })

        // mudari majhul
        it("mdrMjM1() (mudari majhul masculine singular) returns يُتَفَتَّحُ", () => {
            expect(verbInstance.mdrMjM1()).toEqual("يُتَفَتَّحُ");
        })
        it("mdrMjM2() (mudari majhul masculine dual) returns يُتَفَتَّحَانِ", () => {
            expect(verbInstance.mdrMjM2()).toEqual("يُتَفَتَّحَانِ");
        })
        it("mdrMjMP() (mudari majhul masculine plural) returns يُتَفَتَّحُوْنَ", () => {
            expect(verbInstance.mdrMjMP()).toEqual("يُتَفَتَّحُوْنَ");
        })
        it("mdrMjF1() (mudari majhul faminine singular) returns تُتَفَتَّحُ", () => {
            expect(verbInstance.mdrMjF1()).toEqual("تُتَفَتَّحُ");
        })
        it("mdrMjF2() (mudari majhul faminine dual) returns تُتَفَتَّحَانِ", () => {
            expect(verbInstance.mdrMjF2()).toEqual("تُتَفَتَّحَانِ");
        })
        it("mdrMjFP() (mudari majhul faminine plural) returns يُتَفَتَّحْنَ", () => {
            expect(verbInstance.mdrMjFP()).toEqual("يُتَفَتَّحْنَ");
        })
        it("mdrMjM21() (mudari majhul masculine 2nd person singular) returns تُتَفَتَّحُ", () => {
            expect(verbInstance.mdrMjM21()).toEqual("تُتَفَتَّحُ");
        })
        it("mdrMjM22() (mudari majhul masculine 2nd person dual) returns تُتَفَتَّحَانِ", () => {
            expect(verbInstance.mdrMjM22()).toEqual("تُتَفَتَّحَانِ");
        })
        it("mdrMjM2P() (mudari majhul masculine 2nd person plural) returns تُتَفَتَّحُوْنَ", () => {
            expect(verbInstance.mdrMjM2P()).toEqual("تُتَفَتَّحُوْنَ");
        })
        it("mdrMjF21() (mudari majhul feminine 2nd person singular) returns تُتَفَتَّحِيْنَ", () => {
            expect(verbInstance.mdrMjF21()).toEqual("تُتَفَتَّحِيْنَ");
        })
        it("mdrMjF22() (mudari majhul feminine 2nd person dual) returns تُتَفَتَّحَانِ", () => {
            expect(verbInstance.mdrMjF22()).toEqual("تُتَفَتَّحَانِ");
        })
        it("mdrMjF2P() (mudari majhul feminine 2nd person plural) returns تُفْتَحْنَ", () => {
            expect(verbInstance.mdrMjF2P()).toEqual("تُتَفَتَّحْنَ");
        })
        it("mdrMjB1() (mudari majhul 1st  person singular (both)) returns أُتَفَتَّحُ", () => {
            expect(verbInstance.mdrMjB1()).toEqual("أُتَفَتَّحُ");
        })
        it("mdrMjB3() (mudari majhul 1st  person all (both)) returns نُتَفَتَّحُ", () => {
            expect(verbInstance.mdrMjB3()).toEqual("نُتَفَتَّحُ");
        })

        it("ismF() (Ism fa'eel) returns مُتَفَتِّحٌ", () => {
            expect(verbInstance.ismF()).toEqual("مُتَفَتِّحٌ");
        })
        it("ismMfl() (Ism maf'ul) returns مُتَفَتَّحً", () => {
            expect(verbInstance.ismMfl()).toEqual("مُتَفَتَّحً");
        })
        // amr
        it("amrM1() (fel amr masculine singular) returns تَفَتَّحْ", () => {
            expect(verbInstance.amrM1()).toEqual("تَفَتَّحْ");
        })
        it("amrM2() (fel amr masculine dual) returns تَفَتَّحَا", () => {
            expect(verbInstance.amrM2()).toEqual("تَفَتَّحَا");
        })
        it("amrMP() (fel amr masculine plural) returns تَفَتَّحُوْا", () => {
            expect(verbInstance.amrMP()).toEqual("تَفَتَّحُوْا");
        })
        it("amrF1() (fel amr feminine singular) returns تَفَتَّحِيْ", () => {
            expect(verbInstance.amrF1()).toEqual("تَفَتَّحِيْ");
        })
        it("amrF2() (fel amr feminine dual) returns تَفَتَّحَا", () => {
            expect(verbInstance.amrF2()).toEqual("تَفَتَّحَا");
        })
        it("amrFP() (fel amr feminine plural) returns تَفَتَّحْنَ", () => {
            expect(verbInstance.amrFP()).toEqual("تَفَتَّحْنَ");
        })
        // nahi
        it("nahiM1() (fel nahi masculine singular) returns لاَ تَتَفَتَّحْ", () => {
            expect(verbInstance.nahiM1()).toEqual("لاَ تَتَفَتَّحْ");
        })
        it("nahiM2() (fel nahi masculine dual) returns لاَ تَتَفَتَّحَا", () => {
            expect(verbInstance.nahiM2()).toEqual("لاَ تَتَفَتَّحَا");
        })
        it("nahiMP() (fel nahi masculine plural) returns لاَ تَتَفَتَّحُوْا", () => {
            expect(verbInstance.nahiMP()).toEqual("لاَ تَتَفَتَّحُوْا");
        })
        it("nahiF1() (fel nahi feminine singular) returns لاَ تَتَفَتَّحِيْ", () => {
            expect(verbInstance.nahiF1()).toEqual("لاَ تَتَفَتَّحِيْ");
        })
        it("nahiF2() (fel nahi feminine dual) returns لاَ تَتَفَتَّحَا", () => {
            expect(verbInstance.nahiF2()).toEqual("لاَ تَتَفَتَّحَا");
        })
        it("nahiFP() (fel nahi feminine plural) returns لاَ تَتَفَتَّحْنَ", () => {
            expect(verbInstance.nahiFP()).toEqual("لاَ تَتَفَتَّحْنَ");
        })
        it("msdr() (masder) returns تَفَتُّحٌ", () => {
            expect(verbInstance.msdr()).toEqual("تَفَتُّحٌ");
        })
        it("zarf() (fel nahi feminine plural) returns مُتَفَتَّحً", () => {
            expect(verbInstance.zarf()).toEqual("مُتَفَتَّحً");
        })

    });

})
