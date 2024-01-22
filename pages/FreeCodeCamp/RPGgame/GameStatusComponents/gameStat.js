import { useState, useEffect } from "react";
import theme from "../theme";
import Controls from "../buttonControls";
import Text from "../textGUI";
const gameMenuList = [
  { name: "xp", elementId: "xpText", text: "XP", stat: 0 },
  {
    name: "health",
    elementId: "healthText",
    text: "Health",
    stat: 100,
  },
  {
    name: "gold",
    elementId: "goldText",
    text: "Gold",
    stat: 50,
  },
];

const weapons = [
  { name: 'stick', power: 5 },
  { name: 'dagger', power: 30 },
  { name: 'claw hammer', power: 50 },
  { name: 'sword', power: 100 }
];

const inventory = ['stick']

export default function GameStat() {


  const [gameMenu, setGameMenu] = useState(gameMenuList);
  const buyHealth = () => {
    setGameMenu((currentGameMenu) =>
      currentGameMenu.map((item) => {
        if (item.name === "gold" && item.stat >= 10) {
          return { ...item, stat: item.stat - 10 };
        }
        return item;
      })
    );
  };



  const [weaponCount, setCounter] = useState(0)
  const [currentInventory, setInventory] = useState(inventory)

  const buyWeapon = () => {
    if (weaponCount < weapons.length - 1) {
      console.log('Weapons Count: ' + weaponCount)
      console.log('Inventory Length: ' + inventory.length)
      setGameMenu((currentGameMenu) => currentGameMenu.map(item => {
        if (item.name === 'gold' && item.stat >= 30) {
          setCounter((weaponCount + 1))
          inventory.push(weapons[weaponCount].name)
          setInventory(inventory)


          return { ...item, stat: item.stat - 30 }
        }
        return item;
      }))


    }
  };



  return (
    <div>
      <div style={theme.stats} id="stats">
        {gameMenu.map((list, i) => (
          <span key={i} sytle={theme.stat} className="stat">
            {list.text}:
            <strong>
              <span style={theme.stat} id={list.elementId}>
                {list.stat}
              </span>
            </strong>
          </span>
        ))}
      </div>
      <Controls goldStateChangeBH={buyHealth} goldStateChangeBuyWeapon={buyWeapon} currentWeapon={currentInventory[currentInventory.length - 1]} />
    </div>
  );

}
