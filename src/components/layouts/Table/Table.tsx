import { Container, Table, User } from '@nextui-org/react';
import { SmartLink } from 'components/atoms/SmartLink';
import { useUserList } from 'hooks/use-get-userlist';

export const TableComponent: React.FC = () => {
  const { data } = useUserList();

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
          <Table.Column></Table.Column>
          <Table.Column width="25%">PROFILE</Table.Column>
          <Table.Column width="15%">CONTRIBUTION</Table.Column>
          <Table.Column>BIO</Table.Column>
        </Table.Header>
        <Table.Body>
          {data &&
            data.ranking.map((user, i) => (
              <Table.Row key="1">
                <Table.Cell
                  css={{ fontWeight: 600, textAlign: 'center', px: '1.4rem' }}
                >
                  {i + 1}
                </Table.Cell>
                <Table.Cell>
                  <SmartLink href={'https://github.com/' + user.nickname}>
                    <User
                      src={user.avatar_url}
                      name={`${
                        user.name === ' ' ? user.nickname : user.name
                      } (${user.generation}기)`}
                      size="md"
                      css={{ p: 0 }}
                    >
                      {user.name !== ' ' && user.nickname}
                    </User>
                  </SmartLink>
                </Table.Cell>
                <Table.Cell>{user.contributions.toLocaleString()}</Table.Cell>
                <Table.Cell>
                  {user.bio ?? '상태메세지가 존재하지 않아요'}
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </Container>
  );
};
