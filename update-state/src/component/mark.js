import React , {Component} from 'react';

class Mark extends Component{
    constructor(props){
        super(props);
        this.state={
            mroll:this.props.roll
        }
    }


    static getDerivedStateFromProps(props , state){
        console.log("get derived state from props");
        console.log(props,state);
        if(props.roll !== state.mroll){
            return{ mroll:props.roll}
        }
        return null;
    }


    shouldComponentUpdate(nextProps,nextState){
        if(this.state.mroll < 10){
            console.log("should component update called...");
            console.log(nextProps,nextState);
            return true;
        }
        console.log(nextProps,nextState);
        return false;
    }

    getSnapshotBeforeUpdate(preProps,preState){
        console.log("get snapshot before update called...");
        console.log(preProps,preState);
        return 404;
    }

    componentDidUpdate(preProps,preState,snapshot){
        console.log("component did update called.....");
        console.log(preProps,preState,snapshot);  
    }


    render(){
        return(
            <React.Fragment>
                <h1>{this.state.mroll}</h1>
            </React.Fragment>
        )
    }
}
export default Mark;