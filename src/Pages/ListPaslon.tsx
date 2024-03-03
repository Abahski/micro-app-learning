import Navbar from '../component/Fragments/Navbar.tsx';

const ListPaslon = () => {
    return (
        <>
            <Navbar navText="DASHBOARD PEMILU" menuList={['Partai', 'Paslon']} />
            <body className=' bg-white text-black h-screen'>
            <main className="flex items-center justify-center flex-col">
                <h1 className="text-[48px] text-login font-login font-[900] mt-20 mb-6 text-center">LIST PASLON</h1>
                <div className="w-full max-w-[1095px]">
                    <table className="w-full table-fixed border-collapse border text-center">
                        <thead className="border border-garis bg-abu h-[40px]">
                            <tr>
                                <th className=" w-[72px] border-r border-garis">No. Urut</th>
                                <th className="w-[183px] border-r border-garis">Image</th>
                                <th className="w-[190px] border-r border-garis">Nama</th>
                                <th className="w-[325px] border-r border-garis">Visi & Misi</th>
                                <th className="w-[325px] border-r border-garis">Koalisi</th>
                            </tr>
                        </thead>
                        <tbody className="border border-garis">
                            <tr>
                                <td className="border border-garis">1</td>
                                <td className="border border-garis">
                                    <img src="./src/assets/image/monkey.png" 
                                    className="my-[10px] ml-[52px] w-[78px] h-[94px] rounded-[10px]" 
                                    alt="Logo" />
                                </td>
                                <td className="border border-garis text-login pb-24">
    								Cintara Surya Paloh
								</td>
								<td className="border border-garis text-left pl-3 pb-16">
								    <ul className="list-disc text-left ml-7">
								        <li>Menyadarkan Indonesia tentang anime,</li>
								        <li>Menonton anime dengan genre sport.</li>
								        <li>Menonton anime bertema memasak.</li>
								    </ul>
								</td>
								<td className="border border-garis text-left pl-3 pb-16">
								    <ul className="list-disc text-left ml-7">
                                        <li>Partai Kijang Indonesia</li>
                                        <li>Partai Shinobii</li>
                                        <li>Partai Koki Kaki Lima</li>
                                    </ul>
								</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
            </body>
        </>
    );
};

export default ListPaslon;
