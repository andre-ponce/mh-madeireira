import SignupForm from '@/components/SignupForm/SignupForm';
import { withAuthorization } from '@/server/lib/withAuthorization';
import Layout from '@/components/Layout';
import { getGlobalData } from '@/server/api/global.api';
import { getUserInfo } from '@/server/api/user.api';
import { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

export const getServerSideProps = withAuthorization(async (ctx) => {
  const { session } = ctx;
  const [user] = await getUserInfo(session);
  const [global] = await getGlobalData();
  return {
    props: {
      user,
      global,
    },
  };
});

export default function ClientDetails({ user, global }) {
  const [alertMessage, setAlertMessage] = useState('');

  async function saveChanges(values) {
    const res = await fetch('/api/clients', {
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(values),
      method: 'PUT',
    });

    if (res.ok) {
      setAlertMessage('Cadastro alterado com sucesso!');
    }
  }

  return (
    <Layout secureArea globalData={global}>
      <SignupForm user={user} onSubmit={saveChanges} />
      {
        alertMessage && (
          <SweetAlert onConfirm={() => setAlertMessage('')} btnSize="sm" confirmBtnText="Ok" confirmBtnStyle={{ border: '0' }}>
            {alertMessage}
          </SweetAlert>
        )
      }
    </Layout>
  );
}
