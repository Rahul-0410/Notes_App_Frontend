import React, { useState } from 'react'
import styles from './form.module.scss'
import BrandLogo from '../../../../components/shared/brand' 
import Arrow from "../../../../assets/arrow.svg"
import Button from '../../../../components/atoms/button'
import { SignupUser } from '../../../../apis/Auth-util'
import { useNavigate } from 'react-router-dom'

function Form() {
  const [userData, setUserData] = useState({
    username: "", email: "", password: "", confirmpassword: ""
});

const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateData()) {
        const user = await SignupUser(userData);
        navigate("/notes");
    }
}

const validateData = () => {
    return (
        userData.email?.length &&
        userData.password?.length &&
        userData.confirmpassword?.length &&
        userData.username?.length &&
        userData.password === userData.confirmpassword
    );
};

const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
}
  return (
    <section className={styles["form-container"]}>
     <BrandLogo/>
    <article>

     <Button
     text='Join with Google' icon='bi:google'
     />
    </article>

     <div className={styles["line-text"]}> or join using email</div>

     <form onSubmit={handleSubmit}>
      <input type='text' name='username' required={true} placeholder='your name...' value={userData.username} onChange={handleInputChange}/>
      <input type='email' name='email' required={true} placeholder='email...' value={userData.email} onChange={handleInputChange}/>
      <input type='password' name='password' required={true} placeholder='password...' value={userData.password} onChange={handleInputChange}/>
      <input type='password' name='confirmpassword' required={true} placeholder='confirmpassword...' value={userData.confirmpassword} onChange={handleInputChange}/>

      <button type='submit'><img src={Arrow} alt='arrow-icon'/> SignUp</button>

     
     </form>

    </section>
  )
}

export default Form
