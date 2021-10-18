import * as React from "react";
import { atom, useAtom } from "jotai";

const delayed = atom(
  async () => new Promise((resolve) => setTimeout(() => resolve(42), 5000))
);

export function Child() {
  const [num] = useAtom(delayed);

  return (
    <>
      <p>I'm Lazy</p>
      <em>{num}</em>
    </>
  );
}

export default Child;
