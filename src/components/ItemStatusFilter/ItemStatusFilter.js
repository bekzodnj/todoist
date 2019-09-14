import React, {Component} from 'react';

import './ItemStatusFilter';


export default class ItemStatusFilter extends Component{
  render(){
    return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-light">All</button>
        <button type="button"
                className="btn btn-outline-light">Active</button>
        <button type="button"
                className="btn btn-outline-light">Done</button>
      </div>
    );
  }
}
