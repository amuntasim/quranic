
export default {
    prefixes: ['quranic://'],
    config: {
        screens: {
            Root: {
                screens: {
                    Home: {
                        screens: {
                            HomeScreen: 'home',
                        },
                    },
                    Chapters: {
                        screens: {
                            ChaptersScreen: 'chapters',
                        },
                    },
                    Misc: {
                        screens: {
                            ChaptersScreen: 'misc',
                        },
                    },
                    Settings: {
                        screens: {
                            ChaptersScreen: 'settings',
                        },
                    },
                },
            },
            NotFound: '*',
        },
    },
};
