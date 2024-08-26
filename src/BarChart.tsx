import { FC, useMemo } from "react";
import { ChartDataType, ChartPropertiesType } from "./types";
import { motion } from "framer-motion";

interface BarChartProps {
  data: ChartDataType[];
}

type ExtendedChartPropertiesType = ChartPropertiesType & {
  height: number;
};

const Bar: FC<ExtendedChartPropertiesType> = ({
  name,
  color,
  ticketCount,
  height,
}) => {
  return (
    <motion.div
      className="bar"
      initial={{ height: 0 }}
      animate={{ height: `${height}%` }}
      exit={{ height: 0 }}
      style={{
        backgroundColor: `${color}`,
        height: `${height}%`,
      }}
    >
      <div className="tooltip">
        {name} - {ticketCount}
      </div>
    </motion.div>
  );
};

const BarChart: FC<BarChartProps> = ({ data }) => {
  const maxTicketCount = useMemo(() => {
    return Math.max(...data.map((item) => item.ticketCount));
  }, []);
  return (
    <motion.div
      className="chart-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="chart">
        {data.map((item) => (
          <Bar
            key={item.id}
            height={(item.ticketCount / maxTicketCount) * 100}
            {...item}
          />
        ))}
      </div>
      <div className="y-axis-label">Number of tickets</div>
      <div className="x-axis-label">Departments</div>
    </motion.div>
  );
};
export default BarChart;
