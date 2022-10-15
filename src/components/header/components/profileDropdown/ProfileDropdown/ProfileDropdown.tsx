import React from 'react';
import { Avatar, Col, Row } from 'antd';
import { Dropdown } from '@app/components/common/Dropdown/Dropdown';
import { H6 } from '@app/components/common/typography/H6/H6';
import { ProfileOverlay } from '../ProfileOverlay/ProfileOverlay';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './ProfileDropdown.styles';


import bscImg from 'assets/bsc.png';

export const ProfileDropdown: React.FC = () => {
  const { isTablet } = useResponsive();

  const user = useAppSelector((state) => state.user.user);

  return user ? (
    
      <S.ProfileDropdownHeader as={Row} gutter={[10, 10]} align="middle" style={{padding  : "5px 15px"}} className="headerConnetEthBtn">
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
    
  ) : null;
};
