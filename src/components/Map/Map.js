import React from 'react';
import styled from 'styled-components';

import map from './map_final.png';

const Map = ({ className }) => {
  return <img className={className} src={map} alt='' />;
};

export default styled(Map)`
  position: absolute;
  width: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
`;
