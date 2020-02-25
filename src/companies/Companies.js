import React from 'react';

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
      <h2>Arbejdspladser</h2>
      <CompaniesList companies={orderedCompanies} />
    </div>
  );
};

export default Companies;
