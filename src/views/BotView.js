import axios from "axios"
import { useState } from 'react'
import ChatRoom from '../components/ChatRoom'
import ChatInputGroup from '../components/ChatInputGroup'

class Chat {
    constructor(text, type = "user") {
        this.text = text;
        this.type = type;
        this.createdAt = new Date().getTime();
    }
}

const BotView = () => {
    const [chatList, setChatList] = useState([
        // new Chat("Helllo", "user"),
        // new Chat("AI Reply1", "ai"),
        // new Chat("Hi", "user"),
        // new Chat("AI Reply2", "ai"),
    ])

    const onInputSubmit = (newInputText) => {
        // add user message to chat room
        setChatList(
            [...chatList, new Chat(newInputText, "user")]
        );
        // send newInputText to backend for Open AI response
        axios.post("", {
            text: newInputText
        })
            .then(res => {
                console.log("res", res);
            })
            .catch(err => {
                console.log("err", err);
            })
    }

    return (
        <div className="bot-view">
            <ChatRoom chatList={chatList} />
            <ChatInputGroup onInputSubmit={onInputSubmit} />
        </div>
    )
}

export default BotView
