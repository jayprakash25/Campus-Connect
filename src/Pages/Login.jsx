import Button from "../Components/Button";

export default function Login() {
  return (
    <div className="px-5">
      <div className="flex flex-col justify-center h-screen w-full">
        <div className="flex flex-col items-center px-2 py-5 space-y-4 text-2xl font-semibold">
          <p className="text-center">
            As a <span className="text-slate-500">user</span>, I am entering my
          </p>

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
        </div>

        <div className="px-2 py-5 space-y-6">
          <Button title="Login" />
        </div>
        <div className="flex text-sm items-center space-x-2 text-center justify-center">
          <p>Don&apos;t have an account?</p>
          <a className=" text-sm text-[#0064e0]" href="/sign-up">
            Sign-Up
          </a>
        </div>
      </div>
    </div>
  );
}
