import React, { Component } from 'react'
import {connect} from 'react-redux'

class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
      0% {top: -50px;}
      25% {top: 100px;}
      50% {top: -50px;}
      75% {top: 100px;}
      100% {top: 0px;}

    }`
    return (
        <div className='text-center'>
          <style>
            {keyframe}
          </style>
        <div className='theThink' style={{position:'relative'}}>
        <img style={{position:'absolute',left:'30%',animation:`randomItem${Date.now()} 0.5s`,width:'100px',height:'100px',transform:'rotate(180deg)'}} src={this.props.computer.hinhAnh} alt={this.props.computer.hinhAnh}></img>
        </div>
        <div className='speech-bubble'></div>
        <img style={{width:'200px',height:'200px'}} src='./img/playerComputer.png' alt='player'></img>
        
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    computer: state.BaiTapOanTuXiReducer.computer
  }
}

export default connect(mapStateToProps)(Computer)