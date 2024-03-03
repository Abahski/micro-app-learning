const Footer = () => {
	return (
    <>
      <div className="w-full h-[241px] bg-black flex justify-start items-center gap-5 ps-[100px]">
        <img
          className="w-[110px] h-[110px]"
          src='./src/assets/logo/dumbways navbar.png'
        />
        <div >
          <p className="text-white text-[24px] font-bold">DUMBWAYS.ID</p>
          <p className="text-white text-wrap w-[300px] text-[16px]">
             Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan,
            Banten 15413
         </p>
        </div>
      </div>
       <div className="h-[3px] bg-white"></div>
       <div className="bg-black w-full">
        <p className="text-white w-full text-[20px] font-[500] text-center h-[50px] flex justify-center items-center">
           Komisi Pemilihan Umum DumbWays.ID | Reza Liswara 2024
       </p>
       </div>
    </>
	)
}

export default Footer;