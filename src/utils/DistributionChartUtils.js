import * as echarts from 'echarts';

/**
 * Initializes and returns the ECharts option for the distribution chart.
 * @param {Array} tokens - Array of token objects containing balance and symbol.
 * @returns {Object} ECharts option object.
 */
export function getChartOptions(tokens) {
  return {
    tooltip: {
      trigger: 'item',
      formatter: ({ data }) => `${data.name}: ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.value)}`,
    },
    series: [
      {
        name: 'USD Balance',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: true,
          position: 'outside',
          formatter: '{b}:({d}%)', // Show name, value, and percentage
          color: 'inherit', // Inherit text color based on the applied theme
          fontSize: 10, // Adjust font size for the chart labels
          fontWeight: 'bold', // Make chart labels bold
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '1.5rem', // 30px
            fontWeight: 'bold',
            color: 'inherit', // Inherit emphasis label color based on the applied theme
          },
        },
        labelLine: {
          show: true,
          lineStyle: {
            color: 'inherit', // Inherit label line color based on the applied theme
          },
        },
        data: tokens.map(token => ({
          value: token.balanceInUsd,
          name: token.symbol,
        })),
      },
    ],
    backgroundColor: 'transparent', // Make background transparent and rely on container styling
  };
}
