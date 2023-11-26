import { withAuthorization } from '@/server/lib/withAuthorization';
import Layout from '@/components/Layout';
import { getGlobalData } from '@/server/api/global.api';
import { ChangeEmailForm } from '@/components/SignupForm/ChangeEmailForm';
import SweetAlert from 'react-bootstrap-sweetalert';
import { useState } from 'react';

export const getServerSideProps = withAuthorization(async (ctx) => {
  const { user } = ctx;
  const [global] = await getGlobalData();
  return {
    props: {
      user,
      global,
    },
  };
});

export default function ChangePassword({ user, global }) {
  const [alertMessage, setAlertMessage] = useState('');

  async function saveChanges(values) {
    const res = await fetch('/api/clients/change-email', {
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(values),
      method: 'POST',
    });

    if (res.ok) {
      setAlertMessage('Cadastro alterado com sucesso!');
      return res;
    }

    return { ok: false };
  }
  return (
    <Layout secureArea globalData={global}>
      <ChangeEmailForm user={user} onSubmit={saveChanges} />
      {
        alertMessage && (
          <SweetAlert onConfirm={() => setAlertMessage('')} btnSize="sm" confirmBtnText="Voltar" confirmBtnStyle={{ border: '0' }}>
            {alertMessage}
          </SweetAlert>
        )
      }
    </Layout>
  );
}
