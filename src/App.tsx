import { useState } from "react";
import "./App.css";
import BarChart from "./BarChart";
import CHART_DATA from "./data";

function App() {
  const [showChart, setShowChart] = useState(false);
  return (
    <main className="container">
      <button onClick={() => setShowChart((prev) => !prev)}>
        Toggle Chart
      </button>
      {showChart && <BarChart data={CHART_DATA} />}
    </main>
  );
}

export default App;
