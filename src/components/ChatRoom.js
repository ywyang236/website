import UserChatMessage from "./UserChatMessage";
import AIChatMessage from "./AIChatMessage";

const ChatRoom = ({ chatList }) => {
    const chatListElement = chatList.map(chat => {
        const { type } = chat;
        if (type === "user") {
            return <UserChatMessage chat={chat} key={chat.createdAt} />
        } else if (type === "ai") {
            return <AIChatMessage chat={chat} key={chat.createdAt} />
        } else {
            return <div></div>
        }
    });

    return (
        <div className="chat-room">
            {chatListElement}
        </div>
    )
}

export default ChatRoom
