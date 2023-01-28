import {verbFormInst} from "../../VerbForms";

let verbInstance;
describe("Form-I", () => {

    describe("aa (baa`b fataha) root `ف ت ح`", () => {
        beforeEach(() => {
            const root = "ف ت ح";
            verbInstance = verbFormInst({
                form: 'I', root, "bab": "aa", "msdr": "فَتْح"
            })
        })

        it("mdM1() (madi masculine singular) returns فَتَحَ", () => {
            expect(verbInstance.mdM1()).toEqual("فَتَحَ");
        })
        it("mdM2() (madi masculine dual) returns فَتَحَا", () => {
            expect(verbInstance.mdM2()).toEqual("فَتَحَا");
        })
        it("mdMP() (madi masculine plural) returns فَتَحُواْ", () => {
            expect(verbInstance.mdMP()).toEqual("فَتَحُواْ");
        })
        it("mdF1() (madi faminine singular) returns فَتَحَتْ", () => {
            expect(verbInstance.mdF1()).toEqual("فَتَحَتْ");
        })
        it("mdF2() (madi faminine dual) returns فَتَحَتَا", () => {
            expect(verbInstance.mdF2()).toEqual("فَتَحَتَا");
        })
        it("mdFP() (madi faminine plural) returns فَتَحْنَ", () => {
            expect(verbInstance.mdFP()).toEqual("فَتَحْنَ");
        })
        it("mdM21() (madi masculine 2nd person singular) returns فَتَحْتَ", () => {
            expect(verbInstance.mdM21()).toEqual("فَتَحْتَ");
        })
        it("mdM22() (madi masculine 2nd person dual) returns فَتَحْتُمَا", () => {
            expect(verbInstance.mdM22()).toEqual("فَتَحْتُمَا");
        })
        it("mdM2P() (madi masculine 2nd person plural) returns فَتَحْتُمْ", () => {
            expect(verbInstance.mdM2P()).toEqual("فَتَحْتُمْ");
        })
        it("mdF21() (madi feminine 2nd person singular) returns فَتَحْتِ", () => {
            expect(verbInstance.mdF21()).toEqual("فَتَحْتِ");
        })
        it("mdF22() (madi feminine 2nd person dual) returns فَتَحْتُمَا", () => {
            expect(verbInstance.mdF22()).toEqual("فَتَحْتُمَا");
        })
        it("mdF2P() (madi feminine 2nd person plural) returns فَتَحْتُنَّ", () => {
            expect(verbInstance.mdF2P()).toEqual("فَتَحْتُنَّ");
        })
        it("mdB1() (madi 1st  person singular (both)) returns فَتَحْتُ", () => {
            expect(verbInstance.mdB1()).toEqual("فَتَحْتُ");
        })
        it("mdB3() (madi 1st  person all (both)) returns فَتَحْنَا", () => {
            expect(verbInstance.mdB3()).toEqual("فَتَحْنَا");
        })

        // madi majhul
        it("mdMjM1() (madi majhul masculine singular) returns فُتِحَ", () => {
            expect(verbInstance.mdMjM1()).toEqual("فُتِحَ");
        })
        it("mdMjM2() (madi majhul masculine dual) returns فُتِحَا", () => {
            expect(verbInstance.mdMjM2()).toEqual("فُتِحَا");
        })
        it("mdMjMP() (madi majhul masculine plural) returns فُتِحُواْ", () => {
            expect(verbInstance.mdMjMP()).toEqual("فُتِحُواْ");
        })
        it("mdMjF1() (madi majhul faminine singular) returns فُتِحَتْ", () => {
            expect(verbInstance.mdMjF1()).toEqual("فُتِحَتْ");
        })
        it("mdMjF2() (madi majhul faminine dual) returns فُتِحَتَا", () => {
            expect(verbInstance.mdMjF2()).toEqual("فُتِحَتَا");
        })
        it("mdMjFP() (madi majhul faminine plural) returns فُتِحْنَ", () => {
            expect(verbInstance.mdMjFP()).toEqual("فُتِحْنَ");
        })
        it("mdMjM21() (madi majhul masculine 2nd person singular) returns فُتِحْتَ", () => {
            expect(verbInstance.mdMjM21()).toEqual("فُتِحْتَ");
        })
        it("mdMjM22() (madi majhul masculine 2nd person dual) returns فُتِحْتُمَا", () => {
            expect(verbInstance.mdMjM22()).toEqual("فُتِحْتُمَا");
        })
        it("mdMjM2P() (madi majhul masculine 2nd person plural) returns فُتِحْتُمْ", () => {
            expect(verbInstance.mdMjM2P()).toEqual("فُتِحْتُمْ");
        })
        it("mdMjF21() (madi majhul feminine 2nd person singular) returns فُتِحْتِ", () => {
            expect(verbInstance.mdMjF21()).toEqual("فُتِحْتِ");
        })
        it("mdMjF22() (madi majhul feminine 2nd person dual) returns فُتِحْتُمَا", () => {
            expect(verbInstance.mdMjF22()).toEqual("فُتِحْتُمَا");
        })
        it("mdMjF2P() (madi majhul feminine 2nd person plural) returns فُتِحْتُنَّ", () => {
            expect(verbInstance.mdMjF2P()).toEqual("فُتِحْتُنَّ");
        })
        it("mdMjB1() (madi majhul 1st  person singular (both)) returns فُتِحْتُ", () => {
            expect(verbInstance.mdMjB1()).toEqual("فُتِحْتُ");
        })
        it("mdMjB3() (madi majhul 1st  person all (both)) returns فُتِحْنَا", () => {
            expect(verbInstance.mdMjB3()).toEqual("فُتِحْنَا");
        })

        // mudari starts here
        it("mdrM1() (mudari masculine singular) returns يَفْتَحُ", () => {
            expect(verbInstance.mdrM1()).toEqual("يَفْتَحُ");
        })
        it("mdrM2() (mudari masculine dual) returns يَفْتَحَانِ", () => {
            expect(verbInstance.mdrM2()).toEqual("يَفْتَحَانِ");
        })
        it("mdrMP() (mudari masculine plural) returns يَفْتَحُوْنَ", () => {
            expect(verbInstance.mdrMP()).toEqual("يَفْتَحُوْنَ");
        })
        it("mdrF1() (mudari faminine singular) returns تَفْتَحُ", () => {
            expect(verbInstance.mdrF1()).toEqual("تَفْتَحُ");
        })
        it("mdrF2() (mudari faminine dual) returns تَفْتَحَانِ", () => {
            expect(verbInstance.mdrF2()).toEqual("تَفْتَحَانِ");
        })
        it("mdrFP() (mudari faminine plural) returns يَفْتَحْنَ", () => {
            expect(verbInstance.mdrFP()).toEqual("يَفْتَحْنَ");
        })
        it("mdrM21() (mudari masculine 2nd person singular) returns تَفْتَحُ", () => {
            expect(verbInstance.mdrM21()).toEqual("تَفْتَحُ");
        })
        it("mdrM22() (mudari masculine 2nd person dual) returns تَفْتَحَانِ", () => {
            expect(verbInstance.mdrM22()).toEqual("تَفْتَحَانِ");
        })
        it("mdrM2P() (mudari masculine 2nd person plural) returns تَفْتَحُوْنَ", () => {
            expect(verbInstance.mdrM2P()).toEqual("تَفْتَحُوْنَ");
        })
        it("mdrF21() (mudari feminine 2nd person singular) returns تَفْتَحِيْنَ", () => {
            expect(verbInstance.mdrF21()).toEqual("تَفْتَحِيْنَ");
        })
        it("mdrF22() (mudari feminine 2nd person dual) returns تَفْتَحَانِ", () => {
            expect(verbInstance.mdrF22()).toEqual("تَفْتَحَانِ");
        })
        it("mdrF2P() (mudari feminine 2nd person plural) returns تَفْتَحْنَ", () => {
            expect(verbInstance.mdrF2P()).toEqual("تَفْتَحْنَ");
        })
        it("mdrB1() (mudari 1st  person singular (both)) returns أَفْتَحُ", () => {
            expect(verbInstance.mdrB1()).toEqual("أَفْتَحُ");
        })
        it("mdrB3() (mudari 1st  person all (both)) returns نَفْتَحُ", () => {
            expect(verbInstance.mdrB3()).toEqual("نَفْتَحُ");
        })

        // mudari majhul
        it("mdrMjM1() (mudari majhul masculine singular) returns يُفْتَحُ", () => {
            expect(verbInstance.mdrMjM1()).toEqual("يُفْتَحُ");
        })
        it("mdrMjM2() (mudari majhul masculine dual) returns يُفْتَحَانِ", () => {
            expect(verbInstance.mdrMjM2()).toEqual("يُفْتَحَانِ");
        })
        it("mdrMjMP() (mudari majhul masculine plural) returns يُفْتَحُوْنَ", () => {
            expect(verbInstance.mdrMjMP()).toEqual("يُفْتَحُوْنَ");
        })
        it("mdrMjF1() (mudari majhul faminine singular) returns تُفْتَحُ", () => {
            expect(verbInstance.mdrMjF1()).toEqual("تُفْتَحُ");
        })
        it("mdrMjF2() (mudari majhul faminine dual) returns تُفْتَحَانِ", () => {
            expect(verbInstance.mdrMjF2()).toEqual("تُفْتَحَانِ");
        })
        it("mdrMjFP() (mudari majhul faminine plural) returns يُفْتَحْنَ", () => {
            expect(verbInstance.mdrMjFP()).toEqual("يُفْتَحْنَ");
        })
        it("mdrMjM21() (mudari majhul masculine 2nd person singular) returns تُفْتَحُ", () => {
            expect(verbInstance.mdrMjM21()).toEqual("تُفْتَحُ");
        })
        it("mdrMjM22() (mudari majhul masculine 2nd person dual) returns تُفْتَحَانِ", () => {
            expect(verbInstance.mdrMjM22()).toEqual("تُفْتَحَانِ");
        })
        it("mdrMjM2P() (mudari majhul masculine 2nd person plural) returns تُفْتَحُوْنَ", () => {
            expect(verbInstance.mdrMjM2P()).toEqual("تُفْتَحُوْنَ");
        })
        it("mdrMjF21() (mudari majhul feminine 2nd person singular) returns تُفْتَحِيْنَ", () => {
            expect(verbInstance.mdrMjF21()).toEqual("تُفْتَحِيْنَ");
        })
        it("mdrMjF22() (mudari majhul feminine 2nd person dual) returns تُفْتَحَانِ", () => {
            expect(verbInstance.mdrMjF22()).toEqual("تُفْتَحَانِ");
        })
        it("mdrMjF2P() (mudari majhul feminine 2nd person plural) returns تُفْتَحْنَ", () => {
            expect(verbInstance.mdrMjF2P()).toEqual("تُفْتَحْنَ");
        })
        it("mdrMjB1() (mudari majhul 1st  person singular (both)) returns أُفْتَحُ", () => {
            expect(verbInstance.mdrMjB1()).toEqual("أُفْتَحُ");
        })
        it("mdrMjB3() (mudari majhul 1st  person all (both)) returns نُفْتَحُ", () => {
            expect(verbInstance.mdrMjB3()).toEqual("نُفْتَحُ");
        })

        it("ismF() (Ism fa'eel) returns فَاتِحٌ", () => {
            expect(verbInstance.ismF()).toEqual("فَاتِحٌ");
        })
        it("ismMfl() (Ism maf'ul) returns مَفْتُوحٌ", () => {
            expect(verbInstance.ismMfl()).toEqual("مَفْتُوحٌ");
        })
        // amr
        it("amrM1() (fel amr masculine singular) returns اِفْتَحْ", () => {
            expect(verbInstance.amrM1()).toEqual("اِفْتَحْ");
        })
        it("amrM2() (fel amr masculine dual) returns اِفْتَحَا", () => {
            expect(verbInstance.amrM2()).toEqual("اِفْتَحَا");
        })
        it("amrMP() (fel amr masculine plural) returns اِفْتَحُواْ", () => {
            expect(verbInstance.amrMP()).toEqual("اِفْتَحُواْ");
        })
        it("amrF1() (fel amr feminine singular) returns اِفْتَحِيْ", () => {
            expect(verbInstance.amrF1()).toEqual("اِفْتَحِيْ");
        })
        it("amrF2() (fel amr feminine dual) returns اِفْتَحَا", () => {
            expect(verbInstance.amrF2()).toEqual("اِفْتَحَا");
        })
        it("amrFP() (fel amr feminine plural) returns اِفْتَحْنَ", () => {
            expect(verbInstance.amrFP()).toEqual("اِفْتَحْنَ");
        })
        // nahi
        it("nahiM1() (fel nahi masculine singular) returns لاَ تَفْتَحْ", () => {
            expect(verbInstance.nahiM1()).toEqual("لاَ تَفْتَحْ");
        })
        it("nahiM2() (fel nahi masculine dual) returns لاَ تَفْتَحَا", () => {
            expect(verbInstance.nahiM2()).toEqual("لاَ تَفْتَحَا");
        })
        it("nahiMP() (fel nahi masculine plural) returns لاَ تَفْتَحُواْ", () => {
            expect(verbInstance.nahiMP()).toEqual("لاَ تَفْتَحُواْ");
        })
        it("nahiF1() (fel nahi feminine singular) returns لاَ تَفْتَحِيْ", () => {
            expect(verbInstance.nahiF1()).toEqual("لاَ تَفْتَحِيْ");
        })
        it("nahiF2() (fel nahi feminine dual) returns لاَ تَفْتَحَا", () => {
            expect(verbInstance.nahiF2()).toEqual("لاَ تَفْتَحَا");
        })
        it("nahiFP() (fel nahi feminine plural) returns لاَ تَفْتَحْنَ", () => {
            expect(verbInstance.nahiFP()).toEqual("لاَ تَفْتَحْنَ");
        })
        it("msdr() (masder) returns فَتْح", () => {
            expect(verbInstance.msdr()).toEqual("فَتْح");
        })
        it("zarf() (fel nahi feminine plural) returns مَفْتُوحٌ", () => {
            expect(verbInstance.zarf()).toEqual("مَفْتُوحٌ");
        })

    });

    describe("au (baa`b nasara) root `ن ص ر`", () => {
        beforeEach(() => {
            const root = "ن ص ر";
            verbInstance = verbFormInst({
                form: 'I', root, "bab": "au", "msdr": "اُنْصُرَا"
            })
        })

        it("mdrM1() (mudari masculine singular) returns يَنْصُرُ", () => {
            expect(verbInstance.mdrM1()).toEqual("يَنْصُرُ");
        })
        it("mdrM2() (mudari masculine dual) returns يَنْصُرَانِ", () => {
            expect(verbInstance.mdrM2()).toEqual("يَنْصُرَانِ");
        })
        it("mdrMP() (mudari masculine plural) returns يَنْصُرُوْنَ", () => {
            expect(verbInstance.mdrMP()).toEqual("يَنْصُرُوْنَ");
        })
        it("mdrF1() (mudari faminine singular) returns تَنْصُرُ", () => {
            expect(verbInstance.mdrF1()).toEqual("تَنْصُرُ");
        })
        it("mdrF2() (mudari faminine dual) returns تَنْصُرَانِ", () => {
            expect(verbInstance.mdrF2()).toEqual("تَنْصُرَانِ");
        })
        it("mdrFP() (mudari faminine plural) returns يَنْصُرْنَ", () => {
            expect(verbInstance.mdrFP()).toEqual("يَنْصُرْنَ");
        })
        it("mdrM21() (mudari masculine 2nd person singular) returns تَنْصُرُ", () => {
            expect(verbInstance.mdrM21()).toEqual("تَنْصُرُ");
        })
        it("mdrM22() (mudari masculine 2nd person dual) returns تَنْصُرَانِ", () => {
            expect(verbInstance.mdrM22()).toEqual("تَنْصُرَانِ");
        })
        it("mdrM2P() (mudari masculine 2nd person plural) returns تَنْصُرُوْنَ", () => {
            expect(verbInstance.mdrM2P()).toEqual("تَنْصُرُوْنَ");
        })
        it("mdrF21() (mudari feminine 2nd person singular) returns تَنْصُرِيْنَ", () => {
            expect(verbInstance.mdrF21()).toEqual("تَنْصُرِيْنَ");
        })
        it("mdrF22() (mudari feminine 2nd person dual) returns تَنْصُرَانِ", () => {
            expect(verbInstance.mdrF22()).toEqual("تَنْصُرَانِ");
        })
        it("mdrF2P() (mudari feminine 2nd person plural) returns تَنْصُرْنَ", () => {
            expect(verbInstance.mdrF2P()).toEqual("تَنْصُرْنَ");
        })
        it("mdrB1() (mudari 1st  person singular (both)) returns أَنْصُرُ", () => {
            expect(verbInstance.mdrB1()).toEqual("أَنْصُرُ");
        })
        it("mdrB3() (mudari 1st  person all (both)) returns نَنْصُرُ", () => {
            expect(verbInstance.mdrB3()).toEqual("نَنْصُرُ");
        })

        // mudari majhul
        it("mdrMjM1() (mudari majhul masculine singular) returns يُنْصَرُ", () => {
            expect(verbInstance.mdrMjM1()).toEqual("يُنْصَرُ");
        })
        it("mdrMjM2() (mudari majhul masculine dual) returns يُنْصَرَانِ", () => {
            expect(verbInstance.mdrMjM2()).toEqual("يُنْصَرَانِ");
        })
        it("mdrMjMP() (mudari majhul masculine plural) returns يُنْصَرُوْنَ", () => {
            expect(verbInstance.mdrMjMP()).toEqual("يُنْصَرُوْنَ");
        })
        it("mdrMjF1() (mudari majhul faminine singular) returns تُنْصَرُ", () => {
            expect(verbInstance.mdrMjF1()).toEqual("تُنْصَرُ");
        })
        it("mdrMjF2() (mudari majhul faminine dual) returns تُنْصَرَانِ", () => {
            expect(verbInstance.mdrMjF2()).toEqual("تُنْصَرَانِ");
        })
        it("mdrMjFP() (mudari majhul faminine plural) returns يُنْصَرْنَ", () => {
            expect(verbInstance.mdrMjFP()).toEqual("يُنْصَرْنَ");
        })
        it("mdrMjM21() (mudari majhul masculine 2nd person singular) returns تُنْصَرُ", () => {
            expect(verbInstance.mdrMjM21()).toEqual("تُنْصَرُ");
        })
        it("mdrMjM22() (mudari majhul masculine 2nd person dual) returns تُنْصَرَانِ", () => {
            expect(verbInstance.mdrMjM22()).toEqual("تُنْصَرَانِ");
        })
        it("mdrMjM2P() (mudari majhul masculine 2nd person plural) returns تُنْصَرُوْنَ", () => {
            expect(verbInstance.mdrMjM2P()).toEqual("تُنْصَرُوْنَ");
        })
        it("mdrMjF21() (mudari majhul feminine 2nd person singular) returns تُنْصَرِيْنَ", () => {
            expect(verbInstance.mdrMjF21()).toEqual("تُنْصَرِيْنَ");
        })
        it("mdrMjF22() (mudari majhul feminine 2nd person dual) returns تُنْصَرَانِ", () => {
            expect(verbInstance.mdrMjF22()).toEqual("تُنْصَرَانِ");
        })
        it("mdrMjF2P() (mudari majhul feminine 2nd person plural) returns تُنْصَرْنَ", () => {
            expect(verbInstance.mdrMjF2P()).toEqual("تُنْصَرْنَ");
        })
        it("mdrMjB1() (mudari majhul 1st  person singular (both)) returns أُنْصَرُ", () => {
            expect(verbInstance.mdrMjB1()).toEqual("أُنْصَرُ");
        })
        it("mdrMjB3() (mudari majhul 1st  person all (both)) returns نُنْصَرُ", () => {
            expect(verbInstance.mdrMjB3()).toEqual("نُنْصَرُ");
        })
    });

    describe("ae (baa`b daraba) root `ض ر ب`", () => {
        beforeEach(() => {
            const root = "ض ر ب";
            verbInstance = verbFormInst({
                form: 'I', root, "bab": "ae", "msdr": "ضَرْب"
            })
        })

        it("mdrM1() (mudari masculine singular) returns يَضْرِبُ", () => {
            expect(verbInstance.mdrM1()).toEqual("يَضْرِبُ");
        })

        // mudari majhul
        it("mdrMjM1() (mudari majhul masculine singular) returns يُضْرَبُ", () => {
            expect(verbInstance.mdrMjM1()).toEqual("يُضْرَبُ");
        })

    });

    describe("ea (baa`b samiYa) root `س م ع`", () => {
        beforeEach(() => {
            const root = "س م ع";
            verbInstance = verbFormInst({
                form: 'I', root, "bab": "ea", "msdr": "اِسْمَعَا"
            })
        })

        it("mdrM1() (mudari masculine singular) returns يَسْمَعُ", () => {
            expect(verbInstance.mdrM1()).toEqual("يَسْمَعُ");
        })
        it("mdrM2() (mudari masculine dual) returns يَسْمَعَانِ", () => {
            expect(verbInstance.mdrM2()).toEqual("يَسْمَعَانِ");
        })
        it("mdrMP() (mudari masculine plural) returns يَسْمَعُوْنَ", () => {
            expect(verbInstance.mdrMP()).toEqual("يَسْمَعُوْنَ");
        })
        it("mdrF1() (mudari faminine singular) returns تَسْمَعُ", () => {
            expect(verbInstance.mdrF1()).toEqual("تَسْمَعُ");
        })
        it("mdrF2() (mudari faminine dual) returns تَسْمَعَانِ", () => {
            expect(verbInstance.mdrF2()).toEqual("تَسْمَعَانِ");
        })
        it("mdrFP() (mudari faminine plural) returns يَسْمَعْنَ", () => {
            expect(verbInstance.mdrFP()).toEqual("يَسْمَعْنَ");
        })
        it("mdrM21() (mudari masculine 2nd person singular) returns تَسْمَعُ", () => {
            expect(verbInstance.mdrM21()).toEqual("تَسْمَعُ");
        })
        it("mdrM22() (mudari masculine 2nd person dual) returns تَسْمَعَانِ", () => {
            expect(verbInstance.mdrM22()).toEqual("تَسْمَعَانِ");
        })
        it("mdrM2P() (mudari masculine 2nd person plural) returns تَسْمَعُوْنَ", () => {
            expect(verbInstance.mdrM2P()).toEqual("تَسْمَعُوْنَ");
        })
        it("mdrF21() (mudari feminine 2nd person singular) returns تَسْمَعِيْنَ", () => {
            expect(verbInstance.mdrF21()).toEqual("تَسْمَعِيْنَ");
        })
        it("mdrF22() (mudari feminine 2nd person dual) returns تَسْمَعَانِ", () => {
            expect(verbInstance.mdrF22()).toEqual("تَسْمَعَانِ");
        })
        it("mdrF2P() (mudari feminine 2nd person plural) returns تَسْمَعْنَ", () => {
            expect(verbInstance.mdrF2P()).toEqual("تَسْمَعْنَ");
        })
        it("mdrB1() (mudari 1st  person singular (both)) returns أَسْمَعُ", () => {
            expect(verbInstance.mdrB1()).toEqual("أَسْمَعُ");
        })
        it("mdrB3() (mudari 1st  person all (both)) returns نَسْمَعُ", () => {
            expect(verbInstance.mdrB3()).toEqual("نَسْمَعُ");
        })

        // mudari majhul
        it("mdrMjM1() (mudari majhul masculine singular) returns يُسْمَعُ", () => {
            expect(verbInstance.mdrMjM1()).toEqual("يُسْمَعُ");
        })
        it("mdrMjM2() (mudari majhul masculine dual) returns يُسْمَعَانِ", () => {
            expect(verbInstance.mdrMjM2()).toEqual("يُسْمَعَانِ");
        })
        it("mdrMjMP() (mudari majhul masculine plural) returns يُسْمَعُوْنَ", () => {
            expect(verbInstance.mdrMjMP()).toEqual("يُسْمَعُوْنَ");
        })
        it("mdrMjF1() (mudari majhul faminine singular) returns تُسْمَعُ", () => {
            expect(verbInstance.mdrMjF1()).toEqual("تُسْمَعُ");
        })
        it("mdrMjF2() (mudari majhul faminine dual) returns تُسْمَعَانِ", () => {
            expect(verbInstance.mdrMjF2()).toEqual("تُسْمَعَانِ");
        })
        it("mdrMjFP() (mudari majhul faminine plural) returns يُسْمَعْنَ", () => {
            expect(verbInstance.mdrMjFP()).toEqual("يُسْمَعْنَ");
        })
        it("mdrMjM21() (mudari majhul masculine 2nd person singular) returns تُسْمَعُ", () => {
            expect(verbInstance.mdrMjM21()).toEqual("تُسْمَعُ");
        })
        it("mdrMjM22() (mudari majhul masculine 2nd person dual) returns تُسْمَعَانِ", () => {
            expect(verbInstance.mdrMjM22()).toEqual("تُسْمَعَانِ");
        })
        it("mdrMjM2P() (mudari majhul masculine 2nd person plural) returns تُسْمَعُوْنَ", () => {
            expect(verbInstance.mdrMjM2P()).toEqual("تُسْمَعُوْنَ");
        })
        it("mdrMjF21() (mudari majhul feminine 2nd person singular) returns تُسْمَعِيْنَ", () => {
            expect(verbInstance.mdrMjF21()).toEqual("تُسْمَعِيْنَ");
        })
        it("mdrMjF22() (mudari majhul feminine 2nd person dual) returns تُسْمَعَانِ", () => {
            expect(verbInstance.mdrMjF22()).toEqual("تُسْمَعَانِ");
        })
        it("mdrMjF2P() (mudari majhul feminine 2nd person plural) returns تُسْمَعْنَ", () => {
            expect(verbInstance.mdrMjF2P()).toEqual("تُسْمَعْنَ");
        })
        it("mdrMjB1() (mudari majhul 1st  person singular (both)) returns أُسَمِعُ", () => {
            expect(verbInstance.mdrMjB1()).toEqual("أُسْمَعُ");
        })
        it("mdrMjB3() (mudari majhul 1st  person all (both)) returns نُسَمِعُ", () => {
            expect(verbInstance.mdrMjB3()).toEqual("نُسْمَعُ");
        })
    });

    describe("ee (baa`b haseba) root `ح س ب`", () => {
        beforeEach(() => {
            const root = "ح س ب";
            verbInstance = verbFormInst({
                form: 'I', root, "bab": "ee", "msdr": "حِسْبَان"
            })
        })

        it("mdrM1() (mudari masculine singular) returns يَحْسِبُ", () => {
            expect(verbInstance.mdrM1()).toEqual("يَحْسِبُ");
        })

        // mudari majhul
        it("mdrMjM1() (mudari majhul masculine singular) returns يُحْسَبُ", () => {
            expect(verbInstance.mdrMjM1()).toEqual("يُحْسَبُ");
        })

    });

    describe("uu (baa`b karuma) root `ك ر م`", () => {
        beforeEach(() => {
            const root = "ك ر م";
            verbInstance = verbFormInst({
                form: 'I', root, "bab": "ee", "msdr": "كَرَم"
            })
        })

        it("mdrM1() (mudari masculine singular) returns يَكْرِمُ", () => {
            expect(verbInstance.mdrM1()).toEqual("يَكْرِمُ");
        })

        // mudari majhul
        it("mdrMjM1() (mudari majhul masculine singular) returns يُكْرَمُ", () => {
            expect(verbInstance.mdrMjM1()).toEqual("يُكْرَمُ");
        })

    });

    describe('mudaAf (baab a-u)', () => {
        beforeEach(() => {
            const root = "ح ج ج";
            verbInstance = verbFormInst({
                form: 'I', root, "bab": "au", "msdr": "حَجّ"
            })
        })

        it("mdM1() (madi masculine singular) returns حَجَّ", () => {
            expect(verbInstance.mdM1()).toEqual("حَجَّ");
        })
        it("mdM2() (madi masculine dual) returns حَجَّا", () => {
            expect(verbInstance.mdM2()).toEqual("حَجَّا");
        })
        it("mdMP() (madi masculine plural) returns حَجُّواْ", () => {
            expect(verbInstance.mdMP()).toEqual("حَجُّواْ");
        })
        it("mdF1() (madi faminine singular) returns حَجَّتْ", () => {
            expect(verbInstance.mdF1()).toEqual("حَجَّتْ");
        })
        it("mdF2() (madi faminine dual) returns حَجَّتَا", () => {
            expect(verbInstance.mdF2()).toEqual("حَجَّتَا");
        })
        it("mdFP() (madi faminine plural) returns حَجَجْنَ", () => {
            expect(verbInstance.mdFP()).toEqual("حَجَجْنَ");
        })
        it("mdM21() (madi masculine 2nd person singular) returns حَجَجْتَ", () => {
            expect(verbInstance.mdM21()).toEqual("حَجَجْتَ");
        })
        it("mdM22() (madi masculine 2nd person dual) returns حَجَجْتُمَا", () => {
            expect(verbInstance.mdM22()).toEqual("حَجَجْتُمَا");
        })
        it("mdM2P() (madi masculine 2nd person plural) returns حَجَجْتُمْ", () => {
            expect(verbInstance.mdM2P()).toEqual("حَجَجْتُمْ");
        })
        it("mdF21() (madi feminine 2nd person singular) returns حَجَجْتِ", () => {
            expect(verbInstance.mdF21()).toEqual("حَجَجْتِ");
        })
        it("mdF22() (madi feminine 2nd person dual) returns حَجَجْتُمَا", () => {
            expect(verbInstance.mdF22()).toEqual("حَجَجْتُمَا");
        })
        it("mdF2P() (madi feminine 2nd person plural) returns حَجَجْتُنَّ", () => {
            expect(verbInstance.mdF2P()).toEqual("حَجَجْتُنَّ");
        })
        it("mdB1() (madi 1st  person singular (both)) returns حَجَجْتُ", () => {
            expect(verbInstance.mdB1()).toEqual("حَجَجْتُ");
        })
        it("mdB3() (madi 1st  person all (both)) returns حَجَجْنَا", () => {
            expect(verbInstance.mdB3()).toEqual("حَجَجْنَا");
        })

        // madi majhul
        it("mdMjM1() (madi majhul masculine singular) returns حُجَّ", () => {
            expect(verbInstance.mdMjM1()).toEqual("حُجَّ");
        })
        it("mdMjM2() (madi majhul masculine dual) returns حُجَّا", () => {
            expect(verbInstance.mdMjM2()).toEqual("حُجَّا");
        })
        it("mdMjMP() (madi majhul masculine plural) returns حُجُّواْ", () => {
            expect(verbInstance.mdMjMP()).toEqual("حُجُّواْ");
        })
        it("mdMjF1() (madi majhul faminine singular) returns حُجَّتْ", () => {
            expect(verbInstance.mdMjF1()).toEqual("حُجَّتْ");
        })
        it("mdMjF2() (madi majhul faminine dual) returns حُجَّتَا", () => {
            expect(verbInstance.mdMjF2()).toEqual("حُجَّتَا");
        })
        it("mdMjFP() (madi majhul faminine plural) returns حُجِجْنَ", () => {
            expect(verbInstance.mdMjFP()).toEqual("حُجِجْنَ");
        })
        it("mdMjM21() (madi majhul masculine 2nd person singular) returns حُجِجْتَ", () => {
            expect(verbInstance.mdMjM21()).toEqual("حُجِجْتَ");
        })
        it("mdMjM22() (madi majhul masculine 2nd person dual) returns حُجِجْتُمَا", () => {
            expect(verbInstance.mdMjM22()).toEqual("حُجِجْتُمَا");
        })
        it("mdMjM2P() (madi majhul masculine 2nd person plural) returns حُجِجْتُمْ", () => {
            expect(verbInstance.mdMjM2P()).toEqual("حُجِجْتُمْ");
        })
        it("mdMjF21() (madi majhul feminine 2nd person singular) returns حُجِجْتِ", () => {
            expect(verbInstance.mdMjF21()).toEqual("حُجِجْتِ");
        })
        it("mdMjF22() (madi majhul feminine 2nd person dual) returns حُجِجْتُمَا", () => {
            expect(verbInstance.mdMjF22()).toEqual("حُجِجْتُمَا");
        })
        it("mdMjF2P() (madi majhul feminine 2nd person plural) returns حُجِجْتُنَّ", () => {
            expect(verbInstance.mdMjF2P()).toEqual("حُجِجْتُنَّ");
        })
        it("mdMjB1() (madi majhul 1st  person singular (both)) returns حُجِجْتُ", () => {
            expect(verbInstance.mdMjB1()).toEqual("حُجِجْتُ");
        })
        it("mdMjB3() (madi majhul 1st  person all (both)) returns حُجِجْنَا", () => {
            expect(verbInstance.mdMjB3()).toEqual("حُجِجْنَا");
        })

        // mudari

        it("mdrM1() (mudari masculine singular) returns يَحُجُّ", () => {
            expect(verbInstance.mdrM1()).toEqual("يَحُجُّ");
        })
        it("mdrM2() (mudari masculine dual) returns يَحُجَّانِ", () => {
            expect(verbInstance.mdrM2()).toEqual("يَحُجَّانِ");
        })
        it("mdrMP() (mudari masculine plural) returns يَحُجُّوْنَ", () => {
            expect(verbInstance.mdrMP()).toEqual("يَحُجُّوْنَ");
        })
        it("mdrF1() (mudari faminine singular) returns تَحُجُّ", () => {
            expect(verbInstance.mdrF1()).toEqual("تَحُجُّ");
        })
        it("mdrF2() (mudari faminine dual) returns تَحُجَّانِ", () => {
            expect(verbInstance.mdrF2()).toEqual("تَحُجَّانِ");
        })
        it("mdrFP() (mudari faminine plural) returns يَحْجُجْنَ", () => {
            expect(verbInstance.mdrFP()).toEqual("يَحْجُجْنَ");
        })
        it("mdrM21() (mudari masculine 2nd person singular) returns تَحُجُّ", () => {
            expect(verbInstance.mdrM21()).toEqual("تَحُجُّ");
        })
        it("mdrM22() (mudari masculine 2nd person dual) returns تَحُجَّانِ", () => {
            expect(verbInstance.mdrM22()).toEqual("تَحُجَّانِ");
        })
        it("mdrM2P() (mudari masculine 2nd person plural) returns تَحُجُّوْنَ", () => {
            expect(verbInstance.mdrM2P()).toEqual("تَحُجُّوْنَ");
        })
        it("mdrF21() (mudari feminine 2nd person singular) returns تَحُجِّيْنَ", () => {
            expect(verbInstance.mdrF21()).toEqual("تَحُجِّيْنَ");
        })
        it("mdrF22() (mudari feminine 2nd person dual) returns تَحُجَّانِ", () => {
            expect(verbInstance.mdrF22()).toEqual("تَحُجَّانِ");
        })
        it("mdrF2P() (mudari feminine 2nd person plural) returns تَحْجُجْنَ", () => {
            expect(verbInstance.mdrF2P()).toEqual("تَحْجُجْنَ");
        })
        it("mdrB1() (mudari 1st  person singular (both)) returns أَحُجُّ", () => {
            expect(verbInstance.mdrB1()).toEqual("أَحُجُّ");
        })
        it("mdrB3() (mudari 1st  person all (both)) returns نَحُجُّ", () => {
            expect(verbInstance.mdrB3()).toEqual("نَحُجُّ");
        })

        // mudari majhul
        it("mdrMjM1() (mudari majhul masculine singular) returns يُحَجُّ", () => {
            expect(verbInstance.mdrMjM1()).toEqual("يُحَجُّ");
        })
        it("mdrMjM2() (mudari majhul masculine dual) returns يُحَجَّانِ", () => {
            expect(verbInstance.mdrMjM2()).toEqual("يُحَجَّانِ");
        })
        it("mdrMjMP() (mudari majhul masculine plural) returns يُحَجُّوْنَ", () => {
            expect(verbInstance.mdrMjMP()).toEqual("يُحَجُّوْنَ");
        })
        it("mdrMjF1() (mudari majhul faminine singular) returns تُحَجُّ", () => {
            expect(verbInstance.mdrMjF1()).toEqual("تُحَجُّ");
        })
        it("mdrMjF2() (mudari majhul faminine dual) returns تُحَجَّانِ", () => {
            expect(verbInstance.mdrMjF2()).toEqual("تُحَجَّانِ");
        })
        it("mdrMjFP() (mudari majhul faminine plural) returns يُحْجَجْنَ", () => {
            expect(verbInstance.mdrMjFP()).toEqual("يُحْجَجْنَ");
        })
        it("mdrMjM21() (mudari majhul masculine 2nd person singular) returns تُحَجُّ", () => {
            expect(verbInstance.mdrMjM21()).toEqual("تُحَجُّ");
        })
        it("mdrMjM22() (mudari majhul masculine 2nd person dual) returns تُحَجَّانِ", () => {
            expect(verbInstance.mdrMjM22()).toEqual("تُحَجَّانِ");
        })
        it("mdrMjM2P() (mudari majhul masculine 2nd person plural) returns تُحَجُّوْنَ", () => {
            expect(verbInstance.mdrMjM2P()).toEqual("تُحَجُّوْنَ");
        })
        it("mdrMjF21() (mudari majhul feminine 2nd person singular) returns تُحَجِّيْنَ", () => {
            expect(verbInstance.mdrMjF21()).toEqual("تُحَجِّيْنَ");
        })
        it("mdrMjF22() (mudari majhul feminine 2nd person dual) returns تُحَجَّانِ", () => {
            expect(verbInstance.mdrMjF22()).toEqual("تُحَجَّانِ");
        })
        it("mdrMjF2P() (mudari majhul feminine 2nd person plural) returns تُحْجَجْنَ", () => {
            expect(verbInstance.mdrMjF2P()).toEqual("تُحْجَجْنَ");
        })
        it("mdrMjB1() (mudari majhul 1st  person singular (both)) returns أُحَجُّ", () => {
            expect(verbInstance.mdrMjB1()).toEqual("أُحَجُّ");
        })
        it("mdrMjB3() (mudari majhul 1st  person all (both)) returns نُحَجُّ", () => {
            expect(verbInstance.mdrMjB3()).toEqual("نُحَجُّ");
        })

        it("ismF() (Ism fa'eel) returns حَاجٌّ", () => {
            expect(verbInstance.ismF()).toEqual("حَاجٌّ");
        })
        it("ismMfl() (Ism maf'ul) returns مَحْجُوجٌ", () => {
            expect(verbInstance.ismMfl()).toEqual("مَحْجُوجٌ");
        })
        // amr
        it("amrM1() (fel amr masculine singular) returns حُجَّ", () => {
            expect(verbInstance.amrM1()).toEqual("حُجَّ");
        })
        it("amrM2() (fel amr masculine dual) returns حُجَّا", () => {
            expect(verbInstance.amrM2()).toEqual("حُجَّا");
        })
        it("amrMP() (fel amr masculine plural) returns حُجُّواْ", () => {
            expect(verbInstance.amrMP()).toEqual("حُجُّواْ");
        })
        it("amrF1() (fel amr feminine singular) returns حُجِّيْ", () => {
            expect(verbInstance.amrF1()).toEqual("حُجِّيْ");
        })
        it("amrF2() (fel amr feminine dual) returns حُجَّا", () => {
            expect(verbInstance.amrF2()).toEqual("حُجَّا");
        })
        it("amrFP() (fel amr feminine plural) returns اُحْجُجْنَ", () => {
            expect(verbInstance.amrFP()).toEqual("اُحْجُجْنَ");
        })
        // nahi
        it("nahiM1() (fel nahi masculine singular) returns لاَ تَحُجَّ", () => {
            expect(verbInstance.nahiM1()).toEqual("لاَ تَحُجَّ");
        })
        it("nahiM2() (fel nahi masculine dual) returns لاَ تَحُجَّا", () => {
            expect(verbInstance.nahiM2()).toEqual("لاَ تَحُجَّا");
        })
        it("nahiMP() (fel nahi masculine plural) returns لاَ تَحُجُّواْ", () => {
            expect(verbInstance.nahiMP()).toEqual("لاَ تَحُجُّواْ");
        })
        it("nahiF1() (fel nahi feminine singular) returns لاَ تَحُجِّيْ", () => {
            expect(verbInstance.nahiF1()).toEqual("لاَ تَحُجِّيْ");
        })
        it("nahiF2() (fel nahi feminine dual) returns لاَ تَحُجَّا", () => {
            expect(verbInstance.nahiF2()).toEqual("لاَ تَحُجَّا");
        })
        it("nahiFP() (fel nahi feminine plural) returns لاَ تَحْجُجْنَ", () => {
            expect(verbInstance.nahiFP()).toEqual("لاَ تَحْجُجْنَ");
        })
        it("msdr() (masder) returns حَجّ", () => {
            expect(verbInstance.msdr()).toEqual("حَجّ");
        })
        it("zarf() (fel nahi feminine plural) returns مَحْجُوجٌ", () => {
            expect(verbInstance.zarf()).toEqual("مَحْجُوجٌ");
        })
    });

    describe("weak verbs: mithal", () => {
        describe("aa  root `و ه ب`", () => {
            beforeEach(() => {
                const root = "و ه ب";
                verbInstance = verbFormInst({
                    form: 'I', root, "bab": "aa", "msdr": "وَهْب"
                })
            })

            it("mdM1() (madi masculine singular) returns وَهَبَ", () => {
                expect(verbInstance.mdM1()).toEqual("وَهَبَ");
            })
            it("mdM2() (madi masculine dual) returns وَهَبَا", () => {
                expect(verbInstance.mdM2()).toEqual("وَهَبَا");
            })
            it("mdF2P() (madi feminine 2nd person plural) returns وَهَبْتُنَّ", () => {
                expect(verbInstance.mdF2P()).toEqual("وَهَبْتُنَّ");
            })


            // madi majhul
            it("mdMjM1() (madi majhul masculine singular) returns وُهِبَ", () => {
                expect(verbInstance.mdMjM1()).toEqual("وُهِبَ");
            })
            it("mdMjM2() (madi majhul masculine dual) returns وُهِبَا", () => {
                expect(verbInstance.mdMjM2()).toEqual("وُهِبَا");
            })

            it("mdMjF2P() (madi majhul feminine 2nd person plural) returns وُهِبْتُنَّ", () => {
                expect(verbInstance.mdMjF2P()).toEqual("وُهِبْتُنَّ");
            })


            // mudari starts here
            it("mdrM1() (mudari masculine singular) returns يَهَبُ", () => {
                expect(verbInstance.mdrM1()).toEqual("يَهَبُ");
            })
            it("mdrM2() (mudari masculine dual) returns يَهَبَانِ", () => {
                expect(verbInstance.mdrM2()).toEqual("يَهَبَانِ");
            })
            it("mdrMP() (mudari masculine plural) returns يَهَبُوْنَ", () => {
                expect(verbInstance.mdrMP()).toEqual("يَهَبُوْنَ");
            })
            it("mdrF1() (mudari faminine singular) returns تَهَبُ", () => {
                expect(verbInstance.mdrF1()).toEqual("تَهَبُ");
            })
            it("mdrF2() (mudari faminine dual) returns تَهَبَانِ", () => {
                expect(verbInstance.mdrF2()).toEqual("تَهَبَانِ");
            })
            it("mdrFP() (mudari faminine plural) returns يَهَبْنَ", () => {
                expect(verbInstance.mdrFP()).toEqual("يَهَبْنَ");
            })
            it("mdrM21() (mudari masculine 2nd person singular) returns تَهَبُ", () => {
                expect(verbInstance.mdrM21()).toEqual("تَهَبُ");
            })
            it("mdrM22() (mudari masculine 2nd person dual) returns تَهَبَانِ", () => {
                expect(verbInstance.mdrM22()).toEqual("تَهَبَانِ");
            })
            it("mdrM2P() (mudari masculine 2nd person plural) returns تَهَبُوْنَ", () => {
                expect(verbInstance.mdrM2P()).toEqual("تَهَبُوْنَ");
            })
            it("mdrF21() (mudari feminine 2nd person singular) returns تَهَبِيْنَ", () => {
                expect(verbInstance.mdrF21()).toEqual("تَهَبِيْنَ");
            })
            it("mdrF22() (mudari feminine 2nd person dual) returns تَهَبَانِ", () => {
                expect(verbInstance.mdrF22()).toEqual("تَهَبَانِ");
            })
            it("mdrF2P() (mudari feminine 2nd person plural) returns تَهَبْنَ", () => {
                expect(verbInstance.mdrF2P()).toEqual("تَهَبْنَ");
            })
            it("mdrB1() (mudari 1st  person singular (both)) returns أَهَبُ", () => {
                expect(verbInstance.mdrB1()).toEqual("أَهَبُ");
            })
            it("mdrB3() (mudari 1st  person all (both)) returns نَهَبُ", () => {
                expect(verbInstance.mdrB3()).toEqual("نَهَبُ");
            })

            // mudari majhul
            it("mdrMjM1() (mudari majhul masculine singular) returns يُوْهَبُ", () => {
                expect(verbInstance.mdrMjM1()).toEqual("يُوْهَبُ");
            })
            it("mdrMjM2() (mudari majhul masculine dual) returns يُوْهَبَانِ", () => {
                expect(verbInstance.mdrMjM2()).toEqual("يُوْهَبَانِ");
            })
            it("mdrMjMP() (mudari majhul masculine plural) returns يُوْهَبُوْنَ", () => {
                expect(verbInstance.mdrMjMP()).toEqual("يُوْهَبُوْنَ");
            })
            it("mdrMjF1() (mudari majhul faminine singular) returns تُوْهَبُ", () => {
                expect(verbInstance.mdrMjF1()).toEqual("تُوْهَبُ");
            })
            it("mdrMjF2() (mudari majhul faminine dual) returns تُوْهَبَانِ", () => {
                expect(verbInstance.mdrMjF2()).toEqual("تُوْهَبَانِ");
            })
            it("mdrMjFP() (mudari majhul faminine plural) returns يُوْهَبْنَ", () => {
                expect(verbInstance.mdrMjFP()).toEqual("يُوْهَبْنَ");
            })
            it("mdrMjM21() (mudari majhul masculine 2nd person singular) returns تُوْهَبُ", () => {
                expect(verbInstance.mdrMjM21()).toEqual("تُوْهَبُ");
            })
            it("mdrMjM22() (mudari majhul masculine 2nd person dual) returns تُوْهَبَانِ", () => {
                expect(verbInstance.mdrMjM22()).toEqual("تُوْهَبَانِ");
            })
            it("mdrMjM2P() (mudari majhul masculine 2nd person plural) returns تُوْهَبُوْنَ", () => {
                expect(verbInstance.mdrMjM2P()).toEqual("تُوْهَبُوْنَ");
            })
            it("mdrMjF21() (mudari majhul feminine 2nd person singular) returns تُوْهَبِيْنَ", () => {
                expect(verbInstance.mdrMjF21()).toEqual("تُوْهَبِيْنَ");
            })
            it("mdrMjF22() (mudari majhul feminine 2nd person dual) returns تُوْهَبَانِ", () => {
                expect(verbInstance.mdrMjF22()).toEqual("تُوْهَبَانِ");
            })
            it("mdrMjF2P() (mudari majhul feminine 2nd person plural) returns تُوْهَبْنَ", () => {
                expect(verbInstance.mdrMjF2P()).toEqual("تُوْهَبْنَ");
            })
            it("mdrMjB1() (mudari majhul 1st  person singular (both)) returns أُوْهَبُ", () => {
                expect(verbInstance.mdrMjB1()).toEqual("أُوْهَبُ");
            })
            it("mdrMjB3() (mudari majhul 1st  person all (both)) returns نُوْهَبُ", () => {
                expect(verbInstance.mdrMjB3()).toEqual("نُوْهَبُ");
            })

            it("ismF() (Ism fa'eel) returns وَاهِبٌ", () => {
                expect(verbInstance.ismF()).toEqual("وَاهِبٌ");
            })
            it("ismMfl() (Ism maf'ul) returns مَوْهُوبٌ", () => {
                expect(verbInstance.ismMfl()).toEqual("مَوْهُوبٌ");
            })
            // amr
            it("amrM1() (fel amr masculine singular) returns هَبْ", () => {
                expect(verbInstance.amrM1()).toEqual("هَبْ");
            })
            it("amrM2() (fel amr masculine dual) returns هَبَا", () => {
                expect(verbInstance.amrM2()).toEqual("هَبَا");
            })
            it("amrMP() (fel amr masculine plural) returns هَبُواْ", () => {
                expect(verbInstance.amrMP()).toEqual("هَبُواْ");
            })
            it("amrF1() (fel amr feminine singular) returns هَبِيْ", () => {
                expect(verbInstance.amrF1()).toEqual("هَبِيْ");
            })
            it("amrF2() (fel amr feminine dual) returns هَبَا", () => {
                expect(verbInstance.amrF2()).toEqual("هَبَا");
            })
            it("amrFP() (fel amr feminine plural) returns هَبْنَ", () => {
                expect(verbInstance.amrFP()).toEqual("هَبْنَ");
            })
            // nahi
            it("nahiM1() (fel nahi masculine singular) returns لاَ تَهَبْ", () => {
                expect(verbInstance.nahiM1()).toEqual("لاَ تَهَبْ");
            })
            it("nahiM2() (fel nahi masculine dual) returns لاَ تَهَبَا", () => {
                expect(verbInstance.nahiM2()).toEqual("لاَ تَهَبَا");
            })
            it("nahiMP() (fel nahi masculine plural) returns لاَ تَهَبُواْ", () => {
                expect(verbInstance.nahiMP()).toEqual("لاَ تَهَبُواْ");
            })
            it("nahiF1() (fel nahi feminine singular) returns لاَ تَهَبِيْ", () => {
                expect(verbInstance.nahiF1()).toEqual("لاَ تَهَبِيْ");
            })
            it("nahiF2() (fel nahi feminine dual) returns لاَ تَهَبَا", () => {
                expect(verbInstance.nahiF2()).toEqual("لاَ تَهَبَا");
            })
            it("nahiFP() (fel nahi feminine plural) returns لاَ تَهَبْنَ", () => {
                expect(verbInstance.nahiFP()).toEqual("لاَ تَهَبْنَ");
            })
            it("msdr() (masder) returns وَهْب", () => {
                expect(verbInstance.msdr()).toEqual("وَهْب");
            })
            it("zarf() (fel nahi feminine plural) returns مَوْهُوبٌ", () => {
                expect(verbInstance.zarf()).toEqual("مَوْهُوبٌ");
            })
        });

        describe("ea  root `و ج ل`", () => {
            beforeEach(() => {
                const root = "و ج ل";
                verbInstance = verbFormInst({
                    form: 'I', root, "bab": "ea", "msdr": "وَجَل"
                })
            })

            it("mdM1() (madi masculine singular) returns وَجِلَ", () => {
                expect(verbInstance.mdM1()).toEqual("وَجِلَ");
            })
            it("mdM2() (madi masculine dual) returns وَجِلَا", () => {
                expect(verbInstance.mdM2()).toEqual("وَجِلَا");
            })
            it("mdF2P() (madi feminine 2nd person plural) returns وَجِلْتُنَّ", () => {
                expect(verbInstance.mdF2P()).toEqual("وَجِلْتُنَّ");
            })


            // madi majhul
            it("mdMjM1() (madi majhul masculine singular) returns وُجِلَ", () => {
                expect(verbInstance.mdMjM1()).toEqual("وُجِلَ");
            })
            it("mdMjM2() (madi majhul masculine dual) returns وُجِلَا", () => {
                expect(verbInstance.mdMjM2()).toEqual("وُجِلَا");
            })

            it("mdMjF2P() (madi majhul feminine 2nd person plural) returns وُجِلْتُنَّ", () => {
                expect(verbInstance.mdMjF2P()).toEqual("وُجِلْتُنَّ");
            })


            // mudari starts here
            it("mdrM1() (mudari masculine singular) returns يَوْجَلُ", () => {
                expect(verbInstance.mdrM1()).toEqual("يَوْجَلُ");
            })
            it("mdrM2() (mudari masculine dual) returns يَوْجَلَانِ", () => {
                expect(verbInstance.mdrM2()).toEqual("يَوْجَلَانِ");
            })
            it("mdrMP() (mudari masculine plural) returns يَوْجَلُوْنَ", () => {
                expect(verbInstance.mdrMP()).toEqual("يَوْجَلُوْنَ");
            })
            it("mdrF1() (mudari faminine singular) returns تَوْجَلُ", () => {
                expect(verbInstance.mdrF1()).toEqual("تَوْجَلُ");
            })
            it("mdrF2() (mudari faminine dual) returns تَوْجَلَانِ", () => {
                expect(verbInstance.mdrF2()).toEqual("تَوْجَلَانِ");
            })
            it("mdrFP() (mudari faminine plural) returns يَوْجَلْنَ", () => {
                expect(verbInstance.mdrFP()).toEqual("يَوْجَلْنَ");
            })
            it("mdrM21() (mudari masculine 2nd person singular) returns تَوْجَلُ", () => {
                expect(verbInstance.mdrM21()).toEqual("تَوْجَلُ");
            })
            it("mdrM22() (mudari masculine 2nd person dual) returns تَوْجَلَانِ", () => {
                expect(verbInstance.mdrM22()).toEqual("تَوْجَلَانِ");
            })
            it("mdrM2P() (mudari masculine 2nd person plural) returns تَوْجَلُوْنَ", () => {
                expect(verbInstance.mdrM2P()).toEqual("تَوْجَلُوْنَ");
            })
            it("mdrF21() (mudari feminine 2nd person singular) returns تَوْجَلِيْنَ", () => {
                expect(verbInstance.mdrF21()).toEqual("تَوْجَلِيْنَ");
            })
            it("mdrF22() (mudari feminine 2nd person dual) returns تَوْجَلَانِ", () => {
                expect(verbInstance.mdrF22()).toEqual("تَوْجَلَانِ");
            })
            it("mdrF2P() (mudari feminine 2nd person plural) returns تَوْجَلْنَ", () => {
                expect(verbInstance.mdrF2P()).toEqual("تَوْجَلْنَ");
            })
            it("mdrB1() (mudari 1st  person singular (both)) returns أَوْجَلُ", () => {
                expect(verbInstance.mdrB1()).toEqual("أَوْجَلُ");
            })
            it("mdrB3() (mudari 1st  person all (both)) returns نَوْجَلُ", () => {
                expect(verbInstance.mdrB3()).toEqual("نَوْجَلُ");
            })

            // mudari majhul
            it("mdrMjM1() (mudari majhul masculine singular) returns يُوْجَلُ", () => {
                expect(verbInstance.mdrMjM1()).toEqual("يُوْجَلُ");
            })
            it("mdrMjM2() (mudari majhul masculine dual) returns يُوْجَلَانِ", () => {
                expect(verbInstance.mdrMjM2()).toEqual("يُوْجَلَانِ");
            })
            it("mdrMjMP() (mudari majhul masculine plural) returns يُوْجَلُوْنَ", () => {
                expect(verbInstance.mdrMjMP()).toEqual("يُوْجَلُوْنَ");
            })
            it("mdrMjF1() (mudari majhul faminine singular) returns تُوْجَلُ", () => {
                expect(verbInstance.mdrMjF1()).toEqual("تُوْجَلُ");
            })
            it("mdrMjF2() (mudari majhul faminine dual) returns تُوْجَلَانِ", () => {
                expect(verbInstance.mdrMjF2()).toEqual("تُوْجَلَانِ");
            })
            it("mdrMjFP() (mudari majhul faminine plural) returns يُوْجَلْنَ", () => {
                expect(verbInstance.mdrMjFP()).toEqual("يُوْجَلْنَ");
            })

            it("ismF() (Ism fa'eel) returns وَاجِلٌ", () => {
                expect(verbInstance.ismF()).toEqual("وَاجِلٌ");
            })
            it("ismMfl() (Ism maf'ul) returns مَوْجُولٌ", () => {
                expect(verbInstance.ismMfl()).toEqual("مَوْجُولٌ");
            })
            // amr
            it("amrM1() (fel amr masculine singular) returns اِيْجَلْ", () => {
                expect(verbInstance.amrM1()).toEqual("اِيْجَلْ");
            })
            it("amrM2() (fel amr masculine dual) returns اِيْجَلَا", () => {
                expect(verbInstance.amrM2()).toEqual("اِيْجَلَا");
            })
            it("amrMP() (fel amr masculine plural) returns اِيْجَلُواْ", () => {
                expect(verbInstance.amrMP()).toEqual("اِيْجَلُواْ");
            })
            it("amrF1() (fel amr feminine singular) returns اِيْجَلِيْ", () => {
                expect(verbInstance.amrF1()).toEqual("اِيْجَلِيْ");
            })
            it("amrF2() (fel amr feminine dual) returns اِيْجَلَا", () => {
                expect(verbInstance.amrF2()).toEqual("اِيْجَلَا");
            })
            it("amrFP() (fel amr feminine plural) returns اِيْجَلْنَ", () => {
                expect(verbInstance.amrFP()).toEqual("اِيْجَلْنَ");
            })

            it("msdr() (masder) returns وَجَل", () => {
                expect(verbInstance.msdr()).toEqual("وَجَل");
            })
            it("zarf() (fel nahi feminine plural) returns مَوْجُولٌ", () => {
                expect(verbInstance.zarf()).toEqual("مَوْجُولٌ");
            })
        });
    });

    describe("weak verbs: ajwaf", () => {
        describe("au  root `ق و ل`", () => {
            beforeEach(() => {
                const root = "ق و ل";
                verbInstance = verbFormInst({
                    form: 'I', root, "bab": "au", "msdr": "قَوْل"
                })
            })

            it("mdM1() (madi masculine singular) returns قَالَ", () => {
                expect(verbInstance.mdM1()).toEqual("قَالَ");
            })
            it("mdM2() (madi masculine dual) returns قَالَا", () => {
                expect(verbInstance.mdM2()).toEqual("قَالَا");
            })
            it("mdMP() (madi masculine plural) returns قَالُواْ", () => {
                expect(verbInstance.mdMP()).toEqual("قَالُواْ");
            })
            it("mdF1() (madi faminine singular) returns قَالَتْ", () => {
                expect(verbInstance.mdF1()).toEqual("قَالَتْ");
            })
            it("mdF2() (madi faminine dual) returns قَالَتَا", () => {
                expect(verbInstance.mdF2()).toEqual("قَالَتَا");
            })
            it("mdFP() (madi faminine plural) returns قُلْنَ", () => {
                expect(verbInstance.mdFP()).toEqual("قُلْنَ");
            })
            it("mdM21() (madi masculine 2nd person singular) returns قُلْتَ", () => {
                expect(verbInstance.mdM21()).toEqual("قُلْتَ");
            })
            it("mdM22() (madi masculine 2nd person dual) returns قُلْتُمَا", () => {
                expect(verbInstance.mdM22()).toEqual("قُلْتُمَا");
            })
            it("mdM2P() (madi masculine 2nd person plural) returns قُلْتُمْ", () => {
                expect(verbInstance.mdM2P()).toEqual("قُلْتُمْ");
            })
            it("mdF21() (madi feminine 2nd person singular) returns قُلْتِ", () => {
                expect(verbInstance.mdF21()).toEqual("قُلْتِ");
            })
            it("mdF22() (madi feminine 2nd person dual) returns قُلْتُمَا", () => {
                expect(verbInstance.mdF22()).toEqual("قُلْتُمَا");
            })
            it("mdF2P() (madi feminine 2nd person plural) returns قُلْتُنَّ", () => {
                expect(verbInstance.mdF2P()).toEqual("قُلْتُنَّ");
            })
            it("mdB1() (madi 1st  person singular (both)) returns قُلْتُ", () => {
                expect(verbInstance.mdB1()).toEqual("قُلْتُ");
            })
            it("mdB3() (madi 1st  person all (both)) returns قُلْنَا", () => {
                expect(verbInstance.mdB3()).toEqual("قُلْنَا");
            })

            // madi majhul
            it("mdMjM1() (madi majhul masculine singular) returns قِيلَ", () => {
                expect(verbInstance.mdMjM1()).toEqual("قِيلَ");
            })
            it("mdMjM2() (madi majhul masculine dual) returns قِيلَا", () => {
                expect(verbInstance.mdMjM2()).toEqual("قِيلَا");
            })
            it("mdMjMP() (madi majhul masculine plural) returns قِيلُواْ", () => {
                expect(verbInstance.mdMjMP()).toEqual("قِيلُواْ");
            })
            it("mdMjF1() (madi majhul faminine singular) returns قِيلَتْ", () => {
                expect(verbInstance.mdMjF1()).toEqual("قِيلَتْ");
            })
            it("mdMjF2() (madi majhul faminine dual) returns قِيلَتَا", () => {
                expect(verbInstance.mdMjF2()).toEqual("قِيلَتَا");
            })
            it("mdMjFP() (madi majhul faminine plural) returns قِلْنَ", () => {
                expect(verbInstance.mdMjFP()).toEqual("قِلْنَ");
            })
            it("mdMjM21() (madi majhul masculine 2nd person singular) returns قِلْتَ", () => {
                expect(verbInstance.mdMjM21()).toEqual("قِلْتَ");
            })
            it("mdMjM22() (madi majhul masculine 2nd person dual) returns قِلْتُمَا", () => {
                expect(verbInstance.mdMjM22()).toEqual("قِلْتُمَا");
            })
            it("mdMjM2P() (madi majhul masculine 2nd person plural) returns قِلْتُمْ", () => {
                expect(verbInstance.mdMjM2P()).toEqual("قِلْتُمْ");
            })
            it("mdMjF21() (madi majhul feminine 2nd person singular) returns قِلْتِ", () => {
                expect(verbInstance.mdMjF21()).toEqual("قِلْتِ");
            })
            it("mdMjF22() (madi majhul feminine 2nd person dual) returns قِلْتُمَا", () => {
                expect(verbInstance.mdMjF22()).toEqual("قِلْتُمَا");
            })
            it("mdMjF2P() (madi majhul feminine 2nd person plural) returns قِلْتُنَّ", () => {
                expect(verbInstance.mdMjF2P()).toEqual("قِلْتُنَّ");
            })
            it("mdMjB1() (madi majhul 1st  person singular (both)) returns قِلْتُ", () => {
                expect(verbInstance.mdMjB1()).toEqual("قِلْتُ");
            })
            it("mdMjB3() (madi majhul 1st  person all (both)) returns قِلْنَا", () => {
                expect(verbInstance.mdMjB3()).toEqual("قِلْنَا");
            })

            // mudari starts here
            it("mdrM1() (mudari masculine singular) returns يَقُوْلُ", () => {
                expect(verbInstance.mdrM1()).toEqual("يَقُوْلُ");
            })
            it("mdrM2() (mudari masculine dual) returns يَقُوْلَانِ", () => {
                expect(verbInstance.mdrM2()).toEqual("يَقُوْلَانِ");
            })
            it("mdrMP() (mudari masculine plural) returns يَقُوْلُوْنَ", () => {
                expect(verbInstance.mdrMP()).toEqual("يَقُوْلُوْنَ");
            })
            it("mdrF1() (mudari faminine singular) returns تَقُوْلُ", () => {
                expect(verbInstance.mdrF1()).toEqual("تَقُوْلُ");
            })
            it("mdrF2() (mudari faminine dual) returns تَقُوْلَانِ", () => {
                expect(verbInstance.mdrF2()).toEqual("تَقُوْلَانِ");
            })
            it("mdrFP() (mudari faminine plural) returns يَقُلْنَ", () => {
                expect(verbInstance.mdrFP()).toEqual("يَقُلْنَ");
            })
            it("mdrM21() (mudari masculine 2nd person singular) returns تَقُوْلُ", () => {
                expect(verbInstance.mdrM21()).toEqual("تَقُوْلُ");
            })
            it("mdrM22() (mudari masculine 2nd person dual) returns تَقُوْلَانِ", () => {
                expect(verbInstance.mdrM22()).toEqual("تَقُوْلَانِ");
            })
            it("mdrM2P() (mudari masculine 2nd person plural) returns تَقُوْلُوْنَ", () => {
                expect(verbInstance.mdrM2P()).toEqual("تَقُوْلُوْنَ");
            })
            it("mdrF21() (mudari feminine 2nd person singular) returns تَقُوْلِيْنَ", () => {
                expect(verbInstance.mdrF21()).toEqual("تَقُوْلِيْنَ");
            })
            it("mdrF22() (mudari feminine 2nd person dual) returns تَقُوْلَانِ", () => {
                expect(verbInstance.mdrF22()).toEqual("تَقُوْلَانِ");
            })
            it("mdrF2P() (mudari feminine 2nd person plural) returns تَقُلْنَ", () => {
                expect(verbInstance.mdrF2P()).toEqual("تَقُلْنَ");
            })
            it("mdrB1() (mudari 1st  person singular (both)) returns أَقُوْلُ", () => {
                expect(verbInstance.mdrB1()).toEqual("أَقُوْلُ");
            })
            it("mdrB3() (mudari 1st  person all (both)) returns نَقُوْلُ", () => {
                expect(verbInstance.mdrB3()).toEqual("نَقُوْلُ");
            })

            // mudari majhul
            it("mdrMjM1() (mudari majhul masculine singular) returns يُقَالُ", () => {
                expect(verbInstance.mdrMjM1()).toEqual("يُقَالُ");
            })
            it("mdrMjM2() (mudari majhul masculine dual) returns يُقَالَانِ", () => {
                expect(verbInstance.mdrMjM2()).toEqual("يُقَالَانِ");
            })
            it("mdrMjMP() (mudari majhul masculine plural) returns يُقَالُوْنَ", () => {
                expect(verbInstance.mdrMjMP()).toEqual("يُقَالُوْنَ");
            })
            it("mdrMjF1() (mudari majhul faminine singular) returns تُقَالُ", () => {
                expect(verbInstance.mdrMjF1()).toEqual("تُقَالُ");
            })
            it("mdrMjF2() (mudari majhul faminine dual) returns تُقَالَانِ", () => {
                expect(verbInstance.mdrMjF2()).toEqual("تُقَالَانِ");
            })
            it("mdrMjFP() (mudari majhul faminine plural) returns يُقَلْنَ", () => {
                expect(verbInstance.mdrMjFP()).toEqual("يُقَلْنَ");
            })
            it("mdrMjM21() (mudari majhul masculine 2nd person singular) returns تُقَالُ", () => {
                expect(verbInstance.mdrMjM21()).toEqual("تُقَالُ");
            })
            it("mdrMjM22() (mudari majhul masculine 2nd person dual) returns تُقَالَانِ", () => {
                expect(verbInstance.mdrMjM22()).toEqual("تُقَالَانِ");
            })
            it("mdrMjM2P() (mudari majhul masculine 2nd person plural) returns تُقَالُوْنَ", () => {
                expect(verbInstance.mdrMjM2P()).toEqual("تُقَالُوْنَ");
            })
            it("mdrMjF21() (mudari majhul feminine 2nd person singular) returns تُقَالِيْنَ", () => {
                expect(verbInstance.mdrMjF21()).toEqual("تُقَالِيْنَ");
            })
            it("mdrMjF22() (mudari majhul feminine 2nd person dual) returns تُقَالَانِ", () => {
                expect(verbInstance.mdrMjF22()).toEqual("تُقَالَانِ");
            })
            it("mdrMjF2P() (mudari majhul feminine 2nd person plural) returns تُقَلْنَ", () => {
                expect(verbInstance.mdrMjF2P()).toEqual("تُقَلْنَ");
            })
            it("mdrMjB1() (mudari majhul 1st  person singular (both)) returns أُقَالُ", () => {
                expect(verbInstance.mdrMjB1()).toEqual("أُقَالُ");
            })
            it("mdrMjB3() (mudari majhul 1st  person all (both)) returns نُقَالُ", () => {
                expect(verbInstance.mdrMjB3()).toEqual("نُقَالُ");
            })

            it("ismF() (Ism fa'eel) returns قَائِلٌ", () => {
                expect(verbInstance.ismF()).toEqual("قَائِلٌ");
            })
            it("ismMfl() (Ism maf'ul) returns مَقُولٌ", () => {
                expect(verbInstance.ismMfl()).toEqual("مَقُولٌ");
            })
            // amr
            it("amrM1() (fel amr masculine singular) returns قُلْ", () => {
                expect(verbInstance.amrM1()).toEqual("قُلْ");
            })
            it("amrM2() (fel amr masculine dual) returns قُوْلَا", () => {
                expect(verbInstance.amrM2()).toEqual("قُوْلَا");
            })
            it("amrMP() (fel amr masculine plural) returns قُوْلُواْ", () => {
                expect(verbInstance.amrMP()).toEqual("قُوْلُواْ");
            })
            it("amrF1() (fel amr feminine singular) returns قُوْلِيْ", () => {
                expect(verbInstance.amrF1()).toEqual("قُوْلِيْ");
            })
            it("amrF2() (fel amr feminine dual) returns قُوْلَا", () => {
                expect(verbInstance.amrF2()).toEqual("قُوْلَا");
            })
            it("amrFP() (fel amr feminine plural) returns قُلْنَ", () => {
                expect(verbInstance.amrFP()).toEqual("قُلْنَ");
            })
            // nahi
            it("nahiM1() (fel nahi masculine singular) returns لاَ تَقُلْ", () => {
                expect(verbInstance.nahiM1()).toEqual("لاَ تَقُلْ");
            })
            it("nahiM2() (fel nahi masculine dual) returns لاَ تَقُوْلَا", () => {
                expect(verbInstance.nahiM2()).toEqual("لاَ تَقُوْلَا");
            })
            it("nahiMP() (fel nahi masculine plural) returns لاَ تَقُوْلُواْ", () => {
                expect(verbInstance.nahiMP()).toEqual("لاَ تَقُوْلُواْ");
            })
            it("nahiF1() (fel nahi feminine singular) returns لاَ تَقُوْلِيْ", () => {
                expect(verbInstance.nahiF1()).toEqual("لاَ تَقُوْلِيْ");
            })
            it("nahiF2() (fel nahi feminine dual) returns لاَ تَقُوْلَا", () => {
                expect(verbInstance.nahiF2()).toEqual("لاَ تَقُوْلَا");
            })
            it("nahiFP() (fel nahi feminine plural) returns لاَ تَقُلْنَ", () => {
                expect(verbInstance.nahiFP()).toEqual("لاَ تَقُلْنَ");
            })
            it("msdr() (masder) returns قَوْل", () => {
                expect(verbInstance.msdr()).toEqual("قَوْل");
            })
            it("zarf() (fel nahi feminine plural) returns مَقُولٌ", () => {
                expect(verbInstance.zarf()).toEqual("مَقُولٌ");
            })

        });

        describe("ea  root `خ و ف`", () => {
            beforeEach(() => {
                const root = "خ و ف";
                verbInstance = verbFormInst({
                    form: 'I', root, "bab": "ea", "msdr": "خَوْف"
                })
            })

            it("mdM1() (madi masculine singular) returns خَافَ", () => {
                expect(verbInstance.mdM1()).toEqual("خَافَ");
            })
            it("mdM2() (madi masculine dual) returns خَافَا", () => {
                expect(verbInstance.mdM2()).toEqual("خَافَا");
            })
            it("mdMP() (madi masculine plural) returns خَافُواْ", () => {
                expect(verbInstance.mdMP()).toEqual("خَافُواْ");
            })
            it("mdF1() (madi faminine singular) returns خَافَتْ", () => {
                expect(verbInstance.mdF1()).toEqual("خَافَتْ");
            })
            it("mdF2() (madi faminine dual) returns خَافَتَا", () => {
                expect(verbInstance.mdF2()).toEqual("خَافَتَا");
            })
            it("mdFP() (madi faminine plural) returns خِفْنَ", () => {
                expect(verbInstance.mdFP()).toEqual("خِفْنَ");
            })
            it("mdM21() (madi masculine 2nd person singular) returns خِفْتَ", () => {
                expect(verbInstance.mdM21()).toEqual("خِفْتَ");
            })
            it("mdM22() (madi masculine 2nd person dual) returns خِفْتُمَا", () => {
                expect(verbInstance.mdM22()).toEqual("خِفْتُمَا");
            })
            it("mdM2P() (madi masculine 2nd person plural) returns خِفْتُمْ", () => {
                expect(verbInstance.mdM2P()).toEqual("خِفْتُمْ");
            })
            it("mdF21() (madi feminine 2nd person singular) returns خِفْتِ", () => {
                expect(verbInstance.mdF21()).toEqual("خِفْتِ");
            })
            it("mdF22() (madi feminine 2nd person dual) returns خِفْتُمَا", () => {
                expect(verbInstance.mdF22()).toEqual("خِفْتُمَا");
            })
            it("mdF2P() (madi feminine 2nd person plural) returns خِفْتُنَّ", () => {
                expect(verbInstance.mdF2P()).toEqual("خِفْتُنَّ");
            })
            it("mdB1() (madi 1st  person singular (both)) returns خِفْتُ", () => {
                expect(verbInstance.mdB1()).toEqual("خِفْتُ");
            })
            it("mdB3() (madi 1st  person all (both)) returns خِفْنَا", () => {
                expect(verbInstance.mdB3()).toEqual("خِفْنَا");
            })

            // madi majhul
            it("mdMjM1() (madi majhul masculine singular) returns خِيفَ", () => {
                expect(verbInstance.mdMjM1()).toEqual("خِيفَ");
            })
            it("mdMjM2() (madi majhul masculine dual) returns خِيفَا", () => {
                expect(verbInstance.mdMjM2()).toEqual("خِيفَا");
            })
            it("mdMjMP() (madi majhul masculine plural) returns خِيفُواْ", () => {
                expect(verbInstance.mdMjMP()).toEqual("خِيفُواْ");
            })
            it("mdMjF1() (madi majhul faminine singular) returns خِيفَتْ", () => {
                expect(verbInstance.mdMjF1()).toEqual("خِيفَتْ");
            })
            it("mdMjF2() (madi majhul faminine dual) returns خِيفَتَا", () => {
                expect(verbInstance.mdMjF2()).toEqual("خِيفَتَا");
            })
            it("mdMjFP() (madi majhul faminine plural) returns خِفْنَ", () => {
                expect(verbInstance.mdMjFP()).toEqual("خِفْنَ");
            })
            it("mdMjM21() (madi majhul masculine 2nd person singular) returns خِفْتَ", () => {
                expect(verbInstance.mdMjM21()).toEqual("خِفْتَ");
            })
            it("mdMjM22() (madi majhul masculine 2nd person dual) returns خِفْتُمَا", () => {
                expect(verbInstance.mdMjM22()).toEqual("خِفْتُمَا");
            })
            it("mdMjM2P() (madi majhul masculine 2nd person plural) returns خِفْتُمْ", () => {
                expect(verbInstance.mdMjM2P()).toEqual("خِفْتُمْ");
            })
            it("mdMjF21() (madi majhul feminine 2nd person singular) returns خِفْتِ", () => {
                expect(verbInstance.mdMjF21()).toEqual("خِفْتِ");
            })
            it("mdMjF22() (madi majhul feminine 2nd person dual) returns خِفْتُمَا", () => {
                expect(verbInstance.mdMjF22()).toEqual("خِفْتُمَا");
            })
            it("mdMjF2P() (madi majhul feminine 2nd person plural) returns خِفْتُنَّ", () => {
                expect(verbInstance.mdMjF2P()).toEqual("خِفْتُنَّ");
            })
            it("mdMjB1() (madi majhul 1st  person singular (both)) returns خِفْتُ", () => {
                expect(verbInstance.mdMjB1()).toEqual("خِفْتُ");
            })
            it("mdMjB3() (madi majhul 1st  person all (both)) returns خِفْنَا", () => {
                expect(verbInstance.mdMjB3()).toEqual("خِفْنَا");
            })

            // mudari starts here
            it("mdrM1() (mudari masculine singular) returns يَخَافُ", () => {
                expect(verbInstance.mdrM1()).toEqual("يَخَافُ");
            })
            it("mdrM2() (mudari masculine dual) returns يَخَافَانِ", () => {
                expect(verbInstance.mdrM2()).toEqual("يَخَافَانِ");
            })
            it("mdrMP() (mudari masculine plural) returns يَخَافُوْنَ", () => {
                expect(verbInstance.mdrMP()).toEqual("يَخَافُوْنَ");
            })
            it("mdrF1() (mudari faminine singular) returns تَخَافُ", () => {
                expect(verbInstance.mdrF1()).toEqual("تَخَافُ");
            })
            it("mdrF2() (mudari faminine dual) returns تَخَافَانِ", () => {
                expect(verbInstance.mdrF2()).toEqual("تَخَافَانِ");
            })
            it("mdrFP() (mudari faminine plural) returns يَخَفْنَ", () => {
                expect(verbInstance.mdrFP()).toEqual("يَخَفْنَ");
            })
            it("mdrM21() (mudari masculine 2nd person singular) returns تَخَافُ", () => {
                expect(verbInstance.mdrM21()).toEqual("تَخَافُ");
            })
            it("mdrM22() (mudari masculine 2nd person dual) returns تَخَافَانِ", () => {
                expect(verbInstance.mdrM22()).toEqual("تَخَافَانِ");
            })
            it("mdrM2P() (mudari masculine 2nd person plural) returns تَخَافُوْنَ", () => {
                expect(verbInstance.mdrM2P()).toEqual("تَخَافُوْنَ");
            })
            it("mdrF21() (mudari feminine 2nd person singular) returns تَخَافِيْنَ", () => {
                expect(verbInstance.mdrF21()).toEqual("تَخَافِيْنَ");
            })
            it("mdrF22() (mudari feminine 2nd person dual) returns تَخَافَانِ", () => {
                expect(verbInstance.mdrF22()).toEqual("تَخَافَانِ");
            })
            it("mdrF2P() (mudari feminine 2nd person plural) returns تَخَفْنَ", () => {
                expect(verbInstance.mdrF2P()).toEqual("تَخَفْنَ");
            })
            it("mdrB1() (mudari 1st  person singular (both)) returns أَخَافُ", () => {
                expect(verbInstance.mdrB1()).toEqual("أَخَافُ");
            })
            it("mdrB3() (mudari 1st  person all (both)) returns نَخَافُ", () => {
                expect(verbInstance.mdrB3()).toEqual("نَخَافُ");
            })

            // mudari majhul
            it("mdrMjM1() (mudari majhul masculine singular) returns يُخَافُ", () => {
                expect(verbInstance.mdrMjM1()).toEqual("يُخَافُ");
            })
            it("mdrMjM2() (mudari majhul masculine dual) returns يُخَافَانِ", () => {
                expect(verbInstance.mdrMjM2()).toEqual("يُخَافَانِ");
            })
            it("mdrMjMP() (mudari majhul masculine plural) returns يُخَافُوْنَ", () => {
                expect(verbInstance.mdrMjMP()).toEqual("يُخَافُوْنَ");
            })
            it("mdrMjF1() (mudari majhul faminine singular) returns تُخَافُ", () => {
                expect(verbInstance.mdrMjF1()).toEqual("تُخَافُ");
            })
            it("mdrMjF2() (mudari majhul faminine dual) returns تُخَافَانِ", () => {
                expect(verbInstance.mdrMjF2()).toEqual("تُخَافَانِ");
            })
            it("mdrMjFP() (mudari majhul faminine plural) returns يُخَفْنَ", () => {
                expect(verbInstance.mdrMjFP()).toEqual("يُخَفْنَ");
            })
            it("mdrMjM21() (mudari majhul masculine 2nd person singular) returns تُخَافُ", () => {
                expect(verbInstance.mdrMjM21()).toEqual("تُخَافُ");
            })
            it("mdrMjM22() (mudari majhul masculine 2nd person dual) returns تُخَافَانِ", () => {
                expect(verbInstance.mdrMjM22()).toEqual("تُخَافَانِ");
            })
            it("mdrMjM2P() (mudari majhul masculine 2nd person plural) returns تُخَافُوْنَ", () => {
                expect(verbInstance.mdrMjM2P()).toEqual("تُخَافُوْنَ");
            })
            it("mdrMjF21() (mudari majhul feminine 2nd person singular) returns تُخَافِيْنَ", () => {
                expect(verbInstance.mdrMjF21()).toEqual("تُخَافِيْنَ");
            })
            it("mdrMjF22() (mudari majhul feminine 2nd person dual) returns تُخَافَانِ", () => {
                expect(verbInstance.mdrMjF22()).toEqual("تُخَافَانِ");
            })
            it("mdrMjF2P() (mudari majhul feminine 2nd person plural) returns تُخَفْنَ", () => {
                expect(verbInstance.mdrMjF2P()).toEqual("تُخَفْنَ");
            })
            it("mdrMjB1() (mudari majhul 1st  person singular (both)) returns أُخَافُ", () => {
                expect(verbInstance.mdrMjB1()).toEqual("أُخَافُ");
            })
            it("mdrMjB3() (mudari majhul 1st  person all (both)) returns نُخَافُ", () => {
                expect(verbInstance.mdrMjB3()).toEqual("نُخَافُ");
            })

            it("ismF() (Ism fa'eel) returns خَائِفٌ", () => {
                expect(verbInstance.ismF()).toEqual("خَائِفٌ");
            })
            it("ismMfl() (Ism maf'ul) returns مَخُوفٌ", () => {
                expect(verbInstance.ismMfl()).toEqual("مَخُوفٌ");
            })
            // amr
            it("amrM1() (fel amr masculine singular) returns خَفْ", () => {
                expect(verbInstance.amrM1()).toEqual("خَفْ");
            })
            it("amrM2() (fel amr masculine dual) returns خَافَا", () => {
                expect(verbInstance.amrM2()).toEqual("خَافَا");
            })
            it("amrMP() (fel amr masculine plural) returns خَافُواْ", () => {
                expect(verbInstance.amrMP()).toEqual("خَافُواْ");
            })
            it("amrF1() (fel amr feminine singular) returns خَافِيْ", () => {
                expect(verbInstance.amrF1()).toEqual("خَافِيْ");
            })
            it("amrF2() (fel amr feminine dual) returns خَافَا", () => {
                expect(verbInstance.amrF2()).toEqual("خَافَا");
            })
            it("amrFP() (fel amr feminine plural) returns خَفْنَ", () => {
                expect(verbInstance.amrFP()).toEqual("خَفْنَ");
            })
            // nahi
            it("nahiM1() (fel nahi masculine singular) returns لاَ تَخَفْ", () => {
                expect(verbInstance.nahiM1()).toEqual("لاَ تَخَفْ");
            })
            it("nahiM2() (fel nahi masculine dual) returns لاَ تَخَافَا", () => {
                expect(verbInstance.nahiM2()).toEqual("لاَ تَخَافَا");
            })
            it("nahiMP() (fel nahi masculine plural) returns لاَ تَخَافُواْ", () => {
                expect(verbInstance.nahiMP()).toEqual("لاَ تَخَافُواْ");
            })
            it("nahiF1() (fel nahi feminine singular) returns لاَ تَخَافِيْ", () => {
                expect(verbInstance.nahiF1()).toEqual("لاَ تَخَافِيْ");
            })
            it("nahiF2() (fel nahi feminine dual) returns لاَ تَخَافَا", () => {
                expect(verbInstance.nahiF2()).toEqual("لاَ تَخَافَا");
            })
            it("nahiFP() (fel nahi feminine plural) returns لاَ تَخَفْنَ", () => {
                expect(verbInstance.nahiFP()).toEqual("لاَ تَخَفْنَ");
            })
            it("msdr() (masder) returns خَوْف", () => {
                expect(verbInstance.msdr()).toEqual("خَوْف");
            })
            it("zarf() (fel nahi feminine plural) returns مَخُوفٌ", () => {
                expect(verbInstance.zarf()).toEqual("مَخُوفٌ");
            })

        });
        describe("ae  root `ج ي ء`", () => {
            beforeEach(() => {
                const root = "ج ي ء";
                verbInstance = verbFormInst({
                    form: 'I', root, "bab": "ae", "msdr": "نَوْم"
                })
            })

            it("mdM1() (madi masculine singular) returns جَاءَ", () => {
                expect(verbInstance.mdM1()).toEqual("جَاءَ");
            })
            it("mdM2() (madi masculine dual) returns جَاءَا", () => {
                expect(verbInstance.mdM2()).toEqual("جَاءَا");
            })
            it("mdMP() (madi masculine plural) returns جَائُواْ", () => {
                expect(verbInstance.mdMP()).toEqual("جَائُواْ");
            })
            it("mdF1() (madi faminine singular) returns جَاءَتْ", () => {
                expect(verbInstance.mdF1()).toEqual("جَاءَتْ");
            })
            it("mdF2() (madi faminine dual) returns جَاءَتَا", () => {
                expect(verbInstance.mdF2()).toEqual("جَاءَتَا");
            })
            it("mdFP() (madi faminine plural) returns جِئْنَ", () => {
                expect(verbInstance.mdFP()).toEqual("جِئْنَ");
            })
            it("mdM21() (madi masculine 2nd person singular) returns جِئْتَ", () => {
                expect(verbInstance.mdM21()).toEqual("جِئْتَ");
            })
            it("mdM22() (madi masculine 2nd person dual) returns جِئْتُمَا", () => {
                expect(verbInstance.mdM22()).toEqual("جِئْتُمَا");
            })
            it("mdM2P() (madi masculine 2nd person plural) returns جِئْتُمْ", () => {
                expect(verbInstance.mdM2P()).toEqual("جِئْتُمْ");
            })
            it("mdF21() (madi feminine 2nd person singular) returns جِئْتِ", () => {
                expect(verbInstance.mdF21()).toEqual("جِئْتِ");
            })
            it("mdF22() (madi feminine 2nd person dual) returns جِئْتُمَا", () => {
                expect(verbInstance.mdF22()).toEqual("جِئْتُمَا");
            })
            it("mdF2P() (madi feminine 2nd person plural) returns جِئْتُنَّ", () => {
                expect(verbInstance.mdF2P()).toEqual("جِئْتُنَّ");
            })
            it("mdB1() (madi 1st  person singular (both)) returns جِئْتُ", () => {
                expect(verbInstance.mdB1()).toEqual("جِئْتُ");
            })
            it("mdB3() (madi 1st  person all (both)) returns جِئْنَا", () => {
                expect(verbInstance.mdB3()).toEqual("جِئْنَا");
            })

            // madi majhul
            it("mdMjM1() (madi majhul masculine singular) returns جِيءَ", () => {
                expect(verbInstance.mdMjM1()).toEqual("جِيءَ");
            })
            it("mdMjM2() (madi majhul masculine dual) returns جِيئَا", () => {
                expect(verbInstance.mdMjM2()).toEqual("جِيئَا");
            })
            it("mdMjMP() (madi majhul masculine plural) returns جِيئُواْ", () => {
                expect(verbInstance.mdMjMP()).toEqual("جِيئُواْ");
            })
            it("mdMjF1() (madi majhul faminine singular) returns جِيئَتْ", () => {
                expect(verbInstance.mdMjF1()).toEqual("جِيئَتْ");
            })
            it("mdMjF2() (madi majhul faminine dual) returns جِيئَتَا", () => {
                expect(verbInstance.mdMjF2()).toEqual("جِيئَتَا");
            })
            it("mdMjFP() (madi majhul faminine plural) returns جِئْنَ", () => {
                expect(verbInstance.mdMjFP()).toEqual("جِئْنَ");
            })
            it("mdMjM21() (madi majhul masculine 2nd person singular) returns جِئْتَ", () => {
                expect(verbInstance.mdMjM21()).toEqual("جِئْتَ");
            })
            it("mdMjM22() (madi majhul masculine 2nd person dual) returns جِئْتُمَا", () => {
                expect(verbInstance.mdMjM22()).toEqual("جِئْتُمَا");
            })
            it("mdMjM2P() (madi majhul masculine 2nd person plural) returns جِئْتُمْ", () => {
                expect(verbInstance.mdMjM2P()).toEqual("جِئْتُمْ");
            })
            it("mdMjF21() (madi majhul feminine 2nd person singular) returns جِئْتِ", () => {
                expect(verbInstance.mdMjF21()).toEqual("جِئْتِ");
            })
            it("mdMjF22() (madi majhul feminine 2nd person dual) returns جِئْتُمَا", () => {
                expect(verbInstance.mdMjF22()).toEqual("جِئْتُمَا");
            })
            it("mdMjF2P() (madi majhul feminine 2nd person plural) returns جِئْتُنَّ", () => {
                expect(verbInstance.mdMjF2P()).toEqual("جِئْتُنَّ");
            })
            it("mdMjB1() (madi majhul 1st  person singular (both)) returns جِئْتُ", () => {
                expect(verbInstance.mdMjB1()).toEqual("جِئْتُ");
            })
            it("mdMjB3() (madi majhul 1st  person all (both)) returns جِئْنَا", () => {
                expect(verbInstance.mdMjB3()).toEqual("جِئْنَا");
            })

            // mudari starts here
            it("mdrM1() (mudari masculine singular) returns يَجِيْءُ", () => {
                expect(verbInstance.mdrM1()).toEqual("يَجِيْءُ");
            })
            it("mdrM2() (mudari masculine dual) returns يَجِيْئَانِ", () => {
                expect(verbInstance.mdrM2()).toEqual("يَجِيْئَانِ");
            })
            it("mdrMP() (mudari masculine plural) returns يَجِيْئُوْنَ", () => {
                expect(verbInstance.mdrMP()).toEqual("يَجِيْئُوْنَ");
            })
            it("mdrF1() (mudari faminine singular) returns تَجِيْءُ", () => {
                expect(verbInstance.mdrF1()).toEqual("تَجِيْءُ");
            })
            it("mdrF2() (mudari faminine dual) returns تَجِيْئَانِ", () => {
                expect(verbInstance.mdrF2()).toEqual("تَجِيْئَانِ");
            })
            it("mdrFP() (mudari faminine plural) returns يَجِئْنَ", () => {
                expect(verbInstance.mdrFP()).toEqual("يَجِئْنَ");
            })
            it("mdrM21() (mudari masculine 2nd person singular) returns تَجِيْءُ", () => {
                expect(verbInstance.mdrM21()).toEqual("تَجِيْءُ");
            })
            it("mdrM22() (mudari masculine 2nd person dual) returns تَجِيْئَانِ", () => {
                expect(verbInstance.mdrM22()).toEqual("تَجِيْئَانِ");
            })
            it("mdrM2P() (mudari masculine 2nd person plural) returns تَجِيْئُوْنَ", () => {
                expect(verbInstance.mdrM2P()).toEqual("تَجِيْئُوْنَ");
            })
            it("mdrF21() (mudari feminine 2nd person singular) returns تَجِيْئِيْنَ", () => {
                expect(verbInstance.mdrF21()).toEqual("تَجِيْئِيْنَ");
            })
            it("mdrF22() (mudari feminine 2nd person dual) returns تَجِيْئَانِ", () => {
                expect(verbInstance.mdrF22()).toEqual("تَجِيْئَانِ");
            })
            it("mdrF2P() (mudari feminine 2nd person plural) returns تَجِئْنَ", () => {
                expect(verbInstance.mdrF2P()).toEqual("تَجِئْنَ");
            })
            it("mdrB1() (mudari 1st  person singular (both)) returns أَجِيْءُ", () => {
                expect(verbInstance.mdrB1()).toEqual("أَجِيْءُ");
            })
            it("mdrB3() (mudari 1st  person all (both)) returns نَجِيْءُ", () => {
                expect(verbInstance.mdrB3()).toEqual("نَجِيْءُ");
            })

            // mudari majhul
            it("mdrMjM1() (mudari majhul masculine singular) returns يُجَاءُ", () => {
                expect(verbInstance.mdrMjM1()).toEqual("يُجَاءُ");
            })
            it("mdrMjM2() (mudari majhul masculine dual) returns يُجَاءَانِ", () => {
                expect(verbInstance.mdrMjM2()).toEqual("يُجَاءَانِ");
            })
            it("mdrMjMP() (mudari majhul masculine plural) returns يُجَائُوْنَ", () => {
                expect(verbInstance.mdrMjMP()).toEqual("يُجَائُوْنَ");
            })
            it("mdrMjF1() (mudari majhul faminine singular) returns تُجَاءُ", () => {
                expect(verbInstance.mdrMjF1()).toEqual("تُجَاءُ");
            })
            it("mdrMjF2() (mudari majhul faminine dual) returns تُجَاءَانِ", () => {
                expect(verbInstance.mdrMjF2()).toEqual("تُجَاءَانِ");
            })
            it("mdrMjFP() (mudari majhul faminine plural) returns يُجَئْنَ", () => {
                expect(verbInstance.mdrMjFP()).toEqual("يُجَئْنَ");
            })
            it("mdrMjM21() (mudari majhul masculine 2nd person singular) returns تُجَاءُ", () => {
                expect(verbInstance.mdrMjM21()).toEqual("تُجَاءُ");
            })
            it("mdrMjM22() (mudari majhul masculine 2nd person dual) returns تُجَاءَانِ", () => {
                expect(verbInstance.mdrMjM22()).toEqual("تُجَاءَانِ");
            })
            it("mdrMjM2P() (mudari majhul masculine 2nd person plural) returns تُجَائُوْنَ", () => {
                expect(verbInstance.mdrMjM2P()).toEqual("تُجَائُوْنَ");
            })
            it("mdrMjF21() (mudari majhul feminine 2nd person singular) returns تُجَائِيْنَ", () => {
                expect(verbInstance.mdrMjF21()).toEqual("تُجَائِيْنَ");
            })
            it("mdrMjF22() (mudari majhul feminine 2nd person dual) returns تُجَاءَانِ", () => {
                expect(verbInstance.mdrMjF22()).toEqual("تُجَاءَانِ");
            })
            it("mdrMjF2P() (mudari majhul feminine 2nd person plural) returns تُجَئْنَ", () => {
                expect(verbInstance.mdrMjF2P()).toEqual("تُجَئْنَ");
            })
            it("mdrMjB1() (mudari majhul 1st  person singular (both)) returns أُجَاءُ", () => {
                expect(verbInstance.mdrMjB1()).toEqual("أُجَاءُ");
            })
            it("mdrMjB3() (mudari majhul 1st  person all (both)) returns نُجَاءُ", () => {
                expect(verbInstance.mdrMjB3()).toEqual("نُجَاءُ");
            })

            it("ismF() (Ism fa'eel) returns جَاءٍ", () => {
                expect(verbInstance.ismF()).toEqual("جَاءٍ");
            })
            it("ismMfl() (Ism maf'ul) returns مَجِيءٌ", () => {
                expect(verbInstance.ismMfl()).toEqual("مَجِيءٌ");
            })
            // amr
            it("amrM1() (fel amr masculine singular) returns جِئْ", () => {
                expect(verbInstance.amrM1()).toEqual("جِئْ");
            })
            it("amrM2() (fel amr masculine dual) returns جِيْئَا", () => {
                expect(verbInstance.amrM2()).toEqual("جِيْئَا");
            })
            it("amrMP() (fel amr masculine plural) returns جِيْئُواْ", () => {
                expect(verbInstance.amrMP()).toEqual("جِيْئُواْ");
            })
            it("amrF1() (fel amr feminine singular) returns جِيْئِيْ", () => {
                expect(verbInstance.amrF1()).toEqual("جِيْئِيْ");
            })
            it("amrF2() (fel amr feminine dual) returns جِيْئَا", () => {
                expect(verbInstance.amrF2()).toEqual("جِيْئَا");
            })
            it("amrFP() (fel amr feminine plural) returns جِئْنَ", () => {
                expect(verbInstance.amrFP()).toEqual("جِئْنَ");
            })
            // nahi
            it("nahiM1() (fel nahi masculine singular) returns لاَ تَجِئْ", () => {
                expect(verbInstance.nahiM1()).toEqual("لاَ تَجِئْ");
            })
            it("nahiM2() (fel nahi masculine dual) returns لاَ تَجِيْئَا", () => {
                expect(verbInstance.nahiM2()).toEqual("لاَ تَجِيْئَا");
            })
            it("nahiMP() (fel nahi masculine plural) returns لاَ تَجِيْئُواْ", () => {
                expect(verbInstance.nahiMP()).toEqual("لاَ تَجِيْئُواْ");
            })
            it("nahiF1() (fel nahi feminine singular) returns لاَ تَجِيْئِيْ", () => {
                expect(verbInstance.nahiF1()).toEqual("لاَ تَجِيْئِيْ");
            })
            it("nahiF2() (fel nahi feminine dual) returns لاَ تَجِيْئَا", () => {
                expect(verbInstance.nahiF2()).toEqual("لاَ تَجِيْئَا");
            })
            it("nahiFP() (fel nahi feminine plural) returns لاَ تَجِئْنَ", () => {
                expect(verbInstance.nahiFP()).toEqual("لاَ تَجِئْنَ");
            })
        });
        describe("ae  root `ب ي ع`", () => {
            beforeEach(() => {
                const root = "ب ي ع";
                verbInstance = verbFormInst({
                    form: 'I', root, "bab": "ae", "msdr": "بَيْع"
                })
            })

            it("mdM1() (madi masculine singular) returns بَاعَ", () => {
                expect(verbInstance.mdM1()).toEqual("بَاعَ");
            })
            it("mdM2() (madi masculine dual) returns بَاعَا", () => {
                expect(verbInstance.mdM2()).toEqual("بَاعَا");
            })
            it("mdMP() (madi masculine plural) returns بَاعُواْ", () => {
                expect(verbInstance.mdMP()).toEqual("بَاعُواْ");
            })
            it("mdF1() (madi faminine singular) returns بَاعَتْ", () => {
                expect(verbInstance.mdF1()).toEqual("بَاعَتْ");
            })
            it("mdF2() (madi faminine dual) returns بَاعَتَا", () => {
                expect(verbInstance.mdF2()).toEqual("بَاعَتَا");
            })
            it("mdFP() (madi faminine plural) returns بِعْنَ", () => {
                expect(verbInstance.mdFP()).toEqual("بِعْنَ");
            })
            it("mdM21() (madi masculine 2nd person singular) returns بِعْتَ", () => {
                expect(verbInstance.mdM21()).toEqual("بِعْتَ");
            })
            it("mdM22() (madi masculine 2nd person dual) returns بِعْتُمَا", () => {
                expect(verbInstance.mdM22()).toEqual("بِعْتُمَا");
            })
            it("mdM2P() (madi masculine 2nd person plural) returns بِعْتُمْ", () => {
                expect(verbInstance.mdM2P()).toEqual("بِعْتُمْ");
            })
            it("mdF21() (madi feminine 2nd person singular) returns بِعْتِ", () => {
                expect(verbInstance.mdF21()).toEqual("بِعْتِ");
            })
            it("mdF22() (madi feminine 2nd person dual) returns بِعْتُمَا", () => {
                expect(verbInstance.mdF22()).toEqual("بِعْتُمَا");
            })
            it("mdF2P() (madi feminine 2nd person plural) returns بِعْتُنَّ", () => {
                expect(verbInstance.mdF2P()).toEqual("بِعْتُنَّ");
            })
            it("mdB1() (madi 1st  person singular (both)) returns بِعْتُ", () => {
                expect(verbInstance.mdB1()).toEqual("بِعْتُ");
            })
            it("mdB3() (madi 1st  person all (both)) returns بِعْنَا", () => {
                expect(verbInstance.mdB3()).toEqual("بِعْنَا");
            })

            // madi majhul
            it("mdMjM1() (madi majhul masculine singular) returns بِيعَ", () => {
                expect(verbInstance.mdMjM1()).toEqual("بِيعَ");
            })
            it("mdMjM2() (madi majhul masculine dual) returns بِيعَا", () => {
                expect(verbInstance.mdMjM2()).toEqual("بِيعَا");
            })
            it("mdMjMP() (madi majhul masculine plural) returns بِيعُواْ", () => {
                expect(verbInstance.mdMjMP()).toEqual("بِيعُواْ");
            })
            it("mdMjF1() (madi majhul faminine singular) returns بِيعَتْ", () => {
                expect(verbInstance.mdMjF1()).toEqual("بِيعَتْ");
            })
            it("mdMjF2() (madi majhul faminine dual) returns بِيعَتَا", () => {
                expect(verbInstance.mdMjF2()).toEqual("بِيعَتَا");
            })
            it("mdMjFP() (madi majhul faminine plural) returns بِعْنَ", () => {
                expect(verbInstance.mdMjFP()).toEqual("بِعْنَ");
            })
            it("mdMjM21() (madi majhul masculine 2nd person singular) returns بِعْتَ", () => {
                expect(verbInstance.mdMjM21()).toEqual("بِعْتَ");
            })
            it("mdMjM22() (madi majhul masculine 2nd person dual) returns بِعْتُمَا", () => {
                expect(verbInstance.mdMjM22()).toEqual("بِعْتُمَا");
            })
            it("mdMjM2P() (madi majhul masculine 2nd person plural) returns بِعْتُمْ", () => {
                expect(verbInstance.mdMjM2P()).toEqual("بِعْتُمْ");
            })
            it("mdMjF21() (madi majhul feminine 2nd person singular) returns بِعْتِ", () => {
                expect(verbInstance.mdMjF21()).toEqual("بِعْتِ");
            })
            it("mdMjF22() (madi majhul feminine 2nd person dual) returns بِعْتُمَا", () => {
                expect(verbInstance.mdMjF22()).toEqual("بِعْتُمَا");
            })
            it("mdMjF2P() (madi majhul feminine 2nd person plural) returns بِعْتُنَّ", () => {
                expect(verbInstance.mdMjF2P()).toEqual("بِعْتُنَّ");
            })
            it("mdMjB1() (madi majhul 1st  person singular (both)) returns بِعْتُ", () => {
                expect(verbInstance.mdMjB1()).toEqual("بِعْتُ");
            })
            it("mdMjB3() (madi majhul 1st  person all (both)) returns بِعْنَا", () => {
                expect(verbInstance.mdMjB3()).toEqual("بِعْنَا");
            })

            // mudari starts here
            it("mdrM1() (mudari masculine singular) returns يَبِيْعُ", () => {
                expect(verbInstance.mdrM1()).toEqual("يَبِيْعُ");
            })
            it("mdrM2() (mudari masculine dual) returns يَبِيْعَانِ", () => {
                expect(verbInstance.mdrM2()).toEqual("يَبِيْعَانِ");
            })
            it("mdrMP() (mudari masculine plural) returns يَبِيْعُوْنَ", () => {
                expect(verbInstance.mdrMP()).toEqual("يَبِيْعُوْنَ");
            })
            it("mdrF1() (mudari faminine singular) returns تَبِيْعُ", () => {
                expect(verbInstance.mdrF1()).toEqual("تَبِيْعُ");
            })
            it("mdrF2() (mudari faminine dual) returns تَبِيْعَانِ", () => {
                expect(verbInstance.mdrF2()).toEqual("تَبِيْعَانِ");
            })
            it("mdrFP() (mudari faminine plural) returns يَبِعْنَ", () => {
                expect(verbInstance.mdrFP()).toEqual("يَبِعْنَ");
            })
            it("mdrM21() (mudari masculine 2nd person singular) returns تَبِيْعُ", () => {
                expect(verbInstance.mdrM21()).toEqual("تَبِيْعُ");
            })
            it("mdrM22() (mudari masculine 2nd person dual) returns تَبِيْعَانِ", () => {
                expect(verbInstance.mdrM22()).toEqual("تَبِيْعَانِ");
            })
            it("mdrM2P() (mudari masculine 2nd person plural) returns تَبِيْعُوْنَ", () => {
                expect(verbInstance.mdrM2P()).toEqual("تَبِيْعُوْنَ");
            })
            it("mdrF21() (mudari feminine 2nd person singular) returns تَبِيْعِيْنَ", () => {
                expect(verbInstance.mdrF21()).toEqual("تَبِيْعِيْنَ");
            })
            it("mdrF22() (mudari feminine 2nd person dual) returns تَبِيْعَانِ", () => {
                expect(verbInstance.mdrF22()).toEqual("تَبِيْعَانِ");
            })
            it("mdrF2P() (mudari feminine 2nd person plural) returns تَبِعْنَ", () => {
                expect(verbInstance.mdrF2P()).toEqual("تَبِعْنَ");
            })
            it("mdrB1() (mudari 1st  person singular (both)) returns أَبِيْعُ", () => {
                expect(verbInstance.mdrB1()).toEqual("أَبِيْعُ");
            })
            it("mdrB3() (mudari 1st  person all (both)) returns نَبِيْعُ", () => {
                expect(verbInstance.mdrB3()).toEqual("نَبِيْعُ");
            })

            // mudari majhul
            it("mdrMjM1() (mudari majhul masculine singular) returns يُبَاعُ", () => {
                expect(verbInstance.mdrMjM1()).toEqual("يُبَاعُ");
            })
            it("mdrMjM2() (mudari majhul masculine dual) returns يُبَاعَانِ", () => {
                expect(verbInstance.mdrMjM2()).toEqual("يُبَاعَانِ");
            })
            it("mdrMjMP() (mudari majhul masculine plural) returns يُبَاعُوْنَ", () => {
                expect(verbInstance.mdrMjMP()).toEqual("يُبَاعُوْنَ");
            })
            it("mdrMjF1() (mudari majhul faminine singular) returns تُبَاعُ", () => {
                expect(verbInstance.mdrMjF1()).toEqual("تُبَاعُ");
            })
            it("mdrMjF2() (mudari majhul faminine dual) returns تُبَاعَانِ", () => {
                expect(verbInstance.mdrMjF2()).toEqual("تُبَاعَانِ");
            })
            it("mdrMjFP() (mudari majhul faminine plural) returns يُبَعْنَ", () => {
                expect(verbInstance.mdrMjFP()).toEqual("يُبَعْنَ");
            })
            it("mdrMjM21() (mudari majhul masculine 2nd person singular) returns تُبَاعُ", () => {
                expect(verbInstance.mdrMjM21()).toEqual("تُبَاعُ");
            })
            it("mdrMjM22() (mudari majhul masculine 2nd person dual) returns تُبَاعَانِ", () => {
                expect(verbInstance.mdrMjM22()).toEqual("تُبَاعَانِ");
            })
            it("mdrMjM2P() (mudari majhul masculine 2nd person plural) returns تُبَاعُوْنَ", () => {
                expect(verbInstance.mdrMjM2P()).toEqual("تُبَاعُوْنَ");
            })
            it("mdrMjF21() (mudari majhul feminine 2nd person singular) returns تُبَاعِيْنَ", () => {
                expect(verbInstance.mdrMjF21()).toEqual("تُبَاعِيْنَ");
            })
            it("mdrMjF22() (mudari majhul feminine 2nd person dual) returns تُبَاعَانِ", () => {
                expect(verbInstance.mdrMjF22()).toEqual("تُبَاعَانِ");
            })
            it("mdrMjF2P() (mudari majhul feminine 2nd person plural) returns تُبَعْنَ", () => {
                expect(verbInstance.mdrMjF2P()).toEqual("تُبَعْنَ");
            })
            it("mdrMjB1() (mudari majhul 1st  person singular (both)) returns أُبَاعُ", () => {
                expect(verbInstance.mdrMjB1()).toEqual("أُبَاعُ");
            })
            it("mdrMjB3() (mudari majhul 1st  person all (both)) returns نُبَاعُ", () => {
                expect(verbInstance.mdrMjB3()).toEqual("نُبَاعُ");
            })

            it("ismF() (Ism fa'eel) returns بَايِعٌ", () => {
                expect(verbInstance.ismF()).toEqual("بَايِعٌ");
            })
            it("ismMfl() (Ism maf'ul) returns مَجِيءٌ", () => {
                expect(verbInstance.ismMfl()).toEqual("مَبِيعٌ");
            })
            // amr
            it("amrM1() (fel amr masculine singular) returns بِعْ", () => {
                expect(verbInstance.amrM1()).toEqual("بِعْ");
            })
            it("amrM2() (fel amr masculine dual) returns بِيْعَا", () => {
                expect(verbInstance.amrM2()).toEqual("بِيْعَا");
            })
            it("amrMP() (fel amr masculine plural) returns بِيْعُواْ", () => {
                expect(verbInstance.amrMP()).toEqual("بِيْعُواْ");
            })
            it("amrF1() (fel amr feminine singular) returns بِيْعِيْ", () => {
                expect(verbInstance.amrF1()).toEqual("بِيْعِيْ");
            })
            it("amrF2() (fel amr feminine dual) returns بِيْعَا", () => {
                expect(verbInstance.amrF2()).toEqual("بِيْعَا");
            })
            it("amrFP() (fel amr feminine plural) returns بِعْنَ", () => {
                expect(verbInstance.amrFP()).toEqual("بِعْنَ");
            })
            // nahi
            it("nahiM1() (fel nahi masculine singular) returns لاَ تَبِعْ", () => {
                expect(verbInstance.nahiM1()).toEqual("لاَ تَبِعْ");
            })
            it("nahiM2() (fel nahi masculine dual) returns لاَ تَبِيْعَا", () => {
                expect(verbInstance.nahiM2()).toEqual("لاَ تَبِيْعَا");
            })
            it("nahiMP() (fel nahi masculine plural) returns لاَ تَبِيْعُواْ", () => {
                expect(verbInstance.nahiMP()).toEqual("لاَ تَبِيْعُواْ");
            })
            it("nahiF1() (fel nahi feminine singular) returns لاَ تَبِيْعِيْ", () => {
                expect(verbInstance.nahiF1()).toEqual("لاَ تَبِيْعِيْ");
            })
            it("nahiF2() (fel nahi feminine dual) returns لاَ تَبِيْعَا", () => {
                expect(verbInstance.nahiF2()).toEqual("لاَ تَبِيْعَا");
            })
            it("nahiFP() (fel nahi feminine plural) returns لاَ تَبِعْنَ", () => {
                expect(verbInstance.nahiFP()).toEqual("لاَ تَبِعْنَ");
            })
        });
    });

    describe("weak verb:naqis", ()=>{

        describe("ae  root `د ع و`", () => {
            beforeEach(() => {
                const root = "د ع و";
                verbInstance = verbFormInst({
                    form: 'I', root, "bab": "au", "msdr": "دُعَاء"
                })
            })

            it("mdM1() (madi masculine singular) returns دَعَا", () => {
                expect(verbInstance.mdM1()).toEqual("دَعَا");
            })
            it("mdM2() (madi masculine dual) returns دَعَوَا", () => {
                expect(verbInstance.mdM2()).toEqual("دَعَوَا");
            })
            it("mdMP() (madi masculine plural) returns دَعَواْ", () => {
                expect(verbInstance.mdMP()).toEqual("دَعَواْ");
            })
            it("mdF1() (madi faminine singular) returns دَعَتْ", () => {
                expect(verbInstance.mdF1()).toEqual("دَعَتْ");
            })
            it("mdF2() (madi faminine dual) returns دَعَتَا", () => {
                expect(verbInstance.mdF2()).toEqual("دَعَتَا");
            })
            it("mdFP() (madi faminine plural) returns دَعَوْنَ", () => {
                expect(verbInstance.mdFP()).toEqual("دَعَوْنَ");
            })
            it("mdM21() (madi masculine 2nd person singular) returns دَعَوْتَ", () => {
                expect(verbInstance.mdM21()).toEqual("دَعَوْتَ");
            })
            it("mdM22() (madi masculine 2nd person dual) returns دَعَوْتُمَا", () => {
                expect(verbInstance.mdM22()).toEqual("دَعَوْتُمَا");
            })
            it("mdM2P() (madi masculine 2nd person plural) returns دَعَوْتُمْ", () => {
                expect(verbInstance.mdM2P()).toEqual("دَعَوْتُمْ");
            })
            it("mdF21() (madi feminine 2nd person singular) returns دَعَوْتِ", () => {
                expect(verbInstance.mdF21()).toEqual("دَعَوْتِ");
            })
            it("mdF22() (madi feminine 2nd person dual) returns دَعَوْتُمَا", () => {
                expect(verbInstance.mdF22()).toEqual("دَعَوْتُمَا");
            })
            it("mdF2P() (madi feminine 2nd person plural) returns دَعَوْتُنَّ", () => {
                expect(verbInstance.mdF2P()).toEqual("دَعَوْتُنَّ");
            })
            it("mdB1() (madi 1st  person singular (both)) returns دَعَوْتُ", () => {
                expect(verbInstance.mdB1()).toEqual("دَعَوْتُ");
            })
            it("mdB3() (madi 1st  person all (both)) returns دَعَوْنَا", () => {
                expect(verbInstance.mdB3()).toEqual("دَعَوْنَا");
            })

            // madi majhul
            it("mdMjM1() (madi majhul masculine singular) returns دُعِيَ", () => {
                expect(verbInstance.mdMjM1()).toEqual("دُعِيَ");
            })
            it("mdMjM2() (madi majhul masculine dual) returns دُعِيَا", () => {
                expect(verbInstance.mdMjM2()).toEqual("دُعِيَا");
            })
            it("mdMjMP() (madi majhul masculine plural) returns دُعُواْ", () => {
                expect(verbInstance.mdMjMP()).toEqual("دُعُواْ");
            })
            it("mdMjF1() (madi majhul faminine singular) returns دُعِيَتْ", () => {
                expect(verbInstance.mdMjF1()).toEqual("دُعِيَتْ");
            })
            it("mdMjF2() (madi majhul faminine dual) returns دُعِيَتَا", () => {
                expect(verbInstance.mdMjF2()).toEqual("دُعِيَتَا");
            })
            it("mdMjFP() (madi majhul faminine plural) returns دُعِيْنَ", () => {
                expect(verbInstance.mdMjFP()).toEqual("دُعِيْنَ");
            })
            it("mdMjM21() (madi majhul masculine 2nd person singular) returns دُعِيْتَ", () => {
                expect(verbInstance.mdMjM21()).toEqual("دُعِيْتَ");
            })
            it("mdMjM22() (madi majhul masculine 2nd person dual) returns دُعِيْتُمَا", () => {
                expect(verbInstance.mdMjM22()).toEqual("دُعِيْتُمَا");
            })
            it("mdMjM2P() (madi majhul masculine 2nd person plural) returns دُعِيْتُمْ", () => {
                expect(verbInstance.mdMjM2P()).toEqual("دُعِيْتُمْ");
            })
            it("mdMjF21() (madi majhul feminine 2nd person singular) returns دُعِيْتِ", () => {
                expect(verbInstance.mdMjF21()).toEqual("دُعِيْتِ");
            })
            it("mdMjF22() (madi majhul feminine 2nd person dual) returns دُعِيْتُمَا", () => {
                expect(verbInstance.mdMjF22()).toEqual("دُعِيْتُمَا");
            })
            it("mdMjF2P() (madi majhul feminine 2nd person plural) returns دُعِيْتُنَّ", () => {
                expect(verbInstance.mdMjF2P()).toEqual("دُعِيْتُنَّ");
            })
            it("mdMjB1() (madi majhul 1st  person singular (both)) returns دُعِيْتُ", () => {
                expect(verbInstance.mdMjB1()).toEqual("دُعِيْتُ");
            })
            it("mdMjB3() (madi majhul 1st  person all (both)) returns دُعِيْنَا", () => {
                expect(verbInstance.mdMjB3()).toEqual("دُعِيْنَا");
            })

            // mudari starts here
            it("mdrM1() (mudari masculine singular) returns يَدْعُوْ", () => {
                expect(verbInstance.mdrM1()).toEqual("يَدْعُوْ");
            })
            it("mdrM2() (mudari masculine dual) returns يَدْعُوَانِ", () => {
                expect(verbInstance.mdrM2()).toEqual("يَدْعُوَانِ");
            })
            it("mdrMP() (mudari masculine plural) returns يَدْعُوْنَ", () => {
                expect(verbInstance.mdrMP()).toEqual("يَدْعُوْنَ");
            })
            it("mdrF1() (mudari faminine singular) returns تَدْعُوْ", () => {
                expect(verbInstance.mdrF1()).toEqual("تَدْعُوْ");
            })
            it("mdrF2() (mudari faminine dual) returns تَدْعُوَانِ", () => {
                expect(verbInstance.mdrF2()).toEqual("تَدْعُوَانِ");
            })
            it("mdrFP() (mudari faminine plural) returns يَدْعُوْنَ", () => {
                expect(verbInstance.mdrFP()).toEqual("يَدْعُوْنَ");
            })
            it("mdrM21() (mudari masculine 2nd person singular) returns تَدْعُوْ", () => {
                expect(verbInstance.mdrM21()).toEqual("تَدْعُوْ");
            })
            it("mdrM22() (mudari masculine 2nd person dual) returns تَدْعُوَانِ", () => {
                expect(verbInstance.mdrM22()).toEqual("تَدْعُوَانِ");
            })
            it("mdrM2P() (mudari masculine 2nd person plural) returns تَدْعُوْنَ", () => {
                expect(verbInstance.mdrM2P()).toEqual("تَدْعُوْنَ");
            })
            it("mdrF21() (mudari feminine 2nd person singular) returns تَدْعِيْنَ", () => {
                expect(verbInstance.mdrF21()).toEqual("تَدْعِيْنَ");
            })
            it("mdrF22() (mudari feminine 2nd person dual) returns تَدْعُوَانِ", () => {
                expect(verbInstance.mdrF22()).toEqual("تَدْعُوَانِ");
            })
            it("mdrF2P() (mudari feminine 2nd person plural) returns تَدْعُوْنَ", () => {
                expect(verbInstance.mdrF2P()).toEqual("تَدْعُوْنَ");
            })
            it("mdrB1() (mudari 1st  person singular (both)) returns أَدْعُوْ", () => {
                expect(verbInstance.mdrB1()).toEqual("أَدْعُوْ");
            })
            it("mdrB3() (mudari 1st  person all (both)) returns نَدْعُوْ", () => {
                expect(verbInstance.mdrB3()).toEqual("نَدْعُوْ");
            })

            // mudari majhul
            it("mdrMjM1() (mudari majhul masculine singular) returns يُدْعَى", () => {
                expect(verbInstance.mdrMjM1()).toEqual("يُدْعَى");
            })
            it("mdrMjM2() (mudari majhul masculine dual) returns يُدْعَيَانِ", () => {
                expect(verbInstance.mdrMjM2()).toEqual("يُدْعَيَانِ");
            })
            it("mdrMjMP() (mudari majhul masculine plural) returns يُدْعَوْنَ", () => {
                expect(verbInstance.mdrMjMP()).toEqual("يُدْعَوْنَ");
            })
            it("mdrMjF1() (mudari majhul faminine singular) returns تُدْعَى", () => {
                expect(verbInstance.mdrMjF1()).toEqual("تُدْعَى");
            })
            it("mdrMjF2() (mudari majhul faminine dual) returns تُدْعَيَانِ", () => {
                expect(verbInstance.mdrMjF2()).toEqual("تُدْعَيَانِ");
            })
            it("mdrMjFP() (mudari majhul faminine plural) returns يُدْعَيْنَ", () => {
                expect(verbInstance.mdrMjFP()).toEqual("يُدْعَيْنَ");
            })
            it("mdrMjM21() (mudari majhul masculine 2nd person singular) returns تُدْعَى", () => {
                expect(verbInstance.mdrMjM21()).toEqual("تُدْعَى");
            })
            it("mdrMjM22() (mudari majhul masculine 2nd person dual) returns تُدْعَيَانِ", () => {
                expect(verbInstance.mdrMjM22()).toEqual("تُدْعَيَانِ");
            })
            it("mdrMjM2P() (mudari majhul masculine 2nd person plural) returns تُدْعَوْنَ", () => {
                expect(verbInstance.mdrMjM2P()).toEqual("تُدْعَوْنَ");
            })
            it("mdrMjF21() (mudari majhul feminine 2nd person singular) returns تُدْعَيْنَ", () => {
                expect(verbInstance.mdrMjF21()).toEqual("تُدْعَيْنَ");
            })
            it("mdrMjF22() (mudari majhul feminine 2nd person dual) returns تُدْعَيَانِ", () => {
                expect(verbInstance.mdrMjF22()).toEqual("تُدْعَيَانِ");
            })
            it("mdrMjF2P() (mudari majhul feminine 2nd person plural) returns تُدْعَيْنَ", () => {
                expect(verbInstance.mdrMjF2P()).toEqual("تُدْعَيْنَ");
            })
            it("mdrMjB1() (mudari majhul 1st  person singular (both)) returns أُدْعَى", () => {
                expect(verbInstance.mdrMjB1()).toEqual("أُدْعَى");
            })
            it("mdrMjB3() (mudari majhul 1st  person all (both)) returns نُدْعَى", () => {
                expect(verbInstance.mdrMjB3()).toEqual("نُدْعَى");
            })

            it("ismF() (Ism fa'eel) returns دَاعٍ", () => {
                expect(verbInstance.ismF()).toEqual("دَاعٍ");
            })
            it("ismMfl() (Ism maf'ul) returns مَدْعُوّ", () => {
                expect(verbInstance.ismMfl()).toEqual("مَدْعُوّ");
            })
            // amr
            it("amrM1() (fel amr masculine singular) returns اُدْعُ", () => {
                expect(verbInstance.amrM1()).toEqual("اُدْعُ");
            })
            it("amrM2() (fel amr masculine dual) returns اُدْعُوَا", () => {
                expect(verbInstance.amrM2()).toEqual("اُدْعُوَا");
            })
            it("amrMP() (fel amr masculine plural) returns اُدْعُواْ", () => {
                expect(verbInstance.amrMP()).toEqual("اُدْعُواْ");
            })
            it("amrF1() (fel amr feminine singular) returns اُدْعِيْ", () => {
                expect(verbInstance.amrF1()).toEqual("اُدْعِيْ");
            })
            it("amrF2() (fel amr feminine dual) returns اُدْعُوَا", () => {
                expect(verbInstance.amrF2()).toEqual("اُدْعُوَا");
            })
            it("amrFP() (fel amr feminine plural) returns اُدْعُوْنَ", () => {
                expect(verbInstance.amrFP()).toEqual("اُدْعُوْنَ");
            })
            // nahi
            it("nahiM1() (fel nahi masculine singular) returns لاَ تَدْعُ", () => {
                expect(verbInstance.nahiM1()).toEqual("لاَ تَدْعُ");
            })
            it("nahiM2() (fel nahi masculine dual) returns لاَ تَدْعُوَا", () => {
                expect(verbInstance.nahiM2()).toEqual("لاَ تَدْعُوَا");
            })
            it("nahiMP() (fel nahi masculine plural) returns لاَ تَدْعُواْ", () => {
                expect(verbInstance.nahiMP()).toEqual("لاَ تَدْعُواْ");
            })
            it("nahiF1() (fel nahi feminine singular) returns لاَ تَدْعِيْ", () => {
                expect(verbInstance.nahiF1()).toEqual("لاَ تَدْعِيْ");
            })
            it("nahiF2() (fel nahi feminine dual) returns لاَ تَدْعُوَا", () => {
                expect(verbInstance.nahiF2()).toEqual("لاَ تَدْعُوَا");
            })
            it("nahiFP() (fel nahi feminine plural) returns لاَ تَدْعُوْنَ", () => {
                expect(verbInstance.nahiFP()).toEqual("لاَ تَدْعُوْنَ");
            })
        });

        describe("aa  root `ر ء ي`", () => {
            beforeEach(() => {
                const root = "ر ء ي";
                verbInstance = verbFormInst({
                    form: 'I', root, "bab": "aa", "msdr": "دُعَاء"
                })
            })

            it("mdM1() (madi masculine singular) returns رَءَى", () => {
                expect(verbInstance.mdM1()).toEqual("رَءَى");
            })
            it("mdM2() (madi masculine dual) returns رَءَيَا", () => {
                expect(verbInstance.mdM2()).toEqual("رَءَيَا");
            })
            it("mdMP() (madi masculine plural) returns رَءَواْ", () => {
                expect(verbInstance.mdMP()).toEqual("رَءَواْ");
            })
            it("mdF1() (madi faminine singular) returns رَءَتْ", () => {
                expect(verbInstance.mdF1()).toEqual("رَءَتْ");
            })
            it("mdF2() (madi faminine dual) returns رَءَتَا", () => {
                expect(verbInstance.mdF2()).toEqual("رَءَتَا");
            })
            it("mdFP() (madi faminine plural) returns رَءَيْنَ", () => {
                expect(verbInstance.mdFP()).toEqual("رَءَيْنَ");
            })
            it("mdM21() (madi masculine 2nd person singular) returns رَءَيْتَ", () => {
                expect(verbInstance.mdM21()).toEqual("رَءَيْتَ");
            })
            it("mdM22() (madi masculine 2nd person dual) returns رَءَيْتُمَا", () => {
                expect(verbInstance.mdM22()).toEqual("رَءَيْتُمَا");
            })
            it("mdM2P() (madi masculine 2nd person plural) returns رَءَيْتُمْ", () => {
                expect(verbInstance.mdM2P()).toEqual("رَءَيْتُمْ");
            })
            it("mdF21() (madi feminine 2nd person singular) returns رَءَيْتِ", () => {
                expect(verbInstance.mdF21()).toEqual("رَءَيْتِ");
            })
            it("mdF22() (madi feminine 2nd person dual) returns رَءَيْتُمَا", () => {
                expect(verbInstance.mdF22()).toEqual("رَءَيْتُمَا");
            })
            it("mdF2P() (madi feminine 2nd person plural) returns رَءَيْتُنَّ", () => {
                expect(verbInstance.mdF2P()).toEqual("رَءَيْتُنَّ");
            })
            it("mdB1() (madi 1st  person singular (both)) returns رَءَيْتُ", () => {
                expect(verbInstance.mdB1()).toEqual("رَءَيْتُ");
            })
            it("mdB3() (madi 1st  person all (both)) returns رَءَيْنَا", () => {
                expect(verbInstance.mdB3()).toEqual("رَءَيْنَا");
            })

            // madi majhul
            it("mdMjM1() (madi majhul masculine singular) returns رُئِيَ", () => {
                expect(verbInstance.mdMjM1()).toEqual("رُئِيَ");
            })
            it("mdMjM2() (madi majhul masculine dual) returns رُئِيَا", () => {
                expect(verbInstance.mdMjM2()).toEqual("رُئِيَا");
            })
            it("mdMjMP() (madi majhul masculine plural) returns رُؤُواْ", () => {
                expect(verbInstance.mdMjMP()).toEqual("رُؤُواْ");
            })
            it("mdMjF1() (madi majhul faminine singular) returns رُئِيَتْ", () => {
                expect(verbInstance.mdMjF1()).toEqual("رُئِيَتْ");
            })
            it("mdMjF2() (madi majhul faminine dual) returns رُئِيَتَا", () => {
                expect(verbInstance.mdMjF2()).toEqual("رُئِيَتَا");
            })
            it("mdMjFP() (madi majhul faminine plural) returns رُئِيْنَ", () => {
                expect(verbInstance.mdMjFP()).toEqual("رُئِيْنَ");
            })
            it("mdMjM21() (madi majhul masculine 2nd person singular) returns رُئِيْتَ", () => {
                expect(verbInstance.mdMjM21()).toEqual("رُئِيْتَ");
            })
            it("mdMjM22() (madi majhul masculine 2nd person dual) returns رُئِيْتُمَا", () => {
                expect(verbInstance.mdMjM22()).toEqual("رُئِيْتُمَا");
            })
            it("mdMjM2P() (madi majhul masculine 2nd person plural) returns رُئِيْتُمْ", () => {
                expect(verbInstance.mdMjM2P()).toEqual("رُئِيْتُمْ");
            })
            it("mdMjF21() (madi majhul feminine 2nd person singular) returns رُئِيْتِ", () => {
                expect(verbInstance.mdMjF21()).toEqual("رُئِيْتِ");
            })
            it("mdMjF22() (madi majhul feminine 2nd person dual) returns رُئِيْتُمَا", () => {
                expect(verbInstance.mdMjF22()).toEqual("رُئِيْتُمَا");
            })
            it("mdMjF2P() (madi majhul feminine 2nd person plural) returns رُئِيْتُنَّ", () => {
                expect(verbInstance.mdMjF2P()).toEqual("رُئِيْتُنَّ");
            })
            it("mdMjB1() (madi majhul 1st  person singular (both)) returns رُئِيْتُ", () => {
                expect(verbInstance.mdMjB1()).toEqual("رُئِيْتُ");
            })
            it("mdMjB3() (madi majhul 1st  person all (both)) returns رُئِيْنَا", () => {
                expect(verbInstance.mdMjB3()).toEqual("رُئِيْنَا");
            })

            // mudari starts here
            it("mdrM1() (mudari masculine singular) returns يَرَى", () => {
                expect(verbInstance.mdrM1()).toEqual("يَرَى");
            })
            it("mdrM2() (mudari masculine dual) returns يَرَيَانِ", () => {
                expect(verbInstance.mdrM2()).toEqual("يَرَيَانِ");
            })
            it("mdrMP() (mudari masculine plural) returns يَرَوْنَ", () => {
                expect(verbInstance.mdrMP()).toEqual("يَرَوْنَ");
            })
            it("mdrF1() (mudari faminine singular) returns تَرَى", () => {
                expect(verbInstance.mdrF1()).toEqual("تَرَى");
            })
            it("mdrF2() (mudari faminine dual) returns تَرَيَانِ", () => {
                expect(verbInstance.mdrF2()).toEqual("تَرَيَانِ");
            })
            it("mdrFP() (mudari faminine plural) returns يَرَيْنَ", () => {
                expect(verbInstance.mdrFP()).toEqual("يَرَيْنَ");
            })
            it("mdrM21() (mudari masculine 2nd person singular) returns تَرَى", () => {
                expect(verbInstance.mdrM21()).toEqual("تَرَى");
            })
            it("mdrM22() (mudari masculine 2nd person dual) returns تَرَيَانِ", () => {
                expect(verbInstance.mdrM22()).toEqual("تَرَيَانِ");
            })
            it("mdrM2P() (mudari masculine 2nd person plural) returns تَرَوْنَ", () => {
                expect(verbInstance.mdrM2P()).toEqual("تَرَوْنَ");
            })
            it("mdrF21() (mudari feminine 2nd person singular) returns تَرَيْنَ", () => {
                expect(verbInstance.mdrF21()).toEqual("تَرَيْنَ");
            })
            it("mdrF22() (mudari feminine 2nd person dual) returns تَرَيَانِ", () => {
                expect(verbInstance.mdrF22()).toEqual("تَرَيَانِ");
            })
            it("mdrF2P() (mudari feminine 2nd person plural) returns تَرَيْنَ", () => {
                expect(verbInstance.mdrF2P()).toEqual("تَرَيْنَ");
            })
            it("mdrB1() (mudari 1st  person singular (both)) returns أَرَى", () => {
                expect(verbInstance.mdrB1()).toEqual("أَرَى");
            })
            it("mdrB3() (mudari 1st  person all (both)) returns نَرَى", () => {
                expect(verbInstance.mdrB3()).toEqual("نَرَى");
            })

            // mudari majhul
            it("mdrMjM1() (mudari majhul masculine singular) returns يُرَى", () => {
                expect(verbInstance.mdrMjM1()).toEqual("يُرَى");
            })
            it("mdrMjM2() (mudari majhul masculine dual) returns يُرَيَانِ", () => {
                expect(verbInstance.mdrMjM2()).toEqual("يُرَيَانِ");
            })
            it("mdrMjMP() (mudari majhul masculine plural) returns يُرَوْنَ", () => {
                expect(verbInstance.mdrMjMP()).toEqual("يُرَوْنَ");
            })
            it("mdrMjF1() (mudari majhul faminine singular) returns تُرَى", () => {
                expect(verbInstance.mdrMjF1()).toEqual("تُرَى");
            })
            it("mdrMjF2() (mudari majhul faminine dual) returns تُرَيَانِ", () => {
                expect(verbInstance.mdrMjF2()).toEqual("تُرَيَانِ");
            })
            it("mdrMjFP() (mudari majhul faminine plural) returns يُرَيْنَ", () => {
                expect(verbInstance.mdrMjFP()).toEqual("يُرَيْنَ");
            })
            it("mdrMjM21() (mudari majhul masculine 2nd person singular) returns تُرَى", () => {
                expect(verbInstance.mdrMjM21()).toEqual("تُرَى");
            })
            it("mdrMjM22() (mudari majhul masculine 2nd person dual) returns تُرَيَانِ", () => {
                expect(verbInstance.mdrMjM22()).toEqual("تُرَيَانِ");
            })
            it("mdrMjM2P() (mudari majhul masculine 2nd person plural) returns تُرَوْنَ", () => {
                expect(verbInstance.mdrMjM2P()).toEqual("تُرَوْنَ");
            })
            it("mdrMjF21() (mudari majhul feminine 2nd person singular) returns تُرَيْنَ", () => {
                expect(verbInstance.mdrMjF21()).toEqual("تُرَيْنَ");
            })
            it("mdrMjF22() (mudari majhul feminine 2nd person dual) returns تُرَيَانِ", () => {
                expect(verbInstance.mdrMjF22()).toEqual("تُرَيَانِ");
            })
            it("mdrMjF2P() (mudari majhul feminine 2nd person plural) returns تُرَيْنَ", () => {
                expect(verbInstance.mdrMjF2P()).toEqual("تُرَيْنَ");
            })
            it("mdrMjB1() (mudari majhul 1st  person singular (both)) returns أُرَى", () => {
                expect(verbInstance.mdrMjB1()).toEqual("أُرَى");
            })
            it("mdrMjB3() (mudari majhul 1st  person all (both)) returns نُرَى", () => {
                expect(verbInstance.mdrMjB3()).toEqual("نُرَى");
            })

            it("ismF() (Ism fa'eel) returns رَاءٍ", () => {
                expect(verbInstance.ismF()).toEqual("رَاءٍ");
            })
            it("ismMfl() (Ism maf'ul) returns مَرْئِيّ", () => {
                expect(verbInstance.ismMfl()).toEqual("مَرْئِيّ");
            })
            // amr
            it("amrM1() (fel amr masculine singular) returns رَ", () => {
                expect(verbInstance.amrM1()).toEqual("رَ");
            })
            it("amrM2() (fel amr masculine dual) returns رَيَا", () => {
                expect(verbInstance.amrM2()).toEqual("رَيَا");
            })
            it("amrMP() (fel amr masculine plural) returns رَواْ", () => {
                expect(verbInstance.amrMP()).toEqual("رَواْ");
            })
            it("amrF1() (fel amr feminine singular) returns رَيْ", () => {
                expect(verbInstance.amrF1()).toEqual("رَيْ");
            })
            it("amrF2() (fel amr feminine dual) returns رَيَا", () => {
                expect(verbInstance.amrF2()).toEqual("رَيَا");
            })
            it("amrFP() (fel amr feminine plural) returns رَيْنَ", () => {
                expect(verbInstance.amrFP()).toEqual("رَيْنَ");
            })
            // nahi
            it("nahiM1() (fel nahi masculine singular) returns لاَ تَرَ", () => {
                expect(verbInstance.nahiM1()).toEqual("لاَ تَرَ");
            })
            it("nahiM2() (fel nahi masculine dual) returns لاَ تَرَيَا", () => {
                expect(verbInstance.nahiM2()).toEqual("لاَ تَرَيَا");
            })
            it("nahiMP() (fel nahi masculine plural) returns لاَ تَرَواْ", () => {
                expect(verbInstance.nahiMP()).toEqual("لاَ تَرَواْ");
            })
            it("nahiF1() (fel nahi feminine singular) returns لاَ تَرَيْ", () => {
                expect(verbInstance.nahiF1()).toEqual("لاَ تَرَيْ");
            })
            it("nahiF2() (fel nahi feminine dual) returns لاَ تَرَيَا", () => {
                expect(verbInstance.nahiF2()).toEqual("لاَ تَرَيَا");
            })
            it("nahiFP() (fel nahi feminine plural) returns لاَ تَرَيْنَ", () => {
                expect(verbInstance.nahiFP()).toEqual("لاَ تَرَيْنَ");
            })
        });
    })


})
