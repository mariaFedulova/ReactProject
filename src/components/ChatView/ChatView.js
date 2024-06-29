import React, { useState, useEffect, useRef } from "react";
import MessageList from "./MessageList";
import SendForm from "./SendForm";
import '../../css/ChatView.css'

function ChatView() {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState('');
    let sendFormRef = useRef(null);

    const user1 = "Maria";
    const bot = "Bot";
    const botAnswer = "Ok";

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const sendMessage = () => {
        setMessageList([
            ...messageList,
            { text: value, author: user1 }
        ]);
        setValue('');
        console.log(sendFormRef.current.children[0].children[0]);
        sendFormRef.current.children[0].children[0].focus();
    }

    useEffect(() => {
        if (messageList.length !== 0) {
            if (messageList.at(-1).author !== 'Bot') {
                const timeoutId = setTimeout(() => {
                    setMessageList([
                        ...messageList,
                        { text: botAnswer, author: bot }
                    ]);
                }, 1500);

                return () => clearTimeout(timeoutId)
            }
        }
    }, [messageList])

    return (
        <>
            <MessageList messageList={messageList} />
            <SendForm value={value} handleChange={handleChange} sendMessage={sendMessage} ref={sendFormRef} />
        </>
    )
}

export default ChatView;