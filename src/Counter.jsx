import { Component } from "react";

class Counter extends Component{
constructor(props){
    super(props)
    this.state={
       count:0
    }
    console.log(this.props.newClass)
}

decrement=()=>{
    this.setState(prveState=>({count: prveState.count-1}))
}


render(){

    return(<><h1>{this.props.newClass}</h1>
 {/* <button onClick={()=>this.setState({count: this.state.count - 1})}>decrement</button><h1>{this.state.count}</h1><button  onClick={()=>this.setState({count: this.state.count + 1})}>increment</button>    */}
 {/* <button onClick={()=>this.setState (prevState =>({count: prevState.count - 1}))}>decrement</button><h1>{this.state.count}</h1><button  onClick={()=>this.setState({count: this.state.count + 1})}>increment</button>    */}


 <button onClick={this.decrement}>decrement</button><h1>{this.state.count}</h1><button  onClick={()=>this.setState({count: this.state.count + 1})}>increment</button>   
    </>)
}
}
export default Counter