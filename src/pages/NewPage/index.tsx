import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { ProColumns } from '@ant-design/pro-table';

interface TableListItem {
  key: number;
  name: string;
  desc: string;
}

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
      <ProTable<TableListItem>
        columns={columns}
        request={async () => {
          return {
            data: [
              {
                key: 1,
                name: '规则一',
                desc: '规则一的描述',
              },
              {
                key: 2,
                name: '规则二',
                desc: '规则二的描述',
              },
            ],
            success: true,
            total: 100,
          };
        }}
      />
    </PageContainer>
  );
};

export default NewPage;
