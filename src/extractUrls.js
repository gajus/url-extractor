import extractUrlsFromMarkdown from './extractUrlsFromMarkdown';
import {
    SOURCE_TYPE_MARKDOWN
} from './constants';

/**
 * @param {string} input
 * @param {SOURCE_TYPE_*} sourceType
 */
export default (input, sourceType) => {
    let urls;

    if (!sourceType) {
        throw new Error('Must set source type.');
    } else if (sourceType === SOURCE_TYPE_MARKDOWN) {
        urls = extractUrlsFromMarkdown(input);
    } else {
        throw new Error('Unknown source type.');
    }

    return urls.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
};
