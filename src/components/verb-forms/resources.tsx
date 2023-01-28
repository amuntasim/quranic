export const symbols = {
    alif: 'ا', ba: 'ب', ta: 'ت', sa: 'ث', jim: 'ج', ha: 'ح', kho: 'خ',
    dal: 'د', jal: 'ذ', ro: 'ر', jha: 'ز', sin: 'س', shin: 'ش', sod: 'ص',
    dod: 'ض', taw: 'ط', jaw: 'ظ', ain: 'ع', goin: 'غ', fa: 'ف', qof: 'ق',
    kaf: 'ك', lam: 'ل', mim: 'م', nun: 'ن', hha: 'ه', oao: 'و', ea: 'ي',
    hamza: 'ء', roundTa: 'ة', maksurah: 'ى', mamdudah: 'آ', qata: 'أ', qate: 'إ',
    fatah: 'َ', dammah: 'ُ', kasrah: 'ِ', dun: 'ٌ', dan: 'ً', din: 'ٍ', sukun: 'ْ', shadda: 'ّ',
    lamALif: 'لا', hamzaQursi: 'ئ'
};

export const nahiPrefix = symbols.lamALif + symbols.fatah + ' ' + symbols.ta;
export const replaces = {
    'dammah-oao-ea-uun-to-kasra-ea-sahha-uun': [/(ُ)(و)(يٌ)/, 'ِ'+'يّ'],
    'qasra-ea-uun-to-een': [/(ِ)(يٌ)/, 'ٍ'],
    'two-sukun-one-weak': [/(ا|وْ|يْ)(و|.ْ)/, '$2'],
    'fatah-alif-fatah': [/(َاَ)/, 'َا'],
    'week-fatah-after-sukun': [/(ْ)(وَ)/, 'َ' + 'ا'],
    'sukun-hamja-fatah-to-fatah': [/(ْ)(ءَ)/, 'َ'],
    'oao-damma-after-sukun': [/(ْ)(وُ)/, 'ُ'+'وْ'],
    'ea-kasra-after-sukun': [/(ْ)(يِ)/,'ِ'+'يْ'],
    'hamza-qursi-sukun': [/(ءْ)/, 'ئ'+ 'ْ'],
    'hamza-qursi-dammah': [/(ءُ)(.+)/, 'ئُ'+'$2'],
    'hamza-qursi-kasrah': [/(ءِ)(.+)/, 'ئِ'+'$2'],
    'hamza-qursi-fatah': [/(يءَ)(.+)/, 'يئَ'+'$2'],
    'hamza-qursi-fatah-ea-sukun': [/(يْءَ)(.+)/, 'يْئَ'+'$2'],
    'dammah-hamza-qursi-ea-oao-to-dammah-oao-qursi-oao': [/(ُ)(ئُو)(.+)/, 'ُ'+'ؤُو'+'$3'],
    'ee-un-to-een': [/يِءٌ/, 'ءٍ'],
    'kasra-oao-to-ea': [/ِو/, 'ِي'],
    'kasra-ea-dammah-to-dammah': [/ِيُ/, 'ُ'],
    'damma-oao-dammah-to-dammah-oao-sukun': [/(ُ)(وُ)/, 'ُ' + 'وْ'],
    'damma-oao-kasrah-to-kasrah-oao-sukun': [/(ُ)(وِ)/, 'ِ' + 'وْ'],
    'oao-ea-after-fatah-at-the-end-to-alifMaqsura': [/(َ)(وُ|يُ)$/, 'َ'+'ى'],
    'fatah-weak-damma-or-qasra-to-fatah': [/(َ)(وُ|يُ)/, 'َ'+ 'يْ'],
    'fatah-ea-qasra-ea-to-fatah-ea': [/(َ)(يِ)(يْ)/, 'َ'+ 'يْ'],
    'oa-oa-uun-een-to-oa-sadda-un': [/(ووٌ)/, 'وّ'],
}
