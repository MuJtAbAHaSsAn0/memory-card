import GameContainer from "./components/GameContainer";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Memory card</h1>
      </header>
      <main>
        <GameContainer />
      </main>
      <footer>
        <p>
          By{" "}
          <a
            target="_blank"
            href="https://github.com/MuJtAbAHaSsAn0/memory-card"
          >
            Mujtaba-Hassan
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
