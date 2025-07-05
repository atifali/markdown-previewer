import { useEffect, useRef, useState } from "react";
import syntaxGuide from "../lib/syntaxGuide";
import Editor from "./Editor";
import Previewer from "./Previewer";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MarkdownPreviewer() {
    const [markdown, setMarkdown] = useState(syntaxGuide);
    const [viewMode, setViewMode] = useState("both");
    const [syncScroll, setSyncScroll] = useState(true);
    const contentRef = useRef(null);
    const editorTextareaRef = useRef(null);
    const previewDivRef = useRef(null);

    const handleEditorScroll = () => {
        if (previewDivRef.current && syncScroll) {
            const { scrollTop, scrollHeight, clientHeight } = editorTextareaRef.current;
            const scrollRatio = scrollTop / (scrollHeight - clientHeight);
            previewDivRef.current.scrollTop = scrollRatio * (previewDivRef.current.scrollHeight - previewDivRef.current.clientHeight);
        }
    };

    const handlePreviewScroll = () => {
        if (editorTextareaRef.current && syncScroll) {
            const { scrollTop, scrollHeight, clientHeight } = previewDivRef.current;
            const scrollRatio = scrollTop / (scrollHeight - clientHeight);
            editorTextareaRef.current.scrollTop = scrollRatio * (editorTextareaRef.current.scrollHeight - editorTextareaRef.current.clientHeight);
        }
    };

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
                {((viewMode === "editor") || (viewMode === "both")) && < Editor markdown={markdown} setMarkdown={setMarkdown} editorTextareaRef={editorTextareaRef} handleEditorScroll={handleEditorScroll} />}
                {((viewMode === "preview") || (viewMode === "both")) && <Previewer markdown={markdown} previewDivRef={previewDivRef} handlePreviewScroll={handlePreviewScroll} syncScroll={syncScroll} setSyncScroll={setSyncScroll} />}
            </div>
            <Footer viewMode={viewMode} setViewMode={setViewMode} />
        </div>
    );
}

export default MarkdownPreviewer;
