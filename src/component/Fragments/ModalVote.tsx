import React from 'react'
import Button from '../Elements/Button/Button.tsx'
import { DataModalVoter } from '../../data/index.ts'

const ModalVote: React.FC = () => {
	return (
		<>	
			<input className="modal-state" id="modal-1" type="checkbox" />
			<div className="modal w-screen">
				<label className="modal-overlay" htmlFor="modal-1"></label>
				<div className="modal-content flex flex-col gap-5 bg-white max-w-[1140px] max-h-[700px] rounded-[20px]">
					<div>
						<h1 className="text-center mt-[87px] text-[48px] text-login font-login font-[900]">MASUKKAN PILIHANMU</h1>
					</div>
					<div className="flex items-center justify-center flex-row gap-8">
						{DataModalVoter.map((data, index) => (
						<div key={index} 
						className='bg-gray89 w-[347px] h-[388px] rounded-[15px]'>
							<div className='absolute right-0 top-0 border-white w-20 h-20 text-3xl font-bold 
							text-black rounded-full border-[3px] flex justify-center items-center'>
								{data.noUrut}
							</div>
							<img src={data.img} className='w-[301px] h-[189px] rounded-[10px] mt-[30px] mx-4' />
							<h1 className='font-login text-login text-[24px] text-[700] uppercase ml-[23px]'> {data.name} </h1>
							<p className='text-lg ml-[23px] text-black'> {data.motto}</p>
							<p className='text-lg font-bold ml-[23px] text-black'> Partai Pengusung: </p>
							<ul className='list-disc leading-5 ml-[23px] text-black'>
								<li className='ml-[45px]'>{data.partaiPengusung[0]}</li>
								<li className='ml-[45px]'>{data.partaiPengusung[1]}</li>
								<li className='ml-[45px]'>{data.partaiPengusung[2]}</li>
							</ul>
						</div>
						))}
					</div>
					<div className="flex items-center justify-center flex-row gap-8">
						<Button 
			              	button= "bg-white mt-[30px] w-[503px] h-[68px] rounded-[15px] text-center text-[32px] font-[700] text-login font-login border-[5px] border-login"
			              	text = "RESET"
		              	/>
		              	<Button 
			              	button= "bg-bulog mt-[30px] w-[478px] h-[68px] rounded-[15px] text-center text-[32px] font-[700] text-white font-login"
			              	text = "SUBMIT"
		              	/>
					</div>
				</div>
			</div>
		</>
	)
}

export default ModalVote;