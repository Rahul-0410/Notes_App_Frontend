import React, { useContext, useState } from 'react';
import styles from './form.module.scss';
import BrandLogo from '../../../../components/shared/brand'; 
import Arrow from "../../../../assets/arrow.svg";
import Button from '../../../../components/atoms/button';
import { GoogleloginUser, loginUser } from '../../../../apis/Auth-util';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthContext';
import { GoogleLogin } from '@react-oauth/google';

function Form() {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(userData);
      console.log('Login success:', response);
      login(); // Call the login function from context
      navigate("/notes");
    } catch (error) {
      console.error('Login failed:', error);
      alert('INVALID CREDENTIAL');
    }
  };

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      const response = await GoogleloginUser(credentialResponse.credential);
      console.log('Google login success:', response);
      login(); // Call the login function from context
      navigate('/notes');
    } catch (error) {
      console.error('Google login failed:', error);
      alert('GOOGLE LOGIN FAILED');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <section className={styles["form-container"]}>
      <BrandLogo />
      <article>
        <Button text='Join with Google' icon='bi:google' />
        {/* <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
            handleGoogleLoginSuccess(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }} */}
        {/* /> */}
      </article>

      <div className={styles["line-text"]}>or join using email</div>

      <form onSubmit={handleLogin}>
        <input
          type='email'
          name='email'
          required={true}
          placeholder='email...'
          value={userData.email}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          required={true}
          placeholder='password...'
          value={userData.password}
          onChange={handleChange}
        />

        <button type='submit'><img src={Arrow} alt='arrow-icon' /> LogIn</button>
      </form>
    </section>
  );
}

export default Form;
