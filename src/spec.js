import test from "ava";
import LinkBuilder from "./link-builder";

const malcolmQuote = {
    testDescription: "Returns original sentence when no keyword is match.",
    original: "Nobody can give you freedom. Nobody can give you equality or justice or anything. If you’re a man, you take it.",
    replacementRules: [{
        anchor: "https://en.wikiquote.org/wiki/Malcolm_X",
        keyword: "resignation"
    }],
    replaced: "Nobody can give you freedom. Nobody can give you equality or justice or anything. If you’re a man, you take it."
};

const thoreauQuote = {
    testDescription: "Apply one simple replacement.",
    original: "That man is richest whose pleasures are the cheapest. - Thoreau",
    replacementRules: [{
        anchor: "https://en.wikiquote.org/wiki/Henry_David_Thoreau",
        keyword: "Thoreau"
    }],
    replaced: "That man is richest whose pleasures are the cheapest. - <a href=\"https://en.wikiquote.org/wiki/Henry_David_Thoreau\">Thoreau</a>"
};

const bruceLeeQuote = {
    testDescription: "Replaces the same anchor twice.",
    original: "All types of knowledge, ultimately mean self knowledge.",
    replacementRules:[{
        anchor: "https://en.wikiquote.org/wiki/Bruce_Lee",
        keyword: "knowledge"
    }],
    replaced: "All types of <a href=\"https://en.wikiquote.org/wiki/Bruce_Lee\">knowledge</a>, ultimately mean self <a href=\"https://en.wikiquote.org/wiki/Bruce_Lee\">knowledge</a>."
};

const pauloFreireQuote = {
    testDescription: "Replaces two different anchors",
    original: "Founding itself upon love, humility, and faith, dialogue becomes a horizontal relationship of which mutual trust between the dialoguers is a logical consequence.",
    replacementRules: [{
        anchor: "https://en.wikiquote.org/wiki/Faith",
        keyword: "faith"
    },{
        anchor: "https://en.wikiquote.org/wiki/Love",
        keyword: "love"
    }],
    replaced: "Founding itself upon <a href=\"https://en.wikiquote.org/wiki/Love\">love</a>, humility, and <a href=\"https://en.wikiquote.org/wiki/Faith\">faith</a>, dialogue becomes a horizontal relationship of which mutual trust between the dialoguers is a logical consequence."
};

const quotes = [malcolmQuote, thoreauQuote, bruceLeeQuote, pauloFreireQuote];

quotes.forEach((quote) => {
   test(quote.testDescription, t => {
      let replaced = LinkBuilder(quote.original, quote.replacementRules);
      t.deepEqual(replaced, quote.replaced);
   });
});