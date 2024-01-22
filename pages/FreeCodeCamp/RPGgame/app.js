import { useState, useEffect } from "react";
import GameStat from "./GameStatusComponents/gameStat";
import theme from "./theme";
import Controls from "./buttonControls";
import MonsterStats from "./monsterStats";


function Header({ title, meta, link }) {
  return (
    <head>
      <meta charset={meta ? meta : "utf-8"}></meta>
      <link rel="stylesheet" href={link}></link>
      <title>{title}</title>
    </head>
  );
}

export default function HomePages() {
  useEffect(() => {
    document.body.style.backgroundColor = "#0a0a23";
  });

  return (
    <>
      {/* <Header></Header> */}
      <div style={theme.body}>
        <Body></Body>
      </div>
    </>
  );
}

function Body() {
  return (
    <div style={theme.game}>
      <GameStat></GameStat>

      <div>
        <MonsterStats></MonsterStats>
      </div>
    </div>
  );
}

