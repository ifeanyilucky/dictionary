import React from "react";
import axios from "axios";
import styled from "styled-components";

const Home = () => {
  const [query, setQuery] = React.useState("");
  const [result, setResult] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  //   const queryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
  const handleChange = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };
  React.useEffect(() => submitQuery());
  const submitQuery = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const { data } = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
      );

      console.log(data);
      setResult(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <Wrapper>
      <div className="container">
        <div className="search_input_wrapper">
          <form onSubmit={submitQuery}>
            <input
              type="text"
              placeholder="What would you like to search?"
              onChange={handleChange}
              value={query}
              className="search_input"
            />
            <button type="submit">Search</button>
          </form>
        </div>

        {/* SEARCH RESULTS SYNTAX STARTS HERE */}
        <div>
          {loading && <h1>Loading...</h1>}
          {!loading &&
            result.map((word) => (
              <>
                <div>
                  <h1 className="wordTitle">{word.word}</h1>
                  <em>{word.phonetic}</em>
                  <br />
                  <h3>{word.meanings[0].partOfSpeech}</h3>
                  <p>{word.meanings[0].definitions[0].definition}</p>
                  <em>Example: {word.meanings[0].definitions[0].example}</em>
                </div>
                <div>
                  {word.length > 1 ? (
                    <>
                      <h3>{word.meanings[1].partOfSpeech}</h3>
                      <p>{word.meanings[1].definitions[0].definition}</p>
                      <em>
                        Example: {word.meanings[1].definitions[0].example}
                      </em>
                    </>
                  ) : null}
                </div>
                <div>
                  {word.length > 2 ? (
                    <>
                      <h3>{word.meanings[2].partOfSpeech}</h3>
                      <p>{word.meanings[2].definitions[0].definition}</p>
                      <em>
                        Example: {word.meanings[2].definitions[0].example}
                      </em>
                    </>
                  ) : null}
                </div>
              </>
            ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .wordTitle {
    font-size: 50px !important;
  }
  .search_input_wrapper {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;

    .search_input {
      background-color: transparent;
      border-bottom: 1px solid var(--color);
      width: 500px;
      padding: 13px 16px;
      color: var(--color);
      outline: none;
      border-top: none;
      border-right: none;
      border-left: none;
      &::placeholder {
        color: #a4a3a3;
        font-size: 24px;
      }
    }
    button {
      background-color: var(--color);
      border: 1px solid var(--color);
      padding: 13px 12px;
    }
  }
  .logo {
    font-family: var(--logo-font);
  }
`;

export default Home;
