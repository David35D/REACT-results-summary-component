import jsonData from './data.json';

import Result from './components/Result/Result';
import Summary from './components/Summary/Summary';

import './App.css';

function App() {
  const scores = jsonData.map((item) => item.score);
  const totalScores = scores.reduce((sum, score) => sum + score, 0);
  const averageScore = Math.floor(totalScores / scores.length);

  return (
    <main className="App">
      <div className='results-summary'>
        <Result score={averageScore} />
        <Summary data={jsonData} />
      </div>
    </main>
  );
}

export default App;
