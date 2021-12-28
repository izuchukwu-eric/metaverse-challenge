import Image from "next/image";

function Login() {
  return (
    <div className="bg-black relative text-white">
      <h1>I am the login screen</h1>
      <div></div>

      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
