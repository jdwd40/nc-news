import React, { useState } from 'react';

const CreateAccount = () => {
  const [realName, setRealName] = useState('');
  const [userName, setUserName] = useState('');

  const handlechange = () => {};

  return (
    <div>
      <form>
        <label>Enter Your Name</label>
        <input type="text" value={realName} onChange={handlechange} />
        <label>Choose a User Name</label>
        <input type="text" value={userName} onChange={handlechange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateAccount;
