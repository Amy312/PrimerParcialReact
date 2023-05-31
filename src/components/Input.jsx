import { useState } from "react";
import userIcon from "../assets/user.svg";
import sendIcon from "../assets/send.svg";
const Input = (props) => {
  const { newMessage, setNewMessage, changeUser, setChangeUser , setMessagesD, messagesD} = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    const info = [
      {
        message: newMessage,
        user: changeUser,
      },
    ];
    if(newMessage!=''){
      setMessagesD([...messagesD, ...info]);
      setNewMessage("")
    }
    
    

  };
  

  

  return (
    <div className=" flex flex-row  justify-center  m-5">
      
        <form onSubmit={handleSubmit}
        className="flex flex-row w-2/3 justify-end mx-5">
          <input
            className="w-full m-4 p-5 bg-slate-200 rounded-md "
            id="message"
            type="text"
            placeholder="Escriba un mensaje :D"
            value={newMessage}
            onChange={(e) => {if(e!=="" ){setNewMessage(e.target.value)}}}
          />

          <div className="bg-sky-400 hover:bg-sky-600 rounded-full px-2 w-fit my-4 flex align-middle">
            <img
              className="w-16  hover:cursor-pointer"
              src={sendIcon}
              alt="icono enviar"
              onClick={handleSubmit}
            />
          </div>
        </form>
      

      <div className={changeUser ? "bg-rose-400 hover:bg-rose-500 rounded-full w-fit my-3 p-1 ": "bg-amber-400 hover:bg-amber-600 rounded-full w-fit my-3 p-1 "}>
        <img
          className="w-20 hover:cursor-pointer"
          src={userIcon}
          alt="icono cambiar usuario"
          onClick={() => {
            setChangeUser(!changeUser);
          }}
        />
      </div>
    </div>
  );
};
export default Input;
