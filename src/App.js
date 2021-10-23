import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>Dictionary</h1>
          <main>
            <Dictionary />
          </main>
        </header>
      </div>
    </div>
  );
}

