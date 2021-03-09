export type RootStackParamList = {
    Root: undefined;
    NotFound: undefined;
};

export type BottomTabParamList = {
    Home: undefined;
    Chapters: undefined;
    Misc: undefined;
    Settings: { reloading: any };
};

export type HomeParamList = {
    HomeScreen: undefined;
};

export type ChaptersParamList = {
    ChaptersScreen: undefined;
    ChapterDetailScreen: undefined;
};
export type MiscParamList = {
    MiscScreen: undefined;
    AssessmentListScreen: undefined;
};
export type SettingsParamList = {
    SettingsScreen: { languageChanged: any, lessonsSourceChanged: any };
    test: any;
};
