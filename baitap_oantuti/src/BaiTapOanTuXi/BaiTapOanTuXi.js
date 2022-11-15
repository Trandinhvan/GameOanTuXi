import React, { Component } from 'react'
import './BaiTapOanTuXi.css'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'
import {connect} from 'react-redux'

class BaiTapOanTuXi extends Component {

  render() {
    
    return (
      <div className='gameOanTuXi'>
        <div className='row mt-1'>
            <div className='col-4'>
                <Player></Player>
            </div>
            <div className='col-4'>
                <KetQuaTroChoi></KetQuaTroChoi>
                <button className='btn btn-success p-2 display-4 mt-3' onClick={()=>{this.props.playGame()}}>Play game</button>
            </div>
            <div className='col-4'>
                <Computer></Computer>
            </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    playGame: () =>{
      let count = 0;
      //khai báo hàm lặp đi lặp lại
      let randomComputerItem = setInterval(()=>{
        dispatch({
          type: 'RAN_DOM'
        })
        count++;
        if(count >10  ){
          //dừng setInterval.
          clearInterval(randomComputerItem);

          dispatch({
            type: 'END_GAME',
          })
        }
      },100)
      
    }
  }
}

export default connect(null,mapDispatchToProps)(BaiTapOanTuXi)