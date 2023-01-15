import {verbFormInst} from "../../VerbForms";

let verbInstance;
describe("Form-III", () => {

    describe("root `ف ت ح`", () => {
        beforeEach(() => {
            const root = "ف ت ح";
            verbInstance = verbFormInst({
                form: 'III', root
            })
        })

        it("mdM1() (madi masculine singular) returns فَاتَحَ", () => {
            expect(verbInstance.mdM1()).toEqual("فَاتَحَ");
        })
        it("mdM2() (madi masculine dual) returns فَاتَحَا", () => {
            expect(verbInstance.mdM2()).toEqual("فَاتَحَا");
        })
        it("mdMP() (madi masculine plural) returns فَاتَحُوْا", () => {
            expect(verbInstance.mdMP()).toEqual("فَاتَحُوْا");
        })
        it("mdF1() (madi faminine singular) returns فَاتَحَتْ", () => {
            expect(verbInstance.mdF1()).toEqual("فَاتَحَتْ");
        })
        it("mdF2() (madi faminine dual) returns فَاتَحَتَا", () => {
            expect(verbInstance.mdF2()).toEqual("فَاتَحَتَا");
        })
        it("mdFP() (madi faminine plural) returns فَاتَحْنَ", () => {
            expect(verbInstance.mdFP()).toEqual("فَاتَحْنَ");
        })
        it("mdM21() (madi masculine 2nd person singular) returns فَاتَحْتَ", () => {
            expect(verbInstance.mdM21()).toEqual("فَاتَحْتَ");
        })
        it("mdM22() (madi masculine 2nd person dual) returns فَاتَحْتُمَا", () => {
            expect(verbInstance.mdM22()).toEqual("فَاتَحْتُمَا");
        })
        it("mdM2P() (madi masculine 2nd person plural) returns فَاتَحْتُمْ", () => {
            expect(verbInstance.mdM2P()).toEqual("فَاتَحْتُمْ");
        })
        it("mdF21() (madi feminine 2nd person singular) returns فَاتَحْتِ", () => {
            expect(verbInstance.mdF21()).toEqual("فَاتَحْتِ");
        })
        it("mdF22() (madi feminine 2nd person dual) returns فَاتَحْتُمَا", () => {
            expect(verbInstance.mdF22()).toEqual("فَاتَحْتُمَا");
        })
        it("mdF2P() (madi feminine 2nd person plural) returns فَاتَحْتُنَّ", () => {
            expect(verbInstance.mdF2P()).toEqual("فَاتَحْتُنَّ");
        })
        it("mdB1() (madi 1st  person singular (both)) returns فَاتَحْتُ", () => {
            expect(verbInstance.mdB1()).toEqual("فَاتَحْتُ");
        })
        it("mdB3() (madi 1st  person all (both)) returns فَاتَحْنَا", () => {
            expect(verbInstance.mdB3()).toEqual("فَاتَحْنَا");
        })

        // madi majhul
        it("mdMjM1() (madi majhul masculine singular) returns فُوتِحَ", () => {
            expect(verbInstance.mdMjM1()).toEqual("فُوتِحَ");
        })
        it("mdMjM2() (madi majhul masculine dual) returns فُوتِحَا", () => {
            expect(verbInstance.mdMjM2()).toEqual("فُوتِحَا");
        })
        it("mdMjMP() (madi majhul masculine plural) returns فُوتِحُوْا", () => {
            expect(verbInstance.mdMjMP()).toEqual("فُوتِحُوْا");
        })
        it("mdMjF1() (madi majhul faminine singular) returns فُوتِحَتْ", () => {
            expect(verbInstance.mdMjF1()).toEqual("فُوتِحَتْ");
        })
        it("mdMjF2() (madi majhul faminine dual) returns فُوتِحَتَا", () => {
            expect(verbInstance.mdMjF2()).toEqual("فُوتِحَتَا");
        })
        it("mdMjFP() (madi majhul faminine plural) returns فُوتِحْنَ", () => {
            expect(verbInstance.mdMjFP()).toEqual("فُوتِحْنَ");
        })
        it("mdMjM21() (madi majhul masculine 2nd person singular) returns فُوتِحْتَ", () => {
            expect(verbInstance.mdMjM21()).toEqual("فُوتِحْتَ");
        })
        it("mdMjM22() (madi majhul masculine 2nd person dual) returns فُوتِحْتُمَا", () => {
            expect(verbInstance.mdMjM22()).toEqual("فُوتِحْتُمَا");
        })
        it("mdMjM2P() (madi majhul masculine 2nd person plural) returns فُوتِحْتُمْ", () => {
            expect(verbInstance.mdMjM2P()).toEqual("فُوتِحْتُمْ");
        })
        it("mdMjF21() (madi majhul feminine 2nd person singular) returns فُوتِحْتِ", () => {
            expect(verbInstance.mdMjF21()).toEqual("فُوتِحْتِ");
        })
        it("mdMjF22() (madi majhul feminine 2nd person dual) returns فُوتِحْتُمَا", () => {
            expect(verbInstance.mdMjF22()).toEqual("فُوتِحْتُمَا");
        })
        it("mdMjF2P() (madi majhul feminine 2nd person plural) returns فُوتِحْتُنَّ", () => {
            expect(verbInstance.mdMjF2P()).toEqual("فُوتِحْتُنَّ");
        })
        it("mdMjB1() (madi majhul 1st  person singular (both)) returns فُوتِحْتُ", () => {
            expect(verbInstance.mdMjB1()).toEqual("فُوتِحْتُ");
        })
        it("mdMjB3() (madi majhul 1st  person all (both)) returns فُوتِحْنَا", () => {
            expect(verbInstance.mdMjB3()).toEqual("فُوتِحْنَا");
        })

        // mudari starts here
        it("mdrM1() (mudari masculine singular) returns يُفَاتِحُ", () => {
            expect(verbInstance.mdrM1()).toEqual("يُفَاتِحُ");
        })
        it("mdrM2() (mudari masculine dual) returns يُفَاتِحَانِ", () => {
            expect(verbInstance.mdrM2()).toEqual("يُفَاتِحَانِ");
        })
        it("mdrMP() (mudari masculine plural) returns يَفْتَحُوْنَ", () => {
            expect(verbInstance.mdrMP()).toEqual("يُفَاتِحُوْنَ");
        })
        it("mdrF1() (mudari faminine singular) returns تُفَاتِحُ", () => {
            expect(verbInstance.mdrF1()).toEqual("تُفَاتِحُ");
        })
        it("mdrF2() (mudari faminine dual) returns تُفَاتِحَانِ", () => {
            expect(verbInstance.mdrF2()).toEqual("تُفَاتِحَانِ");
        })
        it("mdrFP() (mudari faminine plural) returns يُفَاتِحْنَ", () => {
            expect(verbInstance.mdrFP()).toEqual("يُفَاتِحْنَ");
        })
        it("mdrM21() (mudari masculine 2nd person singular) returns تُفَاتِحُ", () => {
            expect(verbInstance.mdrM21()).toEqual("تُفَاتِحُ");
        })
        it("mdrM22() (mudari masculine 2nd person dual) returns تُفَاتِحَانِ", () => {
            expect(verbInstance.mdrM22()).toEqual("تُفَاتِحَانِ");
        })
        it("mdrM2P() (mudari masculine 2nd person plural) returns تُفَاتِحُوْنَ", () => {
            expect(verbInstance.mdrM2P()).toEqual("تُفَاتِحُوْنَ");
        })
        it("mdrF21() (mudari feminine 2nd person singular) returns تُفَاتِحِيْنَ", () => {
            expect(verbInstance.mdrF21()).toEqual("تُفَاتِحِيْنَ");
        })
        it("mdrF22() (mudari feminine 2nd person dual) returns تُفَاتِحَانِ", () => {
            expect(verbInstance.mdrF22()).toEqual("تُفَاتِحَانِ");
        })
        it("mdrF2P() (mudari feminine 2nd person plural) returns تُفَاتِحْنَ", () => {
            expect(verbInstance.mdrF2P()).toEqual("تُفَاتِحْنَ");
        })
        it("mdrB1() (mudari 1st  person singular (both)) returns أُفَاتِحُ", () => {
            expect(verbInstance.mdrB1()).toEqual("أُفَاتِحُ");
        })
        it("mdrB3() (mudari 1st  person all (both)) returns نُفَاتِحُ", () => {
            expect(verbInstance.mdrB3()).toEqual("نُفَاتِحُ");
        })

        // mudari majhul
        it("mdrMjM1() (mudari majhul masculine singular) returns يُفَاتَحُ", () => {
            expect(verbInstance.mdrMjM1()).toEqual("يُفَاتَحُ");
        })
        it("mdrMjM2() (mudari majhul masculine dual) returns يُفَاتَحَانِ", () => {
            expect(verbInstance.mdrMjM2()).toEqual("يُفَاتَحَانِ");
        })
        it("mdrMjMP() (mudari majhul masculine plural) returns يُفَاتَحُوْنَ", () => {
            expect(verbInstance.mdrMjMP()).toEqual("يُفَاتَحُوْنَ");
        })
        it("mdrMjF1() (mudari majhul faminine singular) returns تُفَاتَحُ", () => {
            expect(verbInstance.mdrMjF1()).toEqual("تُفَاتَحُ");
        })
        it("mdrMjF2() (mudari majhul faminine dual) returns تُفَاتَحَانِ", () => {
            expect(verbInstance.mdrMjF2()).toEqual("تُفَاتَحَانِ");
        })
        it("mdrMjFP() (mudari majhul faminine plural) returns يُفَاتَحْنَ", () => {
            expect(verbInstance.mdrMjFP()).toEqual("يُفَاتَحْنَ");
        })
        it("mdrMjM21() (mudari majhul masculine 2nd person singular) returns تُفَاتَحُ", () => {
            expect(verbInstance.mdrMjM21()).toEqual("تُفَاتَحُ");
        })
        it("mdrMjM22() (mudari majhul masculine 2nd person dual) returns تُفَاتَحَانِ", () => {
            expect(verbInstance.mdrMjM22()).toEqual("تُفَاتَحَانِ");
        })
        it("mdrMjM2P() (mudari majhul masculine 2nd person plural) returns تُفَاتَحُوْنَ", () => {
            expect(verbInstance.mdrMjM2P()).toEqual("تُفَاتَحُوْنَ");
        })
        it("mdrMjF21() (mudari majhul feminine 2nd person singular) returns تُفَاتَحِيْنَ", () => {
            expect(verbInstance.mdrMjF21()).toEqual("تُفَاتَحِيْنَ");
        })
        it("mdrMjF22() (mudari majhul feminine 2nd person dual) returns تُفَاتَحَانِ", () => {
            expect(verbInstance.mdrMjF22()).toEqual("تُفَاتَحَانِ");
        })
        it("mdrMjF2P() (mudari majhul feminine 2nd person plural) returns تُفَاتَحْنَ", () => {
            expect(verbInstance.mdrMjF2P()).toEqual("تُفَاتَحْنَ");
        })
        it("mdrMjB1() (mudari majhul 1st  person singular (both)) returns أُفَاتَحُ", () => {
            expect(verbInstance.mdrMjB1()).toEqual("أُفَاتَحُ");
        })
        it("mdrMjB3() (mudari majhul 1st  person all (both)) returns نُفَاتَحُ", () => {
            expect(verbInstance.mdrMjB3()).toEqual("نُفَاتَحُ");
        })

        it("ismF() (Ism fa'eel) returns مُفَاتِحٌ", () => {
            expect(verbInstance.ismF()).toEqual("مُفَاتِحٌ");
        })
        it("ismMfl() (Ism maf'ul) returns مُفَاتِحً", () => {
            expect(verbInstance.ismMfl()).toEqual("مُفَاتِحً");
        })
        // amr
        it("amrM1() (fel amr masculine singular) returns فَاتِحْ", () => {
            expect(verbInstance.amrM1()).toEqual("فَاتِحْ");
        })
        it("amrM2() (fel amr masculine dual) returns فَاتِحَا", () => {
            expect(verbInstance.amrM2()).toEqual("فَاتِحَا");
        })
        it("amrMP() (fel amr masculine plural) returns فَاتِحُوْا", () => {
            expect(verbInstance.amrMP()).toEqual("فَاتِحُوْا");
        })
        it("amrF1() (fel amr feminine singular) returns فَاتِحِيْ", () => {
            expect(verbInstance.amrF1()).toEqual("فَاتِحِيْ");
        })
        it("amrF2() (fel amr feminine dual) returns فَاتِحَا", () => {
            expect(verbInstance.amrF2()).toEqual("فَاتِحَا");
        })
        it("amrFP() (fel amr feminine plural) returns فَاتِحْنَ", () => {
            expect(verbInstance.amrFP()).toEqual("فَاتِحْنَ");
        })
        // nahi
        it("nahiM1() (fel nahi masculine singular) returns لاَ تُفَاتِحْ", () => {
            expect(verbInstance.nahiM1()).toEqual("لاَ تُفَاتِحْ");
        })
        it("nahiM2() (fel nahi masculine dual) returns لاَ تُفَاتِحَا", () => {
            expect(verbInstance.nahiM2()).toEqual("لاَ تُفَاتِحَا");
        })
        it("nahiMP() (fel nahi masculine plural) returns لاَ تُفَاتِحُوْا", () => {
            expect(verbInstance.nahiMP()).toEqual("لاَ تُفَاتِحُوْا");
        })
        it("nahiF1() (fel nahi feminine singular) returns لاَ تُفَاتِحِيْ", () => {
            expect(verbInstance.nahiF1()).toEqual("لاَ تُفَاتِحِيْ");
        })
        it("nahiF2() (fel nahi feminine dual) returns لاَ تُفَاتِحَا", () => {
            expect(verbInstance.nahiF2()).toEqual("لاَ تُفَاتِحَا");
        })
        it("nahiFP() (fel nahi feminine plural) returns لاَ تُفَاتِحْنَ", () => {
            expect(verbInstance.nahiFP()).toEqual("لاَ تُفَاتِحْنَ");
        })
        it("msdr() (masder) returns اِفْتَاح", () => {
            expect(verbInstance.msdr()).toEqual("اِفْتَاح");
        })
        it("zarf() (fel nahi feminine plural) returns مُفَاتِحً", () => {
            expect(verbInstance.zarf()).toEqual("مُفَاتِحً");
        })

    });

})
