import { useState, useEffect} from 'react'
import './App.css'
import { ChatInput } from './components/ChatInput';
import { ChatMessage } from './components/ChatMessage';
import { ChatMessages } from './components/ChatMessages';
import { Chatbot } from 'supersimpledev';


import LoadingImage from './assets/loading-spinner.gif';


function App()
{
     const [chatMessages,setChatMessages] = useState( (JSON.parse(localStorage.getItem('messages'))) || [] );

      useEffect(() => {
       Chatbot.addResponses({
      'goodbye': 'Goodbye. Have a great day!',
      'give me a unique id': function() {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      }
    });
},[]);

useEffect(()=>{
    localStorage.setItem('messages',JSON.stringify(chatMessages));

},[chatMessages]);
    //const[chatMessages,setChatMessages] = array;
    //const chatMessages = array[0];
    //const setChatMessages = array[1];
    

    return (
        
        <div className ="app-container">
        <p className = "welcome-message">{chatMessages.length==0?"Welcome to the chatbot project! Send a message using the textbox below":""}</p>
        <ChatMessages
            chatMessages={chatMessages}/>
        <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        
        />
        </div>
    );
}

export default App
