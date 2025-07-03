function Editor(props) {

    return (
        <div className="flex flex-col bg-base-100 rounded-box shadow-xl/30 p-4 overflow-auto">
            <div className="text-lg font-bold mb-2">Editor</div>
            <textarea
                className="textarea textarea-bordered h-full w-full resize-none font-mono"
                value={props.markdown}
                onChange={(e) => props.setMarkdown(e.target.value)}
                placeholder="Write your markdown here..."
            />
        </div>
    )
}

export default Editor;
