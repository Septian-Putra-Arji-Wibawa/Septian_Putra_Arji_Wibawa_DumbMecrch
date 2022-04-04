import React from 'react'
import formStyle from './PageStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigasi from '../Componen/Navigasi';
import ProfPic from '../Componen/prof.jpg';
import MyTransaction from '../Componen/MyTransaction';


function Profile () {
  return (
    <div>
        <Navigasi/>
        <h1 style={formStyle.textOnProfile}>My Profile</h1>
        <div style={formStyle.containerMainProfile}>
            <div style={formStyle.containerContentProfile}>
                <div style={formStyle.containerLeftProfile}>
                    <img style={formStyle.profilePict} src={ProfPic} alt=''/>
                    <div style={{marginTop:'7%', marginLeft:'3%', color:'white'}}>
                        <h5 style={formStyle.textBioHeader}>Name </h5>
                        <p>Septian Putra Arji Wibawa</p>
                        <h5 style={formStyle.textBioHeader}>Email</h5>
                        <p>Septian@mail.com</p>
                        <h5 style={formStyle.textBioHeader}>Phone</h5>
                        <p>123456789</p>
                        <h5 style={formStyle.textBioHeader}>Gender</h5>
                        <p>Male</p>
                        <h5 style={formStyle.textBioHeader}>Address</h5>
                        <p>Bekasi</p>
                    </div>                
                </div>
                
                
                <div style={formStyle.containerRightProfile}>
                    <h1 style={formStyle.textOnProfile2}>My MyTransaction</h1>

                    <MyTransaction/>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default Profile
