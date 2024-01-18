import { Box, MenuItem, TextField } from "@mui/material"
import { count } from "console"
import React, { useState } from "react"


export const SelectTextFieldMui = () => {

  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState<string[]>([])
  console.log(countries)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string)
  }

  const handleMultipleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCountries(typeof value === 'string' ? value.split(',') : value)
  }
  return (
    <Box width='250px'>
      <TextField label='Select Country' select
        value={country} onChange={handleChange} fullWidth>
        <MenuItem value='PAK'>Pakistan</MenuItem>
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='AU'>Australia</MenuItem>
      </TextField>
      <br></br>

      <TextField label='Select Country' select
        value={countries} onChange={handleMultipleChange} fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        // color="secondary"
        helperText='Please select your contry'
        error
      >
        <MenuItem value='PAK'>Pakistan</MenuItem>
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='AU'>Australia</MenuItem>
      </TextField>
    </Box>
  )
}