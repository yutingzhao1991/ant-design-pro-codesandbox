import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';

const NewPage: React.FC = () => {
  return (
    <PageContainer
      header={{
        title: '新的页面',
      }}
    >
      Hello World!
    </PageContainer>
  );
};

export default NewPage;
