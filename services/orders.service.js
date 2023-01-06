export const getOrders = async () => {
  const res = await fetch('/api/clients/orders');

  if (res.ok) {
    return res.json();
  }

  return { fail: true };
};

export const getOrder = async (code) => {
  const res = await fetch(`/api/clients/orders/${code}/detailed`);

  if (res.ok) {
    return res.json();
  }

  return { fail: true };
};

export const getOrderPayment = async (code) => {
  const res = await fetch(`/api/clients/orders/${code}/payment`);
  if (res.ok) {
    return res.json();
  }

  return { fail: true };
};
