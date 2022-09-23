import '../global.css';
import styled from "styled-components";

const HeaderL = styled.div`

    display: flex;
    justify-content: space-between;
    
h1{
    letter-spacing: 3px;
    color: #fff;
}
img{
    height: 34px;
}
  
`

export function HeaderList () {
  return (
    
    <>
    <HeaderL>
      
    <h1>TODO</h1>
    <img src="../src/assets/icon-sun.svg" alt="dark mode icon" />
    </HeaderL>
    </>
      
    
    
  )
}