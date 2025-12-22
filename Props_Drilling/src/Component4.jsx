import Component5 from "./Component5";

const Component4 = (props) => {
  return (
    <div>
      <h4>Component 4</h4>
      <h4>This is prop c: {props.c}</h4>
      <h4>This is prop d: {props.d}</h4>

      <Component5 {...props} />
    </div>
  );
};

export default Component4;
