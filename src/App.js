import { ChakraProvider } from "@chakra-ui/react"

import { MainContent } from "./components/MainContent.jsx"

function App() {
  return (

    <ChakraProvider>

      <MainContent />

    </ChakraProvider>


  );
}

export default App;
