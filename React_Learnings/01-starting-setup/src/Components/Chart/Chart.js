import './Chart.css';
import ChartBar from './ChartBar'

function Chart(props){
    const dataPointValues=props.dataPoints.map(dataPoint=> dataPoint.value);
    const totalMaximum=Math.max(...dataPointValues);
    return (
        <div className="chart">
            {
            props.dataPoints.map((dataPoint) =>
                <ChartBar value={dataPoint.value} label={dataPoint.label} maxValue={totalMaximum} />)
            }
        </div>
    );

}

export default Chart;