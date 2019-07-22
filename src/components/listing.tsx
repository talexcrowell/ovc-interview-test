import * as React from 'react';
import {connect} from 'react-redux';


export function Listing (props: any){
  return(
    <li className='listing'>
      <div className='column' >{props.name}</div>
      <a className='column' href={`mailto:${props.email}`}>{props.email}</a>
      <div className='column' >{props.city}</div>
      <div className='column' >{props.company}</div>
    </li>
  );
}


export default connect()(Listing);