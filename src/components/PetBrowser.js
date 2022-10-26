import React, {useState, useEffect} from "react";

import Pet from "./Pet";


function PetBrowser({pets, setPets}) {
//================= initial pet fetch =================
  useEffect(()=>{
    console.log("pls work")
    fetch("http://localhost:3001/pets")
    .then((r)=>r.json())
    .then((json)=>setPets(json))
  }, [])

//============== update isAdopted ======================
  function adopt(id, isAdopted){
    console.log("hi", isAdopted, id)
    let newStatus = !isAdopted
    fetch(`http://localhost:3001/pets/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        isAdopted: newStatus
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res)=>res.json())
  }


  const renderedPets = pets.map((pet)=>{
    return (
      <Pet
        key={pet.id}
        id={pet.id}
        type={pet.type}
        gender={pet.gender}
        age={pet.age}
        weight={pet.weight}
        name={pet.name}
        isAdopted={pet.isAdopted}
        adopt={adopt}

      />
    )
  })

  return <div className="ui cards">{renderedPets}</div>;
}

export default PetBrowser;
