import React, {Component} from 'react';

export default class ItemAddComponent extends Component{
    render(){
        return(
            <div className="item-add-form">
                <button className="btn btn-outline-light shadow"
                        onClick={()=>this.props.onItemAdded("New Item")}>
                    Add Item +
                </button>
            </div>
        );
    }
} 