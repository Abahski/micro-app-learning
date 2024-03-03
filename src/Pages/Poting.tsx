// import PieChart from '../component/Elements/Piechart/Piechart.tsx';
import { Pie } from 'react-chartjs-2'
// import { ChartHasil } from '../data/index.ts';

export const ChartHasil = {
	labels: ['Red', 'Blue', 'Yellow'],
	datasets: [
		{
			label: 'Persentase vote',
			data: [70, 30, 10],
			backgroundColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(255, 205, 86, 1)',
				'rgba(54, 162, 235, 1)'
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(255, 205, 86, 1)',
				'rgba(54, 162, 235, 1)'
			],
			borderWidth: 1,
		},
	],
};

const Poting: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-[30px]"> 
              <p className="text-[40px] text-black font-[900]">Hasil :</p> 
              <Pie data={ChartHasil} />
            </div> 
	)
}

export default Poting;