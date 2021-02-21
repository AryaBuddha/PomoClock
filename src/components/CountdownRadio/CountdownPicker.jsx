import React, { useState, useEffect } from "react";
import {
  Box,
  VStack,
  RadioGroup,
  HStack,
  useRadioGroup
} from "@chakra-ui/react";

import RadioCard from "./RadioCard.jsx";


export const CountdownPicker = (props) => {


    
  const { getRadioProps } = useRadioGroup({
    name: "Countdown",
    defaultValue: "Work",
  })
  
  
  

  const changeCountdown = (radio) => {
    radio.isChecked && props.setType(radio.value)
  }

  return (


    <RadioGroup>
      <HStack>


        {props.options.map((value) => {
          const radio = getRadioProps({ value })
          return (

            <RadioCard onChange={changeCountdown(radio)} key={value} {...radio}>
                {value}
            </RadioCard>
            
            )

        })}


      </HStack>
    </RadioGroup>



  )


}


export default CountdownPicker;




