import Body from './container/Body.js'

    /**
     * 23.07.09 React p221
     */
function ChildComp() {
    return <div>
        child component
    </div>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>조영인님</h1>
          <br></br>
      </header>
      <Body>
      </Body>
    </div>
  );
}

export default App;
