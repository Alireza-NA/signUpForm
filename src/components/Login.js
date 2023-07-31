import React, { useEffect, useState } from 'react';
import { validate } from './validate';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify}  from './toast';
import styles from "./Signup.module.css";
import { Link } from 'react-router-dom';

const Login = () => {
    const [data , setData] = useState({
        email:"",
        password:"",
    });

    const [errors , setErrors] = useState({})
    const [touched , setTouched] = useState({})

    useEffect(() => {
        setErrors(validate(data , "login"))
        // console.log(errors);
    },[data , touched])


    const changeHandler = event =>{
            setData({...data , [event.target.name] : event.target.value})
    }

    const focusHandler = event => {
        setTouched({...touched , [event.target.name] : true})
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length){
            notify("You loged in successfully" , "success")
        } else {
            notify("Invalid data!" , "error")

            setTouched({
                email : true,
                password : true,
            })
        }
    }


    return (
        <div className={styles.container}>
            <form className={styles.formcontainer} onSubmit={submitHandler}>
                <h2 className={styles.header}>SingUp</h2>
                <div className={styles.formfild}>
                    <label>Email</label>
                    <input 
                        className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                        type="text" 
                        name="email"  
                        value={data.email} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}
                    />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formfild}>
                    <label>Password</label>
                    <input 
                        className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}
                        type="password" 
                        name="password"  
                        value={data.password} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}
                    />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formbuttons}>
                    <Link to="/signup"> Sign Up </Link>
                    <button type='submit'>Login</button>
                </div> 
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;