
import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import LoadingImage from '../assets/loading-spinner.gif';
import dayjs from 'dayjs';

export function ChatInput({chatMessages,setChatMessages}){
    const [inputText,setInputText]=useState('');
     const [isLoading, setIsLoading] = useState(false);

    function saveInputText(event)
    {
       setInputText(event.target.value) ;

    }
    async function sendMessage()
    {
        if (isLoading || inputText === '') {
            return;
          }

          // Set isLoading to true at the start, and set it to
          // false after everything is done.
          setIsLoading(true);
          const time = dayjs().valueOf();

          setInputText('');
        const newChatMessages = [...chatMessages,
        {   message: inputText,
            sender: 'user',
            id: crypto.randomUUID(),
            time : dayjs(time).format('HH:mm')
            
        }];
        setChatMessages([
            ...newChatMessages,
            // This creates a temporary Loading... message.
            // Because we don't save this message in newChatMessages,
            // it will be remove later, when we add the response.
            {
              message: <img src = {LoadingImage} className="spinner"></img>,
              sender: 'robot',
              id: crypto.randomUUID()
              
            }
          ]);


          
    const response = await Chatbot.getResponse(inputText);
    setChatMessages([...newChatMessages,
        {   message: response,
            sender: 'robot',
            id: crypto.randomUUID(),
            time:dayjs(time).format('HH:mm')    
        }]);

        setIsLoading(false);

    }

    function checkChatMsg(event)
    {
        if(event.key === 'Enter')
        sendMessage();
        else if(event.key == 'Escape')
    {
        setInputText('');
    }
    
    }

    function clearMessages()
    {
         setChatMessages([]);
    }
    return (
        <div className = "chat-input-container">
            <input 
             placeholder = "Send a message to ChatBot" 
             size ="30"
             onChange={saveInputText}
             value={inputText}
             onKeyDown={checkChatMsg}
             className="input-box"

            ></input>
            <button 
            onClick={sendMessage}
             className="send-button">
            Send</button>
            <button 
            onClick={clearMessages}
             className="clear-button">
            Clear</button>
        </div>
        );
}