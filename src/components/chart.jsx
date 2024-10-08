// ExpenseChart.jsx
import React, { useEffect, useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { ref, onValue } from "firebase/database"; 
import db from '../../firebase'; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement, 
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement, 
  Title,
  Tooltip,
  Legend
);

const ExpenseChart = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = () => {
      const expensesRef = ref(db, 'expenses'); 
      onValue(expensesRef, (snapshot) => {
        const data = snapshot.val();
        const expenseList = [];
        for (let id in data) {
          expenseList.push({ id, ...data[id] }); 
        }
        setExpenses(expenseList); 
      });
    };

    fetchExpenses();
  }, []); 

  if (expenses.length === 0) {
    return <p>Loading data...</p>;
  }

  const barData = {
    labels: expenses.map((exp) => exp.date), 
    datasets: [
      {
        label: 'Expenses',
        data: expenses.map((exp) => parseFloat(exp.amount)), 
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const pieData = {
    labels: [...new Set(expenses.map((exp) => exp.category))], 
    datasets: [
      {
        label: 'Expenses by Category',
        data: expenses.reduce((acc, curr) => {
          const categoryIndex = acc.findIndex((item) => item.label === curr.category);
          if (categoryIndex !== -1) {
            acc[categoryIndex].value += parseFloat(curr.amount); 
          } else {
            acc.push({ label: curr.category, value: parseFloat(curr.amount) });
          }
          return acc;
        }, []).map((item) => item.value),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  const lineData = {
    labels: expenses.map((exp) => exp.date),
    datasets: [
      {
        label: 'Expenses Over Time',
        data: expenses.map((exp) => parseFloat(exp.amount)),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
        tension: 0.3, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Expenses Overview' }
    },
    animation: {
      duration: 1500, 
      easing: 'easeInOutBounce',
    },
  };

  return (
    <div className="container my-5">
      <h2 className="chart-heading text-center mb-4">Expense Visualizations</h2>

      {/* Bar Chart */}
      <div className="chart-wrapper mb-4">
        <h3 className="text-center">Monthly Expenses (Bar Chart)</h3>
        <div className="chart-container">
          <Bar data={barData} options={options} />
        </div>
      </div>

      {/* Line Chart */}
      <div className="chart-wrapper mb-4">
        <h3 className="text-center">Expense Trends (Line Chart)</h3>
        <div className="chart-container">
          <Line data={lineData} options={options} />
        </div>
      </div>

      {/* Pie Chart */}
      <div className="chart-wrapper mb-4">
        <h3 className="text-center">Category Breakdown (Pie Chart)</h3>
        <div className="chart-container">
          <Pie data={pieData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseChart;
