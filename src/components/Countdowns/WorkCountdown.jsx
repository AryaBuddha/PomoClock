import React, {useState, useEffect} from "react"
import { Text, Heading, Button } from "@chakra-ui/react"


export const WorkCountdown = () => {

    const [tick, setTick] = useState(2700)
    const [clock, setClock] = useState(null)

    const [paused, setPaused] = useState(true)

    const [btnState, setBtnState] = useState({
        style:"solid",
        text:"Start"
    })

    useEffect(() => {
        const minutes = Math.floor(tick/60)
        let seconds = Math.floor(tick%60)
        seconds = seconds.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })

        setClock(`${minutes}:${seconds}`)

    }, [])

    useEffect(() => {    
        if(!paused){
            const updateTick = setTimeout(() => {
                setTick(tick => tick - 1);
            }, 1000)
            
            const minutes = Math.floor(tick/60)
            let seconds = Math.floor(tick%60)
            seconds = seconds.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            })
    
            setClock(`${minutes}:${seconds}`)

            return () => clearTimeout(updateTick)
        }
        
    }, [tick, paused])
    






    return (
        <>

            <Heading
                color="white"
                fontSize="300px"
                opacity="80%"
            >
                {clock}
            </Heading>

            <Button 
                colorScheme="teal" 
                variant={btnState.style} 
                align="center"
                size="lg"
                h="60px"
                w="100px"
                onClick = {() => {

                    setPaused(paused => !paused)

                    let style = btnState.style == "outline" ? "solid" : "outline"
                    let text = btnState.text == "Start" ? "Stop" : "Start"

                    setBtnState(prevBtnState => ({style: style, text: text}))
                }}         
            >
                <Text fontSize="25px">{btnState.text}</Text>
            </Button> 
        


        


        </>
             
    );


}

export default WorkCountdown