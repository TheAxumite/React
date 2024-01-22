import { useState, useEffect } from "react";
import theme from "./theme";
import Text from "./textGUI";

const Controls = ({ goldStateChangeBH, goldStateChangeBuyWeapon, currentWeapon }) => {
  const buyHealth = () => {
    goldStateChangeBH();
  };

  const goStore = () => {
    update(locations[1]);
  };

  const goCave = () => {
    update(locations[0]);
  };

  const fightDragon = () => {
    update(locations[0]);
  };

  const buyWeapon = () => {
    goldStateChangeBuyWeapon()

    setText("You now have a " + currentWeapon + '.')
  };

  const goTown = () => {
    update(locations[0]);
  };

  const Button = ({ onClick, buttonLabel }) => {
    return (
      <button style={theme.button} onClick={onClick}>
        {buttonLabel}
      </button>
    );
  };

  const locations = [
    {
      name: "town square",
      "button text": ["Go to store", "Go to cave", "Fight dragon"],
      "button functions": [goStore, goCave, fightDragon],
      text: 'You are in the town square. You see a sign that says "Store".',
    },
    {
      name: "store",
      "button text": [
        "Buy 10 health (10 gold)",
        "Buy weapon (30 gold)",
        "Go to town square",
      ],
      "button functions": [buyHealth, buyWeapon, goTown],
      text: "You enter the store.",
    },
    // {
    //   name: "cave",
    //   "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    //   "button functions": [fightSlime, fightBeast, goTown],
    //   text: "You enter the cave. You see some monsters.",
    // },
  ];

  const [text, setText] = useState(
    " Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above."
  );

  const [buttonList, setButtons] = useState([
    {
      text: locations[0]["button text"][0],
      onClick: () => {
        update(locations[1]);
      },
    },
    {
      text: locations[0]["button text"][1],
      onClick: () => {
        update(locations[1]);
      },
    },
    {
      text: locations[0]["button text"][2],
      onClick: () => {
        update(locations[2]);
      },
    },
  ]);

  const update = (location) => {
    setButtons([
      {
        text: location["button text"][0],
        onClick: location["button functions"][0],
      },
      {
        text: location["button text"][1],
        onClick: location["button functions"][1],
      },
      {
        text: location["button text"][2],
        onClick: location["button functions"][2],
      },
    ]);

    setText(location.text);
  };

  return (
    <div style={theme.controls} id="controls">
      {buttonList.map((button, i) => (
        <Button
          buttonLabel={button.text}
          onClick={button.onClick}
          key={i + 1}
          id={`button${i + 1}`}
        ></Button>
      ))}

      <Text updateText={text} />
    </div>
  );
};



export default Controls;
