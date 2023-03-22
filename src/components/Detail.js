import React from "react";
import styled from "styled-components";

const Detail = () => {
  return(<Container>
          <Background>
             <img src="https://wallpaperaccess.com/full/288727.jpg" alt="" />
          </Background>
         </Container>
  )
};

const Container = styled.div`
position: relative;
  top:72px;
  min-height: calc(100vh-250px);
  overflow-x:hidden;
  display: block;
  padding:0 calc(3.5vw + 5px);
`;

const Background= styled.div`


`

export default Detail;
