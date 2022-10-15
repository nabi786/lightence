import React from 'react';
import { Avatar, Col, Row } from 'antd';
import { Dropdown } from '@app/components/common/Dropdown/Dropdown';
import { H6 } from '@app/components/common/typography/H6/H6';
import { ProfileOverlay } from '../ProfileOverlay/ProfileOverlay';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './ProfileDropdown.styles';
import bscImg from 'assets/bsc.png';
// import walletModel from '../../walletModel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


import metaMaskImg from 'assets/metamask-icon.png'
import coinBaseImg from 'assets/coinbase-logo.png'
import walletConnectImg from 'assets/walletConnect.png'

import AddIcon from '@mui/icons-material/Add';
import { useSSR } from 'react-i18next';
import CoinbasewalletSDK from '@coinbase/wallet-sdk'

import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/web3-provider";


import Web3Modal from 'web3modal';
import {ethers} from 'ethers';





// connection wallet;
const providerOptions = {
  coinbasewallet : {
    package : CoinbasewalletSDK,
    options : {
      appName : 'web3CoinBase',
      infuraId : "17e323aeeaf048e585041fa2cacb1e2c"
    }
  },
  
  walletconnect: {
    package: WalletConnect, 
    options: {
      appName : 'walletConnet',
      infuraId: "17e323aeeaf048e585041fa2cacb1e2c"
    }
  }
}







const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  background:"#1e2142"
};


export const ProfileDropdown: React.FC = () => {
  const { isTablet } = useResponsive();

  const user = useAppSelector((state) => state.user.user);


    



  const connectWallet = async ()=>{
      try{
        
        const web3Model = new Web3Modal({
          cacheProvider : false,
          providerOptions, 
        });

        const web3ModelInstance = await web3Model.connect();
        const web3ModalProvider = new ethers.providers.Web3Provider(web3ModelInstance) 
        console.log(web3ModalProvider)

      }catch(err){
        console.log(err)
      }
  }






  return user ? (
    <>
      <S.ProfileDropdownHeader as={Row} gutter={[10, 10]} align="middle" style={{padding  : "5px 15px"}} className="headerConnetEthBtn" onClick={connectWallet}>
        <Col>
          {/* <Avatar src={user.imgUrl} alt="User" shape="circle" size={40} /> */}
          <img src={bscImg} style={{width:"30px",borderRadius : "50px"}}/>
        </Col>
        {isTablet && (
          <Col>
              Connect
          </Col>
        )}
      </S.ProfileDropdownHeader>
      <div>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        > */}
        {/* <Box sx={style} style={{backgroundColor:"#1e2142"}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal walletModel
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box> */}

{/* <Box className="connectWalletButtonBox">

                 <Box className="connetWalletDropDownHeader">
                     <Typography>Connect Wallet</Typography>
                     <Box  sx={{fontSize:"30px", color:"white",transform: "rotate(45deg)", cursor:"pointer"}}> <AddIcon  /> </Box>
                 </Box>

                 <Box className="connectWalletButtonBoxBody" sx={{padding:"5px, 0px"}}>

                     <Box  className="Wallets" sx={{cursor : "pointer", padding : "15px 0px",display : 'flex', alignItems: "center", borderBottom :"1px solid lightgray"}}>
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
                     <Box className="Wallets" sx={{cursor : "pointer", padding : "15px 0px",display : 'flex', alignItems: "center", borderBottom :"1px solid lightgray"}}>
                         <Box sx={{marginRight : "15px", width:"40px"}}>
                             <img src={walletConnect} style={{width:"100%"}}/>
                         </Box>
                         <Typography>
                             Wallet Connect 
                         </Typography>
                     </Box>
                 </Box>


                 <Box className="connetWalletDropDownFooter">
                     <Typography sx={{textAlign : 'center', fontSize : "10px"}}>powered by emoji</Typography>
                 </Box>
            
             </Box> */}
      {/* </Modal> */}
    </div>
      </>
  ) : null;
};
