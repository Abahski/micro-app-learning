import Navbar from '../component/Fragments/Navbar.tsx'
import Input from '../component/Elements/Input/Input.tsx'
import Button from '../component/Elements/Button/Button.tsx'
import Label from '../component/Elements/Label/Label.tsx'
import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const AddPartai = () => {
    const [partyRegister, setPartyRegister] = useState({
        name: "",
        leader_name: "",
        address: "",
        visi_mission: "",
        image: "",
    })

    const navigate = useNavigate();

    const saveParty = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/v1/partai", partyRegister);

      navigate("/partai");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPartyRegister({
      ...partyRegister,
      [e.target.name]: e.target.value,
    });
  };



    return (
        <>
            <Navbar 
                navText="DASHBOARD PEMILU" 
                menuList={['Partai', 'Paslon']}
            />
            <body className='bg-white min-h-screen'>
                <main className="flex items-center justify-center flex-col pb-24">
                    <h1 className="text-[48px] font-[900] mt-[71px] text-login font-login">
                        ADD PARTAI
                    </h1>
                    <div className="w-[1005px] h-[620px] mt-[100px] flex bg-white">
                        <div>
                            <img className="w-[368px] h-[523px] mr-[80px]"
                            src= "./src/assets/image/monkey.png"
                            alt="monkey"
                            />
                        </div>
                    
                        <div className="w-[500px]">
                            <form onSubmit={saveParty}>
                                <div className="flex flex-col gap-[20px] mb-[50px]">
                                    <label className="block">
                                        <Label text="Nama" />
                                        <Input 
                                            onChange={handleInput}
                                            name="name"
                                            type="text"
                                            width="w-[580px]"
                                            height="h-[70px]"
                                        />
                                    </label>
                                    <label className="block">
                                        <Label text="Ketua Umum" />
                                        <Input
                                            onChange={handleInput}
                                            name="leader_name" 
                                            type="text"
                                            width="w-[580px]"
                                            height="h-[70px]"
                                        />
                                    </label>
                                    <label className="block">
                                        <Label text="Visi Misi" />
                                        <Input 
                                            onChange={handleInput}
                                            name="visi_mission"
                                            type="text"
                                            width="w-[580px]"
                                            height="h-[139px]"
                                        />
                                    </label>
                                    <label className="block">
                                        <Label text="Alamat" />
                                        <Input
                                            onChange={handleInput}
                                            name="address"
                                            type="text"
                                            width="w-[580px]"
                                            height="h-[139px]"
                                        />
                                    </label>
                                    <label className="block">
                                        <Label text="Image" />
                                        <Input
                                            onChange={handleInput}
                                            name="image"
                                            type="text"
                                            width="w-[580px]"
                                            height="h-[70px]"
                                        />
                                    </label>
                                    <Button 
                                        button= "bg-bulog w-[478px] h-[68px] rounded-[15px] text-center text-[32px] font-[700] text-white font-login"
                                        text = "SUBMIT"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </body>
        </>
    )
}

export default AddPartai;
