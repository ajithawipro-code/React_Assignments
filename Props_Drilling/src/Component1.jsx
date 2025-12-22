import Component2 from "./Component2";

const Component1 = () => {
  const a = "value A";
  const b = "value B";
  const c = "value C";
  const d = "value D";
  const e = "value E";
  const f = "value F";

  return (
    <div>
      <h4>Component 1</h4>
      <Component2 a={a} b={b} c={c} d={d} e={e} f={f} />
    </div>
  );
};

export default Component1;
