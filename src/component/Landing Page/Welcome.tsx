export default function Welcome() {
	return (
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
	)
}