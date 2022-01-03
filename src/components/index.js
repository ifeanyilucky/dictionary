import React from "react";
import axios from "axios";
const Home = () => {
  const [query, setQuery] = React.useState("");
  const [result, setResult] = React.useState([]);
  //   const queryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
  const handleChange = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };
  const submitQuery = async (e) => {
    e.preventDefault();
    await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
      .then((res) => {
        console.log(res.data);
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <form onSubmit={submitQuery}>
        <input
          type="text"
          placeholder="query here"
          onChange={handleChange}
          value={query}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {result.map((word) => (
          <>
            <h1>{word.word}</h1>
          </>
        ))}
      </div>
    </>
  );
};

export default Home;
