import React from "react";

function Filters({setFilters, setPets, filters,}) {
  function filterPets(){
    console.log(filters)
    if(filters==="all"){
      fetch("http://localhost:3001/pets")
      .then((r)=>r.json())
      .then(setPets)
    } else{
      fetch(`http://localhost:3001/pets?type=${filters}`)
      .then((r)=>r.json())
      .then(setPets)
    }
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select 
          name="type" 
          id="type" 
          aria-label="type"
          onChange={(e)=>setFilters(e.target.value)}
          >
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button 
          className="ui secondary button"
          onClick={filterPets}
        >Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
