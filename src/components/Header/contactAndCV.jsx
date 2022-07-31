import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import CV from '../../assets/documents/Brian Sanchez CV.pdf';

const CTA = () => {
  const { i18n, t } = useTranslation(["header"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("es");
    }
  }, []);

  return (
    <div className='cta'>
        <a href={CV} download="Brian-Sanchez-CV" className='btn'>{t("download")}</a>
        <a href='#contact' className='btn'>{t("contact")}</a>
    </div>
  );
};

export default CTA;