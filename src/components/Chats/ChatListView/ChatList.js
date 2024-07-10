import { List, Paper } from "@mui/material";
import Chat from './Chat';

function ChatList(props) {
    return (
        <Paper height='100%'>
            <List>
                {props.chatList?.map((chat, key) => <Chat key={key} avatar={chat?.avatar} name={chat?.name} id={chat?.id} />)}
            </List>
        </Paper>
    )
}

export default ChatList;