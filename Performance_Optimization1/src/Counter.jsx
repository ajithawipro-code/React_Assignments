import React, { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";


function Counter() {
  const [count, setCount] = useState(0);

  const products = [
    { id: 1, name: "Laptop", price: 40000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "TV", price: 20000 },
  ];

  const totalPrice = useMemo(() => {
    console.log("Calculating total...");
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);

  const handleSelect = useCallback((product) => {
    console.log("Selected:", product.name);
  }, []);

  return (
    <div>
      <h2>React Performance Optimization</h2>

      <p>Total Price: {totalPrice}</p>

      <button onClick={() => setCount((c) => c + 1)}>Counter: {count}</button>

      <ProductList products={products} onSelect={handleSelect} />
    </div>
  );
}
export default Counter;

// import React from "react";
// import { useState, useMemo } from "react";

// function Counter(){

//     const[counterOne,setCounterOne]=useState(0);

//      const[counterTwo,setCounterTwo]=useState(0);

//      const IncrementOne=()=>{

//         setCounterOne(counterOne+1);

//      };

//      const isEven=useMemo(()=>{

//         let i=0;
//         while(i<1000000000)
//         {
//             i++;
//         }

//         return counterOne%2==0;

//      },[counterOne]);

//      const IncrementTwo=()=>{

//         setCounterTwo(counterTwo+1);

//      };

//     return (

//         <div>

//             <div>
//                 <button onClick={IncrementOne}>Counter One - {counterOne}</button>
//                 <span>{isEven ? 'Even' : 'Odd'}</span>
//             </div>
//             <div>
//                 <button onClick={IncrementTwo}>Counter Two - {counterTwo}</button>
//             </div>
//         </div>

//     );

// };

// export default Counter;
