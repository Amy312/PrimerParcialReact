import Message from "./Message";

const Chat = ({messagesD}) => {
    return(
        <>
        <div className="bg-emerald-200 overflow-y-auto shadow-lg rounded-md p-8 md:w-5/6 mx-auto mt-20 mb-10 w-full h-full flex flex-col grid content-end ">
            {
                messagesD.length>0 ? messagesD.map((men) => (
                    <Message message={men.message} position={men.user}/> 
                )) : <h1>No hay datos</h1>
            }

            

        </div>
        </>
    );
}
export default Chat;