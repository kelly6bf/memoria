import './App.css';
import {getEmotionImageById} from "./util/util";

function App() {
  return (
    <div className="App">
      <h1>Memoria</h1>
      <img alt="감정1" src={getEmotionImageById(1)} />
      <img alt="감정1" src={getEmotionImageById(2)} />
      <img alt="감정1" src={getEmotionImageById(3)} />
      <img alt="감정1" src={getEmotionImageById(4)} />
      <img alt="감정1" src={getEmotionImageById(5)} />
    </div>
  )
}

export default App;
