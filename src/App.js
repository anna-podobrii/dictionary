import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="text-center">DICTIONARY</div>
      </header>
      <div className="main">
        <Dictionary />
      </div>
      <footer className="footer text-center">Coded by Hanna Podobrii</footer>
    </div>
  );
}
