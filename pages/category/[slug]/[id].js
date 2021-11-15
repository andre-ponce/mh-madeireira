import Head from 'next/head';
import { useRouter } from 'next/router';

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
  console.log(category, id)
  return {
    props: { global, category },
  };
}

function Category({ global, category: { nome, itens: products, filtros: filters, breadcrumbs } }) {
  const [isChecked, onToggleFilter] = useCategoryFilter();

  const bcPath = breadcrumbs.map(b => {
    b.slug = linkTo.category({
      id: b.id.split('-')[1],
      prefixo: b.id.split('-')[0],
      slug: b.slug
    });
    return b;
  })

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
      <CategoryMain products={products} filters={filters} isFilterActive={isChecked} onFilterChange={onToggleFilter} />
    </Layout>
    </>
  );
}

export default Category;
