import {
    expect
} from 'chai';

import extractUrlsFromMarkdown from './../src/extractUrlsFromMarkdown';

describe('extractUrlsFromMarkdown()', () => {
    it('extracts URLs from image definition', () => {
        expect(extractUrlsFromMarkdown('![Image description](http://gajus.com)')).to.deep.equal(['http://gajus.com']);
    });
    it('extracts URLs from link definition', () => {
        expect(extractUrlsFromMarkdown('[Link description](http://gajus.com)')).to.deep.equal(['http://gajus.com']);
    });
    it('extracts URLs from in-text URLs', () => {
        expect(extractUrlsFromMarkdown('http://gajus.com')).to.deep.equal(['http://gajus.com']);
    });
});
