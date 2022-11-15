import React, { Component } from 'react'
import {connect} from 'react-redux'


class Player extends Component {
  render() {
    return (
      <div className='text-center'>
        <div className='theThink'>
            
            <img style={{width:'100px',height:'100px',transform:'rotate(180deg)'}} src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} alt={this.props.mangDatCuoc.find(item => item.datCuoc ===true).hinhAnh}></img>
        </div>
        <div className='speech-bubble'></div>
        <img style={{width:'200px',height:'200px'}} src='./img/player.png' alt='player'></img>
        <div className='row'>
            <div className='col'>

            </div>
            {this.props.mangDatCuoc.map((item,index)=>{

              //xét giá trị đặt cược thêm viền cho item được chọn.
              let border = {};
              if(item.datCuoc){
                border = {border: '3px solid orange'}
              }

                return <button key={index} style={border} className='btnItem' onClick={()=>{this.props.datCuoc(item.ma)}}>
                <img src={item.hinhAnh} alt={item.hinhAnh}></img>
                </button>
            })}
            <div className='col'>

            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc
  }
}

//đưa dl lên redux.
const mapDispatchToProps = dispatch => {
  return {
      datCuoc: (maCuoc)=>{
          dispatch({
              type: 'CHON_KEO_BUA_BAO',
              maCuoc
          })
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player)