import test from "ava";
import LinkBuilder from "./link-builder";

const malcolm = {
    description: "Returns input sentence when no keyword is match.",
    input: "Nobody can give you freedom. Nobody can give you equality or justice or anything. If you’re a man, you take it.",
    replacements: [{
        anchor: "https://en.wikiquote.org/wiki/Malcolm_X",
        keyword: "resignation"
    }],
    output: "Nobody can give you freedom. Nobody can give you equality or justice or anything. If you’re a man, you take it."
};

const thoreau = {
    description: "Apply one simple replacement.",
    input: "That man is richest whose pleasures are the cheapest. - Thoreau",
    replacements: [{
        anchor: "https://en.wikiquote.org/wiki/Henry_David_Thoreau",
        keyword: "Thoreau"
    }],
    output: "That man is richest whose pleasures are the cheapest. - <a href=\"https://en.wikiquote.org/wiki/Henry_David_Thoreau\">Thoreau</a>"
};

const bruceLee = {
    description: "Replaces the same anchor twice.",
    input: "All types of knowledge, ultimately mean self knowledge.",
    replacements:[{
        anchor: "https://en.wikiquote.org/wiki/Bruce_Lee",
        keyword: "knowledge"
    }],
    output: "All types of <a href=\"https://en.wikiquote.org/wiki/Bruce_Lee\">knowledge</a>, ultimately mean self <a href=\"https://en.wikiquote.org/wiki/Bruce_Lee\">knowledge</a>."
};

const pauloFreire = {
    description: "Replaces two different anchors",
    input: "Founding itself upon love, humility, and faith, dialogue becomes a horizontal relationship of which mutual trust between the dialoguers is a logical consequence.",
    replacements: [{
        anchor: "https://en.wikiquote.org/wiki/Faith",
        keyword: "faith"
    },{
        anchor: "https://en.wikiquote.org/wiki/Love",
        keyword: "love"
    }],
    output: "Founding itself upon <a href=\"https://en.wikiquote.org/wiki/Love\">love</a>, humility, and <a href=\"https://en.wikiquote.org/wiki/Faith\">faith</a>, dialogue becomes a horizontal relationship of which mutual trust between the dialoguers is a logical consequence."
};

const thomasAquinas = {
    description: "Uses insensitive:true to do match keywords in uppercase and lowercase",
    input: "Virtue’s true reward is happiness itself, for which the virtuous work, whereas if they worked for honor, it would no longer be virtue, but ambition.",
    replacements: [{
        anchor: "https://en.wikiquote.org/wiki/Thomas_Aquinas",
        keyword: "virtue",
        insensitive: true
    }],
    output: "<a href=\"https://en.wikiquote.org/wiki/Thomas_Aquinas\">Virtue</a>’s true reward is happiness itself, for which the virtuous work, whereas if they worked for honor, it would no longer be <a href=\"https://en.wikiquote.org/wiki/Thomas_Aquinas\">virtue</a>, but ambition."
};

const lordActon = {
    description: "Gets a max number of sentences by keywords",
    input: "Power tends to corrupt, and absolute power corrupts absolutely",
    replacements: [{
        anchor: "https://en.wikiquote.org/wiki/Power",
        keyword: "Power"
    }],
    output: "<a href=\"https://en.wikiquote.org/wiki/Power\">Power</a> tends to corrupt, and absolute power corrupts absolutely"
};

const lordActonInsensitive = {
    description: "Gets max number of sentences using insensitive: true;",
    input: "Power tends to corrupt, and absolute power corrupts absolutely",
    replacements: [{
        anchor: "https://en.wikiquote.org/wiki/Power",
        keyword: "Power",
        insensitive: true
    }],
    output: "<a href=\"https://en.wikiquote.org/wiki/Power\">Power</a> tends to corrupt, and absolute <a href=\"https://en.wikiquote.org/wiki/Power\">power</a> corrupts absolutely"
};

const gandhi = {
    description: "Doesn't get a keyword as part of a full word",
    input: "The weak can never forgive. Forgiveness is the attribute of the strong.",
    replacements: [{
        anchor: "https://en.wikiquote.org/wiki/Mahatma_Gandhi",
        keyword: "Forgive"
    }],
    output: "The weak can never forgive. Forgiveness is the attribute of the strong."
};

const gautama = {
    description: "Replaces keyword which is part of another whole word",
    input: "In all things, there is neither male nor female.",
    replacements: [{
        anchor: "https://en.wikiquote.org/wiki/Women",
        keyword: "male"
    }],
    output: "In all things, there is neither <a href=\"https://en.wikiquote.org/wiki/Women\">male</a> nor female."
};

const quotes = [
    malcolm, thoreau, bruceLee,
    pauloFreire, thomasAquinas, lordActon,
    lordActonInsensitive, gandhi, gautama];

quotes.forEach((quote) => {
   test(`NOT USING new: ${quote.description}`, t => {
        let output = LinkBuilder(quote.input, quote.replacements);
        t.deepEqual(output, quote.output);
    });
});

quotes.forEach((quote) => {
    test(`USING new: ${quote.description}`, t => {
        let link = new LinkBuilder(quote.input, quote.replacements);
        t.deepEqual(link.output, quote.output);
    });
});