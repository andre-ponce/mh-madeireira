import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import CategoryMain from '@/components/CategoryMain';
import { getGlobalData } from '@/server/api/global.api';
import { getSearchResults } from '@/server/api/catalog.api';
import { useSearchFilter } from '@/hooks/useCategoryFilter';
import Pagination from '@/components/Pagination';

export async function getServerSideProps({ query }) {
  if (!query.q) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  const [global] = await getGlobalData();
  const [catalog] = await getSearchResults(query);
  return {
    props: { global, catalog },
  };
}

function Busca({ global, catalog }) {
  const router = useRouter();
  const { query } = router;
  const page = parseInt(query.p || 1, 10);
  const [isChecked, onToggleFilter, pagination, orderBy] = useSearchFilter();

  const {
    ultimaPagina,
    itens,
    filtros,
  } = catalog;

  return (
    <>
      <Layout globalData={global}>
        <CategoryMain
          products={itens}
          filters={filtros}
          isFilterActive={isChecked}
          onFilterChange={onToggleFilter}
          orderBy={orderBy}
          pagination={(
            <Pagination
              currentPage={page}
              isLastPage={ultimaPagina}
              prevHref={pagination.prev}
              nextHref={pagination.next}
            />
          )}
        />
      </Layout>
    </>
  );
}

export default Busca;
