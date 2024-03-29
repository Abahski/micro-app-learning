import { DefaultizedPieValueType } from "@mui/x-charts";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const data = [
  { label: "Cintara Surya Paloh", value: 70, color: "#ff6384" },
  { label: "Surya Surya", value: 20, color: "#ffcd56" },
  { label: "Cintara", value: 10, color: "#36a2eb" },
];

const sizing = {
  margin: { right: 5 },
  width: 400,
  height: 400,
  legend: { hidden: true },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params: DefaultizedPieValueType) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

const Chart = () => {
  return (
    <div>
      <PieChart
        series={[
          {
            outerRadius: 200,
            data,
            arcLabel: getArcLabel,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "black",
            fontSize: 24,
          },
        }}
        {...sizing}
      />
    </div>
  );
};

export default Chart;