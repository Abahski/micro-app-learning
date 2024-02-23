import { useState } from "react"

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false)

  const handleClick = () => {
    setIsLogin(!isLogin);
  }

  return (
    <>
    <nav className="flex items-center justify-between bg-black text-white py-3 px-36">
      <div className="flex items-center font-bold gap-3">
        <img src="./src/assets/logo/dumbways navbar.png" className="w-[41px] h-[41px]"/>
        <a>PEMILIHAN PRESIDEN DUMBWAYS.ID</a>
      </div>
      <ul className="flex items-center justify-end gap-5">
        <li>Partai </li>
        <li> | </li>
        <li> Paslon </li>
        <li> | </li>
        <li>Voting</li>
        <button onClick={handleClick}
                      className={`${
              isLogin ? "rounded-full bg-white text-black font-bold px-3 py-1" : 'bg-white text-black px-5 py-1 rounded-md font-bold'
            } `}
          >
            {isLogin ? "D" : "LOGIN"}
        </button>
      </ul>
    </nav>
    </>
  )
}