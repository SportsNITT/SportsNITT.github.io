import './App.css';
import Achievements from './pages/achievements/achievements';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ResponsiveGrid from '../src/pages/achievements/cards';

function App() {
  return (
    <div className="App">
      <Achievements/>
      <ResponsiveGrid/>
    </div>
  );
}

export default App;
