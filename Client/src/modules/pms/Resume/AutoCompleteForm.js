import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chips from "./Chips";
import { Stack } from "@mui/material";

const options = ["Option 1", "Option 2", "Option 3"];

export default function AutoCompleteForm() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState([]);
  const [countries, setCountries] = React.useState([]);
  return (
    <div>
      <Stack direction="row" spacing={1} spacing={1} flexWrap="wrap">
        {countries && countries.map((i) => <Chips lable={i} />)}
      </Stack>
      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          setCountries([...countries, newInputValue]);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
    </div>
  );
}
