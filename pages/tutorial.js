import { useState } from 'react';


function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}


function Body({ message }) {
  return <h2>{message} </h2>;
}


const TypesOfFruit = () => {
  const [listOfFruits, setListOfFruits] = useState(['Apples', 'Blueberries', 'Strawberries', 'Bananas']);

  const removeFruit = () => {
    setListOfFruits(prevFruits => prevFruits.slice(0, -1)); // Removes the last fruit from the list
  }

  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        {listOfFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li> // Use index as a key in this specific case
        ))}
      </ul>
      <button onClick={removeFruit}>Remove Last Fruit</button>
    </div>
  );
};




export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <Body message="this is a test" />
      <TypesOfFruit />

      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>





    </div>

  );
}
