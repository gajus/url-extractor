import {
    expect
} from 'chai';

import {
    extractUrls,
    SOURCE_TYPE_MARKDOWN
} from './../src';

describe('extractUrls()', () => {
    it('throws an error if invoked without the sourceType parameter', () => {
        expect(() => {
            extractUrls('');
        }).to.throw(Error, 'Must set source type.');
    });
    it('throws an error if unknown sourceType is set.', () => {
        expect(() => {
            extractUrls('', 'test');
        }).to.throw(Error, 'Unknown source type.');
    });
    it('returns matched URLs', () => {
        const urls = extractUrls('http://gajus.com/a http://gajus.com/b http://gajus.com/c', SOURCE_TYPE_MARKDOWN);

        expect(urls).to.deep.equal(['http://gajus.com/a', 'http://gajus.com/b', 'http://gajus.com/c']);
    });
    it('returns only unique URLs', () => {
        const urls = extractUrls('http://gajus.com/a http://gajus.com/b http://gajus.com/b', SOURCE_TYPE_MARKDOWN);

        expect(urls).to.deep.equal(['http://gajus.com/a', 'http://gajus.com/b']);
    });
});
