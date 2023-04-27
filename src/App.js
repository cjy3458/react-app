import logo from "./logo.svg";
import "./App.css";

function Header(props) {
  console.log("props", props);
  return (
    <header className="App-header">
      <h1 a href="/">
        WEB
      </h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
        <li>
          <a href="/read/3">js</a>
        </li>
      </ol>
    </nav>
  );
}

function Article() {
  return (
    <article>
      <h2>Welcome</h2>
      Hello, WEB!
    </article>
  );
}

function App() {
  return (
    <div className="App">
      <Header title="REACT"></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
