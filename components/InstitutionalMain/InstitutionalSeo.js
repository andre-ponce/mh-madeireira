import { NextSeo } from 'next-seo'

export default function InstitutionalSeo({
  tagTitle,
  metaDescription,
  ogTitulo,
  ogDescription,
  ogSiteName,
  ogImage,
}) {

  return (
    <>
      <NextSeo
        title={tagTitle}
        description={metaDescription}
        openGraph={{
          title: ogTitulo || tagTitle,
          description: ogDescription || metaDescription,
          site_name: ogSiteName,
          images: [{ url: ogImage }]
        }}
      />
    </>
  )
}