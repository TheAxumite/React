// import { useState, useEffect } from "react";
// // import { theme } from "./FreeCodeCamp/RPGgame/theme";

// // const theme = {
// //   body: {
// //     backgroundColor: "#0a0a23",
// //   },
// //   text: {
// //     backgroundColor: "#0a0a23",
// //     color: "#ffffff",
// //     padding: "10px",
// //   },
// //   game: {
// //     maxWidth: "500px",
// //     maxHeight: "400px",
// //     backgroundColor: "#ffffff",
// //     margin: "300px auto",
// //     padding: "10px",
// //   },
// //   stats: {
// //     border: "1px solid #0a0a23",
// //     padding: "5px",
// //     color: "#0a0a23",
// //   },
// //   controls: {
// //     border: "1px solid #0a0a23",
// //     padding: "5px",
// //     color: "#0a0a23",
// //   },
// //   monsterStats: {
// //     display: "none",
// //     border: "1px solid #0a0a23",
// //     padding: "5px",
// //     color: "#ffffff",
// //     backgroundColor: "#c70d0d",
// //   },
// //   button: {
// //     cursor: "pointer",
// //     color: "#0a0a23",
// //     backgroundColor: "#feac32",
// //     backgroundImage: "linear-gradient(#fecc4c, #ffac33)",
// //     border: "3px solid #feac32",
// //   },
// //   stat: {
// //     paddingRight: "10px",
// //   },
// // };

// export default function HomePages() {
//   useEffect(() => {
//     document.body.style.backgroundColor = "#0a0a23";
//   });

//   return (
//     <>
//       {/* <Header></Header> */}
//       <div style={theme.body}>
//         <Body></Body>
//       </div>
//     </>
//   );
// }

// function Header({ title, meta, link }) {
//   return (
//     <head>
//       <meta charset={meta ? meta : "utf-8"}></meta>
//       <link rel="stylesheet" href={link}></link>
//       <title>{title}</title>
//     </head>
//   );
// }

// function Body() {
//   return (
//     <div style={theme.game}>
//       <Game></Game>

//       <div>
//         <MonsterStats></MonsterStats>
//       </div>
//     </div>
//   );
// }

// function Game() {
//   const [gameMenu, setGameMenu] = useState([
//     { name: "xp", elementId: "xpText", text: "XP", stat: 0 },
//     {
//       name: "health",
//       elementId: "healthText",
//       text: "Health",
//       stat: 100,
//     },
//     {
//       name: "gold",
//       elementId: "goldText",
//       text: "Gold",
//       stat: 50,
//     },
//   ]);

//   useEffect(() => {
//     console.log("Game menu state updated:", gameMenu);
//   }, [gameMenu]);

//   const buyHealth = () => {
//     setGameMenu((currentGameMenu) =>
//       currentGameMenu.map((item) => {
//         if (item.name === "gold" && item.stat >= 10) {
//           return { ...item, stat: item.stat - 10 };
//         }
//         return item;
//       })
//     );
//   };

//   return (
//     <div>
//       <div style={theme.stats} id="stats">
//         {gameMenu.map((list, i) => (
//           <span key={i} sytle={theme.stat} className="stat">
//             {list.text}:
//             <strong>
//               <span style={theme.stat} id={list.elementId}>
//                 {list.stat}
//               </span>
//             </strong>
//           </span>
//         ))}
//       </div>
//       <Controls changeState={buyHealth} />
//     </div>
//   );
// }

// const Controls = ({ changeState }) => {
//   const buyHealth = () => {
//     changeState();
//   };

//   const goStore = () => {
//     update(locations[1]);
//   };

//   const goCave = () => {
//     update(locations[0]);
//   };

//   const fightDragon = () => {
//     update(locations[0]);
//   };

//   const buyWeapon = () => {
//     update(locations[1]);
//   };

//   const goTown = () => {
//     update(locations[0]);
//   };

//   const locations = [
//     {
//       name: "town square",
//       "button text": ["Go to store", "Go to cave", "Fight dragon"],
//       "button functions": [goStore, goCave, fightDragon],
//       text: 'You are in the town square. You see a sign that says "Store".',
//     },
//     {
//       name: "store",
//       "button text": [
//         "Buy 10 health (10 gold)",
//         "Buy weapon (30 gold)",
//         "Go to town square",
//       ],
//       "button functions": [buyHealth, buyWeapon, goTown],
//       text: "You enter the store.",
//     },
//     // {
//     //   name: "cave",
//     //   "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
//     //   "button functions": [fightSlime, fightBeast, goTown],
//     //   text: "You enter the cave. You see some monsters.",
//     // },
//   ];

//   const [text, setText] = useState(
//     " Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above."
//   );

//   const [buttonList, setButtons] = useState([
//     {
//       text: locations[0]["button text"][0],
//       onClick: () => {
//         update(locations[1]);
//       },
//     },
//     {
//       text: locations[0]["button text"][1],
//       onClick: () => {
//         update(locations[1]);
//       },
//     },
//     {
//       text: locations[0]["button text"][2],
//       onClick: () => {
//         update(locations[2]);
//       },
//     },
//   ]);

//   const update = (location) => {
//     console.log(location["button text"][0]);
//     setButtons([
//       {
//         text: location["button text"][0],
//         onClick: location["button functions"][0],
//       },
//       {
//         text: location["button text"][1],
//         onClick: location["button functions"][1],
//       },
//       {
//         text: location["button text"][2],
//         onClick: location["button functions"][2],
//       },
//     ]);

//     setText(location.text);
//   };

//   return (
//     <div style={theme.controls} id="controls">
//       {buttonList.map((button, i) => (
//         <button
//           onClick={button.onClick}
//           key={i + 1}
//           style={theme.button}
//           id={`button${i + 1}`}
//         >
//           {button.text}
//         </button>
//       ))}

//       <div style={theme.text} id="text">
//         {text}
//       </div>
//     </div>
//   );
// };

// function MonsterStats() {
//   return (
//     <div style={theme.monsterStats} id="monsterStats">
//       <span className="stat">
//         Monster Name:{" "}
//         <strong>
//           <span id="monsterName"></span>
//         </strong>
//       </span>
//       <span className="stat">
//         Health:{" "}
//         <strong>
//           <span id="monsterHealth"></span>
//         </strong>
//       </span>
//     </div>
//   );
// }

// function Text({ updateText }) {
//   if (updateText == undefined) {
//     var text =
//       " Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.";
//   } else {
//     var text = updateText;
//   }

//   return (
//     <div style={theme.text} id="text">
//       {text}
//     </div>
//   );
// }
