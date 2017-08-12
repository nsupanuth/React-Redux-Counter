import React,{Component} from 'react'
import { connect } from 'react-redux'

class App extends Component{

    render(){

        const { dispatch } = this.props

        const counter = (count) => {
            return {
                type : 'COUNTER',
                payload : {
                    count 
                }
            }
        }

        return(
            <div className="box">
                Counter : {this.props.counter}
                <p className="control">
                    <button onClick = { () => dispatch(counter(1)) } className="button is-primary">+++</button>
                    <button onClick = { () => dispatch(counter(-1)) } className="button is-danger">---</button>
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return state
}

export default connect(mapStateToProps)(App)