import Layout from '../components/layout'


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