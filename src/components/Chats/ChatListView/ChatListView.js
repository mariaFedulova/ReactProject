import ChatList from "./ChatList";

function ChatListView(props) {

    return (
        <>
            <ChatList chatList={props.chatList} />
        </>
    )
}

export default ChatListView;