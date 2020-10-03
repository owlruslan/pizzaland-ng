import React, {useEffect, useRef, useState} from 'react';
import Chartjs from 'chart.js';

const data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
const labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

const chartConfig = {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'This week',
      data: data,
    }]
  },
};

export const RevenueChart: React.FC = () => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      // @ts-ignore
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      // @ts-ignore
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  return (
      <div>
        <canvas ref={chartContainer}/>
      </div>
  );
};
