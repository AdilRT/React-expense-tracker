import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const expensesAmount = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...expensesAmount)//takes(2,3,4,5)

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar 
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMaximum}
        label = {dataPoint.label}

        />
      ))}
    </div>
  );
};

export default Chart;
