import styled from "styled-components";
import reactLogo from "../assets/react.svg";
import googlelogo from "../assets/logogoogle.png";
import { UserAuth } from "../context/AuthContext";

export function Login() {
  const { signInWithGoogle } = UserAuth();

  return (
    <Container>
      <div>
        

        <img src={reactLogo} className="logo react" alt="React logo" />

      </div>
      <h1> React Google authentication</h1>
      <img src={googlelogo} className="logo google" alt="React logo" />
      <div className="card">
        <button onClick={signInWithGoogle}>Iniciar con Google</button>
        
      </div>
      <p className="read-the-docs">
        
      </p>
    </Container>
  );
}
const Container = styled.div`
  background-color: #242424;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: rgba(255, 255, 255, 0.87);
  .card {
    display:flex;
    flex-direction:column;
    gap: 20px;
    button{
      color:white;
    }
  }
`;
