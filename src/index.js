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
        //functions have to be passed into the onClick prop. It should look like... onClick={() => this.function()}
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
                counters: [this._newCounter()]
            }
        }
        
        // You can't add a componenet directly to an array you want to display. You can however create a
        // function that returns that component in a div like how _newCounter() returns a div wrapped <Counter/>
        // this can then be added to your state function
        _newCounter() {
            return(
                <div>
                    <Counter/>
                </div>
            )
        }

        // This function tells the "Add Counter" button what to do once clicked.
        handleClick() {
            // newCounters creates an array with teh current state, and adds a newCounter to it.
            const newCounters = [this.state.counters, this._newCounter()]
            // Then run this.setState to reset the state to the newCounters, which is the original array + the newCounter you're adding.
            this.setState({counters: newCounters})
        }

        render() {
            return (
                <div>
                  {this.state.counters}
                  <button className='add_counter' onClick={() =>this.handleClick()}>Add Counter</button>  
                </div>
                )
            }
  }
  

  // ========================================
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  
