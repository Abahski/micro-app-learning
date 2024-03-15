type Props = {
	type: string;
	width: string;
	height: string;
	name: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: Props) => {
	const { type, name, width, height, onChange} = props;
	return (
		<input 
		type={type}
		name={name}
		className={`${width} ${height} rounded-[15px] border-2 text-black`} 
		onChange={onChange}
		/>
	)
}

export default Input