import '../global.css';
import styled from "styled-components";

const Todo = styled.form`
form{
    width: 100%;
    height: 83px;
}

input{
   width: 100%;
   padding: 15px 30px;
   border-radius: 5px;
   margin-top: 2rem;
   background: var(--very-dark-desaturated-blue);
   font-size: 16px;
   color: #fff;
   letter-spacing: 1px;
   outline: none;
   border: none;
}
input::placeholder{
   color: #fff;
   letter-spacing: 2px;
}

 
`
export function InputList () {
  return(
    
    <Todo>
    <input type="text" placeholder="Create a new todo.." id="text"></input>
    </Todo>
    
   
  )
}