import './App.css';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { IncomeExpenses } from './components/incomeExpenses';
import { transactionList } from './components/transactionList';
import { AddTransaction } from './components/AddTransaction';
function App() {
  return (
    <div>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <transactionList/>
        <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
