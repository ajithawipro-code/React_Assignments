import Component6 from "./Component6";

const Component5 = ({ e, f }) => {
  return (
    <div>
      <h4>Component 5</h4>
      <h4>This is prop f: {f}</h4>

      <Component6 e={e} />
    </div>
  );
};

export default Component5;
