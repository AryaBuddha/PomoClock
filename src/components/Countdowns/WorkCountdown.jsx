import React, {useState, useEffect} from "react"
import { Heading, HStack } from "@chakra-ui/react"


import ToggleButton from "../Shared/ToggleButton.jsx"
import ResetButton from "../Shared/ResetButton"

export const WorkCountdown = () => {


    const defaultTick = 2700
    const [tick, setTick] = useState(defaultTick)
    const [clock, setClock] = useState(null)

    const [paused, setPaused] = useState(true)

    const updateClock = () => {
        const minutes = Math.floor(tick/60)
        let seconds = Math.floor(tick%60)
        seconds = seconds.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })


        setClock(`${minutes}:${seconds}`)
    }

    useEffect(() => {
        updateClock()

    }, [])

    useEffect(() => {
        if(tick != 0){
            if(!paused){
                const updateTick = setTimeout(() => {
                    setTick(tick => tick - 1);
                }, 1000)
                
                updateClock()
                return () => clearTimeout(updateTick)
                
            }
        } else {
            setTick(defaultTick)
            updateClock()
            setPaused(true)
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

            <HStack>
                <ResetButton setTick={setTick} tick={tick} defaultTick={defaultTick} setClock={setClock} setPaused={setPaused} /> 
                <ToggleButton setPaused={setPaused} tick={tick} />
            </HStack>

        </>
             
    );


}

export default WorkCountdown