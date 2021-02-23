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
                
                props.setTick(props.defaultTick)


                const minutes = Math.floor(props.defaultTick/60)
                let seconds = Math.floor(props.defaultTick%60)
                seconds = seconds.toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                })
        
                props.setClock(`${minutes}:${seconds}`)
                
            }}
        >
            <RepeatClockIcon w="30px" h="45px" />
            
        </Button>
    )
}

export default ResetButton