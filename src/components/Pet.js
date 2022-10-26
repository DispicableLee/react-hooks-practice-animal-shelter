import React, {useState} from "react";

function Pet({id, type, sign, gender, age, weight, name, isAdopted, adopt}) {
  const [buttClass, setButtClass] = useState("ui disabled button")
  const [buttonClass, setButtonClass] = useState("ui primary button")
  const [renderGender, setRenderGender] = useState("" )
  // if(gender === "male"){
  //   setRenderGender("♂")
  // }else if (gender==="female"){
  //   setRenderGender("♀")
  // }
  function handleAdopt(){
    setButtonClass("ui disabled button")
    setButtClass("ui primary button")
    adopt(id, isAdopted)
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {renderGender}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button className={buttClass}>Already adopted</button>
        <button 
          className={buttonClass}
          onClick={handleAdopt}
          >Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;
