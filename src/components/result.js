import useSound from "use-sound";
import styled from "styled-components";
const Result = ({ word }) => {
  const [play] = useSound(word.phonetics[0].audio);

  return (
    <Wrapper>
      <div className="row mt-5">
        <div className="col-md-10 mx-auto">
          <div>
            <h1 className="wordTitle">{word.word}</h1>
            <em>{word.phonetic}</em>
            <button onClick={play} className="sound">
              🔊
              {/* <img src="/icon/volume-up-11.svg" alt="volume-up" /> */}
            </button>
          </div>
          <br />
          <ol>
            <li>
              <h5>{word.meanings[0].partOfSpeech}</h5>
              <p>{word.meanings[0].definitions[0].definition}</p>
              <ul>
                <li>
                  <em> {word.meanings[0].definitions[0].example}</em>
                </li>
              </ul>
            </li>

            {word.length > 1 ? (
              <li>
                <h5>{word.meanings[1].partOfSpeech}</h5>
                <p>{word.meanings[1].definitions[0].definition}</p>
                <ul>
                  <li>
                    <em>{word.meanings[1].definitions[0].example}</em>
                  </li>
                </ul>
              </li>
            ) : null}

            {word.length > 2 ? (
              <li>
                <h5>{word.meanings[2].partOfSpeech}</h5>
                <p>{word.meanings[2].definitions[0].definition}</p>
                <ul>
                  <li>
                    <em>{word.meanings[2].definitions[0].example}</em>
                  </li>
                </ul>
              </li>
            ) : null}
          </ol>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sound {
    background-color: transparent;
    outline: none;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
`;

export default Result;
