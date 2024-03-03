import React from 'react'
import Auth from '../interface/Auth'

interface handleAuth {
  handle: (e: React.ChangeEvent<HTMLInputElement>) => void
  login: (e: React.FormEvent<HTMLFormElement>) => void
}

const Login = (props: handleAuth) => {
  return (
    <> 
      <body className="h-screen bg-white flex flex-col items-center justify-center">
      <div>
      <h1 className="text-center font-black text-login text-4xl mb-4">
            LOGIN
          </h1>
          <form className="w-full" onSubmit={(e) => props.login(e)}>
            <label className="block text-lg font-bold leading-6 text-gray-600">
              Username
            </label>
            <input
              type="text"
              autoComplete="off"
              className="mt-2 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={props.handle}
            />
            <label className="mt-4 block text-lg font-bold leading-6 text-gray-600">
              Password
            </label>
            <input
              type="password"
              autoComplete="off"
              className="mt-2 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={props.handle}
            />
            <button
              className="flex mr-auto bg-login px-32 py-2 mt-8 rounded-lg text-white text-center font-semibold text-xl hover:bg-[#4f4808] hover:shadow-md transition-all"
              type="submit"
            >
              SUBMIT
            </button>
            <div className="flex italic text-silver gap-1 justify-center mt-2">
              <p className="">Belum memiliki akun ?</p>
              <p
                className="text-blue-500 underline cursor-pointer"
                              >
                Register
              </p>
            </div>
          </form>
          </div>
        </body>
    </>
    )
  }

export default Login;