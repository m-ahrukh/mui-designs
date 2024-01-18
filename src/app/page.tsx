'use client'
import { useState } from "react"
import Calculator from "./components/calculator"
import TwoInputCalculator from "./components/twoInputCalculator"
import ConditionalRendering from "./components/conditionalRendering";
import Warning from "./components/WarningConditionalRedering";
import { AutoCompleteMui } from "./components/AutoCompleteMui";
import GroupedAutoComplete from "./components/GroupedAutoComplete";
import TypographyTypes from "./components/typography";
import TypographyTheme from "./components/typographyThemeKeys";
import TypographyStyles from "./components/typographyStyling";
import { ButtonsMui } from "./components/ButtonsMui";
import { ButtonGroupMui } from "./components/ButtonGroupsMui";
import { SelectTextFieldMui } from "./components/selectTextfieldMui";
import { SelectMui } from "./components/selectMui";
import { TextFieldMui } from "./components/textfieldMui";

function App() {

  const count = 0;
  return (
    <>
      <ConditionalRendering />
      <Warning />

      <p className="font-semibold">Boiling Water Eaxmple</p>
      <Calculator />
      <hr></hr>
      <p className="font-semibold">Giving either celcius or fahrenheit temperature and check whether water is boiling or not</p>
      <TwoInputCalculator/>
      <br></br>
      <hr></hr>
      <br></br>
      <AutoCompleteMui />
      <GroupedAutoComplete />
      <br></br>
      <TypographyTypes />
      <TypographyTheme />
      <TypographyStyles />
      <ButtonsMui />
      <ButtonGroupMui />
      <SelectTextFieldMui />
      <br></br>
      <SelectMui />
      <br></br>
      <TextFieldMui />
    </>
  )
}

export default App;