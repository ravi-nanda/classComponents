 import { Component } from 'react';
    import { PacmanLoader } from "react-spinners";
    import CenterContainer from "../pages/CenterContainer"
    import Footer from './Footer';
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
    // import {Link } from "react-router-dom";

    class MainContainer extends Component {
      constructor(props) {
        super(props)
        this.state={
          apiData:[],
          originalData: [],
          loading:true
    
        }
    
    
      }
    
     
      async componentDidMount (){
    
        try {
          this.setState({loading:true})
          const res =await fetch("https://dummyjson.com/products?limit=194")
          const data =await res.json()
          this.setState({apiData: data.products.slice(0,20),
            originalData: data.products,
          loading:false })
        } catch (error) {
          
          this.setState({error:alert("page 404")})
        }
      
      }
    
    
      handleSubmit=(clickItem)=>{
        const {originalData}=this.state
        const filterData=originalData.filter((curElem)=>{
          return curElem.category===clickItem
    
        })
       this.setState({apiData:filterData})
      }
      handleInline=()=>{
        const{apiData}=this.setState

     this.setState({apiData:apiData})
      
      }
      
    
        render() {
       
          const {apiData}=this.state
          const loadingCss = {
            margin: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: "30vh",
            left: "40%",
          };
    
          return (
            
          <> {
            this.state.loading?( <PacmanLoader
              color={"#36d7b7"}
              loading={this.loading}
              cssOverride={loadingCss}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />):(
              <>   <div> 
       
       <AppBar position="static">
   <Container maxWidth="xl">
     <Toolbar disableGutters>
       <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

     <Typography
         variant="h6"
         noWrap
         component="a"
        
         sx={{
           mr: 2,
           display: { xs: "none", md: "flex" },
           fontFamily: "monospace",
           fontWeight: 700,
           letterSpacing: ".3rem",
           color: "inherit",
           textDecoration: "none",
         }}
         onClick={this.handleInline}
         
       >
    
       LOGO 
     
       </Typography>

       <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
      

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
       
        <CenterContainer apiData={apiData}/>
    <Footer/>
            </>)
          }
        </>
    
          )
        }
      }
      
  export default MainContainer