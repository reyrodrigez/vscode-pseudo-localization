# pseudo-localizer VSCode extension

Pseudolocalization is a software testing method used for testing internationalization aspects of software. Instead of translating the text of the software into a foreign language, as in the process of localization, the textual elements of an application are replaced with an altered version of the original language.

### Example:
```
Account Settings	[!!! Àççôûñţ Šéţţîñĝš !!!][1]
```

These specific alterations make the original words appear readable, but include the most problematic characteristics of the world's languages: varying length of text or characters, language direction, and so on.

### How to use

1. select text in editor
2. press `⇧⌘P` / `Ctrl+Shift+P`
3. search for `Pseudolocalize selected text`

Read more about Pseudolocalization on [wikipedia](https://en.wikipedia.org/wiki/Pseudolocalization)

## Configuration options

pseudolocalizer.wrapper - `{boolean:true}` [!!! enclose in brackets and exclamations !!!]: `[!!! text !!!]`
pseudolocalizer.extend - `{boolean:true}` Extend the length of the text by 30%.
