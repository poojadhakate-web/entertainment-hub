import { Pagination, createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/styles';
import React from 'react'

const darkTheme = createTheme({
    palette: {
        type: "dark",
    },
});

const CustomPagination = ({setPage, numOfPages = 10}) => {
    const handlerPageChange = (page) =>{
        setPage (page)
    window.scroll(0,0)
    }
  return (
    <div style={{width:"100%", display:"flex", justifyContent:"center", marginTop:10,}}>
      <ThemeProvider>
      <Pagination count={numOfPages} onChange={(e) => handlerPageChange (e.target.textContent)}
        hideNextButton
        hidePreButton
        color = "primary"
        
        />
      </ThemeProvider>
      </div>
  )
}

export default CustomPagination
