import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    //basically creating a table in the moralis db
    const Messages = Moralis.Object.extend("Messages");

    //get an instance of the Messages table
    const messages = new Messages();

    messages
      .save({
        messages: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          //The object was saved successfully
        },
        (error) => {
          //The save failed

          console.log(error.message);
        }
      );

    //scrolls user down as we type a message
    endOfMessagesRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setMessage("");
  };

  return (
    <form className="flex fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl rounded-full border-blue-400 border-4 w-11/12">
      <input
        className=" flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter a Message ${user.getUsername()}...`}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
