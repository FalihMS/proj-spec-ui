import './App.css';
import React from 'react';
import { Menu } from 'react-feather';
import HeaderComponent from './components/Header';
import Chart from './components/Chart';
import { Card, CardBody } from './components/Card';

function Chart(){
  return(
    <div>
      <p>Hello World</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <HeaderComponent
        Title="Dashboard"
        Icon={<Menu/>}
      />

      <div>
        <Card>
          <CardBody>
            <p>Stadium Arena</p>
            <p>Tangerang Selatan - Banten</p>
          </CardBody>
        </Card>  
      </div>

      <div style={{display:'flex'}}>
        <div style={{width:'50%'}}>
          <Card>
            <CardBody>
              <p>4.5</p>
              <p>Rating</p>
            </CardBody>
          </Card>  
          <Card>
            <Chart />
            <CardBody>
              <p>5.30 Jt</p>
              <p>Pendapatan</p>
            </CardBody>
          </Card>         
        </div>

        <div style={{width:'50%'}}>
          <Card>
            <Chart />
            <CardBody>
              <p>150 Kali</p>
              <p>Booking Dibuat</p>
            </CardBody>
          </Card>         
          <Card>
            <CardBody>
              <p>14:00</p>
              <p>Waktu Favorit</p>
            </CardBody>
          </Card>  
        </div>
      </div>

      <div>
        <Card>
          <CardBody>
            <div style={{display:'flex'}}>
              <div style={{width:'50%'}}>
                <p>S</p>
                <p>Hello World</p>
              </div>

              <div style={{width:'50%', textAlign:'right',display:'flex', justifyContent:'center', alignItems:'center'}}>
                <p>#1 Favorit</p>                
              </div>
            </div>
          </CardBody>
        </Card>  
      </div>

    </div>
  );
}

export default App;
