import React, { useEffect, useState } from 'react';
import './App.css';
import ChatView from './components/ChatView/ChatView';
import ChatListView from './components/ChatListView/ChatListView';
import { Grid } from '@mui/material';

const user1 = "Maria";
const bot = "Bot";
const botAnswer = "Ok";
function App(props) {
  return (
    <div className='App'>
      <header >
      </header>
      <main className='container'>
        <Grid className='Grid' container spacing={2}>
          <Grid item xs={3}>
            <ChatListView />
          </Grid>
          <Grid item xs={9}>
            <ChatView />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default App;