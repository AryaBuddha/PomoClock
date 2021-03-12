import React, {useState, useEffect} from "react"
import { Text, Button } from "@chakra-ui/react"



export const ToggleButton = (props) => {
    


    const [btnState, setBtnState] = useState({
        style:"solid",
        text:"Start"
    })

    useEffect(() => {
        if(props.tick == 0 || props.paused){
            const style = "solid"
            const text = "Start"

            setBtnState(({style: style, text: text}))
        }
    }, [props.tick])


    return (


        <Button 
            colorScheme="teal" 
            variant={btnState.style} 
            align="center"
            size="lg"
            h="60px"
            w="100px"
            onClick = {() => {

                props.setPaused(paused => !paused)

                let style = btnState.style == "outline" ? "solid" : "outline"
                let text = btnState.text == "Start" ? "Stop" : "Start"

                setBtnState(({style: style, text: text}))
            }}         
        >
            <Text fontSize="25px">{btnState.text}</Text>
        </Button> 



    )

}


export default ToggleButton