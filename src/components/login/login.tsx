import React, { useState } from 'react';
import { getUser } from '../../service/fetcher';
import Axios from 'axios';
import { useRouter } from 'next/router';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignin = () => {
    // 여기에 로그인 로직을 추가하세요.
    Axios.post('/api/signin')
    .then(res => {
      if(res.status === 200){
        router.push("/checkSignin");
      }
    });
    // getUser().then((data) => {
    //   const found = data.data.find((item:{id:string, password:string}) => item.id === username);
      
    //   if(found){
    //     if(found.password === password){
    //       alert("성공");
    //     } else {
    //       alert("실패");
    //     }
    //   }
    // });
    // alert(`로그인 시도 - 사용자명: ${username}, 비밀번호: ${password}`);
  };

  return (
    <div>
      <h1>로그인 페이지</h1>
      <form>
        <div>
          <label htmlFor="username">사용자명:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSignin}>
          로그인
        </button>
      </form>
    </div>
  );
};

