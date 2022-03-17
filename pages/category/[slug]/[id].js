import Head from 'next/head';

import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import Breadcrumb from '../../../components/Breadcrumb';
import CategoryMain from '../../../components/CategoryMain';
import CategoryBanner from '../../../components/CategoryMain/CategoryBanner';

import { getGlobalData } from '../../../services/dados-globais.service';
import { getCategoryResults } from '../../../services/catalog.service';
import { linkTo } from '../../../helpers';
import useCategoryFilter from '../../../hooks/useCategoryFilter';
import Pagination from '../../../components/Pagination';

export async function getServerSideProps({ query }) {
  const global = await getGlobalData();
  const { id, slug, ...rest } = query;
  const category = await getCategoryResults(id, rest);
  return {
    props: { global, category },
  };
}

function Category({ global, category }) {
  const router = useRouter();
  const { query } = router;
  const page = parseInt(query.p || 1, 10);
  const [isChecked, onToggleFilter] = useCategoryFilter();

  const {
    categoria,
    ultimaPagina,
    itens,
    filtros,
    breadcrumbs,
  } = category;

  const bcPath = breadcrumbs.map((b) => ({
    ...b,
    slug: linkTo.category({
      slug: b.slug,
      id: b.id.split('-')[1],
      prefixo: b.id.split('-')[0],
    }),
  }));

  return (
    <>
      <Head>
        <title>{`${categoria.nome}${global.seo.sulfixoDoTitulo}`}</title>
      </Head>

      <Layout globalData={global}>
        <CategoryBanner
          breadcrumbs={<Breadcrumb path={bcPath} />}
          banner={{
            src: '/images/braskape_banner-category.jpg',
            alt: categoria.nome,
          }}
        />
        <CategoryMain
          name={categoria.nome}
          products={itens}
          filters={filtros}
          isFilterActive={isChecked}
          onFilterChange={onToggleFilter}
          pagination={(
            <Pagination
              currentPage={page}
              isLastPage={ultimaPagina}
              prevHref={{ query: { ...query, p: page - 1 } }}
              nextHref={{ query: { ...query, p: page + 1 } }}
            />
          )}
        />
      </Layout>
    </>
  );
}

export default Category;
