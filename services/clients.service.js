const cache = {};

export async function isEmailAvaliable(email) {
  if (!cache[email]) {
    const res = await fetch(`/api/clients/email-avaliable?email=${email}`);
    const data = await res.json();
    cache[email] = data;
  }
  return cache[email].avaliable;
}
