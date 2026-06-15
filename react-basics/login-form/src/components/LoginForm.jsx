import { useState } from "react";


export function LoginForm()
      {
        const [showPassword , setPassword] = useState(false);
        function changeShowPassword()
        {
            if(showPassword)
            setPassword(false);
            else
            setPassword(true);
        }
        return (
          <>
          <p>Hello, welcome to my website</p>
          <div> <input placeholder = "Email"></input></div>
          <div><input placeholder = "Password" type = {showPassword?"text":"password"}></input> 
          <button onClick={changeShowPassword} >hide</button>
          </div>
          <button className = "login-button">login</button>
          <button className = " sign-button">Sign up</button>
          </>
        );

      }