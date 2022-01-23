import { useEffect, useState } from "react";
import "./App.css";
import { Login } from "./Login";
import app from "./firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { async } from "@firebase/util";
function App() {
  //비번 아이디
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(true);
  const [isLoggined, setIsLoggined] = useState(false);
  const auth = getAuth();
  //회원가입
  const signup = async () => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log(result);
  };

  //로그인
  const signin = async () => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log(result);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggined(true);
      } else {
        setIsLoggined(false);
      }
      return unsubscribe;
    });
  }, []);

  return (
    <div className="App">
      <Login
        signup={signup}
        signin={signin}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        isSignup={isSignup}
        setIsSignup={setIsSignup}
        isLoggined={isLoggined}
        setIsLoggined={setIsLoggined}
      />
    </div>
  );
}

export default App;
