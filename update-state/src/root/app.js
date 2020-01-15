import React ,{Component} from 'react';
import Mark from '../component/mark';

class App extends Component{
    constructor(){
        super();
        this.state={
            roll:1
        }
    }
    eventHanle=()=>{
        console.log('button clicked');
        this.setState({
            roll:this.state.roll+1
        })
    }
    render(){
        return(
            <React.Fragment>
                <Mark roll={this.state.roll}/>
                <button onClick={this.eventHanle}>++</button>
            </React.Fragment>
        )
    }
}
export default App;

