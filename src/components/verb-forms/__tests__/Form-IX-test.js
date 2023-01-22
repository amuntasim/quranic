import {verbFormInst} from "../../VerbForms";

let verbInstance;
describe("Form-IX", () => {

    describe("root `ح م ر`", () => {
        beforeEach(() => {
            const root = "ح م ر";
            verbInstance = verbFormInst({
                form: 'IX', root
            })
        })

        it("mdM1() (madi masculine singular) returns اِحْمَرَّ", () => {
            expect(verbInstance.mdM1()).toEqual("اِحْمَرَّ");
        })
        it("mdM2() (madi masculine dual) returns اِحْمَرَّا", () => {
            expect(verbInstance.mdM2()).toEqual("اِحْمَرَّا");
        })
        it("mdMP() (madi masculine plural) returns اِحْمَرُّواْ", () => {
            expect(verbInstance.mdMP()).toEqual("اِحْمَرُّواْ");
        })
        it("mdF1() (madi faminine singular) returns اِحْمَرَّتْ", () => {
            expect(verbInstance.mdF1()).toEqual("اِحْمَرَّتْ");
        })
        it("mdF2() (madi faminine dual) returns اِحْمَرَّتَا", () => {
            expect(verbInstance.mdF2()).toEqual("اِحْمَرَّتَا");
        })
        it("mdFP() (madi faminine plural) returns اِحْمَرَرْنَ", () => {
            expect(verbInstance.mdFP()).toEqual("اِحْمَرَرْنَ");
        })
        it("mdM21() (madi masculine 2nd person singular) returns اِحْمَرَرْتَ", () => {
            expect(verbInstance.mdM21()).toEqual("اِحْمَرَرْتَ");
        })
        it("mdM22() (madi masculine 2nd person dual) returns اِحْمَرَرْتُمَا", () => {
            expect(verbInstance.mdM22()).toEqual("اِحْمَرَرْتُمَا");
        })
        it("mdM2P() (madi masculine 2nd person plural) returns اِحْمَرَرْتُمْ", () => {
            expect(verbInstance.mdM2P()).toEqual("اِحْمَرَرْتُمْ");
        })
        it("mdF21() (madi feminine 2nd person singular) returns اِحْمَرَرْتِ", () => {
            expect(verbInstance.mdF21()).toEqual("اِحْمَرَرْتِ");
        })
        it("mdF22() (madi feminine 2nd person dual) returns اِحْمَرَرْتُمَا", () => {
            expect(verbInstance.mdF22()).toEqual("اِحْمَرَرْتُمَا");
        })
        it("mdF2P() (madi feminine 2nd person plural) returns اِحْمَرَرْتُنَّ", () => {
            expect(verbInstance.mdF2P()).toEqual("اِحْمَرَرْتُنَّ");
        })
        it("mdB1() (madi 1st  person singular (both)) returns اِحْمَرَرْتُ", () => {
            expect(verbInstance.mdB1()).toEqual("اِحْمَرَرْتُ");
        })
        it("mdB3() (madi 1st  person all (both)) returns اِحْمَرَرْنَا", () => {
            expect(verbInstance.mdB3()).toEqual("اِحْمَرَرْنَا");
        })

        // madi majhul
        it("mdMjM1() (madi majhul masculine singular) returns اُحْمُرَّ", () => {
            expect(verbInstance.mdMjM1()).toEqual("اُحْمُرَّ");
        })
        it("mdMjM2() (madi majhul masculine dual) returns اُحْمُرَّا", () => {
            expect(verbInstance.mdMjM2()).toEqual("اُحْمُرَّا");
        })
        it("mdMjMP() (madi majhul masculine plural) returns اُحْمُرُّواْ", () => {
            expect(verbInstance.mdMjMP()).toEqual("اُحْمُرُّواْ");
        })
        it("mdMjF1() (madi majhul faminine singular) returns اُحْمُرَّتْ", () => {
            expect(verbInstance.mdMjF1()).toEqual("اُحْمُرَّتْ");
        })
        it("mdMjF2() (madi majhul faminine dual) returns اُحْمُرَّتَا", () => {
            expect(verbInstance.mdMjF2()).toEqual("اُحْمُرَّتَا");
        })
        it("mdMjFP() (madi majhul faminine plural) returns اُحْمُرِرْنَ", () => {
            expect(verbInstance.mdMjFP()).toEqual("اُحْمُرِرْنَ");
        })
        it("mdMjM21() (madi majhul masculine 2nd person singular) returns اُحْمُرِرْتَ", () => {
            expect(verbInstance.mdMjM21()).toEqual("اُحْمُرِرْتَ");
        })
        it("mdMjM22() (madi majhul masculine 2nd person dual) returns اُحْمُرِرْتُمَا", () => {
            expect(verbInstance.mdMjM22()).toEqual("اُحْمُرِرْتُمَا");
        })
        it("mdMjM2P() (madi majhul masculine 2nd person plural) returns اُحْمُرِرْتُمْ", () => {
            expect(verbInstance.mdMjM2P()).toEqual("اُحْمُرِرْتُمْ");
        })
        it("mdMjF21() (madi majhul feminine 2nd person singular) returns اُحْمُرِرْتِ", () => {
            expect(verbInstance.mdMjF21()).toEqual("اُحْمُرِرْتِ");
        })
        it("mdMjF22() (madi majhul feminine 2nd person dual) returns اُحْمُرِرْتُمَا", () => {
            expect(verbInstance.mdMjF22()).toEqual("اُحْمُرِرْتُمَا");
        })
        it("mdMjF2P() (madi majhul feminine 2nd person plural) returns اُحْمُرِرْتُنَّ", () => {
            expect(verbInstance.mdMjF2P()).toEqual("اُحْمُرِرْتُنَّ");
        })
        it("mdMjB1() (madi majhul 1st  person singular (both)) returns اُحْمُرِرْتُ", () => {
            expect(verbInstance.mdMjB1()).toEqual("اُحْمُرِرْتُ");
        })
        it("mdMjB3() (madi majhul 1st  person all (both)) returns اُحْمُرِرْنَا", () => {
            expect(verbInstance.mdMjB3()).toEqual("اُحْمُرِرْنَا");
        })

        // mudari starts here
        it("mdrM1() (mudari masculine singular) returns يَحْمَرُّ", () => {
            expect(verbInstance.mdrM1()).toEqual("يَحْمَرُّ");
        })
        it("mdrM2() (mudari masculine dual) returns يَحْمَرَّانِ", () => {
            expect(verbInstance.mdrM2()).toEqual("يَحْمَرَّانِ");
        })
        it("mdrMP() (mudari masculine plural) returns يَحْمَرُّوْنَ", () => {
            expect(verbInstance.mdrMP()).toEqual("يَحْمَرُّوْنَ");
        })
        it("mdrF1() (mudari faminine singular) returns تَحْمَرُّ", () => {
            expect(verbInstance.mdrF1()).toEqual("تَحْمَرُّ");
        })
        it("mdrF2() (mudari faminine dual) returns تَحْمَرَّانِ", () => {
            expect(verbInstance.mdrF2()).toEqual("تَحْمَرَّانِ");
        })
        it("mdrFP() (mudari faminine plural) returns يَحْمَرِرْنَ", () => {
            expect(verbInstance.mdrFP()).toEqual("يَحْمَرِرْنَ");
        })
        it("mdrM21() (mudari masculine 2nd person singular) returns تَحْمَرُّ", () => {
            expect(verbInstance.mdrM21()).toEqual("تَحْمَرُّ");
        })
        it("mdrM22() (mudari masculine 2nd person dual) returns تَحْمَرَّانِ", () => {
            expect(verbInstance.mdrM22()).toEqual("تَحْمَرَّانِ");
        })
        it("mdrM2P() (mudari masculine 2nd person plural) returns تَحْمَرُّوْنَ", () => {
            expect(verbInstance.mdrM2P()).toEqual("تَحْمَرُّوْنَ");
        })
        it("mdrF21() (mudari feminine 2nd person singular) returns تَحْمَرِّيْنَ", () => {
            expect(verbInstance.mdrF21()).toEqual("تَحْمَرِّيْنَ");
        })
        it("mdrF22() (mudari feminine 2nd person dual) returns تَحْمَرَّانِ", () => {
            expect(verbInstance.mdrF22()).toEqual("تَحْمَرَّانِ");
        })
        it("mdrF2P() (mudari feminine 2nd person plural) returns تَحْمَرِرْنَ", () => {
            expect(verbInstance.mdrF2P()).toEqual("تَحْمَرِرْنَ");
        })
        it("mdrB1() (mudari 1st  person singular (both)) returns أَحْمَرُّ", () => {
            expect(verbInstance.mdrB1()).toEqual("أَحْمَرُّ");
        })
        it("mdrB3() (mudari 1st  person all (both)) returns نَحْمَرُّ", () => {
            expect(verbInstance.mdrB3()).toEqual("نَحْمَرُّ");
        })

        // mudari majhul
        it("mdrMjM1() (mudari majhul masculine singular) returns يُحْمَرُّ", () => {
            expect(verbInstance.mdrMjM1()).toEqual("يُحْمَرُّ");
        })
        it("mdrMjM2() (mudari majhul masculine dual) returns يُحْمَرَّانِ", () => {
            expect(verbInstance.mdrMjM2()).toEqual("يُحْمَرَّانِ");
        })
        it("mdrMjMP() (mudari majhul masculine plural) returns يُحْمَرُّوْنَ", () => {
            expect(verbInstance.mdrMjMP()).toEqual("يُحْمَرُّوْنَ");
        })
        it("mdrMjF1() (mudari majhul faminine singular) returns تُحْمَرُّ", () => {
            expect(verbInstance.mdrMjF1()).toEqual("تُحْمَرُّ");
        })
        it("mdrMjF2() (mudari majhul faminine dual) returns تُحْمَرَّانِ", () => {
            expect(verbInstance.mdrMjF2()).toEqual("تُحْمَرَّانِ");
        })
        it("mdrMjFP() (mudari majhul faminine plural) returns يُحْمَرَرْنَ", () => {
            expect(verbInstance.mdrMjFP()).toEqual("يُحْمَرَرْنَ");
        })
        it("mdrMjM21() (mudari majhul masculine 2nd person singular) returns تُحْمَرُّ", () => {
            expect(verbInstance.mdrMjM21()).toEqual("تُحْمَرُّ");
        })
        it("mdrMjM22() (mudari majhul masculine 2nd person dual) returns تُحْمَرَّانِ", () => {
            expect(verbInstance.mdrMjM22()).toEqual("تُحْمَرَّانِ");
        })
        it("mdrMjM2P() (mudari majhul masculine 2nd person plural) returns تُحْمَرُّوْنَ", () => {
            expect(verbInstance.mdrMjM2P()).toEqual("تُحْمَرُّوْنَ");
        })
        it("mdrMjF21() (mudari majhul feminine 2nd person singular) returns تُحْمَرِّيْنَ", () => {
            expect(verbInstance.mdrMjF21()).toEqual("تُحْمَرِّيْنَ");
        })
        it("mdrMjF22() (mudari majhul feminine 2nd person dual) returns تُحْمَرَّانِ", () => {
            expect(verbInstance.mdrMjF22()).toEqual("تُحْمَرَّانِ");
        })
        it("mdrMjF2P() (mudari majhul feminine 2nd person plural) returns تُحْمَرَرْنَ", () => {
            expect(verbInstance.mdrMjF2P()).toEqual("تُحْمَرَرْنَ");
        })
        it("mdrMjB1() (mudari majhul 1st  person singular (both)) returns أُحْمَرُّ", () => {
            expect(verbInstance.mdrMjB1()).toEqual("أُحْمَرُّ");
        })
        it("mdrMjB3() (mudari majhul 1st  person all (both)) returns نُحْمَرُّ", () => {
            expect(verbInstance.mdrMjB3()).toEqual("نُحْمَرُّ");
        })


        it("ismF() (Ism fa'eel) returns مُحْمَرّ", () => {
            expect(verbInstance.ismF()).toEqual("مُحْمَرٌّ");
        })
        it("ismMfl() (Ism maf'ul) returns مُحْمَرًّ", () => {
            expect(verbInstance.ismMfl()).toEqual("مُحْمَرًّ");
        })
        // amr
        it("amrM1() (fel amr masculine singular) returns اِحْمَرَّ", () => {
            expect(verbInstance.amrM1()).toEqual("اِحْمَرَّ");
        })
        it("amrM2() (fel amr masculine dual) returns اِحْمَرَّا", () => {
            expect(verbInstance.amrM2()).toEqual("اِحْمَرَّا");
        })
        it("amrMP() (fel amr masculine plural) returns اِحْمَرُّواْ", () => {
            expect(verbInstance.amrMP()).toEqual("اِحْمَرُّواْ");
        })
        it("amrF1() (fel amr feminine singular) returns اِحْمَرِّيْ", () => {
            expect(verbInstance.amrF1()).toEqual("اِحْمَرِّيْ");
        })
        it("amrF2() (fel amr feminine dual) returns اِحْمَرَّا", () => {
            expect(verbInstance.amrF2()).toEqual("اِحْمَرَّا");
        })
        it("amrFP() (fel amr feminine plural) returns اِحْمَرِرْنَ", () => {
            expect(verbInstance.amrFP()).toEqual("اِحْمَرِرْنَ");
        })
        // nahi
        it("nahiM1() (fel nahi masculine singular) returns لاَ تَحْمَرَّ", () => {
            expect(verbInstance.nahiM1()).toEqual("لاَ تَحْمَرَّ");
        })
        it("nahiM2() (fel nahi masculine dual) returns لاَ تَحْمَرَّا", () => {
            expect(verbInstance.nahiM2()).toEqual("لاَ تَحْمَرَّا");
        })
        it("nahiMP() (fel nahi masculine plural) returns لاَ تَحْمَرُّواْ", () => {
            expect(verbInstance.nahiMP()).toEqual("لاَ تَحْمَرُّواْ");
        })
        it("nahiF1() (fel nahi feminine singular) returns لاَ تَحْمَرِّيْ", () => {
            expect(verbInstance.nahiF1()).toEqual("لاَ تَحْمَرِّيْ");
        })
        it("nahiF2() (fel nahi feminine dual) returns لاَ تَحْمَرَّا", () => {
            expect(verbInstance.nahiF2()).toEqual("لاَ تَحْمَرَّا");
        })
        it("nahiFP() (fel nahi feminine plural) returns لاَ تَحْمَرِرْنَ", () => {
            expect(verbInstance.nahiFP()).toEqual("لاَ تَحْمَرِرْنَ");
        })
        it("msdr() (masder) returns اِحْمِراَرٌ", () => {
            expect(verbInstance.msdr()).toEqual("اِحْمِراَرٌ");
        })
        it("zarf()  returns مُحْمَرًّ", () => {
            expect(verbInstance.zarf()).toEqual("مُحْمَرًّ");
        })
    });
})
