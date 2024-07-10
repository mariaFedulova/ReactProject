import Message from "./Message"

function MessageList(props) {
    return (
        <div className='Message-list'>{
            props.messageList?.map((message, key) => <Message key={key} text={message?.text} author={message?.author} />)
        }
        </div>
    )
}

export default MessageList;