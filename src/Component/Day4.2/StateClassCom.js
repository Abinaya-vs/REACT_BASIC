import React,{ Component } from "react";
class StateClassCom extends Component 
{
    state={
        color:"Red",
        price:121
    }
    handleChange=()=>{this.setState({color:"Yellow"})}
    render()
    {
        return (
            <div>
            <h1>The color is {this.state.color} the Price is {this.state.price}</h1>
           <button onClick={this.handleChange}>Click me </button>
            </div>
        )
    }
}
export default StateClassCom;