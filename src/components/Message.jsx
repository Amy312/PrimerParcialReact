const Message = (props) => {
  const {message, position } = props;

  {console.log("Este mensaje entro" +message)}

  return (
    <div className="grid ">

      <div
        className={
          position
            ? "bg-orange-400  justify-self-end w-fit h-fit px-3 rounded-full text-lg my-1 overflow-visible"
            : "bg-green-400   justify-self-start w-fit h-fit px-3 rounded-full text-lg my-1 overflow-visible"
        }
      >
        {message}
      </div>
    </div>
  );
};
export default Message;
