import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Menu } from 'react-feather';
import HeaderComponent from './components/Header';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement
);

const options = {
  scales: {
    x: {
      ticks: {
        color: 'rgb(255, 99, 132)',
      },
      grid: {
          display: false,
      }
    },
    y: {
      ticks: {
        color: 'rgb(255, 99, 132)',
      },
    }
  },
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  maintainAspectRatio:false
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr'];

const data = {
  labels,
  datasets: [
    {
      label: 'Pendapatan (Jt)',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 5 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};
function App() {
  return (
    <div className="App">
      <HeaderComponent
        Title="Dashboard"
        Icon={<Menu/>}
      />
      <div style={{padding:10, margin:10, border:'1px solid rgb(255, 99, 132)', borderRadius:10, width:'50%'}}>
        <Bar options={options} data={data} />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
