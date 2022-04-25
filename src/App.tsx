import React, { useState } from 'react';
import axios from 'axios';
import Loading from './components/Loading';
import './App.css';

const App = () => {
  const [qqNumber, setQQNumber] = useState('');

  const [hasFinished, setHasFinished] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [qqData, setQQData] = useState({code:0,msg:''});

  const [qlogo, setQlogo] = useState('');
  const [qname, setQname] = useState('');
  const [qq, setQQ] = useState('');


  const searchQQNumber = (qqNumber:number|string|undefined) => {
    console.log(qqNumber)
    setIsLoading(true)
    axios.get('https://api.uomg.com/api/qq.info?qq=' + qqNumber)
      .then(function (response) {
        setHasFinished(true)
        console.log(response)
        if(response && response.data && response.data.code === 1) {
          setIsLoading(false)
          setIsError(false)
          setQlogo(response.data.qlogo)
          setQname(response.data.name)
          setQQ(response.data.qq)
        } else {
          setQQData(response.data)
          setIsLoading(false)
          setIsError(true)
        }
      })
      .catch(function (error) {
        setHasFinished(true)
        setIsLoading(false)
        setIsError(true)
        console.log(error)
      });
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          QQ号查询
        </div>
        <div>
          QQ  <input type="number" value={qqNumber} onChange={ e => setQQNumber(e.target.value) } className="search-input"/>
          <button onClick={()=>searchQQNumber(qqNumber)} className="search-button">查询</button>
        </div>
        <Loading isLoading={isLoading} hasFinished={hasFinished} isError={isError} qqData={qqData}>
          <div className="qq-card">
            <div className="qq-logo"><img src={qlogo} alt='' /></div>
            <div className="qq-info">
              <div className="qq-name">{qname}</div>
              <div className="qq-number">{qq}</div>
            </div>
          </div>
        </Loading>
      </header>
      
    </div>
  );
}

export default App;
