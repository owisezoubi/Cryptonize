import React, { useEffect, useRef } from 'react';
import { getChartOptions } from '../utils/DistributionChartUtils'; // Import the chart options function
import * as echarts from 'echarts';

/**
 * DistributionChart component displays a pie chart representing token distribution.
 * @param {Object} props - Component props.
 * @param {Array} props.tokens - Array of token objects containing balance and symbol.
 * @returns {JSX.Element} The rendered DistributionChart component.
 */
function DistributionChart({ tokens }) {
  const chartContainerRef = useRef(null);

    /**
   * Initializes the ECharts instance and sets up the chart options.
   * Updates the chart when the tokens data changes and handles window resizing.
   */
  useEffect(() => {
    if (!chartContainerRef.current) return;
    const chart = echarts.init(chartContainerRef.current);
    const option = getChartOptions(tokens);
    chart.setOption(option);
    const handleResize = () => {
      chart.resize();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      chart.dispose();
    };
  }, [tokens]);

  return (
    <>
      <div className="flex justify-center items-center font-bold text-2xl mb-4 text-gray-900 dark:text-white">
        Tokens Distribution
      </div>
      <div
        ref={chartContainerRef}
        className="bg-white dark:bg-gray-800 p-3 rounded-lg"
        style={{ height: '80%', width: '100%' }}
      />
    </>
  );
}

export default DistributionChart;
