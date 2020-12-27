import React, { useState, useEffect } from "react";

const Component = () => {
  const data = [
    { name: "Product A", price: 300 },
    { name: "Product B", price: 200 },
    { name: "Product C", price: 700 },
    { name: "Product D", price: 500 },
    { name: "Product E", price: 650 },
    { name: "Product F", price: 800 },
  ];
  const [collapse, setCollapse] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (collapse) {
      setItems(data);
    } else {
      setItems(data.slice(0, 3));
    }
    // eslint-disable-next-line
  }, [collapse]);

  const listItem =
    items &&
    items.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      );
    });

  return (
    <div>
      <h3 className="title">List items</h3>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {listItem}
        <tr>
          <td collapse="2">
            <button className="btn" onClick={() => setCollapse(!collapse)}>
              {collapse ? "Collapse" : "View All"}
            </button>
          </td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default Component;

// method 02

// import React, { useState } from "react";

// const Component = () => {
//   const data = [
//     { name: "Product A", price: 300 },
//     { name: "Product B", price: 200 },
//     { name: "Product C", price: 700 },
//     { name: "Product D", price: 500 },
//     { name: "Product E", price: 650 },
//     { name: "Product F", price: 800 },
//   ];
//   const [collapse, setCollapse] = useState(false);
//   const listItem = data.map((item, index) => {
//     if (!collapse) {
//       if (index <= 2) {
//         return (
//           <tr key={index}>
//             <td>{item.name}</td>
//             <td>{item.price}</td>
//           </tr>
//         );
//       }
//       return null;
//     } else {
//       return (
//         <tr key={index}>
//           <td>{item.name}</td>
//           <td>{item.price}</td>
//         </tr>
//       );
//     }
//   });

//   return (
//     <div>
//       <h3 className="title">List items</h3>
//       <table>
//         <tr>
//           <th>Name</th>
//           <th>Price</th>
//         </tr>
//         {listItem}
//         <tr>
//           <td collapse="2">
//             <button className="btn" onClick={() => setCollapse(!collapse)}>
//               {collapse ? "Collapse" : "View All"}
//             </button>
//           </td>
//           <td></td>
//         </tr>
//       </table>
//     </div>
//   );
// };

// export default Component;
