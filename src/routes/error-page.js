import { useRouteError } from 'react-router-dom';
import Header from '../components/Header';
import styled from 'styled-components';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <MainWrapper id='error-page'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.main`
  padding-left: var(--padding-left);
  padding-right: var(--padding-left);
  padding-bottom: var(--size-3);
  max-width: var(--max-content-width);
`;
