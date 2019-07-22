import * as React from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions/data';
import Listing from './listing';


export class Table extends React.Component<any, any> {
  componentDidMount() {
    this.props.dispatch(fetchData());
  }

  render() {
    let listings;
    if(this.props.loading === true){
      listings = <div>Loading Data...</div>;
    }
    else if(this.props.data !== null){
      listings = this.props.data.map((item: any, index: any) => {
        return <Listing key={index} name={item.name} email={item.email} city={item.address.city} company={item.company.name} />;
      })
    }

    return(<section >
      <ul className='table'>
        <li className='listing'>
          <div className='column bold' >Name</div>
          <div className='column bold' >Email </div>
          <div className='column bold'>City</div>
          <div className='column bold' >Company</div>
        </li>
        {listings}
      </ul>
    </section>);
  }
}


function mapStateToProps(state: any){
  return{
    data: state.data.data
  }
}

export default connect(mapStateToProps)(Table);