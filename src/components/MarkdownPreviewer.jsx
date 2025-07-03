import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkEmoji from "remark-emoji";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import syntaxGuide from "../lib/syntaxGuide";

import 'katex/dist/katex.min.css';

function MarkdownPreviewer() {
    const [markdown, setMarkdown] = useState(syntaxGuide);

    return (
        <div className="h-screen p-8">
            <div className="text-4xl font-extrabold mb-4 text-center">Markdown Previewer</div>

            <div className="grid md:grid-cols-2 gap-6 h-[85vh]">
                {/* Markdown Editor */}
                <div className="flex flex-col bg-base-100 rounded-box shadow-xl/30 p-4 overflow-auto">
                    <div className="text-lg font-bold mb-2">Editor</div>
                    <textarea
                        className="textarea textarea-bordered h-full w-full resize-none font-mono"
                        value={markdown}
                        onChange={(e) => setMarkdown(e.target.value)}
                        placeholder="Write your markdown here..."
                    />
                </div>

                {/* Markdown Preview */}
                <div className="flex flex-col bg-base-100 rounded-box shadow-xl/30 p-4 overflow-auto">
                    <div className="text-lg font-bold mb-2">Preview</div>
                    <div className="prose max-w-none dark:prose-invert markdown overflow-auto">
                        <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }], remarkMath, remarkEmoji]} rehypePlugins={[rehypeKatex, rehypeRaw]} >{markdown}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MarkdownPreviewer;
