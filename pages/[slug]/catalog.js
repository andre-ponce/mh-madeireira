import Head from 'next/head';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import CategoryMain from '@/components/CategoryMain';
import CategoryBanner from '@/components/CategoryMain/CategoryBanner';
import { getGlobalData } from '@/server/api/global.api';
import { getCategoryResults } from '@/server/api/catalog.api';
import { linkTo } from '@/helpers';
import { useCategoryFilter } from '@/hooks/useCategoryFilter';
import Pagination from '@/components/Pagination';

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const { id, slug, ...rest } = params;
  const [global] = await getGlobalData();
  const category = await getCategoryResults(id, rest);
  return {
    props: { global, category },
    revalidate: 1,
  };
}

function Category({ global, category }) {
  const [isChecked, onToggleFilter, pagination, orderBy] = useCategoryFilter();

  const {
    categoria,
    ultimaPagina,
    itens,
    filtros,
    breadcrumbs,
  } = category;

  const breadcrumbsPath = (breadcrumbs || []).map((b) => ({
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
          breadcrumbs={<Breadcrumb path={breadcrumbsPath} />}
          banner={{
            src: '',
            alt: categoria.nome,
          }}
        />
        <CategoryMain
          name={categoria.nome}
          products={itens}
          filters={filtros}
          isFilterActive={isChecked}
          onFilterChange={onToggleFilter}
          orderBy={orderBy}
          pagination={(
            <Pagination
              currentPage={pagination.currentPage}
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

export default Category;
