const syntaxGuide = `# Markdown syntax guide
## Headers

# This is a Heading h1
## This is a Heading h2
###### This is a Heading h6

## Emphasis

*This text will be italic*

_This will also be italic_

**This text will be bold**

__This will also be bold__

_You **can** combine them_

~~This text will be strikethrough~~

## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b
    * Item 3a
    * Item 3b

### Ordered

1. Item 1
2. Item 2
3. Item 3
    1. Item 3a
    2. Item 3b

## Blocks of code

\`\`\`
let message = 'Hello world';
alert(message);
\`\`\`

## Inline code

This web site is using \`remarkjs/react-markdown\`.

## Images

![This is an alt text.](/markdown.svg "This is a sample image.")

## Links

You may be using [Google](https://google.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Emojis
Classic markup: :wink: :cry: :laughing: :yum:

## HTML
I need to highlight these <mark>very important words</mark>.

This **word** is bold. This <em>word</em> is italic.

This is for subscripts: H<sub>2</sub>O

This is for superscripts: X<sup>2</sup>

## Maths

You can render LaTeX mathematical expressions using [KaTeX](https://khan.github.io/KaTeX/):

The *Gamma function* satisfying $\\Gamma(n) = (n-1)!\\quad\\forall n\\in\\mathbb N$ is via the Euler integral

$$
\\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}dt\\,.
$$

> You can find more information about **LaTeX** mathematical expressions [here](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference).`;

export default syntaxGuide;