import React,{Component} from "react";

class Text extends Component{
    constructor()
{
    super();
    this.state={
        subject:""
    };
}
handleChange=event=>{
    this.setState({
        subject:event.target.value
    })
}

render(){
return(
    <div>
        <input placeholder="enter subject"
         onChange={this.handleChange}></input>
        <p>{this.state.subject} </p>
    </div>
)
}
}
export default Text;