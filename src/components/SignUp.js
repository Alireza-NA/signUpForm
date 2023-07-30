import React, { useState } from 'react';

const SingUp = () => {
    const [data , setData] = useState({
        name: "",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:false
    });
    return (
        <div>
            <form>
                <h2>SingUp</h2>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={data.name}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={data.email}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={data.password}/>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="Confirm Password" value={data.confirmPassword}/>
                </div>
                <div>
                    <label>I accept terms of privacy policy</label>
                    <input type="checkbox" name="isAccepted" value={data.isAccepted}/>
                </div>
                <div>
                    <a href='#'>Login</a>
                    <button type='submit'>SignUp</button>
                </div>
              
            </form>
        </div>
    );
};

export default SingUp;