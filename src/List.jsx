import React from "react";
import Person from "./Person.jsx";

const List = ({ data: people }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person id={person.id} {...person} />;
      })}
    </section>
  );
};

export default List;
