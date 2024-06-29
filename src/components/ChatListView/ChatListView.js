import React, { useState } from "react";
import ChatList from "./ChatList";

function ChatListView() {
    const [chatList, setChatList] = useState([
        { avatar: '../../assets/avatar.jpg', name: 'Мария' },
        { avatar: '../../assets/avatar.jpg', name: 'Светлана' },
        { avatar: '../../assets/avatar.jpg', name: 'Александр' },
        { avatar: '../../assets/avatar.jpg', name: 'Иван' },
    ]);

    return (
        <>
            <ChatList chatList={chatList} />
        </>
    )
}

export default ChatListView;