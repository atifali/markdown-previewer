import { useRef, useEffect } from 'react';
import { enableTabToIndent } from 'indent-textarea';
import {
    FaBold, FaItalic, FaHeading, FaStrikethrough, FaListUl, FaListOl,
    FaCheckSquare, FaQuoteRight, FaCode, FaTable, FaLink, FaImage
} from "react-icons/fa";

function Editor({ markdown, setMarkdown, editorTextareaRef, handleEditorScroll }) {
    const textareaRef = editorTextareaRef || useRef();

    useEffect(() => {
        if (textareaRef.current) {
            enableTabToIndent(textareaRef.current);
        }
    }, [textareaRef]);

    const insertAtCursor = (before, after = "") => {
        const textarea = textareaRef.current;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selected = textarea.value.slice(start, end);
        const newValue = textarea.value.slice(0, start) + before + selected + after + textarea.value.slice(end);
        setMarkdown(newValue);
        // Move cursor
        setTimeout(() => {
            textarea.focus();
            textarea.selectionStart = textarea.selectionEnd = start + before.length + selected.length + after.length;
        }, 0);
    };

    return (
        <div className="flex flex-col bg-base-100 rounded-box shadow-xl/30 p-4 min-h-0 overflow-auto">
            <div className="flex flex-row items-center justify-between mb-2">
                <div className="text-lg font-bold">Editor</div>
                <div className="flex gap-2">
                    <button title="Bold" onClick={() => insertAtCursor("**", "**")}><FaBold /></button>
                    <button title="Italic" onClick={() => insertAtCursor("_", "_")}><FaItalic /></button>
                    <button title="Heading" onClick={() => insertAtCursor("# ", "")}><FaHeading /></button>
                    <button title="Strikethrough" onClick={() => insertAtCursor("~~", "~~")}><FaStrikethrough /></button>
                    <button title="Unordered List" onClick={() => insertAtCursor("- ", "")}><FaListUl /></button>
                    <button title="Ordered List" onClick={() => insertAtCursor("1. ", "")}><FaListOl /></button>
                    <button title="Checklist" onClick={() => insertAtCursor("- [ ] ", "")}><FaCheckSquare /></button>
                    <button title="Blockquote" onClick={() => insertAtCursor("> ", "")}><FaQuoteRight /></button>
                    <button title="Code" onClick={() => insertAtCursor("`", "`")}><FaCode /></button>
                    <button title="Table" onClick={() => insertAtCursor("\n| Header | Header |\n| ------ | ------ |\n| Cell   | Cell   |\n")}>
                        <FaTable />
                    </button>
                    <button title="Link" onClick={() => insertAtCursor("[", "](url)")}>
                        <FaLink />
                    </button>
                    <button title="Image" onClick={() => insertAtCursor("![", "](url)")}>
                        <FaImage />
                    </button>
                </div>
            </div>
            <textarea
                ref={textareaRef}
                className="textarea textarea-bordered grow font-mono w-full"
                value={markdown}
                onChange={e => setMarkdown(e.target.value)}
                onScroll={handleEditorScroll}
                style={{ minHeight: "200px" }}
            />
        </div>
    );
}

export default Editor;
