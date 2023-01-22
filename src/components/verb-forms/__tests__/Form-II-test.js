import {verbFormInst} from "../../VerbForms";

let verbInstance;
describe("Form-II", () => {

    describe("root `ف ت ح`", () => {
        beforeEach(() => {
            const root = "ف ت ح";
            verbInstance = verbFormInst({
                form: 'II', root
            })
        })

        it("mdM1() (madi masculine singular) returns فَتَّحَ", () => {
            expect(verbInstance.mdM1()).toEqual("فَتَّحَ");
        })
        it("mdM2() (madi masculine dual) returns فَتَّحَا", () => {
            expect(verbInstance.mdM2()).toEqual("فَتَّحَا");
        })
        it("mdMP() (madi masculine plural) returns فَتَّحُواْ", () => {
            expect(verbInstance.mdMP()).toEqual("فَتَّحُواْ");
        })
        it("mdF1() (madi faminine singular) returns فَتَّحَتْ", () => {
            expect(verbInstance.mdF1()).toEqual("فَتَّحَتْ");
        })
        it("mdF2() (madi faminine dual) returns فَتَّحَتَا", () => {
            expect(verbInstance.mdF2()).toEqual("فَتَّحَتَا");
        })
        it("mdFP() (madi faminine plural) returns فَتَّحْنَ", () => {
            expect(verbInstance.mdFP()).toEqual("فَتَّحْنَ");
        })
        it("mdM21() (madi masculine 2nd person singular) returns فَتَّحْتَ", () => {
            expect(verbInstance.mdM21()).toEqual("فَتَّحْتَ");
        })
        it("mdM22() (madi masculine 2nd person dual) returns فَتَّحْتُمَا", () => {
            expect(verbInstance.mdM22()).toEqual("فَتَّحْتُمَا");
        })
        it("mdM2P() (madi masculine 2nd person plural) returns فَتَّحْتُمْ", () => {
            expect(verbInstance.mdM2P()).toEqual("فَتَّحْتُمْ");
        })
        it("mdF21() (madi feminine 2nd person singular) returns فَتَّحْتِ", () => {
            expect(verbInstance.mdF21()).toEqual("فَتَّحْتِ");
        })
        it("mdF22() (madi feminine 2nd person dual) returns فَتَّحْتُمَا", () => {
            expect(verbInstance.mdF22()).toEqual("فَتَّحْتُمَا");
        })
        it("mdF2P() (madi feminine 2nd person plural) returns فَتَّحْتُنَّ", () => {
            expect(verbInstance.mdF2P()).toEqual("فَتَّحْتُنَّ");
        })
        it("mdB1() (madi 1st  person singular (both)) returns فَتَّحْتُ", () => {
            expect(verbInstance.mdB1()).toEqual("فَتَّحْتُ");
        })
        it("mdB3() (madi 1st  person all (both)) returns فَتَّحْنَا", () => {
            expect(verbInstance.mdB3()).toEqual("فَتَّحْنَا");
        })

        // madi majhul
        it("mdMjM1() (madi majhul masculine singular) returns فُتِّحَ", () => {
            expect(verbInstance.mdMjM1()).toEqual("فُتِّحَ");
        })
        it("mdMjM2() (madi majhul masculine dual) returns فُتِّحَا", () => {
            expect(verbInstance.mdMjM2()).toEqual("فُتِّحَا");
        })
        it("mdMjMP() (madi majhul masculine plural) returns فُتِّحُواْ", () => {
            expect(verbInstance.mdMjMP()).toEqual("فُتِّحُواْ");
        })
        it("mdMjF1() (madi majhul faminine singular) returns فُتِّحَتْ", () => {
            expect(verbInstance.mdMjF1()).toEqual("فُتِّحَتْ");
        })
        it("mdMjF2() (madi majhul faminine dual) returns فُتِّحَتَا", () => {
            expect(verbInstance.mdMjF2()).toEqual("فُتِّحَتَا");
        })
        it("mdMjFP() (madi majhul faminine plural) returns فُتِّحْنَ", () => {
            expect(verbInstance.mdMjFP()).toEqual("فُتِّحْنَ");
        })
        it("mdMjM21() (madi majhul masculine 2nd person singular) returns فُتِّحْتَ", () => {
            expect(verbInstance.mdMjM21()).toEqual("فُتِّحْتَ");
        })
        it("mdMjM22() (madi majhul masculine 2nd person dual) returns فُتِّحْتُمَا", () => {
            expect(verbInstance.mdMjM22()).toEqual("فُتِّحْتُمَا");
        })
        it("mdMjM2P() (madi majhul masculine 2nd person plural) returns فُتِّحْتُمْ", () => {
            expect(verbInstance.mdMjM2P()).toEqual("فُتِّحْتُمْ");
        })
        it("mdMjF21() (madi majhul feminine 2nd person singular) returns فُتِّحْتِ", () => {
            expect(verbInstance.mdMjF21()).toEqual("فُتِّحْتِ");
        })
        it("mdMjF22() (madi majhul feminine 2nd person dual) returns فُتِّحْتُمَا", () => {
            expect(verbInstance.mdMjF22()).toEqual("فُتِّحْتُمَا");
        })
        it("mdMjF2P() (madi majhul feminine 2nd person plural) returns فُتِّحْتُنَّ", () => {
            expect(verbInstance.mdMjF2P()).toEqual("فُتِّحْتُنَّ");
        })
        it("mdMjB1() (madi majhul 1st  person singular (both)) returns فُتِّحْتُ", () => {
            expect(verbInstance.mdMjB1()).toEqual("فُتِّحْتُ");
        })
        it("mdMjB3() (madi majhul 1st  person all (both)) returns فُتِّحْنَا", () => {
            expect(verbInstance.mdMjB3()).toEqual("فُتِّحْنَا");
        })

        // mudari starts here
        it("mdrM1() (mudari masculine singular) returns يُفَتِّحُ", () => {
            expect(verbInstance.mdrM1()).toEqual("يُفَتِّحُ");
        })
        it("mdrM2() (mudari masculine dual) returns يُفَتِّحَانِ", () => {
            expect(verbInstance.mdrM2()).toEqual("يُفَتِّحَانِ");
        })
        it("mdrMP() (mudari masculine plural) returns يُفَتِّحُوْنَ", () => {
            expect(verbInstance.mdrMP()).toEqual("يُفَتِّحُوْنَ");
        })
        it("mdrF1() (mudari faminine singular) returns تُفَتِّحُ", () => {
            expect(verbInstance.mdrF1()).toEqual("تُفَتِّحُ");
        })
        it("mdrF2() (mudari faminine dual) returns تُفَتِّحَانِ", () => {
            expect(verbInstance.mdrF2()).toEqual("تُفَتِّحَانِ");
        })
        it("mdrFP() (mudari faminine plural) returns يُفَتِّحْنَ", () => {
            expect(verbInstance.mdrFP()).toEqual("يُفَتِّحْنَ");
        })
        it("mdrM21() (mudari masculine 2nd person singular) returns تُفَتِّحُ", () => {
            expect(verbInstance.mdrM21()).toEqual("تُفَتِّحُ");
        })
        it("mdrM22() (mudari masculine 2nd person dual) returns تُفَتِّحَانِ", () => {
            expect(verbInstance.mdrM22()).toEqual("تُفَتِّحَانِ");
        })
        it("mdrM2P() (mudari masculine 2nd person plural) returns تُفَتِّحُوْنَ", () => {
            expect(verbInstance.mdrM2P()).toEqual("تُفَتِّحُوْنَ");
        })
        it("mdrF21() (mudari feminine 2nd person singular) returns تُفَتِّحِيْنَ", () => {
            expect(verbInstance.mdrF21()).toEqual("تُفَتِّحِيْنَ");
        })
        it("mdrF22() (mudari feminine 2nd person dual) returns تُفَتِّحَانِ", () => {
            expect(verbInstance.mdrF22()).toEqual("تُفَتِّحَانِ");
        })
        it("mdrF2P() (mudari feminine 2nd person plural) returns تُفَتِّحْنَ", () => {
            expect(verbInstance.mdrF2P()).toEqual("تُفَتِّحْنَ");
        })
        it("mdrB1() (mudari 1st  person singular (both)) returns أُفَتِّحُ", () => {
            expect(verbInstance.mdrB1()).toEqual("أُفَتِّحُ");
        })
        it("mdrB3() (mudari 1st  person all (both)) returns نُفَتِّحُ", () => {
            expect(verbInstance.mdrB3()).toEqual("نُفَتِّحُ");
        })

        // mudari majhul
        it("mdrMjM1() (mudari majhul masculine singular) returns يُفَتَّحُ", () => {
            expect(verbInstance.mdrMjM1()).toEqual("يُفَتَّحُ");
        })
        it("mdrMjM2() (mudari majhul masculine dual) returns يُفَتَّحَانِ", () => {
            expect(verbInstance.mdrMjM2()).toEqual("يُفَتَّحَانِ");
        })
        it("mdrMjMP() (mudari majhul masculine plural) returns يُفَتَّحُوْنَيُفَتَّحُوْنَ", () => {
            expect(verbInstance.mdrMjMP()).toEqual("يُفَتَّحُوْنَ");
        })
        it("mdrMjF1() (mudari majhul faminine singular) returns تُفَتَّحُ", () => {
            expect(verbInstance.mdrMjF1()).toEqual("تُفَتَّحُ");
        })
        it("mdrMjF2() (mudari majhul faminine dual) returns تُفَتَّحَانِ", () => {
            expect(verbInstance.mdrMjF2()).toEqual("تُفَتَّحَانِ");
        })
        it("mdrMjFP() (mudari majhul faminine plural) returns يُفَتَّحْنَ", () => {
            expect(verbInstance.mdrMjFP()).toEqual("يُفَتَّحْنَ");
        })
        it("mdrMjM21() (mudari majhul masculine 2nd person singular) returns تُفَتَّحُ", () => {
            expect(verbInstance.mdrMjM21()).toEqual("تُفَتَّحُ");
        })
        it("mdrMjM22() (mudari majhul masculine 2nd person dual) returns تُفَتَّحَانِ", () => {
            expect(verbInstance.mdrMjM22()).toEqual("تُفَتَّحَانِ");
        })
        it("mdrMjM2P() (mudari majhul masculine 2nd person plural) returns تُفَتَّحُوْنَ", () => {
            expect(verbInstance.mdrMjM2P()).toEqual("تُفَتَّحُوْنَ");
        })
        it("mdrMjF21() (mudari majhul feminine 2nd person singular) returns تُفَتَّحِيْنَ", () => {
            expect(verbInstance.mdrMjF21()).toEqual("تُفَتَّحِيْنَ");
        })
        it("mdrMjF22() (mudari majhul feminine 2nd person dual) returns تُفَتَّحَانِ", () => {
            expect(verbInstance.mdrMjF22()).toEqual("تُفَتَّحَانِ");
        })
        it("mdrMjF2P() (mudari majhul feminine 2nd person plural) returns تُفَتَّحْنَ", () => {
            expect(verbInstance.mdrMjF2P()).toEqual("تُفَتَّحْنَ");
        })
        it("mdrMjB1() (mudari majhul 1st  person singular (both)) returns أُفَتَّحُ", () => {
            expect(verbInstance.mdrMjB1()).toEqual("أُفَتَّحُ");
        })
        it("mdrMjB3() (mudari majhul 1st  person all (both)) returns نُفَتَّحُ", () => {
            expect(verbInstance.mdrMjB3()).toEqual("نُفَتَّحُ");
        })

        it("ismF() (Ism fa'eel) returns مُفَتِّحٌ", () => {
            expect(verbInstance.ismF()).toEqual("مُفَتِّحٌ");
        })
        it("ismMfl() (Ism maf'ul) returns مُفَتِّحً", () => {
            expect(verbInstance.ismMfl()).toEqual("مُفَتِّحً");
        })
        // amr
        it("amrM1() (fel amr masculine singular) returns فَتِّحْ", () => {
            expect(verbInstance.amrM1()).toEqual("فَتِّحْ");
        })
        it("amrM2() (fel amr masculine dual) returns فَتِّحَا", () => {
            expect(verbInstance.amrM2()).toEqual("فَتِّحَا");
        })
        it("amrMP() (fel amr masculine plural) returns فَتِّحُواْ", () => {
            expect(verbInstance.amrMP()).toEqual("فَتِّحُواْ");
        })
        it("amrF1() (fel amr feminine singular) returns فَتِّحِيْ", () => {
            expect(verbInstance.amrF1()).toEqual("فَتِّحِيْ");
        })
        it("amrF2() (fel amr feminine dual) returns فَتِّحَا", () => {
            expect(verbInstance.amrF2()).toEqual("فَتِّحَا");
        })
        it("amrFP() (fel amr feminine plural) returns فَتِّحْنَ", () => {
            expect(verbInstance.amrFP()).toEqual("فَتِّحْنَ");
        })
        // nahi
        it("nahiM1() (fel nahi masculine singular) returns لاَ تُفَتِّحْ", () => {
            expect(verbInstance.nahiM1()).toEqual("لاَ تُفَتِّحْ");
        })
        it("nahiM2() (fel nahi masculine dual) returns لاَ تُفَتِّحَا", () => {
            expect(verbInstance.nahiM2()).toEqual("لاَ تُفَتِّحَا");
        })
        it("nahiMP() (fel nahi masculine plural) returns لاَ تُفَتِّحُواْ", () => {
            expect(verbInstance.nahiMP()).toEqual("لاَ تُفَتِّحُواْ");
        })
        it("nahiF1() (fel nahi feminine singular) returns لاَ تُفَتِّحِيْ", () => {
            expect(verbInstance.nahiF1()).toEqual("لاَ تُفَتِّحِيْ");
        })
        it("nahiF2() (fel nahi feminine dual) returns لاَ تُفَتِّحَا", () => {
            expect(verbInstance.nahiF2()).toEqual("لاَ تُفَتِّحَا");
        })
        it("nahiFP() (fel nahi feminine plural) returns لاَ تُفَتِّحْنَ", () => {
            expect(verbInstance.nahiFP()).toEqual("لاَ تُفَتِّحْنَ");
        })
        it("msdr() (masder) returns تَفْتِيحٌ", () => {
            expect(verbInstance.msdr()).toEqual("تَفْتِيحٌ");
        })
        it("zarf() (fel nahi feminine plural) returns مُفَتِّحً", () => {
            expect(verbInstance.zarf()).toEqual("مُفَتِّحً");
        })

    });

})
