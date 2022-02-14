import React from 'react';
import { useTranslation } from 'react-i18next';

const Winery = () => {
    
  const { t } = useTranslation();
  return(
    <div className='winery'>
        <div className="container">
          <div className='notAvailable'>
            <h1>{ t("winery.not_found") }</h1>
          </div>
        </div>
  </div>
  )
};

export default Winery;
