import Button from "../Components/Button";

export default function Signin() {
  return (
    <div className="px-5">
      <div className="flex flex-col justify-center h-screen w-full">
        <div className="flex flex-col items-center px-2 py-5 space-y-4 text-2xl font-semibold">
          <p className="text-center">
            As a <span className="text-slate-500">user</span>, I am entering my
          </p>
          <input
            type="text"
            className=" outline-none text-lg w-full py-2.5 border border-b-2 px-5"
            placeholder="Username"
          />
          <input
            type="email"
            className=" outline-none text-lg w-full py-2.5 border border-b-2 px-5"
            placeholder="Email"
          />
          <input
            type="password"
            className="outline-none w-full py-2.5 text-lg bg-slate-100 px-5"
            placeholder="Password"
          />
          <div className="flex items-center space-x-2">
            {/* <p>In order to </p>
          <button className={` rounded-full text-slate-500`}>continue</button> */}
          </div>
        </div>

        <div className="px-2 py-5 space-y-6">
          <Button title="Sign-Up" />
        </div>
      </div>
    </div>
  );
}
