import { useContext } from "react";
import { Context } from "../App";
import Test2 from "./test2";
function test() {
  const { useName, setName } = useContext(Context);
  return (
    <div className=" border-e-red-400 border">
      <h1>WANCHALOEM</h1>
      <button
        className=""
        onClick={() => {
          setName("BT");
        }}
      >
        change name
      </button>
      <Test2 />
    </div>
  );
}

export default test;
