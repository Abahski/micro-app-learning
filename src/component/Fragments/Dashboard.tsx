type Props = {
	color: string;
	number: string;
	border: string;
	name: string;
	percentage: string;
	vote: string;
	teks: string;
}

const Dashboard = (props: Props) => {
	const { color, border, number, name, percentage, vote, teks } = props;
	return (
		<div className='flex items-center justify-center flex-col gap-5'>
        	<div className={`rounded-full ${color} w-[73.4px] h-[76px] 
        	${border} border-[10px]
        	${teks} font-login text-[40px] text-[700] text-center`}> 
        		{number}
        	</div>
        	<div className={`${color} w-[367px] h-[433px] rounded-[15px] flex items-center justify-center flex-col`}>
        		<img src='./src/assets/image/monyet new.png' className='w-[330.3px] h-[262px] rounded-[10px] items-center' />
        		<div>
		            <a className={`${teks} font-login font-extrabold text-[40px] text-[900]`}>{name}</a>
		            <a className={`${teks} font-login font-bold text-[20px] text-[500]`}> <br />Akumulasi: {percentage}<br /></a>
		            <a className={`${teks} font-login font-bold text-[20px] text-[500]`}> Jumlah Vote: {vote}</a>
		        </div>
        	</div>
        </div>
	)
}

export default Dashboard;