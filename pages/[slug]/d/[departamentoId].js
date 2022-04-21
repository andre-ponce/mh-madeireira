import { getGlobalData } from '../../../services/dados-globais.service';
import { getCategoryResults } from '../../../services/catalog.service';

export { default } from '../catalog';

export async function getServerSideProps({ query }) {
  const global = await getGlobalData();
  const { departamentoId, slug, ...rest } = query;
  const category = await getCategoryResults(`d-${departamentoId}`, rest);
  return {
    props: { global, category },
  };
}
