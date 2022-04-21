import { getGlobalData } from '../../../services/dados-globais.service';
import { getCategoryResults } from '../../../services/catalog.service';

export { default } from '../catalog';

export async function getServerSideProps({ query }) {
  const global = await getGlobalData();
  const { marcaId, slug, ...rest } = query;
  const category = await getCategoryResults(`m-${marcaId}`, rest);
  return {
    props: { global, category },
  };
}
