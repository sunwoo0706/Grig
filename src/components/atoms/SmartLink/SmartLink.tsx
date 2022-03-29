import { Link, Text } from '@nextui-org/react';

interface SmartLinkProps {
  href: string;
  children: React.ReactNode;
}

export const SmartLink: React.FC<SmartLinkProps> = ({ href, children }) => {
  const regEx =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

  return regEx.test(href) ? (
    <Link href={href} target="_blank" rel="noreferrer">
      <Text>{children}</Text>
    </Link>
  ) : (
    <Link href={href}>
      <Text>{children}</Text>
    </Link>
  );
};
