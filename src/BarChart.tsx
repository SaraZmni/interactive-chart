import { FC } from "react";
import { ChartDataType, ChartPropertiesType } from "./types";

interface BarChartProps {
  data: ChartDataType[];
}

const Bar: FC<ChartPropertiesType> = ({ name, color, ticketCount }) => {
  return (
    <div
      className="bar"
      style={{
        backgroundColor: `${color}`,
        height: `${ticketCount}%`,
      }}
    />
  );
};

const BarChart: FC<BarChartProps> = ({ data }) => {
  return (
    <div className="chart-container">
      <div className="chart">
        {data.map((item) => (
          <Bar key={item.id} {...item} />
        ))}
      </div>
      <div className="y-axis-label">Number of tickets</div>
      <div className="x-axis-label">Departments</div>
    </div>
  );
};
export default BarChart;
