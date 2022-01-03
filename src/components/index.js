import React from "react";
import axios from "axios";
import styled from "styled-components";
import Result from "./result";

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
    e.preventDefault();
    setLoading(true);

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
        <div className="row">
          <div className="col-sm-10 mx-auto">
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
          </div>
        </div>

        {/* SEARCH RESULTS SYNTAX STARTS HERE */}
        <div>
          {/* {loading && <h1>Loading...</h1>} */}
          {!loading &&
            result.map((word) => <Result word={word} key={word.word} />)}
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
    align-items: center;
    justify-content: center;
    margin-top: 4rem;

    .search_input {
      background-color: transparent;
      border-bottom: 1px solid #b2b2b2;
      width: 100%;
      padding: 13px 0;
      color: var(--color);
      outline: none;
      border-top: none;
      border-right: none;
      border-left: none;
      font-size: 30px;
      &::placeholder {
        color: #b2b2b2;
        font-size: 30px;
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
