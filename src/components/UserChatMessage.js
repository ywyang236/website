import moment from "moment"

const UserChatMessage = ({ chat }) => {
    return (
        <div className="chat user-chat">
            <p className="chat-created-at">
                {moment(chat.createdAt).format("YYYYMM.DD")}
                <br />
                {moment(chat.createdAt).format("HH:mm:ss")}
            </p>
            <div className="dialog">
                <p>{chat.text}</p>
            </div>
        </div>

    )
}

export default UserChatMessage;