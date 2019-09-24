import React, {Component} from 'react';

export default class ItemAddComponent extends Component{
    
    state = {
        label: '',
    }
    inputHande = (e) =>{
        this.setState({
            label: e.target.value
        }); 
    }
    onSubmit = (e) =>{
        e.preventDefault();
        if(this.state.label !== '') this.props.onItemAdded(this.state.label);
        this.setState({
            label: '',
        })
    }
    render(){
        return(
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
                <input type="text" placeholder="Create new one"
                        className="form-control mr-2" 
                        onChange={this.inputHande}
                        value={this.state.label}/>
                <button className="btn btn-light shadow"
                       >
                    Add 
                </button>
            </form>
        );
    }
} 