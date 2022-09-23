import './global.css';
import styled from "styled-components";
import { InputList } from './components/InputList';
import { HeaderList } from './components/HeaderList';




  const Content = styled.div`
      max-width: 350px;
      width: 90%;
      margin: 60px auto;
      
  `
export function App() {

  return (
   
    <Content >
     <HeaderList/>
    
    <InputList/>
    </Content>
    
  )

}

