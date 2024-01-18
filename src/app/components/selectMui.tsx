import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material"
import { useState } from "react"

export const SelectMui = () => {

  const [value, setValue] = useState('')
  
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div>
      <FormControl>
        <InputLabel shrink>Most Florida thing</InputLabel>
        <Select
          labelId="select-demo"
          id="florida-select"
          // displayEmpty
          value={value}
          onChange={handleChange} autoWidth
          // inputProps={{readOnly: true}}
        >
          <MenuItem value="" disabled>Empty</MenuItem>
          <MenuItem value={'Oj Simpson'}>Oj Simpson</MenuItem>
          <MenuItem value={'Florida Man'}>Florida Man</MenuItem>
          <MenuItem value={'Bath Salts'}>Bath Salts</MenuItem>
          <MenuItem value={'Drive Through Alligators'}>Drive Through Alligators</MenuItem>
        </Select>
        <FormHelperText>Select Most Florida Thing</FormHelperText>
      </FormControl>
    </div>
  )
}