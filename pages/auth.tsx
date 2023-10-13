import Input from "@/components/Input";
import { useCallback, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentValue) =>
      currentValue === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className='relative w-full h-full bg-[url(/images/hero.jpg)] bg-no-repeat bg-center bg-fixed bg-cover'>
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav className='px-32 py-5'>
          <img src='/images/logo.png' alt='Logo' className='h-12' />
        </nav>
        <div className='flex justify-center '>
          <div className='bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md'>
            <h2 className='text-white text-4xl mb-8 font-semibold'>
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className='flex flex-col gap-4'>
              {variant === "login" ? null : (
                <Input
                  label='User Name'
                  onChange={(event) => setName(event?.target.value)}
                  id='name'
                  value={name}
                />
              )}
              <Input
                label='Email'
                onChange={(event) => setEmail(event?.target.value)}
                id='email'
                type='email'
                value={email}
              />
              <Input
                label='Password'
                onChange={(event) => setPassword(event?.target.value)}
                id='password'
                type='password'
                value={password}
              />
            </div>
            <button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
              {variant === "login" ? "Log in" : "Sign up"}
            </button>
            <p className='text-neutral-500 mt-12 '>
              {variant === "login"
                ? "First time using Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className='text-white ml-1 hover:underline cursor-pointer'
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
