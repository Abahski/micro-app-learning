import Navbar from '../component/Fragments/Navbar.tsx';
import axios from "axios"
import { useEffect, useState } from "react";
import { FaPlus, FaRegTrashCan, FaRegPenToSquare } from "react-icons/fa6"
import { Link } from 'react-router-dom';


const ListPartai = () => {
    const [partai, setPartai] = useState([])

    const fetchPartai = async () => {
        try {
            const {data } = await axios.get("http://localhost:5000/api/v1/partai");
            setPartai(data)
        } catch (error) {
            console.log(error)
        } 
    }

    useEffect(() => {
        fetchPartai();
    }, [])

    const deletePartai = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/partai/${id}`);
      fetchPartai();
    } catch (error) {
      console.log(error);
    }
  };
    return (
        <>
            <Navbar navText="DASHBOARD PEMILU" menuList={['Partai', 'Paslon']} />
            <body className=' bg-white text-black h-screen'>
            <main className="flex items-center justify-center flex-col">
                <h1 className="text-[48px] text-login font-login font-[900] mt-20 mb-6 text-center">LIST PARTAI</h1>
                <div className="w-full max-w-[1150px]">
                    <table className="w-full table-fixed border-collapse border text-center">
                        <thead className="border border-garis bg-abu h-[40px]">
                            <tr>
                                <th className=" w-[72px] border-r border-garis">No. Urut</th>
                                <th className="w-[160px] border-r border-garis">Logo</th>
                                <th className="w-[150px] border-r border-garis">Ketua Umum</th>
                                <th className="w-[200px] border-r border-garis">Visi & Misi</th>
                                <th className="w-[200px] border-r border-garis">Alamat</th>
                                <th className='w-[220px] border-r border-garis'>Action</th>
                            </tr>
                        </thead>
                        <tbody className="border border-garis">
                            {partai.map((item: any, index) => (
                                <tr key={index}>
                                    <td className="border border-garis">{item.id}</td>
                                    <td className="border border-garis">
                                        <img src="./src/assets/image/monkey.png" 
                                        className="my-[10px] ml-[52px] w-[78px] h-[94px] rounded-[10px]" 
                                        alt="Logo" />
                                    </td>
                                    <td className="border border-garis pb-16">
        								{item.leader_name}
    								</td>
    								<td className="border border-garis pb-5">
    								    <ul className="list-disc text-left ml-7">
    								        <p>{item.visi_mission}</p>
    								    </ul>
    								</td>
    								<td className="border border-garis text-left pl-3 pb-16">
    								    {item.address}
    								</td>
                                    <td className='border border-garis'>
                                        <div className="flex justify-center items-center gap-[10px]">
                                            <Link 
                                                to={`/edit-partai/${item.id}`}
                                                className="px-4 py-2 
                                                        bg-green-700 
                                                        hover:bg-green-800 
                                                        text-white 
                                                        rounded-md
                                                        w-[97px] h-[40px]"                    
                                            >   <span>
                                                    <FaRegPenToSquare />
                                                    Edit
                                                </span>
                                            </Link>

                                            <button
                                                onClick={() => deletePartai(item.id)}
                                                className='px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md'
                                            >
                                                <span className='flex items-center gap-1'>
                                                    <FaRegTrashCan />
                                                    Delete
                                                </span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </main>
            </body>
        </>
    );
};

export default ListPartai;
