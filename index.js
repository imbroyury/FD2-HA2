function consoleWithIntervals(...args) {
    // First call check - there should be 2 or more arguments
    if (args.length >= 2) {
        let sentence = args.pop(),
            intervals = args.slice();
        /* Second call check -
         * last argument should be a string,
         * every interval should be a finite positive number
         */
        if (typeof sentence === 'string' && intervals.every(i => isFinite(i) && i >= 0)) {
            let intervalsCount = intervals.length,
                words = sentence.split(' '),
                wordsCount = words.length;
            recursiveConsole();

            /* Function sets a timeout for the first word and then
             * recursively calls itself until the last word is consoled
             */
            function recursiveConsole(wordIndex = 0, intervalIndex = 0) {
                setTimeout(() => {
                    console.log(words[wordIndex]);
                    /* unless we just consoled out last word,
                     * initialize setTimeout for the next one
                     */
                    if (wordIndex < wordsCount - 1) {
                        /* if intervalIndex is equal to (or larger than, which should never happen)
                         * the last element in intervals array,
                         * initialize next setTimeout with the last interval
                         */
                        recursiveConsole(wordIndex + 1, intervalIndex >= intervalsCount - 1 ? intervalsCount - 1 : intervalIndex + 1);
                    }
                }, intervals[intervalIndex] * 1000);
            }
        } else {
            console.log('ERROR. Function called with invalid arguments.');
        }
    } else {
        console.log('ERROR. Function called with insufficient amount of arguments.');
    }
}

consoleWithIntervals(2, 5, 4, 6, 15, `Карл у Клары украл кораллы`);