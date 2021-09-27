import Layout from '../component/layout'


export default function contact() {
  return (
    <>
    </>
  )
}

contact.getLayout = function getLayout(contact) {
    return (
      <Layout>
        {contact}
      </Layout>
    )
  }