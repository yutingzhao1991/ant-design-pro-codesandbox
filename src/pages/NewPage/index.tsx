import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { ProColumns } from '@ant-design/pro-table';

import type { TableListItem } from './service';
import { rule } from './service';

const NewPage: React.FC = () => {
  const columns: ProColumns<TableListItem>[] = [
    {
      title: '规则名称',
      dataIndex: 'name',
    },
    {
      title: '规则描述',
      dataIndex: 'desc',
    },
  ];

  return (
    <PageContainer
      header={{
        title: '新的页面',
      }}
    >
      <ProTable<TableListItem> columns={columns} request={rule} />
    </PageContainer>
  );
};

export default NewPage;
