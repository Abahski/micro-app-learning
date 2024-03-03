type Props = {
	type: string;
	placeholder: string;
	width: string;
	height: string;
}

const Input = (props: Props) => {
	const { type, placeholder, width, height} = props;
	return (
		<input 
		type={type} 
		className={`${width} ${height} rounded-[15px] border-2 text-black`} 
		placeholder={placeholder} 
		/>
	)
}

export default Input