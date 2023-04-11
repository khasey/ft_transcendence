import React from 'react'
import './Login.scss'
import Checkbox from '@mui/material/Checkbox';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import TextField from '@mui/material/TextField';
import ReactPlayer from "react-player";

function Login() {
  return (
    <header style={style.all}>
        <div style={style.all_in}>
          <div className="login_page">
            <div className="login_page_box">
              
              <div className="login_page_box_photo">
              <div className="login_page_box_photo_ph">
                
              </div>
               
                {/* <img src="./images/background_login.jpg" alt="" className='login_page_box_photo_image'/> */}
                <ReactPlayer
                  className="login_page_box_photo_player"
                  url="./images/FlexPong.mp4"
                  playing={true}
                  controls={true}
                  loop={true}
                  muted={true}
                  playsinline={true}
                  width={300}
                  height={300}
                />
                 <span className="login_page_box_photo_text">
                Bienvenue sur notre site de jeu en ligne ! Avant de vous connecter, 
                nous avons décidé de vous proposer une petite distraction : le célèbre jeu Pong. 
                Pour ceux qui ne le connaissent pas encore, Pong est un jeu vidéo de tennis de table qui 
                a été créé dans les années 70. Le principe est simple : deux joueurs s'affrontent en faisant 
                rebondir une balle sur une raquette virtuelle, chacun devant renvoyer la balle vers le camp 
                adverse sans la laisser sortir du terrain.
                </span>
                {/* <img src="./images/background_login.jpg" alt="" className='login_page_box_photo_image'/> */}
              </div>
              <div className="login_page_box_id">
                <div className="login_page_box_id_in">
                  <div className="login_page_box_id_in_title">
                    USER LOGIN
                  </div>
                  <div className="login_page_box_id_in_username">
                    <PersonRoundedIcon className='login_page_box_id_in_username_icon'/>
                    <TextField id="standard-basic"  variant="standard" style={{marginLeft:"5%", marginBottom:"1%"}} />
                  </div>
                  <div className="login_page_box_id_in_password">
                    <LockRoundedIcon className='login_page_box_id_in_username_icon'/>
                    <TextField id="standard-basic"  variant="standard" style={{marginLeft:"5%", marginBottom:"1%"}}/>
                  </div>
                  <div className='login_page_box_id_in_forgot'>
                    <span className='login_page_box_id_in_forgot_text'>
                       <Checkbox/>
                       stay connected
                       </span>
                    <span className='login_page_box_id_in_forgot_text1'>forgot password?</span>
                  </div>
                  <div className='login_page_box_id_in_connexion'>
                    <div className="login_page_box_id_in_connexion_title">
                      <span>CONNEXION</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           </div>
        </div>
    </header>
  )
}

export default Login

const style: {
    all: {
      display: string,
      justifyContent: string,
      alignItems: string,
      width: string,
      height: string,
    },
    all_in: {
      width: string;
      height: string;
      borderRadius: string;
      background: string;
      boxShadow: string;
      backdropFilter: string;
      webkitBackdropFilter: string;
      border: string;
      marginLeft: string;
    }
  } = {
    all: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
    },
    all_in: {
      width: '87vw',
      height: '90vh',
      borderRadius: '20px',
      background: 'rgba(75, 75, 75, 0.11)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(15px)',
      webkitBackdropFilter: 'blur(5px)',
      border: '1px solid rgba(75, 75, 75, 0.3)',
      marginLeft: '150px',
    }
  };
  