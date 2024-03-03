import { ChangeEvent } from "react";

export type Props = {
	options: string[];
	onSelect: (selectedOption: string) => void;
} 

function SelectInput(props: Props) {
	const { options, onSelect } = props;

	const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedOption = e.target.value;
		onSelect(selectedOption);
	};

	return (
		<select id="selectInput"
		onChange={handleSelectChange}
		className="mt-1 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
			{options.map(option => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	)
} 	

export default SelectInput;
