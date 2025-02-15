import React, { useEffect, useRef } from 'react';
import { getChartOptions } from '../utils/DistributionChartUtils'; // Import the chart options function
import * as echarts from 'echarts';
// Import styles from the separate design file
import { DistributionChartStyle } from '../styles/DistributionChartStyle';

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
      {/* Header text using styles from the design file */}
      <div className={DistributionChartStyle.header}>
        Tokens Distribution
      </div>
      {/* Chart container with styles and inline style extracted from the design file */}
      <div
        ref={chartContainerRef}
        className={DistributionChartStyle.chartContainer}
        style={DistributionChartStyle.chartContainerInlineStyle}
      />
    </>
  );
}

export default DistributionChart;
