import { Button, Link, Modal, Text } from '@nextui-org/react';
import { Dispatch, SetStateAction } from 'react';

interface ModalProps {
  setVisible: Dispatch<SetStateAction<boolean>>;
  bindings: {
    open: boolean;
    onClose: () => void;
  };
}

export const ModalComponent: React.FC<ModalProps> = ({
  setVisible,
  bindings,
}) => {
  return (
    <Modal
      scroll
      closeButton
      width="600px"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      {...bindings}
    >
      <Modal.Header>
        <Text id="modal-title" size={20} weight="bold">
          프로젝트에 관하여
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text id="modal-description">
          <Text h5>목적</Text>
          GRIG는 광주소프트웨어마이스터고등학교 학생들의 Github 활동을
          활성화시키기 위해서 만들어졌습니다.
          <br />
          <br />
          <Text h5>기능</Text>
          GRIG 는 NextJS 의 <code>getStaticProps</code> 를 이용하여
          서버사이드에서 GraphQL API 를 처리합니다.
          <br />
          <code>revalidate</code> 주기는 12시간입니다. 데이터가 바로 반영되지
          않아도 기다려주시기 바랍니다.
          <br />
          유저 리스트는 Contributions 를 기준으로 내림차순 정렬되어 있습니다.
          <br />
          유저 프로필을 클릭하면 해당 유저의 Github 프로필을 볼 수 있습니다.
          <br />
          <br />
          <Text h5>이슈 제보</Text>
          UI 나 UX 문제 또는 클라이언트 기능 작동 오류가 발생한 경우에는{' '}
          <Link href="https://github.com/sunwoo0706/Grig/issues" icon>
            Github Issues
          </Link>{' '}
          에 이슈를 제보해주시면 감사드리겠습니다.
          <br />
          <br />
          <Text h5>라이센스</Text>
          GRIG는{' '}
          <Link icon href="https://github.com/GRI-G/GRIG-API">
            GRIG OpenAPI
          </Link>{' '}
          를 사용하였습니다. GRIG OpenAPI 는 MIT License 를 가지고 있습니다.
          이에 본 프로젝트 또한 오픈소스로 진행되고 있지만 프로젝트 코드 원본
          자체를 베껴 사용하지 말아주시기 바랍니다.
          <br />
          게시물 플랫폼에 본 프로젝트 URL 삽입을 원할 경우, 본 프로젝트의{' '}
          <Link href="https://github.com/sunwoo0706/Grig" icon>
            Github URL
          </Link>{' '}
          도 같이 삽입하여주시기 바랍니다.
          <br />
          <br />
          <Text h5>개인 정보</Text>
          <Link
            icon
            href="https://github.com/login/oauth/authorize?client_id=685ffb52e4dd768b3f66&redirect_uri=https://d6ui2fy5uj.execute-api.ap-northeast-2.amazonaws.com/api/auth&scope=user:email"
          >
            GRIG OpenAPI
          </Link>{' '}
          에 본인을 등록하실 경우, Github Profile 사진 활용 및 기타 유저
          리스트에 필요한 사용자 정보 활용에 동의한 것으로 간주됩니다.
        </Text>
      </Modal.Body>
      <Modal.Footer css={{ justifyContent: 'space-between' }}>
        <Text css={{ color: '$gray600', pl: '6px', userSelect: 'none' }}>
          Desinged by sunwoo in californium.
        </Text>
        <Button color="primary" shadow auto onClick={() => setVisible(false)}>
          확인
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
