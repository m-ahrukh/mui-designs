import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

type Skill = {
  id: number,
  label: string
}

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'ReactJs', 'NextJs']
const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill
}))

export const AutoCompleteMui = () => {

  const [value, setValue] = useState<string | null>(null)
  const [skill, setSkill] = useState<Skill | null>(null)

  console.log("Value ", value)
  console.log("Skill Object ", skill)
  {/*freeSolo: for free text means that the options that is not present in the list*/ }
  return (
    <Stack spacing={2} width={'250px'}>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label='Skills' />}
        value={value}
        onChange={(event: any, newValue: string | null) => { setValue(newValue) }}
        freeSolo
      />
      <br></br>
      <h1 className="font-semibold">With Skills Array Object</h1>
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label='Skills' />}
        value={skill}
        onChange={(event: any, newValue: Skill | null) => { setSkill(newValue) }}
      />
      <br></br>

      {/* <h2 className="font-semibold">Disable Portal</h2>
      <Autocomplete
        disablePortal
        options={skills}
        renderInput={(params) => <TextField {...params} label='Skills' />}
      />
      <br></br> */}

      {/* <h2 className="font-semibold">Disable Close On Select</h2>
      <Autocomplete
        disableCloseOnSelect
        options={skills}
        renderInput={(params) => <TextField {...params} label='Skills' />}
      />
      <br></br> */}

      <h2 className="font-semibold">Disable Clear functionality</h2>
      <Autocomplete
        disableClearable
        options={skills}
        renderInput={(params) => <TextField {...params} label='Skills' />}
      />
      <br></br>

      {/* <h2 className="font-semibold">Blur On Select</h2>
      <Autocomplete
        blurOnSelect
        options={skills}
        renderInput={(params) => <TextField {...params} label='Skills' />}
      />
      <br></br> */}

      <h2 className="font-semibold">Read Only</h2>
      <Autocomplete
        readOnly
        options={skills}
        defaultValue={skills[2]}
        renderInput={(params) => <TextField {...params} label='Skills' />}
      />
      <br></br>

      <h2 className="font-semibold">Some Disabled Options</h2>
      <Autocomplete
        options={skills}
        getOptionDisabled={(skill) => skill===skills[0] || skill === skills[4]}
        renderInput={(params) => <TextField {...params} label='Skills' />}
      />
      <br></br>
    </Stack>
  )
}