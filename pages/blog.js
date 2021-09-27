import Layout from '../component/layout'


export default function blog() {
  return (
    <>
    </>
  )
}

blog.getLayout = function getLayout(blog) {
    return (
      <Layout>
        {blog}
      </Layout>
    )
  }