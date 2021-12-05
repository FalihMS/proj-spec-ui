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

function Chart(){
    return(
        <div style={{padding:10, border:'1px solid rgb(255, 99, 132)', borderRadius:10, backgroundColor: 'white'}}>
            <Bar options={options} data={data} />
        </div>
    )
}

export default Chart