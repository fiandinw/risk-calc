import { useState } from "react";

function App() {

  const [balance, setbalance] = useState('')
  const [risk, setrisk] = useState('')
  const [entry, setentry] = useState('')
  const [stoploss, setstoploss] = useState('')
  const [assettobuy, setassettobuy] = useState('')
  const [assettobuyprice, setassettobuyprice] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const sub = entry > stoploss ? entry - stoploss : stoploss - entry
    const res = (balance * (risk/100)) / sub
    setassettobuy(Math.abs(res))
    setassettobuyprice(Math.abs(res*entry))
  }

  const handleReset = () => {
    setbalance('')
    setrisk('')
    setentry('')
    setstoploss('')
    setassettobuy('')
    setassettobuyprice('')
  }

  const handleResetSome = () => {
    setentry('')
    setstoploss('')
    setassettobuy('')
    setassettobuyprice('')
  }

  return (
    <div className="container is-fluid" style={{paddingTop:"5vh", paddingBottom:"15vh"}}>
      <div className="columns">
        <div className="column has-text-centered">
          <h1 className="title">Soheil PKO's 1% Rule Calculator</h1>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-4">

        <form onSubmit={handleSubmit}>

          <div className="field">
            <label className="label">Balance</label>
            <div className="control">
              <input type="number" className="input" placeholder="Balance" value={balance} onChange={(e)=>{setbalance(e.target.value)}} required/>
            </div>
          </div>

          <div className="field">
            <label className="label">Risk (%)</label>
            <div className="control">
              <input type="number" className="input" placeholder="Risk (%)" value={risk} onChange={(e)=>{setrisk(e.target.value)}} required/>
            </div>
          </div>

          <div className="field">
            <label className="label">Entry Price</label>
            <div className="control">
              <input type="number" className="input" placeholder="Entry Price" value={entry} onChange={(e)=>{setentry(e.target.value)}} required/>
            </div>
          </div>

          <div className="field">
            <label className="label">Stop-Loss Price</label>
            <div className="control">
              <input type="number" className="input" placeholder="Stop-Loss Price" value={stoploss} onChange={(e)=>{setstoploss(e.target.value)}} required/>
            </div>
          </div>

          <div className="field is-grouped is-grouped-centered" style={{margin:"2em"}}>
            <div className="control">
              <button type="submit" className="button is-primary">Calculate</button>
            </div>
            <div className="control">
              <button type="reset" className="button is-warning" onClick={handleResetSome}>Clear Price</button>
            </div>
            <div className="control">
              <button type="reset" className="button is-danger" onClick={handleReset}>Reset All</button>
            </div>
          </div>

        </form>

          <div className="field">
            <label className="label">Asset to buy</label>
            <div className="control">
              <input type="number" className="input" placeholder="Asset to buy" value={assettobuy} readOnly/>
            </div>
          </div>

          <div className="field">
            <label className="label">Asset to buy (price)</label>
            <div className="control">
              <input type="number" className="input" placeholder="Asset to buy (price)" value={assettobuyprice} readOnly/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
