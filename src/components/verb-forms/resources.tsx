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
    'two-sukun-one-weak': [/(ا|وْ|يْ)(.\ْ)/, '$2'],
    'week-fatah-after-sukun': [/(\ْ)(وَ)/, 'َ' + 'ا'],
    'oao-damma-after-sukun': [/(\ْ)(وُ)/, 'ُ'+'وْ'],
    'ea-kasra-after-sukun': [/(\ْ)(يِ)/,'ِ'+'يْ'],
    'hamza-qursi-sukun': [/(ءْ)/, 'ئ'+ 'ْ'],
    'hamza-qursi-dammah': [/(ءُ)(.+)/, 'ئُ'+'$2'],
    'hamza-qursi-kasrah': [/(ءِ)(.+)/, 'ئِ'+'$2'],
    'hamza-qursi-fatah': [/(يءَ)(.+)/, 'يئَ'+'$2'],
    'hamza-qursi-fatah-ea-sukun': [/(يْءَ)(.+)/, 'يْئَ'+'$2'],
    'ee-un-to-een': [/يِءٌ/, 'ءٍ'],
    'kasra-oao-to-ea': [/ِو/, 'ِي']
}
