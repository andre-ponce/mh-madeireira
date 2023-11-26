import { withAuthorization } from '@/server/lib/withAuthorization';
import Layout from '@/components/Layout';
import { getGlobalData } from '@/server/api/global.api';
import { ChangePasswordForm } from '@/components/SignupForm/ChangePasswordForm';
import { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

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
    const res = await fetch('/api/clients/change-password', {
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

    const data = await res.json();
    if (data?.$error?.errorDescription) {
      setAlertMessage(data.$error.errorDescription);
    }

    return { ok: false };
  }

  return (
    <Layout secureArea globalData={global}>
      <ChangePasswordForm user={user} onSubmit={saveChanges} />
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
