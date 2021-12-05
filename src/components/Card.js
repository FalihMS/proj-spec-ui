import React from 'react';

const Card = function Card(props){
    return(
      <div style={{margin:10, border:'1px solid rgb(255, 99, 132)', borderRadius:10, background:'rgba(255, 99, 132, 0.5)', textAlign:'left'}}>
        {props.children}
      </div>
    )
  }
const CardBody = function CardBody(props){
    return(
      <div style={{paddingInline:20, paddingBlock:10}}>
        {props.children}
      </div>
    )
  }

export { Card, CardBody }