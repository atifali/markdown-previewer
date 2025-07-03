import { useState } from "react";
import syntaxGuide from "../lib/syntaxGuide";
import Editor from "./Editor";
import Previewer from "./Previewer";

function MarkdownPreviewer() {
    const [markdown, setMarkdown] = useState(syntaxGuide);

    return (
        <div className="h-screen p-8">
            <div className="text-4xl font-extrabold mb-4 text-center">Markdown Previewer</div>

            <div className="grid md:grid-cols-2 gap-6 h-[85vh]">
                <Editor markdown={markdown} setMarkdown={setMarkdown} />
                <Previewer markdown={markdown} />
            </div>
        </div >
    );
}

export default MarkdownPreviewer;
