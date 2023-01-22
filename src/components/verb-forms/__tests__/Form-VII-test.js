import {verbFormInst} from "../../VerbForms";

let verbInstance;
describe("Form-VII", () => {

    describe("root `ف ت ح`", () => {
        beforeEach(() => {
            const root = "ف ت ح";
            verbInstance = verbFormInst({
                form: 'VII', root
            })
        })

        it("mdM1() (madi masculine singular) returns اِنْفَتَحَ", () => {
            expect(verbInstance.mdM1()).toEqual("اِنْفَتَحَ");
        })
        it("mdM2() (madi masculine dual) returns اِنْفَتَحَا", () => {
            expect(verbInstance.mdM2()).toEqual("اِنْفَتَحَا");
        })
        it("mdMP() (madi masculine plural) returns اِنْفَتَحُواْ", () => {
            expect(verbInstance.mdMP()).toEqual("اِنْفَتَحُواْ");
        })
        it("mdF1() (madi faminine singular) returns اِنْفَتَحَتْ", () => {
            expect(verbInstance.mdF1()).toEqual("اِنْفَتَحَتْ");
        })
        it("mdF2() (madi faminine dual) returns اِنْفَتَحَتَا", () => {
            expect(verbInstance.mdF2()).toEqual("اِنْفَتَحَتَا");
        })
        it("mdFP() (madi faminine plural) returns اِنْفَتَحْنَ", () => {
            expect(verbInstance.mdFP()).toEqual("اِنْفَتَحْنَ");
        })
        it("mdM21() (madi masculine 2nd person singular) returns اِنْفَتَحْتَ", () => {
            expect(verbInstance.mdM21()).toEqual("اِنْفَتَحْتَ");
        })
        it("mdM22() (madi masculine 2nd person dual) returns اِنْفَتَحْتُمَا", () => {
            expect(verbInstance.mdM22()).toEqual("اِنْفَتَحْتُمَا");
        })
        it("mdM2P() (madi masculine 2nd person plural) returns اِنْفَتَحْتُمْ", () => {
            expect(verbInstance.mdM2P()).toEqual("اِنْفَتَحْتُمْ");
        })
        it("mdF21() (madi feminine 2nd person singular) returns اِنْفَتَحْتِ", () => {
            expect(verbInstance.mdF21()).toEqual("اِنْفَتَحْتِ");
        })
        it("mdF22() (madi feminine 2nd person dual) returns اِنْفَتَحْتُمَا", () => {
            expect(verbInstance.mdF22()).toEqual("اِنْفَتَحْتُمَا");
        })
        it("mdF2P() (madi feminine 2nd person plural) returns اِنْفَتَحْتُنَّ", () => {
            expect(verbInstance.mdF2P()).toEqual("اِنْفَتَحْتُنَّ");
        })
        it("mdB1() (madi 1st  person singular (both)) returns اِنْفَتَحْتُ", () => {
            expect(verbInstance.mdB1()).toEqual("اِنْفَتَحْتُ");
        })
        it("mdB3() (madi 1st  person all (both)) returns اِنْفَتَحْنَا", () => {
            expect(verbInstance.mdB3()).toEqual("اِنْفَتَحْنَا");
        })

        // madi majhul
        it("mdMjM1() (madi majhul masculine singular) returns blank", () => {
            expect(verbInstance.mdMjM1()).toEqual("");
        })


        // mudari starts here
        it("mdrM1() (mudari masculine singular) returns يَيِنْفَتِحُ", () => {
            expect(verbInstance.mdrM1()).toEqual("يَيِنْفَتِحُ");
        })
        it("mdrM2() (mudari masculine dual) returns يَيِنْفَتِحَانِ", () => {
            expect(verbInstance.mdrM2()).toEqual("يَيِنْفَتِحَانِ");
        })
        it("mdrMP() (mudari masculine plural) returns يَيِنْفَتِحُوْنَ", () => {
            expect(verbInstance.mdrMP()).toEqual("يَيِنْفَتِحُوْنَ");
        })
        it("mdrF1() (mudari faminine singular) returns تَيِنْفَتِحُ", () => {
            expect(verbInstance.mdrF1()).toEqual("تَيِنْفَتِحُ");
        })
        it("mdrF2() (mudari faminine dual) returns تَيِنْفَتِحَانِ", () => {
            expect(verbInstance.mdrF2()).toEqual("تَيِنْفَتِحَانِ");
        })
        it("mdrFP() (mudari faminine plural) returns يَيِنْفَتِحْنَ", () => {
            expect(verbInstance.mdrFP()).toEqual("يَيِنْفَتِحْنَ");
        })
        it("mdrM21() (mudari masculine 2nd person singular) returns تَيِنْفَتِحُ", () => {
            expect(verbInstance.mdrM21()).toEqual("تَيِنْفَتِحُ");
        })
        it("mdrM22() (mudari masculine 2nd person dual) returns تَيِنْفَتِحَانِ", () => {
            expect(verbInstance.mdrM22()).toEqual("تَيِنْفَتِحَانِ");
        })
        it("mdrM2P() (mudari masculine 2nd person plural) returns تَيِنْفَتِحُوْنَ", () => {
            expect(verbInstance.mdrM2P()).toEqual("تَيِنْفَتِحُوْنَ");
        })
        it("mdrF21() (mudari feminine 2nd person singular) returns تَيِنْفَتِحِيْنَ", () => {
            expect(verbInstance.mdrF21()).toEqual("تَيِنْفَتِحِيْنَ");
        })
        it("mdrF22() (mudari feminine 2nd person dual) returns تَيِنْفَتِحَانِ", () => {
            expect(verbInstance.mdrF22()).toEqual("تَيِنْفَتِحَانِ");
        })
        it("mdrF2P() (mudari feminine 2nd person plural) returns تَيِنْفَتِحْنَ", () => {
            expect(verbInstance.mdrF2P()).toEqual("تَيِنْفَتِحْنَ");
        })
        it("mdrB1() (mudari 1st  person singular (both)) returns أَيِنْفَتِحُ", () => {
            expect(verbInstance.mdrB1()).toEqual("أَيِنْفَتِحُ");
        })
        it("mdrB3() (mudari 1st  person all (both)) returns نَيِنْفَتِحُ", () => {
            expect(verbInstance.mdrB3()).toEqual("نَيِنْفَتِحُ");
        })

        // mudari majhul
        it("mdrMjM1() (mudari majhul masculine singular) returns blank", () => {
            expect(verbInstance.mdrMjM1()).toEqual("");
        })


        it("ismF() (Ism fa'eel) returns مُيِنْفَتِحٌ", () => {
            expect(verbInstance.ismF()).toEqual("مُيِنْفَتِحٌ");
        })
        it("ismMfl() (Ism maf'ul) returns blank", () => {
            expect(verbInstance.ismMfl()).toEqual("");
        })
        // amr
        it("amrM1() (fel amr masculine singular) returns اِنْفَتِحْ", () => {
            expect(verbInstance.amrM1()).toEqual("اِنْفَتِحْ");
        })
        it("amrM2() (fel amr masculine dual) returns اِنْفَتِحَا", () => {
            expect(verbInstance.amrM2()).toEqual("اِنْفَتِحَا");
        })
        it("amrMP() (fel amr masculine plural) returns اِنْفَتِحُواْ", () => {
            expect(verbInstance.amrMP()).toEqual("اِنْفَتِحُواْ");
        })
        it("amrF1() (fel amr feminine singular) returns اِنْفَتِحِيْ", () => {
            expect(verbInstance.amrF1()).toEqual("اِنْفَتِحِيْ");
        })
        it("amrF2() (fel amr feminine dual) returns اِنْفَتِحَا", () => {
            expect(verbInstance.amrF2()).toEqual("اِنْفَتِحَا");
        })
        it("amrFP() (fel amr feminine plural) returns اِنْفَتِحْنَ", () => {
            expect(verbInstance.amrFP()).toEqual("اِنْفَتِحْنَ");
        })
        // nahi
        it("nahiM1() (fel nahi masculine singular) returns لاَ تَيِنْفَتِحْ", () => {
            expect(verbInstance.nahiM1()).toEqual("لاَ تَيِنْفَتِحْ");
        })
        it("nahiM2() (fel nahi masculine dual) returns لاَ تَيِنْفَتِحَا", () => {
            expect(verbInstance.nahiM2()).toEqual("لاَ تَيِنْفَتِحَا");
        })
        it("nahiMP() (fel nahi masculine plural) returns لاَ تَيِنْفَتِحُواْ", () => {
            expect(verbInstance.nahiMP()).toEqual("لاَ تَيِنْفَتِحُواْ");
        })
        it("nahiF1() (fel nahi feminine singular) returns لاَ تَيِنْفَتِحِيْ", () => {
            expect(verbInstance.nahiF1()).toEqual("لاَ تَيِنْفَتِحِيْ");
        })
        it("nahiF2() (fel nahi feminine dual) returns لاَ تَيِنْفَتِحَا", () => {
            expect(verbInstance.nahiF2()).toEqual("لاَ تَيِنْفَتِحَا");
        })
        it("nahiFP() (fel nahi feminine plural) returns لاَ تَيِنْفَتِحْنَ", () => {
            expect(verbInstance.nahiFP()).toEqual("لاَ تَيِنْفَتِحْنَ");
        })
        it("msdr() (masder) returns تفففتُّحٌ", () => {
            expect(verbInstance.msdr()).toEqual("تفففتُّحٌ");
        })
        it("zarf() (fel nahi feminine plural) returns blank", () => {
            expect(verbInstance.zarf()).toEqual("");
        })

    });

})
