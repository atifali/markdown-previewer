function Footer(props) {
    return (
        <div className="dock bg-neutral text-neutral-content">
            <button>
                <svg
                    className="size-[1.7em]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    stroke="#fff"
                    viewBox="0 0 16 16"
                    {...props}
                >
                    <path fillRule="evenodd" d="M5.002 10 12 3l2 2-7 7H5z" />
                    <path
                        d="M1.094 0C.525 0 0 .503 0 1.063v13.874C0 15.498.525 16 1.094 16h10.812c.558 0 1.074-.485 1.094-1.031V8l-2 2v4H2V2h5l2 2 1.531-1.531L8.344.344A1.12 1.12 0 0 0 7.563 0z"
                        color="#000"
                        fontFamily="Sans"
                        fontWeight={400}
                        overflow="visible"
                        style={{
                            lineHeight: "normal",
                            InkscapeFontSpecification: "Sans",
                            textIndent: 0,
                            textAlign: "start",
                            textDecorationLine: "none",
                            textTransform: "none",
                            marker: "none",
                        }}
                    />
                    <path
                        fillRule="evenodd"
                        d="M14.19 1.011a.513.513 0 0 0-.364.152l-1.162 1.16 2.004 2.005 1.163-1.162a.514.514 0 0 0 0-.728l-1.277-1.275a.514.514 0 0 0-.364-.152z"
                        color="#000"
                        overflow="visible"
                        style={{
                            isolation: "auto",
                            mixBlendMode: "normal",
                            marker: "none",
                        }}
                    />
                </svg>
                <span className="dock-label">Editor</span>
            </button>

            <button className="dock-active">
                <svg className="size-[1.7em]" fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <rect y="85.336" width="234.672" height="16"></rect> </g> </g> <g> <g> <rect y="150.392" width="234.672" height="16"></rect> </g> </g> <g> <g> <rect y="215.448" width="234.672" height="16"></rect> </g> </g> <g> <g> <rect y="280.52" width="234.672" height="16"></rect> </g> </g> <g> <g> <rect y="345.592" width="234.672" height="16"></rect> </g> </g> <g> <g> <rect y="410.664" width="234.672" height="16"></rect> </g> </g> <g> <g> <rect x="277.328" y="85.336" width="234.672" height="16"></rect> </g> </g> <g> <g> <rect x="277.328" y="150.392" width="234.672" height="16"></rect> </g> </g> <g> <g> <rect x="277.328" y="215.448" width="234.672" height="16"></rect> </g> </g> <g> <g> <rect x="277.328" y="280.52" width="234.672" height="16"></rect> </g> </g> <g> <g> <rect x="277.328" y="345.592" width="234.672" height="16"></rect> </g> </g> <g> <g> <rect x="277.328" y="410.664" width="234.672" height="16"></rect> </g> </g> </g></svg>
                <span className="dock-label">Both</span>
            </button>

            <button>
                <svg
                    className="size-[1.7em]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    stroke="#fff"
                    viewBox="0 0 24 24"
                    {...props}
                >
                    <path d="m23.589 22.261-2.102-2.101a4.978 4.978 0 0 0-3.115-7.594l-.033-.006V8.491a1.01 1.01 0 0 0-.233-.646l.001.002v-.005a.94.94 0 0 0-.06-.066l-.008-.009-.027-.027L10.572.3a.91.91 0 0 0-.065-.059l-.026-.018a.938.938 0 0 0-.05-.038l-.025-.018-.054-.034-.023-.012q-.034-.02-.075-.037l-.032-.013-.051-.018-.036-.011-.058-.015-.028-.006a.81.81 0 0 0-.086-.013H1.015A1.019 1.019 0 0 0 0 1.02v20.377a1.02 1.02 0 0 0 1.015 1.019H17.325a4.924 4.924 0 0 0 2.74-.827l-.018.011 2.102 2.102a1.019 1.019 0 0 0 1.439-1.44l.001.001zm-3.325-4.827a2.943 2.943 0 1 1-5.887.001 2.943 2.943 0 0 1 5.887-.002zM10.868 3.478l3.993 3.994h-3.993zm-8.83-1.44h6.793v6.453c0 .563.456 1.019 1.019 1.019h6.453v3.05c-2.278.487-3.962 2.483-3.962 4.873 0 1.109.362 2.133.975 2.96l-.01-.013H2.037z" />
                </svg>
                <span className="dock-label">Preview</span>
            </button>
        </div>
    )
}

export default Footer;
