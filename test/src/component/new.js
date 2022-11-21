import React,{useState, useEffect} from "react";

function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    console.log(items)
    useEffect(() => {
      fetch("https://reqres.in/api/users?page=2")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.data);
            console.log(result);

          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.email} <br></br> {item.first_name}
            </li>
          ))}
        </ul>
      );
    }
  }
  export default MyComponent;