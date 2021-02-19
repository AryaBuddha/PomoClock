import { ChakraProvider } from "@chakra-ui/react"
import { Countdown } from "./components/Countdown.jsx"

function App() {
  return (

    <ChakraProvider>

      <Countdown />

    </ChakraProvider>


  );
}

export default App;
