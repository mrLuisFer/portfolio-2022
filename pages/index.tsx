import type { NextPage } from "next";
import styled from "styled-components";

const P = styled.p`
  color: red;
`;

const Home: NextPage = () => {
  return (
    <div>
      <P>Hello world</P>
    </div>
  );
};

export default Home;
