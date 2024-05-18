import { useState, useEffect } from "react";
import axios from "axios";

// const App = () => {
//  const [data, setData] = useState(false);

//  useEffect(() => {
//   setData(true);
//  }, []);
//  console.log(data);

//   return (
//     <div>
//       <h1>{false? 'single':'married'}</h1>
//     </div>
//   );
// };

const App = () => {
  const[data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") //link api
      .then((res) => {
        console.log(res?.data); //berhasil
        const response = res?.data;
        setData(response);
      })
      .catch((err) => console.log(err)); //gagal
  }, [])

  return (
    <div>
      {data.map(list => (
        <div>
          <p>ini data email: {list?.email}</p>
          <p>ini data name: {list?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default App;