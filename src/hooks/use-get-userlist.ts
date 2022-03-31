import useSWR, { Fetcher } from 'swr';
import { request, RequestDocument } from 'graphql-request';

import { User } from 'shared/Type';

interface data {
  ranking: User[];
}

const fetcher: Fetcher<data, RequestDocument> = (query: RequestDocument) =>
  request(
    'https://d6ui2fy5uj.execute-api.ap-northeast-2.amazonaws.com/api/graphql',
    query,
  );

export const useUserList = () => {
  const { data, error } = useSWR(
    `{
      ranking(criteria: "contributions", count: 100, generation: 0, page: 1) {
        name
        generation
        nickname
        avatar_url
        bio
        contributions
      }
    }`,
    fetcher,
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
