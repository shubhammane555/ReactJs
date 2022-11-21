import React, { Component } from 'react'

export default class UserDetail extends Component {
    constructor(){
        super();
        this.state={
            id:0,
            items:[],
            findItems:''
        }
    }

    handleChange=(event)=>{
      this.setState({
        id: event.target.value
      })

      

    }

    componentDidMount(){
      fetch("https://reqres.in/api/users?page=2")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result.data
          });
          console.log(this.state.items);
        },
        (error) => {
          console.log(error);
        }
      )
    }

    handleSubmit=(event)=>{
      event.preventDefault();
      this.setState({
        id: event.target.value,
      })

      const findData = this.state.items.filter((val)=>{
        return val.id === this.state.id;
      })

      alert(findData);

      this.setState({
        findItems: findData,
      })
      

    }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
            <input type='number' placeholder='search' onChange={this.handleChange} />
            <input type='submit' value='submit'/>
         </form>
         {this.state.items.map((val, index)=> <div key={index}>{val.id} {val.email} {val.first_name}{val.last_name}</div>)}

       
        <p>{this.state.findItems.id} {this.state.findItems.first_name}</p>
      </div>
    )
  }
}
