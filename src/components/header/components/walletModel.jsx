


import {Typography, Box, Button} from '@mui/material'

import metaMaskImg from 'assets/metamask-icon.png'
import coinBaseImg from 'assets/coinbase-logo.png'

import AddIcon from '@mui/icons-material/Add';


function ConnetWalletModel(){

    return(

        <>
            <Box className="connectWalletButtonBox">

                <Box className="connetWalletDropDownHeader">
                    <Typography>Connect Wallet</Typography>
                    <Box  sx={{fontSize:"30px", color:"white",transform: "rotate(45deg)", cursor:"pointer"}}> <AddIcon /> </Box>

                </Box>

                <Box className="connectWalletButtonBoxBody" sx={{padding:"5px, 0px"}}>

                    <Box className="Wallets" sx={{cursor : "pointer", padding : "15px 0px",display : 'flex', alignItems: "center", borderBottom :"1px solid lightgray"}}>
                        <Box sx={{marginRight : "15px", width:"40px"}}>
                            <img src={metaMaskImg} style={{width:"100%"}}/>
                        </Box>
                        <Typography>
                            Meta Mask
                        </Typography>
                    </Box>
                    <Box className="Wallets" sx={{cursor : "pointer", padding : "15px 0px",display : 'flex', alignItems: "center", borderBottom :"1px solid lightgray"}}>
                        <Box sx={{marginRight : "15px", width:"40px"}}>
                            <img src={coinBaseImg} style={{width:"100%"}}/>
                        </Box>
                        <Typography>
                            CoinBase Wallet
                        </Typography>
                    </Box>
                </Box>


                <Box className="connetWalletDropDownFooter">
                    <Typography sx={{textAlign : 'center', fontSize : "10px"}}>powered by emoji</Typography>
                </Box>
            
            </Box>
        
        </>

    )
}



export default ConnetWalletModel;