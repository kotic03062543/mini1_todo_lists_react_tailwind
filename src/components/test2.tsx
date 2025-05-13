import React from "react";
import { useContext } from "react";
import { Context } from "../App";

function test2() {
  const { setName } = useContext(Context);
  return (
    <div>
      <h1
        onClick={() => {
          setName("AOY");
        }}
      >
        test2
      </h1>
    </div>
  );
}

export default test2;
