import * as React from 'react';

export function ChaptersManager(opts: Object) {
    const [chapters, setChapters] = React.useState(_fetchChapters());

    function _fetchChapters() {

    }

    function list() {
        return chapters;
    }

    return {list};
}
