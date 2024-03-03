import React from "react"
import SelectInput from "../component/Elements/Input/SelectInput.tsx";

const Register = () => {
  function handleSelect(_selectedOption: string): void {
        throw new Error("Function not implemented.");
    }
  return(
    <>
      <body className="h-screen bg-white flex flex-col items-center justify-center">
      <div>
          <h1 className="text-center font-black text-login text-4xl mb-4">
            REGISTER
          </h1>
          <form className="w-full" action="">
            <label className="block text-lg font-bold leading-6 text-gray-600">
              Fullname
            </label>
            <input
              type="text"
              autoComplete="off"
              className="mt-1 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />s
            <label className="mt-2 block text-lg font-bold leading-6 text-gray-600">
              Alamat
            </label>
            <input
              type="text"
              autoComplete="off"
              className="mt-1 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <label className="mt-2 block text-lg font-bold leading-6 text-gray-600">
              Jenis Kelamin
            </label>
            <SelectInput
              options={['', 'Laki-laki', 'Perempuan']}
              onSelect = {handleSelect}
            />
            <label className="mt-2 block text-lg font-bold leading-6 text-gray-600">
              Username
            </label>
            <input
              type="text"
              autoComplete="off"
              className="mt-1 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <label className="mt-2 block text-lg font-bold leading-6 text-gray-600">
              Password
            </label>
            <input
              type="password"
              autoComplete="off"
              className="mt-1 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <button className="flex mr-auto bg-login px-32 py-2 mt-6 rounded-lg 
              text-white text-center font-semibold text-xl hover:bg-[#4f4808] hover:shadow-md transition-all"
            >
              SUBMIT
            </button>
            <div className="flex italic text-silver gap-1 justify-center mt-2">
              <p className="">Telah memiliki akun ?</p>
              <p
                className="text-blue-500 underline cursor-pointer"
              >
                Login
              </p>
            </div>
          </form>
        </div>
        </body>
    </>
    )
  }

export default Register;