import { styled, Text } from '@nextui-org/react';

import { SmartLink } from 'components/atoms/SmartLink';
import { Dispatch, SetStateAction } from 'react';

interface NavBarProps {
  setVisible: Dispatch<SetStateAction<boolean>>;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unreachable code error
const Nav = styled('nav', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
});

export const NavBarComponent: React.FC<NavBarProps> = ({ setVisible }) => {
  return (
    <Nav>
      <SmartLink
        href={
          'https://github.com/login/oauth/authorize?client_id=685ffb52e4dd768b3f66&redirect_uri=https://d6ui2fy5uj.execute-api.ap-northeast-2.amazonaws.com/api/auth&scope=user:email'
        }
      >
        <Text size={18}>Join</Text>
      </SmartLink>
      <SmartLink href={'https://github.com/GRI-G/GRIG-API'}>
        <Text size={18}>Open API</Text>
      </SmartLink>
      <Text
        size={18}
        onClick={() => setVisible(true)}
        css={{ cursor: 'pointer' }}
      >
        About
      </Text>
    </Nav>
  );
};
