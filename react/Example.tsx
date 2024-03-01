import React, { FC } from 'react';
import { useQuery } from 'react-apollo';
import GET_EMAILS from './graphql/getNewsletter.gql';
import { Layout, PageBlock, Table } from 'vtex.styleguide';
import { QueryData, NewsletterItem } from './typings/admin';

// Tipagens importadas ou definidas anteriormente


const AdminExample: FC = () => {
  const { data, loading, error } = useQuery<QueryData>(GET_EMAILS, {
    ssr: false,
  });

  const items: NewsletterItem[] = data?.getNewsletter.map(newsletter => ({
    email: newsletter.email,
    preferences: newsletter.preferences.join(', '),
  })) || [];

  const tableSchema = {
    properties: {
      email: {
        title: "Email",
        width: 350,
      },
      preferences: {
        title: "Interesses",
        width: 350
      },
    },
  };

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
        {!loading && !error && (
          <Table
            schema={tableSchema}
            items={items}
          />
        )}
      </PageBlock>
    </Layout>
  );
};

export default AdminExample;
