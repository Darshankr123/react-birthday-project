import React from 'react'

const Person = (props) => {
    // console.log(props);
    const {id,name,age,image} = props
  return (
    <div key={id} className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h5>{name}</h5>
        <h5>{age} years</h5>
      </div>
    </div>
  );
}

export default Person
