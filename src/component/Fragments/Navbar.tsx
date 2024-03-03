import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom'
import SelectInput from '../Elements/Input/SelectInput.tsx';
import ModalLogin from "./ModalLogin.tsx";
import ModalRegister from "./ModalRegister.tsx";


type Props = {
  navText: string;
  menuList: string[];
};


const Navbar: React.FC<Props> = (props) => {
  const { navText, menuList } = props;
  const [userLogin, setUserLogin] = useState(false);
  // const navigate = useNavigate()
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

   const loginAsUser = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    setUserLogin(!userLogin);
    setLoginOpen(false);
  };

  const handleRegister = (): void => {
    setLoginOpen(false);
    setRegisterOpen(true);
  };

  const handleLogin = (): void => {
    setRegisterOpen(false);
    setLoginOpen(true);
  };


    function handleSelect(_selectedOption: string): void {
        throw new Error("Function not implemented.");
    }

  return (
    <>
      <nav className="flex items-center justify-between bg-black text-white py-3 px-36">
        <div className="flex items-center font-bold gap-3">
          <Link to='/'>
            <img src="./src/assets/logo/dumbways navbar.png" className="w-[41px] h-[41px]" />
          </Link>
          <a>{navText}</a>
        </div>
        <ul className="flex items-center justify-end gap-5">
          {menuList.map((item, index) => (
            <React.Fragment key={index}>
              <Link to={`/${item.toLowerCase()}`}>
                <li>{item}</li>
              </Link>
              {index < menuList.length - 1 && <li> | </li>}
            </React.Fragment>
          ))}
          {userLogin === false ? (
              <button
              className="bg-white text-black text-xl font-bold px-7 py-1 rounded-md ml-5 hover:bg-gray-200 transition-all"
              onClick={() => setLoginOpen(true)}
            >
              LOGIN
            </button>
            ) : (
              <div className="flex items-center">
                <p className="bg-white text-black text-xl font-bold h-11 w-11 flex justify-center items-center rounded-full ml-5">
                  R
                </p>
              </div>
            )}

        {/*{handle login}*/}
        <ModalLogin loginOpen={loginOpen} onClose={() => setLoginOpen(false)}>
        <div className="z-500">
          <h1 className="text-center font-black text-login text-4xl mb-4">
            LOGIN
          </h1>
          <form className="w-full" action="">
            <label className="block text-lg font-bold leading-6 text-gray-600">
              Username
            </label>
            <input
              type="text"
              autoComplete="off"
              className="mt-2 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <label className="mt-4 block text-lg font-bold leading-6 text-gray-600">
              Password
            </label>
            <input
              type="password"
              autoComplete="off"
              className="mt-2 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <button
              className="flex mr-auto bg-login px-32 py-2 mt-8 rounded-lg text-white text-center font-semibold text-xl hover:bg-[#4f4808] hover:shadow-md transition-all"
              onClick={loginAsUser}
            >
              SUBMIT
            </button>
            <div className="flex italic text-silver gap-1 justify-center mt-2">
              <p className="">Belum memiliki akun ?</p>
              <p
                className="text-blue-500 underline cursor-pointer"
                onClick={handleRegister}
              >
                Register
              </p>
            </div>
          </form>
        </div>
      </ModalLogin>
      <ModalRegister
        registerOpen={registerOpen}
        onClose={() => setRegisterOpen(false)}
      >
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
            />
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
              onClick={handleLogin}>
              SUBMIT
            </button>
            <div className="flex italic text-silver gap-1 justify-center mt-2">
              <p className="">Telah memiliki akun ?</p>
              <p
                className="text-blue-500 underline cursor-pointer"
                onClick={handleLogin}
              >
                Login
              </p>
            </div>
          </form>
        </div>
      </ModalRegister>

        </ul>
      </nav>
    </>
  );
};

export default Navbar;
