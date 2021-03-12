import React, { useState, useEffect } from "react";
import {
  Box,
  VStack,
} from "@chakra-ui/react";

import Countdown from "./Countdown.jsx";

import CountdownPicker from "./CountdownRadio/CountdownPicker.jsx"

export const MainContent = () => {
  const [type, setType] = useState("Work");

  const options = ["Work", "Short Break", "Long Break"]

  
  return (
    <Box backgroundColor="#23272d" w="100%" pt="5%" pb="100%">
      <VStack textAlign="center" spacing={7}>


        <CountdownPicker options={options} setType={setType}/>



        <Countdown type={type} />
        

      </VStack>
    </Box>
  );
};


export default MainContent