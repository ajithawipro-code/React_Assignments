import Component3 from "./Component3";

const Component2 = (props) => {
  return (
    <div>
      <h4>Component 2</h4>
      <Component3 {...props} />
    </div>
  );
};

export default Component2;
