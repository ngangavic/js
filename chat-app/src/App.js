import React from 'react';
import ChatKit from '@pusher/chatkit-client-react';
import RoomList from '../components/RoomList';
import MessageList from '../components/MessageList';
import SendMessageForm from '../components/SendMessageForm';
import NewRoomForm from '../components/NewRoomForm';
import './App.css';
import { tokenUrl, instanceLocator } from './config';

// function App() {
class App extends React.Component {

  componentDidMount() {
    const chatManager = new ChatKit.ChatManager({
      instanceLocator: instanceLocator,
      userId: 'vic',
      tokenProvider: new ChatKit.TokenProvider({
        url: tokenUrl
      })
    })
    chatManager.connect()
      .then(currentUser => {
        currentUser.subscribeToRoom({
          roomId: 'c00dcc9a-51db-48f0-bad9-bfd17395f41b',
          hooks: {
            onNewMessage: message => {
              console.log("message:", message.text);
            }
          }
        })
      })
  }

  render() {
    return (
      <div className="App">
        <RoomList />
        <MessageList />
        <SendMessageForm />
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
