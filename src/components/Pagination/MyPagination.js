import { ThemeProvider, createTheme } from '@mui/material'
import Pagination  from '@mui/material/Pagination'
import React from 'react'

const darkTheme=createTheme({
    palette:{
        mode:'dark',
    }
})

const MyPagination = ({setPage,numOfPages=10}) => {
  const handleChange=(page)=>{
    setPage(page);
    window.scroll(0,0);
  }  
  return (
    <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}>
        <ThemeProvider theme={darkTheme}>
        <Pagination 
            count={numOfPages}
            onChange={(e)=>handleChange(e.target.textContent)}
            color='primary'
            hideNextButton hidePrevButton
        />
        </ThemeProvider>
    </div>
  )
}

export default MyPagination