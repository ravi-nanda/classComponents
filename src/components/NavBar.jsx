import { Component } from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import {Link } from "react-router-dom";


class NavBar extends Component {
  constructor(){
    super()
    this.state={
      new:1
    }
  }
 
  
  handleSubmit=(clickItem)=>{
    const {originalData}=this.props
    const filterData=originalData.filter((curElem)=>{
      return curElem.category===clickItem

    })
   this.setState({apiData:filterData})
  }
 
  



    render() {
   

  
      

      return (
        
      <div> 
       
          <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
           
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
          LOGO 
          </Typography>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
             LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* <Button sx={{ my: 2, color: "white", display: "block" }}></Button> */}
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={() => this.handleSubmit("smartphones")}
            >
              smartphones
            </Button>
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={() => this.handleSubmit("laptops")}
            >
              laptops
            </Button>
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={() => this.handleSubmit("skincare")}
            >
              skincare
            </Button>
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={() => this.handleSubmit("groceries")}
            >
              groceries
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

     
    
    </div>

      )
    }
  }
  export default NavBar