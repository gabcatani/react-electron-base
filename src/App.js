import './app.css';

export function App() {

  function handleShowName() {
    alert('Hello, my name is Gabriel Catani.')
  }

  return(
    <div className="app">
      <button type="button" onClick={handleShowName}>
        Gabriel Catani
      </button>
    </div>
  )
}