import React, { useState,} from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [displayedPets, setDisplayedPets] = useState([])
  const [filters, setFilters] = useState("all");

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
              setPets={setPets}
              filters={filters}
              setFilters={setFilters}
              />
          </div>
          <div className="twelve wide column">
            <PetBrowser 
            pets={pets}
            setPets={setPets}
            displayedPets={displayedPets}
            setDisplayedPets={setDisplayedPets}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
