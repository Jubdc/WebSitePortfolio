import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Loader = ({ finishLoading }) => {
  useEffect(() => {
    finishLoading(); // Appelle la fonction pour indiquer que le chargement est terminé
  }, [finishLoading]);

  return null; // Ne rend rien visuellement
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
