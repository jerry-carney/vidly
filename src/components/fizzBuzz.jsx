import React, { Component } from "react";

class FizzBuzz extends Component {
  state = {
    enteredValue: 0,
    result: "none",
    correct: false,
    invalid: false
  };

  fizzBuzz() {
    let correct = false;
    let invalid = false;
    let result = null;
    const x = this.state.enteredValue;

    if (isNaN(x) || x <= 0) {
      result = "Invalid input";
      invalid = true;
    } else if (x % 3 === 0 && x % 5 === 0) {
      result = "FizzBuzz";
      correct = true;
    } else if (x % 3 === 0) result = "Fizz";
    else if (x % 5 === 0) result = "Buzz";
    else result = x;

    this.setState({ result, correct, invalid });
  }

  render() {
    return (
      <main className="container">
        <h1>Lets have fun, the game is FizzBuzz!</h1>
        <p>
          Enter a positive integer until your Result is <b>FizzBuzz</b>. You
          will intuitively determine many correct answers.
        </p>
        <u>Enter Number</u>:&nbsp;&nbsp;
        <input
          type="text"
          maxLength="14"
          onChange={e => this.setState({ enteredValue: e.target.value })}
        />
        <br />
        <div
          className="btn btn-primary"
          style={{ marginBottom: 5, marginTop: 5 }}
          onClick={() => this.fizzBuzz()}
        >
          Submit
        </div>
        <br />
        <u>Result</u>:&nbsp;&nbsp;
        {this.state.invalid && (
          <span style={{ color: "red" }}>{this.state.result}</span>
        )}
        {!this.state.invalid && <span>{this.state.result} </span>}
        {this.state.correct && (
          <span>
            <i className="fa fa-trophy fa-lg"></i>
          </span>
        )}
      </main>
    );
  }
}

export default FizzBuzz;

// class FizzBuzz extends Component {
//   state = {
//     enteredValue: "",
//     history: [],
//     correct: false
//   };

//   handleChange = event => {
//     this.setState({ enteredValue: event.target.value });
//   };

//   handleSubmit = event => {
//     let correct = false;
//     let result = null;
//     let x = this.state.enteredValue;
//     console.log("fizzBuzz handleSubmit", event, x);

//     if (x === 0) result = x;
//     if (x % 3 === 0 && x % 5 === 0) {
//       result = "FizzBuzz";
//       correct = true;
//     } else if (x % 3 === 0) result = "Fizz";
//     else if (x % 5 === 0) result = "Buzz";
//     else if (typeof x == "number") result = x;
//     else result = NaN;

//     const history = [{ input: x, result: result }, ...this.state.history];
//     this.setState({ history, correct });
//   };

//   render() {
//     const { correct, history } = this.state;
//     console.log("history:", history);

//     return (
//       <main className="container">
//         <h1>Lets have fun, the game is FizzBuzz</h1>
//         <p>
//           Keep ententering a positive integer until your RESULT is FizzBuzz. You
//           will intuitively figure out one of the many correct history.
//         </p>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Enter Number:&nbsp;
//             <input
//               type="text"
//               value={this.state.value}
//               onChange={this.handleChange}
//             />
//           </label>
//           <input type="submit" value="&nbsp;Submit" />
//         </form>
//         <div>
//           <h2>Answer/Result History</h2>
//           <ul>
//             {this.state.history.map(h => (
//               <li key={h.input}>
//                 {h.input}, {h.result}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </main>
//     );
//   }
// }

// export default FizzBuzz;
