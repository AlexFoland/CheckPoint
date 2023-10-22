import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const January = [
  0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 0, 0, 0, 0
]
const February = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 0, 0, 0, 0, 0
]
const March = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 0,
]
const April = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
]
const May = [
  0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 0, 0, 0
]
const June = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 0, 0
]
const July = [
  0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 0, 0, 0, 0, 0
]
const August = [
  0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 0, 0
]
const September = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 0
]
const October = [
  0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 0, 0, 0, 0
]
const November = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 0, 0, 0
]
const December = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
]

function App() {
  const [isButton, setIsButton] = useState(false);
  const datecalendar = new Date();
  const buttonHandler = () => {
    setIsButton(!isButton);
  }
  return (
    <>
      <div className='navigation'>
        <div>
          <h1 className='blue'>Артем</h1>
          <h1 className='yellow'>Ден</h1>
          <h1 className='white'>Рамис</h1>
          <h1 className='red'>Алексей</h1>
        </div>
        <div className='logo'><strong>CheckPoint</strong></div>
      </div>
      <div className='button23div'>
        <button onClick={() => { buttonHandler() }} className="button23">2023 год</button>
      </div>
      {isButton ? <div className='container'>
        <div>
          <h1 className='h1-center'>January</h1>
          <div className='calendar'>

            {
              January.map(el => el === 0 ? <div className='january elem'>-</div> : <div className='january elem'>{el}</div>)
            }
          </div >
        </div>
        <div>
          <h1 className='h1-center'>February</h1>
          <div className='calendar'>
            {
              February.map(el => el === 0 ? <div className='february elem'>-</div> : <div className='february elem'>{el}</div>)
            }
          </div >
        </div>
        <div>
          <h1 className='h1-center'>March</h1>
          <div className='calendar'>
            {
              March.map(el => el === 0 ? <div className='february elem'>-</div> : <div className='february elem'>{el}</div>)
            }
          </div >
        </div>
        <div>
          <h1 className='h1-center'>April</h1>
          <div className='calendar'>
            {
              April.map(el => el === 0 ? <div className='april elem'>-</div> : <div className='april elem'>{el}</div>)
            }
          </div >
        </div>
        <div>
          <h1 className='h1-center'>May</h1>
          <div className='calendar'>
            {
              May.map(el => el === 0 ? <div className='may elem'>-</div> : <div className='may elem'>{el}</div>)
            }
          </div >
        </div>
        <div>
          <h1 className='h1-center'>June</h1>
          <div className='calendar'>
            {
              June.map(el => el === 0 ? <div className='june elem'>-</div> : <div className='june elem'>{el}</div>)
            }
          </div >
        </div>
        <div>
          <h1 className='h1-center'>July</h1>
          <div className='calendar'>
            {
              July.map(el => el === 0 ? <div className='july elem'>-</div> : <div className='july elem'>{el}</div>)
            }
          </div >
        </div>
        <div>
          <h1 className='h1-center'>August</h1>
          <div className='calendar'>
            {
              August.map(el => el === 0 ? <div className='august elem'>-</div> : <div className='august elem'>{el}</div>)
            }
          </div >
        </div>
        <div>
          <h1 className='h1-center'>September</h1>
          <div className='calendar'>
            {
              September.map(el => el === 0 ? <div className='september elem'>-</div> : <div className='september elem'>{el}</div>)
            }
          </div >
        </div>
        <div>
          <h1 className='h1-center'>October</h1>
          <div className='calendar'>
            {
              October.map(el => el === 0 ? <div className='october elem'>-</div> : <div className='october elem'>{el}</div>)
            }
          </div >
        </div>
        <div>
          <h1 className='h1-center'>November</h1>
          <div className='calendar'>
            {
              November.map(el => el === 0 ? <div className='november elem'>-</div> : <div className='november elem'>{el}</div>)
            }
          </div >
        </div>
        <div>
          <h1 className='h1-center'>December</h1>
          <div className='calendar'>
            {
              December.map(el => el === 0 ? <div className='december elem'>-</div> : <div className='december elem'>{el}</div>)
            }
          </div >
        </div>
      </div>
        :
        <div className='ofButton'>
          <h2>
            Расписание на целый год
          </h2>
        </div>
      }
    </>
  );
}

export default App;
