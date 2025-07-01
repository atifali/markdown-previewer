import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you

export default function MarkdownPreviewer() {
    const [markdown, setMarkdown] = useState(`# Markdown syntax guide
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

![This is an alt text.](/vite.svg "This is a sample image.")

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

## Maths

You can render LaTeX mathematical expressions using [KaTeX](https://khan.github.io/KaTeX/):

The *Gamma function* satisfying $\\Gamma(n) = (n-1)!\\quad\\forall n\\in\\mathbb N$ is via the Euler integral

$$
\\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}dt\\,.
$$

> You can find more information about **LaTeX** mathematical expressions [here](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference).
`);

    return (
        <div className="h-screen p-4 bg-base-200 text-base-content">
            <div className="text-2xl font-bold mb-4 text-center">Markdown Previewer</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-[89vh]">
                {/* Markdown Editor */}
                <div className="flex flex-col bg-base-100 rounded-box shadow p-4">
                    <div className="text-lg font-semibold mb-2">Editor</div>
                    <textarea
                        className="textarea textarea-bordered h-full w-full resize-none font-mono"
                        value={markdown}
                        onChange={(e) => setMarkdown(e.target.value)}
                        placeholder="Write your markdown here..."
                    />
                </div>

                {/* Markdown Preview */}
                <div className="flex flex-col bg-base-100 rounded-box shadow p-4 overflow-auto">
                    <div className="text-lg font-semibold mb-2">Preview</div>
                    <div className="prose max-w-none dark:prose-invert markdown">
                        <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} >{markdown}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div >
    );
}
