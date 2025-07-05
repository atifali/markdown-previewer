import { useEffect, useRef, useState } from "react";
import syntaxGuide from "../lib/syntaxGuide";
import Editor from "./Editor";
import Previewer from "./Previewer";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MarkdownPreviewer() {
    const [markdown, setMarkdown] = useState(syntaxGuide);
    const [viewMode, setViewMode] = useState("both");
    const contentRef = useRef(null);

    useEffect(() => {
        if (viewMode === "both") {
            contentRef.current.classList.add("md:grid-cols-2");
        } else {
            contentRef.current.classList.remove("md:grid-cols-2");
        }
    }, [viewMode]);

    return (
        <div className="flex flex-col">
            <Navbar />
            <div ref={contentRef} className="grid md:grid-cols-2 gap-6 h-[85vh] grow">
                {((viewMode === "editor") || (viewMode === "both")) && < Editor markdown={markdown} setMarkdown={setMarkdown} />}
                {((viewMode === "preview") || (viewMode === "both")) && <Previewer markdown={markdown} />}
            </div>
            <Footer viewMode={viewMode} setViewMode={setViewMode} />
        </div>
    );
}

export default MarkdownPreviewer;
