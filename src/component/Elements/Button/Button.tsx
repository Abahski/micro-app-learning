type Props = {
	button: string;
	text: string;
};

const Button = (props: Props) => {
	const { button, text } = props;
	return (
	<>
		<button className={`${button}`}> {text} </button>
	</>
	)
}

export default Button;