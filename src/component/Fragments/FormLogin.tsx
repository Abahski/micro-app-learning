import Button from '../Elements/Button/Button.tsx'
import Input from '../Elements/Input/Input.tsx'
import Label from '../Elements/Label/Label.tsx'

const FormLogin = () => {
	return (
    <>  
        <input className="modal-state" id="modal-1" type="checkbox" />
        <div className="modal w-screen">
          <label className="modal-overlay" htmlFor="modal-1"></label>
          <div className="modal-content flex flex-col gap-5 bg-white w-[600px] h-[717px] rounded-[20px]">
            <label htmlFor="modal-1" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
            <h1 className="text-center text-[48px] text-login font-login font-[900]">LOGIN</h1>
            <div className="flex items-center justify-center flex-col gap-5">
              <label className="block text-black">
                <Label text="Username" />
                <Input 
                  type="text"
                  placeholder="PeinAkatsuki"
                  width="w-[478px]"
                  height="h-[70px]"
                />
              </label>
              <label className="block">
                <Label text="Password" />
                <Input 
                  type="text"
                  placeholder="**************"
                  width="w-[478px]"
                  height="h-[70px]"
                />
              </label>
              <Button 
                button= "bg-bulog mt-[30px] w-[478px] h-[68px] rounded-[15px] text-center text-[32px] font-[700] text-white font-login"
                text = "SUBMIT"
              />
              <p className="text-[24px] text-black text-center italic font-[400]">
              Belum memiliki akun ? Register
              </p>
            </div>  
          </div>
        </div>
    </>
	)
}

export default FormLogin;