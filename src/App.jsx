import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import Input from "./components/Input";
import Chat from "./components/Chat";

function App() {
  const messagesArray = localStorage.getItem('arrayMessages');
  const arreglo = JSON.parse(messagesArray);

  const [changeUser, setChangeUser] = useState(false);
  const [messagesD, setMessagesD] = useState(localStorage.getItem("arrayMessages")?  arreglo : []);
  const [newMessage, setNewMessage] = useState("");
  const [totalR, setTotalR] = useState(localStorage.getItem("totalR") || '');
  const [totalA, setTotalA] = useState(localStorage.getItem("totalA") || '');

  useEffect(() => {
    console.log("cambio el usuario");
  }, [changeUser]);


  useEffect(() => {
    
    setTotalA(
      messagesD.reduce((suma, msg) => {
        return (msg.user ? msg.message.split(' ').length + suma : suma+0)
      }, 0)
    );

    setTotalR(
      messagesD.reduce((suma, msg) => {
        return (msg.user === false ? msg.message.split(' ').length + suma : suma+0)
      }, 0)
    );
    const arrayMessages = JSON.stringify(messagesD);
    localStorage.setItem('arrayMessages', arrayMessages);

  }, [messagesD]);

  useEffect(() => {
    localStorage.setItem("totalR", totalR);
    localStorage.setItem("totalA", totalA);
  }, [totalA, totalR]);

  return (
    <div className="bg-emerald-600  flex flex-col fixed top-0 left-0 right-0 bottom-0">
      <Header totalA = {totalA}
      totalR={totalR} />
      <Chat messagesD={messagesD} />
      <Input
        changeUser={changeUser}
        setChangeUser={setChangeUser}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        setMessagesD={setMessagesD}
        messagesD={messagesD}
      />
    </div>
  );
}

export default App;
