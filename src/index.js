import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Button(props) {
    //You can pass functions to props with 'props.onClick'
    return (
        <button className={props.valChange} onClick={props.onClick}>{props.valChange}</button>
    )
} 

class Counter extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            num: 0
        }
    }

    increment(num) {
        console.log("this.state.num: ", this.state.num)
        //You HAVE to create an immutable copy of this.state.num before manipulating it. 
        let numCopy = this.state.num
        let incrementedNum = numCopy + 1
        this.setState({num: incrementedNum})
    }

    decrement(num) {
        console.log("this.state.num: ", this.state.num)
        //You HAVE to create an immutable copy of this.state.num before manipulating it.
        let numCopy = this.state.num
        let decrementedNum = numCopy - 1
        this.setState({num: decrementedNum})
    }

    render() {
        //functions have to be passed into onClick
        return (
            <div>
                <div>Current Number: {this.state.num}</div>
                <Button valChange='increment' onClick={() => this.increment()}/>
                <Button valChange='decrement' onClick={() => this.decrement()}/>
            </div>
        )
    }
}


  
  class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                
            }
        }
  
        render() {
            return (
                <Counter/>
                )
            }
  }
  

  // ========================================
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  
