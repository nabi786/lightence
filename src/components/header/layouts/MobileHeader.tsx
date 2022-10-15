import React from 'react';
import { Col, Row } from 'antd';
import { NotificationsDropdown } from '../components/notificationsDropdown/NotificationsDropdown';
import { ProfileDropdown } from '../components/profileDropdown/ProfileDropdown/ProfileDropdown';
import { HeaderSearch } from '../components/HeaderSearch/HeaderSearch';
import { SettingsDropdown } from '../components/settingsDropdown/SettingsDropdown';
import * as S from '../Header.styles';
import Button from '@mui/material/Button';
import ConnetWalletModel from '../components/WalletModel'


interface MobileHeaderProps {
  toggleSider: () => void;
  isSiderOpened: boolean;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ toggleSider, isSiderOpened }) => {
  return (
    <Row justify="space-between" align="middle">
      <Col>
        {/* <ProfileDropdown /> */}
      </Col>

      <Col>
        <Row align="middle">
          <Col>
            {/* <NotificationsDropdown /> */}
            <Button sx={{color : "white"}}>
                            Buy
            </Button>  
          </Col>

          <Col>
            {/* <HeaderSearch /> */}
          </Col>

          <Col>
            <ProfileDropdown />
            {/* <ConnetWalletModel /> */}
          </Col>
        </Row>
      </Col>

      <S.BurgerCol>
        <S.MobileBurger onClick={toggleSider} isCross={isSiderOpened} />
      </S.BurgerCol>
    </Row>
  );
};
