import React, { useEffect } from 'react';
import { AgCharts } from 'ag-charts-community';

const PieChart = ({ data, style, title, subtitle, footnote }) => {
  useEffect(() => {
    const numFormatter = new Intl.NumberFormat("en-US");

    const totalQuantity = data.reduce((acc, item) => acc + item.quantity, 0);

    const dataWithPercentage = data.map(item => ({
      ...item,
      percentage: ((item.quantity / totalQuantity) * 100).toFixed(2), 
    }));

    const options = {
      container: document.getElementById("myChart"),
      title: title ? { text: title } : undefined,
      subtitle: subtitle ? { text: subtitle } : undefined,
      footnote: footnote ?? "Bake the pie in the oven for 25 minutes at 180℃",
      series: [
        {
          data: dataWithPercentage,
          type: "pie",
          angleKey: "quantity",
          calloutLabelKey: "sku",
          calloutLabel: {
            offset: 10,
          },
          sectorLabel: {
            formatter: ({ datum }) => `${datum.sku}: ${numFormatter.format(datum.quantity)} (${datum.percentage}%)`,
          },
          tooltip: {
            renderer: ({ datum }) => ({
              title: `${datum.sku}`,
              content: `Quantity: ${numFormatter.format(datum.quantity)} (${datum.percentage}%)`,
            }),
          },
        },
      ],
      legend: {
        enabled: false,
      },
    };

    const chart = AgCharts.create(options);

    return () => {
      chart.destroy();
    };
  }, [data, title, subtitle, footnote]);

  const chartStyle = { ...style, border: 'none' };

  return <div id="myChart" style={chartStyle}></div>;
};

export default PieChart;
