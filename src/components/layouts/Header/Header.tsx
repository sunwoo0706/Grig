import { Link, styled } from '@nextui-org/react';
import { Switch, Container, Row } from '@nextui-org/react';

import { useScrollPosition } from 'hooks/use-scroll-position';
import { SunIcon } from 'assets/SunIcon';
import { MoonIcon } from 'assets/MoonIcon';
import { NavBar } from 'components/blocks/NavBar';
import { Logo } from 'assets/Logo';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unreachable code error
const Header = styled('header', {
  position: 'sticky',
  top: 0,
  height: '4.75rem',
  display: 'flex',
  alignItems: 'center',
  zIndex: 1000,
});

export const HeaderComponent: React.FC = () => {
  const scrollPosition = useScrollPosition();

  const blurStyle = {
    backdropFilter: `saturate(180%) blur(10px)`,
    boxShadow: `rgb(2 1 1 / 10%) 0px 5px 20px -5px`,
  };

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
    <Header css={scrollPosition > 30 && blurStyle}>
      <Container md display="flex" alignItems="center" wrap="nowrap">
        <Row justify="flex-start" align="center">
          <Link href="/">
            <Logo />
          </Link>
        </Row>
        <Row justify="center" align="center">
          <NavBar />
        </Row>
        <Row justify="flex-end" align="center">
          <Switch
            checked={true}
            size="lg"
            shadow
            color="warning"
            iconOn={<SunIcon filled />}
            iconOff={<MoonIcon filled />}
          />
        </Row>
      </Container>
    </Header>
  );
};
