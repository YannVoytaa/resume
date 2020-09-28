import React from 'react'


class Topic extends React.Component{
  render(){
    return(
    <div className='topic'>
      <h1 className='scroll'>{this.props.subject}</h1>
      <div className='container scroll-block'>{this.props.subject}{this.props.text}{this.props.subject}</div>
    </div>
  )}
}


export default Topic
