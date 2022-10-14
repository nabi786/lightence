import React from 'react';
import { Col, Row } from 'antd';
import { NotificationsDropdown } from '../components/notificationsDropdown/NotificationsDropdown';
import { ProfileDropdown } from '../components/profileDropdown/ProfileDropdown/ProfileDropdown';
import { HeaderSearch } from '../components/HeaderSearch/HeaderSearch';
import { SettingsDropdown } from '../components/settingsDropdown/SettingsDropdown';
import { HeaderFullscreen } from '../components/HeaderFullscreen/HeaderFullscreen';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';



import * as S from '../Header.styles';

interface DesktopHeaderProps {
  isTwoColumnsLayout: boolean;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ isTwoColumnsLayout }) => {
  const leftSide = isTwoColumnsLayout ? (
    <S.SearchColumn xl={16} xxl={17}>
      <Row justify="space-between">
        <Col xl={15} xxl={12}>

          {/* <HeaderSearch /> */}

        </Col>
        <Col>
          {/* <S.GHButton /> */}
          <Button sx={{ color : "white"}}>
          Token Price 1920
          </Button>   

          
        </Col>
      </Row>
    </S.SearchColumn>
  ) : (
    <>
      <Col lg={10} xxl={8}>
        {/* <HeaderSearch /> */}
      </Col>
      <Col>
        
      </Col>
    </>
  );

  return (
    <Row justify="space-between" align="middle" style={{display : "flex", alignItems : "center"}}>
      {leftSide}

      <S.ProfileColumn xl={8} xxl={7} $isTwoColumnsLayout={isTwoColumnsLayout}>
        <Row align="middle" justify="end" gutter={[10, 10]} style={{display : "flex", justifyContent : "space-between"}}>
          <Col>
            <Row gutter={[{ xxl: 10 }, { xxl: 10 }]}>
              <Col style={{marginRight:'20px'}}>

                
                    <Button>
                            Buy
                    </Button>  
              </Col>

              <Col>
                {/* <NotificationsDropdown /> */}
                
              </Col>

              <Col style={{display : "flex", justifyContent : 'center'}}>
                <ProfileDropdown />
              </Col>
            </Row>
          </Col>

          <Col>
            <HeaderFullscreen />
          </Col>
        </Row>
      </S.ProfileColumn>
    </Row>
  );
};
