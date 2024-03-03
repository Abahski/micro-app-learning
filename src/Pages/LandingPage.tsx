import Navbar from '../component/Fragments/Navbar.tsx'
import Button from '../component/Elements/Button/Button.tsx'
import Footer from '../component/Fragments/Footer.tsx'

const LandingPage = () => {
	return (
<div>
	<body className="bg-dasar">
		<Navbar 
          navText= "PEMILU PRESIDEN DUMBWAYS.ID" 
          menuList={['Partai', 'Paslon', 'Voting']}
    />
		<main className="flex items-center justify-center flex-col text-black">
		<div className="bg-gradient-to-r from-red-700 to-red-950 w-[1140px] flex items-center justify-center mt-[109px] rounded-[20px]">
			<div className="gradient w-full h-[516px] rounded-[20px] relative">
				<img src="./src/assets/image/dumbways polos.png" className="w-[342px] h-[237px] opacity-50"/>
				
				<div className="mt-20 ml-7">
					<h1 className="text-[64px] text-white">SELAMAT DATANG</h1>
					<p className="text-[24px] text-white text-wrap w-[500px]">
		 				PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR DIPILIH MELALUI SEBUAH ARTI NAMA
					</p>
				</div>

				<img src="./src/assets/image/kotak suara.png" 
				className="w-[286px] h-[473px] absolute right-40 top-0"/>
			</div>
		</div>

		<div className="w-[1140px] mb-12 mt-[100px]">
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 relative">
          <img className="w-[753px] h-[390px]" src="./src/assets/image/rapat kpu.png" alt="" />
          <div className="bg-gradient-to-t to-transparent from-black w-[753px] h-[390px] absolute left-0 bottom-0 ">
            <div className="my-[10px] mx-[10px] absolute left-0 bottom-0">
              <Button 
            	button="bg-merah text-white px-3 py-1 rounded-[10px] font-bold"
            	text= "Senin, 03-Jan-2023" />
              <p className="text-[32px] font-bold text-white leading-8 mt-[10px]">
                KPU TETAPKAN 3 MENTOR TERBAIK
              </p>
              <p className="text-[24px] mt-[5px] text-white">Super Admin</p>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <img src="./src/assets/image/rapat kpu.png" alt="Sample" />

          <div className="my-[10px] mx-[10px] ">
            <Button 
            	button="bg-merah text-white px-3 py-1 rounded-[10px] font-bold"
            	text= "Senin, 03-Jan-2023" />
            <p className="text-[32px] font-bold leading-8 mt-[10px]">
              KPU TETAPKAN 3 MENTOR TERBAIK
            </p>
            <p className="text-[24px] mt-[5px]">Super Admin</p>
          </div>
        </div>

        <div className="bg-white">
          <img src="./src/assets/image/rapat kpu.png" alt="Sample" />

          <div className="my-[10px] mx-[10px] ">
            <Button 
            	button="bg-merah text-white px-3 py-1 rounded-[10px] font-bold"
            	text= "Senin, 03-Jan-2023" />
            <p className="text-[32px] font-bold leading-8 mt-[10px]">
              KPU TETAPKAN 3 MENTOR TERBAIK
            </p>
            <p className="text-[24px] mt-[5px]">Super Admin</p>
          </div>
        </div>

        <div className="bg-white">
          <img src="./src/assets/image/rapat kpu.png" alt="Sample" />

          <div className="my-[10px] mx-[10px] ">
            <Button 
            	button="bg-merah text-white px-3 py-1 rounded-[10px] font-bold"
            	text= "Senin, 03-Jan-2023" />
            <p className="text-[32px] font-bold leading-8 mt-[10px]">
              KPU TETAPKAN 3 MENTOR TERBAIK
            </p>
            <p className="text-[24px] mt-[5px]">Super Admin</p>
          </div>
        </div>

        <div className="bg-white">
          <img src="./src/assets/image/rapat kpu.png" alt="Sample" />

          <div className="my-[10px] mx-[10px] ">
            <Button 
            	button="bg-merah text-white px-3 py-1 rounded-[10px] font-bold"
            	text= "Senin, 03-Jan-2023" />
            <p className="text-[32px] font-bold leading-8 mt-[10px]">
              KPU TETAPKAN 3 MENTOR TERBAIK
            </p>
            <p className="text-[24px] mt-[5px]">Super Admin</p>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full h-[384px] bg-white flex justify-center items-center px-[120px]">
            <p className="text-[40px] font-bold text-center">
          PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK YANG JELAS
              PASTIKAN MEREKA TIDAK MEMILIKI VISI MISI UNTUK MELEGALKAN SLOT
        </p>
      </div>

    <Footer />
    </main>
 	</body>
 </div>

	)
}

export default LandingPage;