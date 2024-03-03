import { useState } from 'react';
import Button from '../Elements/Button/Button.tsx';
import Input from '../Elements/Input/Input.tsx';
import SelectInput from '../Elements/Input/SelectInput.tsx';
import Label from '../Elements/Label/Label.tsx';  

type SelectedInput = {};

const FormRegister = (_props: SelectedInput) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelect = ( option:string ) => {
    setSelectedOption(option)
  }

	return (
    <>
      <input className="modal-state" id="modal-2" type="checkbox" />
        <div className="modal w-screen">
          <label className="modal-overlay" htmlFor="modal-2"></label>
          <div className="modal-content flex flex-col gap-5 bg-white w-[600px] h-[1500px] rounded-[20px]">
            <label htmlFor="modal-2" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
            <h1 className="text-center text-[48px] text-login font-login font-[900]">REGISTER</h1>
            <div className="flex items-center justify-center flex-col gap-5">
                  <label className="block">
                    <Label text="Fullname" />
                    <Input 
                      type="text"
                      placeholder="Isi nama lengkap Anda"
                      width="w-[478px]"
                      height="h-[70px]"
                    />
                  </label>
                  <label className="block">
                    <Label text="Alamat" />
                    <Input 
                      type="text"
                      placeholder=""
                      width="w-[478px]"
                      height="h-[70px]"
                    />
                  </label>
                  <label className="block">
                    <Label text="Jenis Kelamin" />
                    <SelectInput
                      options={['', 'Laki-laki', 'Perempuan']}
                      onSelect = {handleSelect}
                    />
                    <p className='text-black'>Terpilih: {selectedOption}</p>
                  </label>
                  <label className="block">
                    <Label text="Username" />
                    <Input 
                      type="text"
                      placeholder="Masukkan minimal 8 karakter"
                      width="w-[478px]"
                      height="h-[70px]"
                    />
                  </label>
                  <label className="block">
                    <Label text="Password" />
                    <Input 
                      type="text"
                      placeholder="Masukan minimal 8 karakter mengandung angka"
                      width="w-[478px]"
                      height="h-[70px]"
                    />
                  </label>
                  <Button 
                    button= "bg-bulog mt-[30px] w-[478px] h-[68px] rounded-[15px] text-center text-[32px] font-[700] text-white font-login"
                    text = "SUBMIT"
                  />
                  <p className="text-[24px] text-center text-black italic font-[400]">
                  Sudah memiliki akun ? Login
                  </p>
            </div>  
          </div>
        </div>
      </>
	)
}

export default FormRegister;