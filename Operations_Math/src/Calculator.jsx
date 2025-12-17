import { useState } from "react";

function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [op, setOp] = useState("add");
  const [list, setList] = useState([]);

  function calculate() {
    let r = 0;

    if (op === "add") r = Number(a) + Number(b);
    if (op === "sub") r = Number(a) - Number(b);
    if (op === "mul") r = Number(a) * Number(b);

    setList([...list, r]);
  }

  return (
    <>
      <input type="number" onChange={(e) => setA(e.target.value)} />
      <input type="number" onChange={(e) => setB(e.target.value)} />

      <select onChange={(e) => setOp(e.target.value)}>
        <option value="add">Add</option>
        <option value="sub">Subtract</option>
        <option value="mul">Multiply</option>
      </select>

      <button onClick={calculate}>Perform Action</button>

      {
            list.map((x, i) => (
        <div key={i}> 
        
         {x} 
        
        </div>
      ))
      
      }
    </>
  );
}

export default Calculator;
