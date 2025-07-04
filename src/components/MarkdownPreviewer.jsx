import { useState } from "react";
import syntaxGuide from "../lib/syntaxGuide";
import Editor from "./Editor";
import Previewer from "./Previewer";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MarkdownPreviewer() {
    const [markdown, setMarkdown] = useState(syntaxGuide);

    return (
        <div className="flex flex-col">
            <Navbar />
            <div className="grid md:grid-cols-2 gap-6 h-[85vh] grow">
                <Editor markdown={markdown} setMarkdown={setMarkdown} />
                <Previewer markdown={markdown} />
            </div>
            <Footer />
        </div>
    );
}

export default MarkdownPreviewer;
