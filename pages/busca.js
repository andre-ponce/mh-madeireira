import Layout from '../components/Layout';
import CategoryMain from '../components/CategoryMain';

import { getGlobalData } from '../services/dados-globais.service';
import { getSearchResults } from '../services/catalog.service';
import { linkTo } from '../helpers';
import useCategoryFilter from '../hooks/useCategoryFilter';
import Pagination from '../components/Pagination';
import { useRouter } from 'next/router';

export async function getServerSideProps({ query }) {

  if (!query.q) {
    return {
      redirect: {
        destination: '/'
      }
    }
  }

  const global = await getGlobalData();
  const catalog = await getSearchResults(query);
  return {
    props: { global, catalog },
  };
}

function Busca({ global, catalog }) {
  const router = useRouter();
  const { query } = router;
  const page = parseInt(query.p || 1);
  const [isChecked, onToggleFilter] = useCategoryFilter();

  const {
    categoria,
    ultimaPagina,
    itens,
    filtros,
    breadcrumbs,
  } = catalog

  const bcPath = breadcrumbs.map(b => {
    return {
      ...b,
      slug: linkTo.category({
        slug: b.slug,
        id: b.id.split('-')[1],
        prefixo: b.id.split('-')[0],
      })
    }
  });

  return (
    <>


      <Layout globalData={global}>
        <CategoryMain
          products={itens}
          filters={filtros}
          isFilterActive={isChecked}
          onFilterChange={onToggleFilter}
          pagination={
            <Pagination
              currentPage={page}
              isLastPage={ultimaPagina}
              prevHref={{ query: { ...query, p: page - 1 } }}
              nextHref={{ query: { ...query, p: page + 1 } }}
            />
          }
        />
      </Layout>
    </>
  );
}

export default Busca;
