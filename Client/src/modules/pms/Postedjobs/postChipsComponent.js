import React, { useState } from "react";
import "./postChipsComponent.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

class ChipComponent extends React.Component {
  state = {
    items: [],
    value: "",
    error: null,

    
  };

  handleKeyDown = (evt) => {
    if (["Enter", "Tab", ","].includes(evt.key)) {
      evt.preventDefault();

      var value = this.state.value.trim();

      if (value) {
        this.setState({
          items: [...this.state.items, this.state.value],
          value: "",
        });
      }
    }
  };

  handleChange = (evt) => {
    this.setState({
      value: evt.target.value,
      error: null,
    });
  };

  handleDelete = (item) => {
    this.setState({
      items: this.state.items.filter((i) => i !== item),
    });
  };

  handlePaste = (evt) => {
    evt.preventDefault();

    var paste = evt.clipboardData.getData("text");
    var chips = paste.match();

    if (chips) {
      var toBeAdded = chips.filter((chip) => !this.isInList(chip));

      this.setState({
        items: [...this.state.items, ...toBeAdded],
      });
    }
  };

  render() {
    return (
      <>
        <input
          className="input"
          value={this.state.value}
          placeholder="Type or paste email addresses and press `Enter`..."
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}
          onPaste={this.handlePaste}
        />

        


        <div className="mt-3">
          {this.state.items.map((item) => (
            <div className="tag-item" key={item}>
              {item}
              <button
                type="button"
                className="button"
                onClick={() => this.handleDelete(item)}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default ChipComponent;
