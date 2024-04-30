import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const CTA = () => {
  const { t } = useTranslation(["header"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("es");
    }
  }, []);

  return (
    <div className='cta'>
        <a href="https://drive.google.com/file/d/1Z-uL-W9MElXoLWBU86FyAJqRxrLO6KTR/view?usp=sharing" target='_blank' rel='noreferrer' className='btn'>{t("download")}</a>
        <a href='#contact' className='btn'>{t("contact")}</a>
    </div>
  );
};

export default CTA;