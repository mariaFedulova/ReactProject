import { useParams } from "react-router-dom";
import { faker } from '@faker-js/faker';
import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import ChatListView from "./ChatListView/ChatListView";
import ChatView from "./ChatView/ChatView";


function generateChatItem() {
    return {
        avatar: faker.image.avatar(),
        name: faker.person.firstName()
    }
}

function generateChatList() {
    const count = Math.floor(Math.random() * 10) + 1;
    return Array.from({ length: count }, () => generateChatItem());
}

export default function Chats() {
    const { chatId } = useParams();
    const [chats, setChats] = useState([
        { avatar: 'https://avatars.githubusercontent.com/u/71325171', name: 'Sanford', id: 0 },
        { avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1226.jpg', name: 'Lupe', id: 1 },
        { avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1055.jpg', name: 'Erika', id: 2 },
        { avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/735.jpg', name: 'Edgar', id: 3 },
        { avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/102.jpg', name: 'Willa', id: 4 },
        { avatar: 'https://avatars.githubusercontent.com/u/54952377', name: 'Guillermo', id: 5 },
        { avatar: 'https://avatars.githubusercontent.com/u/95215255', name: 'Kayli', id: 6 },
        { avatar: 'https://avatars.githubusercontent.com/u/9539949', name: 'Jerel', id: 7 },
        { avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/772.jpg', name: 'Henry', id: 8 },
        { avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/130.jpg', name: 'Ebba', id: 9 }
    ]);

    let chat = <ChatView user={chats[chatId]?.name} />;

    if (!chatId) {
        chat = <Typography className="Home-Typography" variant="h3">Please, select a chat</Typography>
    }
    return (
        <Grid className='Grid' container spacing={2}>
            <Grid item xs={3}>
                <ChatListView chatList={chats} />
            </Grid>
            <Grid item xs={9}>
                {chat}
            </Grid>
        </Grid>
    )
}