import { useRouteError } from 'react-router-dom';

interface ErrorProps {
  message: string;
  statusText: string;
  status: number;
}

export const Error = () => {
  const error = useRouteError() as ErrorProps;
  return (
    <>
      <h1>Error: {error.message}</h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </>
  );
};
