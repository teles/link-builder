<p align="center">
  <br>
   <img src="https://openclipart.org/image/160px/svg_to_png/287669/link-builder.png&disposition=attachment" alt="Link Builder" title="Link Builder by  cliparteles ( https://openclipart.org/user-detail/cliparteles )" />
  <br>
  <h1 align="center">Link Builder</h1>
</p>
<p align="center">  
  The power to generate your html anchors using javascript.
</p>
<p align="center">
  <p align="center"><strong>Perfect for SPAs and SEO.</strong></p>
  <p align="center">
<a href="https://www.codacy.com/app/josetelesmaciel/link-builder?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=teles/link-builder&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/edd7aadb99f2426592d0b9a4aeb5f5aa"/></a>  
    <a href="https://www.npmjs.com/package/link-builder"><img src="https://img.shields.io/npm/v/link-builder.svg"></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
  </p>
</p> 


## Common usage

The `LinkBuilder` function can be used as a constructor or literal function to parse any `String` or `HTMLElement` to include html anchors in it.

Use `LinkBuilder` to easily include anchors to your markup, such as:

**Before LinkBuilder:**  
```html 
<p> In the field of search engine optimization, link building describes actions aimed at increasing the number and quality of inbound links to a webpage with the goal of increasing the search engine rankings of that page or website.</p>
```

**After LinkBuilder:**
```html 
<p> In the field of <a href=\"https://en.wikipedia.org/wiki/Search_engine_optimization\">search engine optimization</a>, link building describes actions aimed at increasing the number and quality of <a href=\"https://en.wikipedia.org/wiki/Backlink\">inbound links</a> to a webpage with the goal of increasing the search engine rankings of that page or website.</p>
```

**Used `LinkBuilder` configuration to create above result:**

```javascript
new LinkBuilder(htmlContent, [{
          anchor: "https://en.wikipedia.org/wiki/Search_engine_optimization",
          keyword: "search engine optimization"
        },
        {
          anchor: "https://en.wikipedia.org/wiki/Backlink",
          keyword: "inbound links"
        }
    ]) 
```


## Installation

```bash
npm install --save link-builder 
```

Or get the [latest version from unpkg.com](https://unpkg.com/link-builder@0.6.5/release/link-builder.js). 

## Parameters

There are two mandatory parameters for `LinkBuilder`.

<img src="https://placeholdit.imgix.net/~text?txtsize=22&txtclr=fff&bg=28a831&txt=Content&w=100&h=48" align="left">
<img src="https://placeholdit.imgix.net/~text?txtsize=22&txtclr=fff&bg=cb8c32&txt=Replacements&w=150&h=48">

``content``:

> is any `String` or `HTMLElement` used as input for `LinkBuilder`. 

``replacements``:

> is a Array of Objects containing each one optional and required properties:

### Properties for each replacement:

| property    | required | description                                             | example                                  |
|-------------|----------|---------------------------------------------------------|------------------------------------------|
| anchor      | true     | anchor text to be used as href                          | https://en.wikipedia.org/wiki/JavaScript |
| keyword     | true     | String keyword to be matched                            | Javascript                               |
| insensitive | false    | Boolean to on/off case insentive match. Default `false` | true                                     |
| max         | false    | Number. Max number of matches for `keyword`.            | 3                                        |


## Examples
Coming soon

## Contributing
Coming soon

## License
MIT - Jota Teles - 2017
