import { Container, Link, Table, User } from '@nextui-org/react';

export const TableComponent: React.FC = () => {
  return (
    <Container md>
      <Table
        aria-label="Example static collection table"
        css={{
          height: 'auto',
          minWidth: '100%',
        }}
      >
        <Table.Header>
          <Table.Column width="3.8%"></Table.Column>
          <Table.Column width="25%">PROFILE</Table.Column>
          <Table.Column width="10%">CONTRIBUTION</Table.Column>
          <Table.Column>BIO</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row key="1">
            <Table.Cell css={{ fontWeight: 600 }}>1</Table.Cell>
            <Table.Cell>
              <Link>
                <User
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  name="Ariana Wattson (4기)"
                  size="md"
                  css={{ p: 0 }}
                >
                  sunwoo0706
                </User>
              </Link>
            </Table.Cell>
            <Table.Cell>3,600</Table.Cell>
            <Table.Cell>Active</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>
  );
};
