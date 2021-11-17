import Head from 'next/head';

import Layout from '../../../components/Layout';
import Banner from '../../../components/Banner';
import Breadcrumb from '../../../components/Breadcrumb';
import CategoryMain from '../../../components/CategoryMain';

import { getGlobalData } from '../../../services/dados-globais.service';
import { getCategoryResults } from '../../../services/categories.service';
import { linkTo } from '../../../helpers';
import useCategoryFilter from '../../../hooks/useCategoryFilter';

export async function getServerSideProps({query}) {
  const global = await getGlobalData();
  const { id, slug, ...rest } = query;
  const category = await getCategoryResults(id, rest);
  return {
    props: { global, category },
  };
}

function Category({ global, category: { nome, itens, filtros, breadcrumbs } }) {
  const [isChecked, onToggleFilter] = useCategoryFilter();

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
    <Head>
      <title>{`${nome}${global.seo.sulfixoDoTitulo}`}</title>
    </Head>

    <Layout globalData={global}>
      <Banner isCategory />
      <Breadcrumb
        path={bcPath}
        classPrefix="category"
      />
      <CategoryMain products={itens} filters={filtros} isFilterActive={isChecked} onFilterChange={onToggleFilter} />
    </Layout>
    </>
  );
}

export default Category;
