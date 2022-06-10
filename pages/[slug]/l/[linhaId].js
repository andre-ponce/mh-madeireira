import { getGlobalData } from '@/server/api/global.api';
import { getCategoryResults } from '@/server/api/catalog.api';

export { default } from '../catalog';

export async function getServerSideProps({ query }) {
  const global = await getGlobalData();
  const { linhaId, slug, ...rest } = query;
  const category = await getCategoryResults(`l-${linhaId}`, rest);
  return {
    props: { global, category },
  };
}
