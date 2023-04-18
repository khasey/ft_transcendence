import React from 'react'
import './Score.scss'

function Score() {
  return (
    <header style={style.all}>
        <div style={style.all_in}>
           <div className="all">
            <div className="all_left">
              <div className="all_left_top">
                <span className="all_left_top_title">
                  TOP PLAYER
                </span>
              </div>
            </div>
            <div className="all_right">
              <div className="all_right_match">
                <span className="all_right_match_title">
                  ALL MATCHS
                </span>
              </div>
            </div>
           </div>
        </div>
    </header>
  )
}

export default Score

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
    width: '94vw',
    height: '90vh',
    borderRadius: '20px',
    background: 'rgba(75, 75, 75, 0.11)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(15px)',
    webkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(75, 75, 75, 0.3)',
    marginLeft: '5%',
  }
};
