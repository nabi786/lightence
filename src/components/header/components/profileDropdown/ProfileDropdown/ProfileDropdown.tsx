import React from 'react';
import { Avatar, Col, Row } from 'antd';
import { Dropdown } from '@app/components/common/Dropdown/Dropdown';
import { H6 } from '@app/components/common/typography/H6/H6';
import { ProfileOverlay } from '../ProfileOverlay/ProfileOverlay';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './ProfileDropdown.styles';


export const ProfileDropdown: React.FC = () => {
  const { isTablet } = useResponsive();

  const user = useAppSelector((state) => state.user.user);

  return user ? (
    <Dropdown overlay={<ProfileOverlay />} trigger={['click']}>
      <S.ProfileDropdownHeader as={Row} gutter={[10, 10]} align="middle" style={{padding  : "5px 15px"}} className="headerConnetEthBtn">
        <Col>
          {/* <Avatar src={user.imgUrl} alt="User" shape="circle" size={40} /> */}
          <img src="https://res.cloudinary.com/learn2code/image/upload/v1665764105/images_m25sq0.png" style={{width:"30px",borderRadius : "50px"}}/>
        </Col>
        {isTablet && (
          <Col>
              Connect
          </Col>
        )}
      </S.ProfileDropdownHeader>
    </Dropdown>
  ) : null;
};
