var expect = require('chai').expect,
    URLExtractor = require('../src/url-extractor.js');

describe('URLExtractor.extract', function () {
    it('throws an error if invoked without the sourceType parameter', function () {
        expect(function () {
            URLExtractor.extract()
        }).to.throw(Error, 'Must set source type.');
    });
    it('throws an error if unknown sourceType is set.', function () {
        expect(function () {
            URLExtractor.extract('', 'test');
        }).to.throw(Error, 'Unknown source type.');
    });
    it('returns matched URLs', function () {
        var urls = URLExtractor.extract('http://gajus.com/a http://gajus.com/b http://gajus.com/c', URLExtractor.SOURCE_TYPE_MARKDOWN);

        expect(urls).to.deep.equal(['http://gajus.com/a', 'http://gajus.com/b', 'http://gajus.com/c']);
    });
    it('returns only unique URLs', function () {
        var urls = URLExtractor.extract('http://gajus.com/a http://gajus.com/b http://gajus.com/b', URLExtractor.SOURCE_TYPE_MARKDOWN);

        expect(urls).to.deep.equal(['http://gajus.com/a', 'http://gajus.com/b']);
    });
});
describe('URLExtractor._fromMarkdown', function () {
    it('extracts URLs from image definition', function () {
        expect(URLExtractor._fromMarkdown('![Image description](http://gajus.com)')).to.deep.equal(['http://gajus.com']);
    });
    it('extracts URLs from link definition', function () {
        expect(URLExtractor._fromMarkdown('[Link description](http://gajus.com)')).to.deep.equal(['http://gajus.com']);
    });
    it('extracts URLs from in-text URLs', function () {
        expect(URLExtractor._fromMarkdown('http://gajus.com')).to.deep.equal(['http://gajus.com']);
    });
});