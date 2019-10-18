import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TestColumn1: "",
      TestColumn2: "",
      TestColumn3: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = {
      TestColumn1: this.state.TestColumn1,
      TestColumn2: this.state.TestColumn2,
      TestColumn3: this.state.TestColumn3
    };
    console.log("DATA>>>>", data);
    fetch("http://localhost:5000/api/v1/test/create", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => console.log("RESPONSE>>>>", data));
  };

  render() {
    return (
      <form>
        <div>
          <label>TEST COLUMN 1 </label>
          <input
            name="TestColumn1"
            value={this.state.TestColumn1}
            type="text"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>TEST COLUMN 2 </label>
          <input
            name="TestColumn2"
            value={this.state.TestColumn2}
            type="text"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>TEST COLUMN 2 </label>
          <input
            name="TestColumn3"
            value={this.state.TestColumn3}
            type="text"
            onChange={this.handleChange}
          />
        </div>
        <input type="submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}
export default Home;
