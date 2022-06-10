import { useEffect, useState } from 'react';

export function useClientInfo() {
  const [client, setClient] = useState({ loading: true });

  useEffect(() => {
    const fetchClient = async () => {
      const res = await fetch('/api/clients');
      if (res.status === 200) {
        const clientData = await res.json();
        setClient(clientData);
        return;
      }
      setClient({ disconnected: true });
    };

    fetchClient();
  }, []);

  return client;
}
