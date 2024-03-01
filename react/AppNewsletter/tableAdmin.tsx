// NewsletterTable.tsx
import React, { FC } from 'react';
import { Table } from 'vtex.styleguide';
import { NewsletterItem } from '../typings/admin';

interface NewsletterTableProps {
  items: NewsletterItem[];
}

const NewsletterTable: FC<NewsletterTableProps> = ({ items }) => {
  const tableSchema = {
    properties: {
      email: {
        title: "Email",
        width: 350,
      },
      preferences: {
        title: "Interesses",
        width: 350,
        cellRenderer: ({ cellData }: { cellData: string }) => {
          return <span>{cellData}</span>;
        },
      },
    },
  };

  return <Table schema={tableSchema} items={items} />;
};

export default NewsletterTable;
