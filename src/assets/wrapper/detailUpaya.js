import styled from "styled-components";

const Wrapper = styled.section`
  *:not(blockquote) {
    font-family: "Satoshi", sans-serif;
  }

  blockquote {
    font-family: "SoccerLeague", sans-serif; // Contoh font yang berbeda untuk blockquote
  }
`;

export default Wrapper;
