import React, { FC } from 'react';
import { QueryData, NewsletterItem } from './typings/admin';
import { Layout, PageBlock } from 'vtex.styleguide';
import NewsletterTable from './AppNewsletter/tableAdmin';
import { useQuery } from 'react-apollo';
import GET_EMAILS from './graphql/getNewsletter.gql';


const AdminExample: FC = () => {
  const { data, loading, error } = useQuery<QueryData>(GET_EMAILS, {
    ssr: false,
  });

  const items: NewsletterItem[] = data?.getNewsletter.map(newsletter => ({
    email: newsletter.email,
    preferences: newsletter.preferences.join(', '),
  })) || [];


  return (
    <Layout>
      <PageBlock
        title="Dados Newsletter"
        subtitle="Emails cadastrados para receber newsletter e suas categorias de preferência"
        variation="full"
      >
        <h1>Emails cadastrados na Newsletter</h1>
        {loading && <div>Carregando...</div>}
        {error && <div>Erro ao buscar os dados.</div>}
        {!loading && !error && <NewsletterTable items={items} />}
      </PageBlock>
    </Layout>
  );
};

export default AdminExample;
