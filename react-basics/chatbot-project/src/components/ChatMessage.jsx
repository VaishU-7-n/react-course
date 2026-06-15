import RobortProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
console.log(UserProfileImage);
export function ChatMessage({message , sender , time}){
    //const message = props.message;
    //const {sender} = props;         /*destructuring*/
    //const {message , sender } = props;
    /*if  (sender === "robot")
    {
        return(
            <div>
                 <img src = "robot.png" width = "50"></img>
                  {message}
           </div>
        );

    }*/
 
    return (
        <div className={sender==='robot'
                         ? 'chat-message-robot'
                        : 'chat-message-user'}>
            {sender === 'robot' && <img src = {RobortProfileImage} className="chat-message-profile"></img> }
            <div className="chat-message-text">
                {message}
                <div className="time-sent">{time}</div>
            </div>
            
            
            {sender ==='user' && <img src = {UserProfileImage} width = "50"></img> }
        </div>

    );
}