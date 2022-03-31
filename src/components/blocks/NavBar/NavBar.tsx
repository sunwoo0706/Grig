import { styled } from '@nextui-org/react';
import { Text } from '@nextui-org/react';

import { SmartLink } from 'components/atoms/SmartLink';

const NavMap = [
  { title: 'Join', href: '/Join' },
  { title: 'About', href: '/About' },
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

export const NavBarComponent: React.FC = () => {
  return (
    <Nav>
      {NavMap.map(({ title, href }) => (
        <SmartLink key={title} href={href}>
          <Text size={18} color="black">
            {title}
          </Text>
        </SmartLink>
      ))}
    </Nav>
  );
};
