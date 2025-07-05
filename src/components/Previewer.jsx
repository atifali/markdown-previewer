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

    const downloadFile = (url, filename) => {
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleExport = (type) => {
        if (type === "md") {
            const blob = new Blob([props.markdown], { type: "text/markdown" });
            const url = URL.createObjectURL(blob);
            downloadFile(url, "preview.md");
        } else if (type === "html") {
            const html = props.previewDivRef.current.innerHTML;
            const blob = new Blob([html], { type: "text/html" });
            const url = URL.createObjectURL(blob);
            downloadFile(url, "preview.html");
        } else if (type === "pdf") {
            const printWindow = window.open("", "_blank");
            printWindow.document.write(`<html><head><title>Preview PDF</title></head><body>${props.previewDivRef.current.innerHTML}</body></html>`);
            printWindow.document.close();
            printWindow.focus();
            printWindow.print();
        }
    };

    return (
        <div className="flex flex-col bg-base-100 rounded-box shadow-xl/30 p-4 overflow-auto">
            <div className="flex flex-row items-center justify-between">
                <div className="text-lg font-bold mb-2">Preview</div>
                <div className="flex flex-wrap items-center gap-2 font-light mb-2">
                    <div className="flex">
                        <input
                            className="ml-2"
                            type="checkbox"
                            checked={props.syncScroll}
                            onChange={handleSyncscrollChange}
                        />
                        <label className="ml-1">Sync Scroll</label>
                    </div>
                    <div className="dropdown dropdown-end">
                        <button tabIndex={0} className="btn btn-sm btn-outline ml-2">Export</button>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-32 z-[1]">
                            <li><button onClick={() => handleExport("html")}>HTML</button></li>
                            <li><button onClick={() => handleExport("pdf")}>PDF</button></li>
                            <li><button onClick={() => handleExport("md")}>MD</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div
                ref={props.previewDivRef}
                onScroll={props.handlePreviewScroll}
                className="prose max-w-none dark:prose-invert overflow-auto"
            >
                <ReactMarkdown
                    remarkPlugins={[[remarkGfm, { singleTilde: false }], remarkMath, remarkEmoji]}
                    rehypePlugins={[rehypeKatex, rehypeRaw]}
                >
                    {props.markdown}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default Previewer;
