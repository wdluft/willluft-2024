import React from 'react';
import useSWR from 'swr';

// instagram id: 54912543863
// IF pulling from instagram, use url below
// const URL = `https://www.instagram.com/graphql/query/?query_hash=e769aa130647d2354c40ea6a439bfc08&variables={"id":"54912543863","first":4}`;

function Leather() {
  return (
    <>
      <h1>This is the Leather page!</h1>
      <main>
        <img src='https://www.instagram.com/p/C1xZpGAuTPo/?img_index=1?size=1' />
      </main>
    </>
  );
}

export default Leather;
