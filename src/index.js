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

    increment(amount = 1) {
        console.log("this.state.num: ", this.state.num)
        //You HAVE to create an immutable copy of this.state.num before manipulating it. 
        let numCopy = this.state.num
        let incrementedNum = numCopy + amount
        this.setState({num: incrementedNum})
    }

    decrement(amount = 1) {
        console.log("this.state.num: ", this.state.num)
        //You HAVE to create an immutable copy of this.state.num before manipulating it.
        let numCopy = this.state.num
        let decrementedNum = numCopy - amount
        this.setState({num: decrementedNum})
    }

    render() {
        //functions have to be passed into the onClick prop
        return (
            <div className='counter'>
                <div className='display'>Count: {this.state.num}</div>
                <Button valChange='increment' onClick={() => this.increment()}/>
                <Button valChange='decrement' onClick={() => this.decrement()}/>
                <Button valChange='increment by 5' onClick={() => this.increment(5)}/>
                <Button valChange='decrement by 5' onClick={() => this.decrement(5)}/>
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
  
