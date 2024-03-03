type Props = {
	text: string;
}

const Label = (props: Props) => {
	const { text } = props;
	return (
	    <span className="text-silver font-login text-[24px] font-[700]">{text}</span>
	)
}

export default Label