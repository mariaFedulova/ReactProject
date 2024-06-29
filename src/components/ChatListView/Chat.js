import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

function Chat(props) {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar alt="Profile Picture" src={props.avatar} />
            </ListItemAvatar>
            <ListItemText primary={props.name} />
        </ListItem>
    )
}

export default Chat;