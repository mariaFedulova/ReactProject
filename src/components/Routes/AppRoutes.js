import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Chats from '../Chats/Chats';
import Profile from '../Profile/Profile';
import Home from '../Home/Home';

export default function AppRoutes() {
    return (
        <Router>
            <header >
                <ul className='header__ul'>
                    <li ><Link className='header__li' to="/chats">Messenger</Link></li>
                    <li ><Link className='header__li' to="/profile">Profile</Link></li>
                </ul>
            </header>
            <main className='container'>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/chats/:chatId?" element={<Chats />} />
                    <Route exact path="/profile" element={<Profile />} />
                </Routes>
            </main>
        </Router>
    )

}