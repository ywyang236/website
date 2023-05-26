const AIChatMessage = ({ chat }) => {
    return (
        <div className="chat ai-chat">
            <div className="dialog">
                <p>{chat.text}</p>
            </div>
        </div>
    )
}

export default AIChatMessage;