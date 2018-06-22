const expect = require('expect.js');

import tranformStringToPseudo from '../pseudizer';

suite("Pseudizer Tests", function () {

    test("should work with text", function() {
        expect(tranformStringToPseudo('locale')).to.equal('ℓôçáℓè');
    });

    test("should work with empty text", function() {
        expect(tranformStringToPseudo('')).to.equal('');
    });

    test("should extended text", function() {
        const localizedText = tranformStringToPseudo('abcdeabcde', true);
        expect(localizedText.length).to.equal(13);
    });
});