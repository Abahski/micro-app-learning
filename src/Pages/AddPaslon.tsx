import Navbar from '../component/Fragments/Navbar.tsx'
import Input from '../component/Elements/Input/Input.tsx'
import Button from '../component/Elements/Button/Button.tsx'
import Label from '../component/Elements/Label/Label.tsx'

const AddPaslon = () => {
    return (
        <>
                <Navbar 
                    navText="DASHBOARD PEMILU" 
                    menuList={['Partai', 'Paslon']}
                />
            <body className='bg-white text-black min-h-screen'>
                <main className="flex items-center justify-center flex-col pb-16">
                    <h1 className="text-[48px] font-[900] mt-[71px] text-login font-login">
                        ADD PASLON
                    </h1>
                    <div className="w-[1005px] h-[620px] mt-[100px] flex">
                        <div>
                            <img className="w-[368px] h-[523px] mr-[80px]"
                            src= "./src/assets/image/monkey.png"
                            alt="monkey"
                            />
                        </div>
                    
                        <div className="w-[500px]">
                            <div className="flex flex-col gap-[20px] mb-[50px]">
                                <label className="block">
                                    <Label text="Nama" />
                                    <Input 
                                        type="Text"
                                        placeholder=""
                                        width="w-[580px]"
                                        height="h-[70px]"
                                    />
                                </label>
                                <label className="block">
                                    <Label text="Nomor Urut" />
                                    <Input 
                                        type="Text"
                                        placeholder=""
                                        width="w-[580px]"
                                        height="h-[70px]"
                                    />
                                </label>
                                <label className="block">
                                    <Label text="Visi Misi" />
                                    <Input 
                                        type="Text"
                                        placeholder=""
                                        width="w-[580px]"
                                        height="h-[249px]"
                                    />
                                </label>
                            </div>
                            <Button 
                                button= "bg-bulog mt-[30px] w-[478px] h-[68px] rounded-[15px] text-center text-[32px] font-[700] text-white font-login"
                                text = "SUBMIT"
                             />
                        </div>
                    </div>
                </main>
            </body>
        </>
    )
}

export default AddPaslon;
