import React, { useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { Button, message } from 'antd';
import type { TableListItem } from './service';
import { rule, addRule, removeRule } from './service';

const NewPage: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<TableListItem>[] = [
    {
      title: '规则名称',
      dataIndex: 'name',
    },
    {
      title: '规则描述',
      dataIndex: 'desc',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="config"
          onClick={() => {
            removeRule({
              key: [record.key],
            })
              .then(() => {
                if (actionRef.current) {
                  actionRef.current.reload();
                }
                message.success('删除成功');
              })
              .catch(() => {
                message.success('删除失败');
              });
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  const addForm = (
    <ModalForm
      onFinish={async (fields: TableListItem) => {
        try {
          await addRule(fields);
          if (actionRef.current) {
            actionRef.current.reload();
          }
          message.success('添加成功');
          return true;
        } catch (error) {
          message.error('添加失败请重试！');
          return false;
        }
      }}
      trigger={<Button type="primary">新建</Button>}
    >
      <ProFormText label="规则名称" name="name" required />
      <ProFormText label="规则描述" name="desc" required />
    </ModalForm>
  );

  return (
    <PageContainer
      header={{
        title: '新的页面',
      }}
    >
      <ProTable<TableListItem>
        actionRef={actionRef}
        toolBarRender={() => {
          return [addForm];
        }}
        columns={columns}
        request={rule}
      />
    </PageContainer>
  );
};

export default NewPage;
