import { useState } from 'react'

// if react component state changed, componet will be re-render again
const ChatInputGroup = ({ onInputSubmit }) => {
    // const [state, functionForUpdateState] = useState(defaultValue)
    const [inputText, setInputText] = useState("Hello world");

    const submitHanler = (e) => {
        e.preventDefault();
        // console.log("inputText", inputText);
        onInputSubmit(inputText);
    }

    return (
        <div className="chat-input-group">
            <form onSubmit={submitHanler}>
                <input type="text" value={inputText} onChange={e => setInputText(e.target.value)} />
                <button className="btn btn-primary">Send</button>
            </form>
        </div>
    )
}

export default ChatInputGroup
