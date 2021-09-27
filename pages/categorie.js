import Layout from '../component/layout'


export default function categorie() {
  return (
    <>
    </>
  )
}

categorie.getLayout = function getLayout(categorie) {
    return (
      <Layout>
        {categorie}
      </Layout>
    )
  }