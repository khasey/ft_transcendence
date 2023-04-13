import React from 'react';
import './Nav.scss'
import VideogameAssetRoundedIcon from '@mui/icons-material/VideogameAssetRounded';
import ScoreboardRoundedIcon from '@mui/icons-material/ScoreboardRounded';
import GavelRoundedIcon from '@mui/icons-material/GavelRounded';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
// import App from '../App';
// import Game from './Game';
// import Score from './Score';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function Nav() {

  const navigate = useNavigate();

  return (
    <div className="nav">
        <div className="nav_side">
            {/* <NavLink to='/login' onClick={() => navigate('game')} className="logo">
            <img src="./images/logo3.png" alt="" className="logo_pong" />
            </NavLink> */}
            <div className="nav_side_nav">
              <NavLink to='/game' className="nav_side_nav_icon">
                  <VideogameAssetRoundedIcon onClick={() => navigate('game')}/>
              </NavLink>
              <NavLink to='/score' className="nav_side_nav_icon">
                  <ScoreboardRoundedIcon onClick={() => navigate('score')} />
              </NavLink>
              <NavLink to='/rules' className="nav_side_nav_icon">
                  <GavelRoundedIcon onClick={() => navigate('rules')}/>
              </NavLink>
              <NavLink to='/credits' className="nav_side_nav_icon">
                  <PermContactCalendarRoundedIcon onClick={() => navigate('credit')} className="nav_side_nav_icon_credit"/>
              </NavLink>
              {/* <button  onClick={() => navigate('login')} className="login">
                Login
              </button> */}
            </div>
        </div>
    </div>
    
  )
}

export default Nav