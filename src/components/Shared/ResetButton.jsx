import React from 'react'
import { Button } from "@chakra-ui/react"
import { RepeatClockIcon } from '@chakra-ui/icons'


const ResetButton = (props) => {


    return (
        <Button 
            colorScheme="teal" 
            size="lg"
            h="60px"
            w="50px"
            onClick={() => {
                
                props.resetClock()
                props.setPaused(true)
                
            }}
        >
            <RepeatClockIcon w="30px" h="45px" />
            
        </Button>
    )
}

export default ResetButton