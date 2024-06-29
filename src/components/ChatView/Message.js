function Message(props) {
    return (
        <div className='Message-wrapper'>
            <p className="Message-author">{props.author}</p>
            <p className="Message-text">{props.text}</p>
        </div>
    );
}

export default Message;