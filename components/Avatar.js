import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar({ username, logoutOnPress }) {
  const { user, logout } = useMoralis();
  return (
    <div>
      <Image
        className="rounded-full bg-black cursor-pointer hover:opacity-75"
        src={`https://avatars.dicebear.com/api/pixel-art/${
          username || user.get("username")
        }.svg`}
        onClick={() => logoutOnPress && logout()}
        layout="fill"
      />
    </div>
  );
}

export default Avatar;
