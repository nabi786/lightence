import React from 'react';
import * as S from './References.styles';
import { FacebookOutlined, GithubOutlined, LinkedinOutlined, TwitterOutlined} from '@ant-design/icons';
import TelegramIcon from '@mui/icons-material/Telegram';


const GithubIcon = S.withStyles(GithubOutlined);
const TwitterIcon = S.withStyles(TwitterOutlined);
const FacebookIcon = S.withStyles(FacebookOutlined);
const LinkedinIcon = S.withStyles(LinkedinOutlined);



export const References: React.FC = () => {
  return (
    <S.ReferencesWrapper>
      <S.Text>
        Made by{' '}
        <a href="https://altence.com" target="_blank" rel="noreferrer">
          Altence{' '}
        </a>
        in 2022 &copy;. Based on{' '}
        <a href="https://ant.design/" target="_blank" rel="noreferrer">
          Ant-design.
        </a>
      </S.Text>
      <S.Icons>
        
        <a href="https://twitter.com/altence_team" target="_blank" rel="noreferrer">
          <TwitterIcon />
        </a>
        
        <a href="https://linkedin.com/company/altence" target="_blank" rel="noreferrer">
        
          <LinkedinIcon />
        
        </a>
        <a href="https://linkedin.com/company/altence" target="_blank" rel="noreferrer">

          <TelegramIcon sx={{width:"35px", height:"35px"}} />
        
        </a>
      </S.Icons>
    </S.ReferencesWrapper>
  );
};
