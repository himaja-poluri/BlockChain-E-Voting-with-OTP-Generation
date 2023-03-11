import React, { Component } from 'react';
import "../css/admin.css"
class Admin extends React.Component{
    render(){
        return(
            <div className="mainDivAdmin">
                <div className="headingDivAdmin"><span className="adminTxtAdmin">Admin</span></div>
                <div className="bottomDivAdmin">
                    <div className='passwordDivAdmin'>
                        <div className="passwordTxtDivAdmin">         
                            <span className='passwordTxtAdmin' >Password</span>                 
                        </div>
                        <input className='inputForPassAdmin' type='password'></input>
                        <button className='submitButtonAdmin'>Submit</button>
                    </div>
                </div>

            </div>)
    }
}
export default Admin;