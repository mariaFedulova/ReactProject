import React, { useState, useEffect, useRef } from "react";
import { faker } from '@faker-js/faker';
import MessageList from "./MessageList";
import SendForm from "./SendForm";
import './ChatView.css';

const AUTHORS = {
    me: "Maria"
}
const botAnswer = "Ok";

function createRandomMessage(author) {
    return {
        text: faker.lorem.words(Math.floor(Math.random() * 5) + 1),
        author: author
    }
}

function generateMessages(user) {
    const count = Math.floor(Math.random() * 5) + 1;
    const array = [];
    for (let i = 0; i < count; i++) {
        let author = i % 2 === 0 ? AUTHORS.me : user;
        array.push(createRandomMessage(author));
    }
    return array;
}

function ChatView(props) {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState('');
    let sendFormRef = useRef(null);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const sendMessage = () => {
        setMessageList([
            ...messageList,
            { text: value, author: AUTHORS.me }
        ]);
        setValue('');
        sendFormRef.current.children[0].children[0].focus();
    }

    useEffect(() => {
        setMessageList(generateMessages(props.user))
    }, [])


    useEffect(() => {
        if (messageList.length !== 0) {
            if (messageList.at(-1).author !== props.user) {
                const timeoutId = setTimeout(() => {
                    setMessageList([
                        ...messageList,
                        { text: botAnswer, author: props.user }
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