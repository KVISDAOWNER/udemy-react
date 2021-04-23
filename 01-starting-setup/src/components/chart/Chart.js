import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {

	const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
	const maxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
					key={dataPoint.label} //rembmeber that React is more efficient when items have ids
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
