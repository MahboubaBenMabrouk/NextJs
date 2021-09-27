import Layout from '../component/layout'


export default function singlePost() {
  return (
    <>
    </>
  )
}

singlePost.getLayout = function getLayout(singlePost) {
    return (
      <Layout>
        {singlePost}
      </Layout>
    )
  }