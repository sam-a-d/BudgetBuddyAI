import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import moment from "moment";

const StackChart = ({ transactions }) => {
  const [chartData, setChartData] = useState({ categories: [], series: [] });

  useEffect(() => {
    processData(transactions);
  }, [transactions]);

  const processData = (transactions) => {
    const groupedData = {};

    transactions.forEach(({ transactionTime, transactionType, amount }) => {
      const date = moment(transactionTime).format("YYYY-MM-DD"); // Normalize date format

      if (!groupedData[date]) {
        groupedData[date] = { income: 0, expense: 0 };
      }

      if (transactionType === "TRANS_INCOME") {
        groupedData[date].income += amount;
      } else if (transactionType === "TRANS_EXPENSE") {
        groupedData[date].expense += amount;
      }
    });

    // Extract categories (dates) and series data
    const categories = Object.keys(groupedData).sort();
    const incomeData = categories.map((date) => groupedData[date].income || 0);
    const expenseData = categories.map((date) => groupedData[date].expense || 0);

    setChartData({
      categories,
      series: [
        { name: "Income", data: incomeData },
        { name: "Expense", data: expenseData },
      ],
    });
  };

  const options = {
    chart: { type: "bar", stacked: true },
    xaxis: { categories: chartData.categories },
    plotOptions: {
      bar: { horizontal: false, columnWidth: "50%" },
    },
    colors: ["#00C853", "#D32F2F"], // Green for income, red for expense
  };

  return (
    <Chart options={options} series={chartData.series} type="bar" height={350} />
  );
};

export default StackChart;
