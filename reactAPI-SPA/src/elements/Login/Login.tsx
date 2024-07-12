import "./Login.css"
import { useEffect, useState } from "react";
import LoginRequest from "../api/requests";
import useGlobalState from "../../context/useGlobalState";
import { useNavigate } from "react-router-dom";





const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { state, setState } = useGlobalState();
    const navigate = useNavigate();
    const [response, setResponse] = useState('');


    useEffect(() => {
        console.log(state.user)
        if (state.user?.token) {
          navigate('/');
        }
      }, [state.user?.token, navigate]);

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      // Handle form submission logic here
      console.log('Username:', username);
      console.log('Password:', password);

        let res = await LoginRequest(username,password)
        console.log(res);
        if(res==false)
        {
            console.log('dziala');
            setResponse('invalid credentials')
        }
     

      setState({
        ...state,
        user: { name: res.firstName, email: res.email, token: res.token},
      });

     

     // console.log(state.user);

    };

   
  
    return (
      <div className="login-container">
       
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>{response}</div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };

export default Login;