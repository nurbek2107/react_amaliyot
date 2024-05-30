import './App.css';
import { useState } from 'react';
function App() {
  const [showConent, setshowConent] = useState (true);
  const [names, setNames] = useState([
    { id: 1, name: 'Nurbek' },
    { id: 2, name: 'Tillo' },
    { id: 3, name: 'Bekzod' },
  ]);
  const handleDelete = (id) => {
    const filteredNames = names.filter((name) => {
    return  name.id !== id
    });
    setNames(filteredNames);
  };
  return (
    <div className="App">
      {  showConent   && <button onClick={() => setshowConent(false)}>Hide Connet</button>}
      {  !showConent  &&  <button onClick={() => setshowConent(true)}>show Connet</button>}
    
      {showConent &&
        <div>
          {names.length === 0 && <h3> not connet yet  :(</h3> }
          {
            names.map((name) => (
              <div key={name.id}>
                <h1>{name.name}</h1>
                <button onClick={() => handleDelete(name.id)}>delete</button>
          </div>))
          }
        </div>
      }
    </div>
  );
}
export default App;