import { useState, useEffect } from "react";
import theme from "./theme";


export default function Text({ updateText }) {
 

  return (
    <div style={theme.text} id="text">
      {updateText}
    </div>
  );
}