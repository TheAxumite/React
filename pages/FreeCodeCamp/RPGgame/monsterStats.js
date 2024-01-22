import { useState, useEffect } from "react";
import GameStat from "./GameStatusComponents/gameStat";
import theme from "./theme";
import Controls from "./buttonControls";

export default function MonsterStats() {
    return (
      <div style={theme.monsterStats} id="monsterStats">
        <span className="stat">
          Monster Name:{" "}
          <strong>
            <span id="monsterName"></span>
          </strong>
        </span>
        <span className="stat">
          Health:{" "}
          <strong>
            <span id="monsterHealth"></span>
          </strong>
        </span>
      </div>
    );
  }