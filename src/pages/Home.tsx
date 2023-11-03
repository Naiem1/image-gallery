import { Box } from "@mui/material"
import Header from "../components/header/Header"
import Gallery from "./Gallery"

const Home= () => {
  return (
    <Box sx={{width: '97%', heigh: '97vh'}}>
       <Header/>
      <Gallery />
    </Box>
  )
}

export default Home