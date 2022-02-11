import React, { useState } from 'react';
import { checkUserExists } from '../utils/api';
import { UserContext } from '../contexts/User';
import { useContext } from 'react';

const SignInPage = () => {
  const [userName, setUserName] = useState('');
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const handleChange = (e) => {
    setUserName((currName) => {
      let newName = { ...currName };
      newName = e.target.value;
      return newName;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkUserExists(userName).then((user) => {
      setLoggedInUser(user);
      console.log('from handlesubmit', loggedInUser);
    });
  };

  return (
    <div>
      <h4>{loggedInUser}</h4>
      <h3>Sign in to NC News</h3>
      <form onSubmit={handleSubmit}>
        <label>User Name</label>
        <input type="text" value={userName} onChange={handleChange} />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignInPage;
