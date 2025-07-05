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
                <div className="flex flex-wrap gap-4 ml-2">
                    <button className="cursor-pointer hover:bg-base-200 hover:text-primary transition-colors duration-150 rounded" title="Bold" onClick={() => insertAtCursor("**Bold Text", "**")}><FaBold /></button>
                    <button className="cursor-pointer hover:bg-base-200 hover:text-primary transition-colors duration-150 rounded" title="Italic" onClick={() => insertAtCursor("_Italic Text", "_")}><FaItalic /></button>
                    <button className="cursor-pointer hover:bg-base-200 hover:text-primary transition-colors duration-150 rounded" title="Heading" onClick={() => insertAtCursor("# ", "Heading")}><FaHeading /></button>
                    <button className="cursor-pointer hover:bg-base-200 hover:text-primary transition-colors duration-150 rounded" title="Strikethrough" onClick={() => insertAtCursor("~~Strikethrough Text", "~~")}><FaStrikethrough /></button>
                    <button className="cursor-pointer hover:bg-base-200 hover:text-primary transition-colors duration-150 rounded" title="Unordered List" onClick={() => insertAtCursor("- ", "List Item")}><FaListUl /></button>
                    <button className="cursor-pointer hover:bg-base-200 hover:text-primary transition-colors duration-150 rounded" title="Ordered List" onClick={() => insertAtCursor("1. ", "List Item")}><FaListOl /></button>
                    <button className="cursor-pointer hover:bg-base-200 hover:text-primary transition-colors duration-150 rounded" title="Checklist" onClick={() => insertAtCursor("- [ ] ", "Checklist Item")}><FaCheckSquare /></button>
                    <button className="cursor-pointer hover:bg-base-200 hover:text-primary transition-colors duration-150 rounded" title="Blockquote" onClick={() => insertAtCursor("> ", "Blockquote")}><FaQuoteRight /></button>
                    <button className="cursor-pointer hover:bg-base-200 hover:text-primary transition-colors duration-150 rounded" title="Code" onClick={() => insertAtCursor("`Inline code", "`")}><FaCode /></button>
                    <button className="cursor-pointer hover:bg-base-200 hover:text-primary transition-colors duration-150 rounded" title="Table" onClick={() => insertAtCursor("\n| Header | Header |\n| ------ | ------ |\n| Cell   | Cell   |\n")}><FaTable /></button>
                    <button className="cursor-pointer hover:bg-base-200 hover:text-primary transition-colors duration-150 rounded" title="Link" onClick={() => insertAtCursor("[Text", "](url)")}>
                        <FaLink />
                    </button>
                    <button className="cursor-pointer hover:bg-base-200 hover:text-primary transition-colors duration-150 rounded" title="Image" onClick={() => insertAtCursor("![Alt text", "](url)")}>
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
                style={{ resize: "none" }}
            />
        </div>
    );
}

export default Editor;
