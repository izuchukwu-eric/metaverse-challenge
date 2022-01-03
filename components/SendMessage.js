import { useMoralis } from "react-moralis";

function SendMessage() {
  const { user } = useMoralis();

  return (
    <form className="flex fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl rounded-full w-11/12">
      <input
        className=" flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
        type="text"
        placeholder={`Enter a Message ${user.getUsername()}...`}
      />
      <button className="font-bold text-pink-500">Send</button>
    </form>
  );
}

export default SendMessage;
