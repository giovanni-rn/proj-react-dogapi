import { useEffect } from "react";
import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [link, setLink] = useState("");

  useEffect(() => {
    const fetchLink = async () => {
      const { data } = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setLink(data.message);
    };
    fetchLink();
  }, []);

  const newDog = async () => {
    const { data } = await axios.get("https://dog.ceo/api/breeds/image/random");
    setLink(data.message);
  };

  return (
    <div className="App">
      <img src={link} alt="" />
      <button onClick={() => newDog()}>NOUVEAU CHIEN</button>
    </div>
  );
}

export default App;
