import React from "react";
import { useState } from "react";
import daw from "../daw.json";
import Card from "../components/Card";
import '../style/Products.css';

export default function DAWSPage() {
  return (
    <div className="App">
      <DAWList initialDAW={daw} />
    </div>
  );
}

function DAWList({ initialDAW }) {
  var [filterText, setFilterText] = useState("");
  var [daw, setDAW] = useState(initialDAW);

  const handleFilterChange = (e) => {
    let newFilterText = e.target.value;
    setFilterText(newFilterText);

    let newFilteredDAW = initialDAW.filter((daw) =>
      daw.name.toLowerCase().includes(newFilterText.toLowerCase())
    );

    setDAW(newFilteredDAW);
  };

  return (
    <div>
        <label>Filter:</label>
      <input className="filter" onChange={handleFilterChange} value={filterText} />
       <h1>Digital Workstation </h1>
       <h3>A digital audio workstation (DAW) is an electronic device or application software used for recording, editing and producing audio files. DAWs come in a wide variety of configurations from a single software program on a laptop, to an integrated stand-alone unit, all the way to a highly complex configuration of numerous components controlled by a central computer. Regardless of configuration, modern DAWs have a central interface that allows the user to alter and mix multiple recordings and tracks into a final produced piece.</h3>
      {daw.length > 0 ? (
        daw.map((daw) => (
          <div key={daw.id}>
            <Card {...daw} />
          </div>
        ))
      ) : (
        <p>No DAWs match search</p>
      )}
    </div>
  );
}
