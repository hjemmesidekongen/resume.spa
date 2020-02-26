import React from 'react';
import Typography from '@material-ui/core/Typography';

import store from '../store/companies.json';
import CompaniesList from './CompaniesList';

const Companies = () => {
  const companies = store.data;
  const orderedCompanies = companies.sort((a, b) => {
    if (a.hiredAt > b.hiredAt) return 1;
    if (b.hiredAt > a.hiredAt) return -1;

    return 0;
  });

  return (
    <div>
      <Typography variant="h4">Arbejdspladser</Typography>
      <CompaniesList companies={orderedCompanies} />
    </div>
  );
};

export default Companies;
