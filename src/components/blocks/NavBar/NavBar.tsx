import { styled, Text } from '@nextui-org/react';

import { SmartLink } from 'components/atoms/SmartLink';
import { Dispatch, SetStateAction } from 'react';

interface NavBarProps {
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const NavMap = [
  {
    title: 'Join',
    href: 'https://github.com/login/oauth/authorize?client_id=685ffb52e4dd768b3f66&redirect_uri=https://d6ui2fy5uj.execute-api.ap-northeast-2.amazonaws.com/api/auth&scope=user:email',
  },
  { title: 'About', href: '' },
  { title: 'Open API', href: 'https://github.com/GRI-G/GRIG-API' },
];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unreachable code error
const Nav = styled('nav', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 5rem',
});

export const NavBarComponent: React.FC<NavBarProps> = ({ setVisible }) => {
  return (
    <Nav>
      {NavMap.map(({ title, href }, i) =>
        href === '' ? (
          <Text
            key={i}
            size={18}
            color="black"
            onClick={() => setVisible(true)}
            css={{ cursor: 'pointer' }}
          >
            {title}
          </Text>
        ) : (
          <SmartLink key={i} href={href}>
            <Text size={18} color="black">
              {title}
            </Text>
          </SmartLink>
        ),
      )}
    </Nav>
  );
};
