import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <img src="https://www.seekpng.com/png/detail/65-659383_dictionary-cliparts-nerd-clipart-black-and-white.png" width="200px" />
          <main>
            <Dictionary />
          </main>
        </header>
      </div>
    </div>
  );
}

