import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { useState } from 'react';

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [dataCards, setDataCards] = useState(null);

  const getData = async (api) => {
    setLoading(false);
    console.log('Run func');
    fetch("https://reqres.in/api/users?page=1")
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then(data => {
        setData(data);

        setDataCards(data.data.map(userData => {
          return <Card
            id={userData.id}
            first_name={userData.first_name}
            last_name={userData.last_name}
            email={userData.email}
            image={userData.avatar}
          />
        }))
      })
      .catch(error => {
        console.error("Error fetching data : ", error);
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  if (loading) return (
    <div className="App">
      <Navbar handleClick={getData} />
      <p>Loading</p>
    </div>
  );

  return (
    <div className="App">
      <Navbar handleClick={getData} />
      
      {dataCards != null ? <div className='cards'>{dataCards}</div> : "Press Button to Load Data"}
    </div>
  );
}

export default App;
