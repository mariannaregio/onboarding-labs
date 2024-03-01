 import React, { FC } from 'react'
 import { useQuery } from 'react-apollo'
 import GET_EMAILS from './graphql/getNewsletter.gql'
 import { Layout, PageBlock } from 'vtex.styleguide'

const AdminExample: FC = () => {
   const { data } = useQuery(GET_EMAILS, {
     ssr: false
   })
   const items = JSON.stringify(data)
  return (
    <Layout>
       <PageBlock title="Dados Newsletter" subtitle="Emails cadastrados para receber newsletter e suas categorias de preferência" variation="full">
         <h1>Emails cadastrados na Newsletter</h1>
        {console.log(items)}
         <p>{items}</p>
       </PageBlock>
     </Layout>
  )
}

export default AdminExample
