/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { MixedCheckbox } from "@reach/checkbox";
import "@reach/checkbox/styles.css";

export const name = "Controlled";

export function Example() {
  const [state, setState] = React.useState(false);
  return (
    <div>
      <MixedCheckbox
        id="whatever-input"
        value="whatever"
        checked={state}
        onChange={event => {
          const { checked } = event.target;
          setState(checked);
        }}
      />
      <label htmlFor="whatever-input">
        You can control the state WHATTTTTT
      </label>
      <button onClick={() => setState(!state)}>
        Toggle that checkbox baby
      </button>
      <button onClick={() => setState("mixed")}>Mix it up</button>
    </div>
  );
}
