import React, {useState, useEffect} from "react"
import { Heading, HStack } from "@chakra-ui/react"


import ToggleButton from "./Shared/ToggleButton.jsx"
import ResetButton from "./Shared/ResetButton"

export const Countdown = (props) => {

    const tickData = {
        "Work": 2700,
        "Short Break" : 300,
        "Long Break": 900
    }

    const defaultTick = 2700
    const [tick, setTick] = useState(tickData[props.type])
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

    const resetClock = () => {

        setTick(tickData[props.type])
        
        
        const minutes = Math.floor(tickData[props.type]/60)
        let seconds = Math.floor(tickData[props.type]%60)
        seconds = seconds.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })
        
        setClock(`${minutes}:${seconds}`)

    }

    useEffect(() => {
        setTick(tickData[props.type])
        
        
        const minutes = Math.floor(tickData[props.type]/60)
        let seconds = Math.floor(tickData[props.type]%60)
        seconds = seconds.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })
        
        setClock(`${minutes}:${seconds}`)

        setPaused(true)


    }, [props.type])


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
            setTick(tickData[props.type])
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
                <ResetButton resetClock={resetClock} setPaused={setPaused} /> 
                <ToggleButton setPaused={setPaused} paused={paused} tick={tick} />
            </HStack>

        </>
             
    );


}

export default Countdown