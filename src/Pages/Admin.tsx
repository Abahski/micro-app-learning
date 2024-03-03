import Navbar from '../component/Fragments/Navbar.tsx'
import Dashboard from '../component/Fragments/Dashboard.tsx'

const listTable = [ 
    { 
        no: "1", 
        name: "Sugeng No Pants", 
        addres: "Cileungsi", 
        gender: "Laki-Laki", 
        paslon: "Paloh", 
    }, 
    { 
        no: "2", 
        name: "Haris Gams", 
        addres: "Serang", 
        gender: "Perempuan", 
        paslon: "Surya", 
    }, 
    { 
        no: "3", 
        name: "Aziz Union", 
        addres: "Bekasi", 
        gender: "Laki-Laki", 
        paslon: "Cintara", 
    }, 
    { 
        no: "4", 
        name: "Lae Tanjung Balai", 
        addres: "Tanjung Balai", 
        gender: "Laki-Laki", 
        paslon: "Paloh", 
    } 
 
]

const Admin = () => {
	return (
		<>
			<body className='text-black'>
                <Navbar 
                navText="DASHBOARD PEMILU" 
                menuList={['Partai', 'Paslon']}
            	/>
				<div className="flex items-center justify-center flex-col pb-[150px] bg-white">
                    <h1 className="text-[48px] font-[900] mt-[71px] text-login font-login">
                        DASHBOARD
                    </h1>
                    <div className='flex items-center justify-center flex-row gap-5 mt-[50px] bg-white'>
	                    <Dashboard 
	                    	number="1"
	                    	border="border-login"
	                    	color="bg-gold-ochre"
	                    	name="REZA L"
	                    	percentage="25%"
	                    	vote="250 Voters"
	                    	teks="text-login"
	                    />
	                    <Dashboard 
	                    	number="2"
	                    	border="border-hijau-lakban"
	                    	color="bg-cyan"
	                    	name="L REZA"
	                    	percentage="45%"
	                    	vote="450 Voters"
	                    	teks="teks-hijau-lakban"
	                    />
	                    <Dashboard 
	                    	number="3"
	                    	border="border-merah-tomat"
	                    	color="bg-merah-maroon"
	                    	name="RL"
	                    	percentage="40%"
	                    	vote="400 Voters"
	                    	teks="teks-merah-tomat"
	                    />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-screen py-10 bg-abu2">
                	<b className="text-[48px] font-[900] mb-12 mt-10 text-login font-login">LIST VOTER</b>
                    <table className="text-left border border-collapse table-auto border-slate-400 border-spacing-x-5">
                        <thead className="">
                            <tr className="bg-white">
                                <th className="p-3 text-center border bg-slate-200 border-slate-300">No</th>
                                <th className="border ps-2 pe-40 bg-slate-200 border-slate-300">Nama</th>
                                <th className="border ps-2 pe-40 bg-slate-200 border-slate-300">Alamat</th>
                                <th className="border ps-2 pe-40 bg-slate-200 border-slate-300">Jenis Kelamin</th>
                                <th className="border ps-2 pe-40 bg-slate-200 border-slate-300">Paslon</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listTable.map(item => (
                                <tr className="bg-white">
                                    <td className="py-2 text-center border border-slate-300">{item.no}</td>
                                    <td className="border ps-2 border-slate-300">{item.name}</td>
                                    <td className="border ps-2 border-slate-300">{item.addres}</td>
                                    <td className="border ps-2 border-slate-300">{item.gender}</td>
                                    <td className="border ps-2 border-slate-300">{item.paslon}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
					<b className="my-10 text-[24px] text-[700] font-login mr-10">TOTAL SUARA TERKUMPUL : 467 Voters</b>
                </div>
			</body>
		</>
	)
}

export default Admin;