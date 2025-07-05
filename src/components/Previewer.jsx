import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkEmoji from "remark-emoji";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import 'katex/dist/katex.min.css';

function Previewer(props) {
    const handleSyncscrollChange = (event) => {
        props.setSyncScroll(event.target.checked);
    };

    return (
        <div className="flex flex-col bg-base-100 rounded-box shadow-xl/30 p-4 overflow-auto">
            <div className="flex flex-row items-center justify-between">
                <div className="text-lg font-bold mb-2">Preview</div>
                <div className="font-light mb-2 flex">
                    <input
                        className="ml-2"
                        type="checkbox"
                        checked={props.syncScroll}
                        onChange={handleSyncscrollChange}
                    />
                    <label className="ml-1">Sync Scroll</label>
                </div>
            </div>
            <div ref={props.previewDivRef} onScroll={props.handlePreviewScroll} className="prose max-w-none dark:prose-invert markdown overflow-auto">
                <ReactMarkdown
                    remarkPlugins={[[remarkGfm, { singleTilde: false }], remarkMath, remarkEmoji]}
                    rehypePlugins={[rehypeKatex, rehypeRaw]} >
                    {props.markdown}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default Previewer;
