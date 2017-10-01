function LinkBuilder(content, replacements){

    replacements.forEach(replacement => {
        let counter = 0;
        let patternModifiers = replacement.insensitive ? "gi" : "g";
        let pattern = new RegExp(`\\b${replacement.keyword}\\b`, patternModifiers);
        content = content.replace(pattern, (match) =>{
            let hasNoMax = typeof replacement.max === "undefined";
            if(replacement.max > counter || hasNoMax) {
                counter++;
                return `<a href="${replacement.anchor}">${match}</a>`;
            }
            return match;
        });
    });
    return content;
}

module.exports = LinkBuilder;
