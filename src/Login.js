import React, { useState } from "react";

export const Login = (props) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [isSignup, setInsignup] = useState(true);
  const {
    signup,
    signin,
    email,
    setEmail,
    password,
    setPassword,
    IsSignup,
    setIsSignup,
    isLoggined,
    setIsLoggined,
  } = props;
  return (
    <div>
      {/* {isLoggined
        ? alert("로그인이 되었습니다.")
        : alert("로그인이 되지 않았습니다.")} */}
      <div>
        <label>UserName</label>
        <input
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <p>{emailError}</p> */}
        <label>password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <p>{passwordError}</p> */}
      </div>
      <button onClick={signin}>로그인</button>
      <button onClick={signup}>회원가입</button>
    </div>
  );
};
