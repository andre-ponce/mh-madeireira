import Layout from '@/components/Layout';
import { getGlobalData } from '@/server/api/global.api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export async function getServerSideProps() {
  const [global] = await getGlobalData();
  return { props: { global } };
}

function Logout({ global }) {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { ok } = await fetch('/api/auth/logout', { method: 'post' });
      if (ok) router.push('/');
    })();
  }, []);

  return (
    <Layout globalData={global} secureArea>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxHeight: '300px',
          height: '50vh',
          fontSize: '2rem',
        }}
      >
        <span style={{ marginBottom: '20px' }}><FontAwesomeIcon icon="fa-spin fa-spinner" /></span>
        <h3>desconectando</h3>
      </div>
    </Layout>
  );
}

export default Logout;
