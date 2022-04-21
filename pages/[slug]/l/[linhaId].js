import { getGlobalData } from '../../../services/dados-globais.service';
import { getCategoryResults } from '../../../services/catalog.service';

export { default } from '../catalog';

export async function getServerSideProps({ query }) {
  const global = await getGlobalData();
  const { linhaId, slug, ...rest } = query;
  const category = await getCategoryResults(`l-${linhaId}`, rest);
  return {
    props: { global, category },
  };
}
