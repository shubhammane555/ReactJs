// import ReactDOM from "react-dom";
import React, {Component} from "react";

export class ClassCount extends Component{
    constructor(props){
    super(props);
    this.state={
cnt:this.props.cnt,
    };
}
Increment =()=>{
    this.setState({
        cnt:this.state.cnt +1,
    });
};

Decrement =()=>{
    this.setState({
        cnt:this.state.cnt-1,
    });
};

    render(){
        return (
            <div>
                <p>Counter:{this.state.cnt}</p>
                <button onClick={this.Increment}>Increment</button>
                <button onClick={this.Decrement}>Decrement</button>
            </div>
        );
        }
}
// ReactDOM.render(<ClassCount cnt={0} />, document.getElementById("root"));