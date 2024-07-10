import { ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import './Chat.css';

function Chat(props) {
    return (
        <ListItem>
            <Link className='Chat-Link' to={`/chats/${props.id}`}>
                <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={props.avatar} />
                </ListItemAvatar>
                <ListItemText primary={props.name} />
            </Link>
        </ListItem>
    )
}

export default Chat;