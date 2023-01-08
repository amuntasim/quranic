import {verbFormInst} from "../../VerbForms";

let verbInstance;
describe("FormI", () => {

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
        it("mdMP() (madi masculine plural) returns فَتَحُوْا", () => {
            expect(verbInstance.mdMP()).toEqual("فَتَحُوْا");
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
        it("mdM22() (madi masculine 2nd person dual) returns فَتَحْتُمَ", () => {
            expect(verbInstance.mdM22()).toEqual("فَتَحْتُمَ");
        })
        it("mdM2P() (madi masculine 2nd person plural) returns فَتَحْتُمْ", () => {
            expect(verbInstance.mdM2P()).toEqual("فَتَحْتُمْ");
        })
        it("mdF21() (madi feminine 2nd person singular) returns فَتَحْتِ", () => {
            expect(verbInstance.mdF21()).toEqual("فَتَحْتِ");
        })
        it("mdF22() (madi feminine 2nd person dual) returns فَتَحْتُمَ", () => {
            expect(verbInstance.mdF22()).toEqual("فَتَحْتُمَ");
        })
        it("mdF2P() (madi feminine 2nd person plural) returns فَتَحْتُنَّ", () => {
            expect(verbInstance.mdF2P()).toEqual("فَتَحْتُنَّ");
        })
        it("mdB1() (madi 1st  person singular (both)) returns فَتَحْتُ", () => {
            expect(verbInstance.mdB1()).toEqual("فَتَحْتُ");
        })
        it("mdB3() (madi 1st  person all (both)) returns فَتَحْنَ", () => {
            expect(verbInstance.mdB3()).toEqual("فَتَحْنَ");
        })

        // madi majhul
        it("mdMjM1() (madi majhul masculine singular) returns فُتِحَ", () => {
            expect(verbInstance.mdMjM1()).toEqual("فُتِحَ");
        })
        it("mdMjM2() (madi majhul masculine dual) returns فُتِحَا", () => {
            expect(verbInstance.mdMjM2()).toEqual("فُتِحَا");
        })
        it("mdMjMP() (madi majhul masculine plural) returns فُتِحُوْا", () => {
            expect(verbInstance.mdMjMP()).toEqual("فُتِحُوْا");
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
        it("mdMjM22() (madi majhul masculine 2nd person dual) returns فُتِحْتُمَ", () => {
            expect(verbInstance.mdMjM22()).toEqual("فُتِحْتُمَ");
        })
        it("mdMjM2P() (madi majhul masculine 2nd person plural) returns فُتِحْتُمْ", () => {
            expect(verbInstance.mdMjM2P()).toEqual("فُتِحْتُمْ");
        })
        it("mdMjF21() (madi majhul feminine 2nd person singular) returns فُتِحْتِ", () => {
            expect(verbInstance.mdMjF21()).toEqual("فُتِحْتِ");
        })
        it("mdMjF22() (madi majhul feminine 2nd person dual) returns فُتِحْتُمَ", () => {
            expect(verbInstance.mdMjF22()).toEqual("فُتِحْتُمَ");
        })
        it("mdMjF2P() (madi majhul feminine 2nd person plural) returns فُتِحْتُنَّ", () => {
            expect(verbInstance.mdMjF2P()).toEqual("فُتِحْتُنَّ");
        })
        it("mdMjB1() (madi majhul 1st  person singular (both)) returns فُتِحْتُ", () => {
            expect(verbInstance.mdMjB1()).toEqual("فُتِحْتُ");
        })
        it("mdMjB3() (madi majhul 1st  person all (both)) returns فُتِحْنَ", () => {
            expect(verbInstance.mdMjB3()).toEqual("فُتِحْنَ");
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

        it("ismF() (Ism fa'eel) returns فاَتِحٌ", () => {
            expect(verbInstance.ismF()).toEqual("فاَتِحٌ");
        })
        it("ismMfl() (Ism maf'ul) returns مَفْتُوحُ", () => {
            expect(verbInstance.ismMfl()).toEqual("مَفْتُوحُ");
        })
        // amr
        it("amrM1() (fel amr masculine singular) returns اِفْتَحْ", () => {
            expect(verbInstance.amrM1()).toEqual("اِفْتَحْ");
        })
        it("amrM2() (fel amr masculine dual) returns اِفْتَحَا", () => {
            expect(verbInstance.amrM2()).toEqual("اِفْتَحَا");
        })
        it("amrMP() (fel amr masculine plural) returns اِفْتَحُوْا", () => {
            expect(verbInstance.amrMP()).toEqual("اِفْتَحُوْا");
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
        it("nahiMP() (fel nahi masculine plural) returns لاَ تَفْتَحُوْا", () => {
            expect(verbInstance.nahiMP()).toEqual("لاَ تَفْتَحُوْا");
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
        it("zarf() (fel nahi feminine plural) returns مَفْتُوح", () => {
            expect(verbInstance.zarf()).toEqual("مَفْتُوحُ");
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

})
