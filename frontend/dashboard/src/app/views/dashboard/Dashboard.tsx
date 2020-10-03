import React, {FC} from 'react';
import {RevenueChart} from '../../components/charts/revenue-chart/RevenueChart';
import {CustomersChart} from '../../components/charts/customers-chart/CustomersChart';

export const Dashboard: FC = () => (
    <>
      <h1>Dashboard</h1>
      <RevenueChart/>
      <CustomersChart/>
    </>
);
