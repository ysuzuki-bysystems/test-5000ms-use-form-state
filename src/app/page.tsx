"use client";

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

async function action(_state: object, payload: string): Promise<object> {
  console.log("BEGIN", payload);
  await new Promise((resolve) => setTimeout(resolve, Number.parseInt(payload, 10) ?? 5000));
  console.log("DONE", payload);

  return {};
}

export default function Home() {
  const [wait, setWait] = useState("5000");
  const [state, dispatch] = useFormState(action, {});
  useEffect(() => console.log("STATE CHANGED", state), [state]);

  return (
    <>
      <input type="number" value={wait} onChange={(event) => setWait(event.currentTarget.value)}/> ms
      <button onClick={() => dispatch(wait)}> RUN </button>
    </>
  );
}
