import './App.css';
import JSONDATA from "./MOCK_DATA.json"
import React, { useState } from "react";

const App = () => {

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="App">
      <input className='search_field' type="text" placeholder="Search..."
        onChange={(event) => setSearchTerm(event.target.value)} />
      {JSONDATA.filter((val => {
        if (searchTerm == "") { return val; }
        else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      })).map((val, key) => {
        return (
          <div>
            <p>{val.first_name} {val.last_name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App;
