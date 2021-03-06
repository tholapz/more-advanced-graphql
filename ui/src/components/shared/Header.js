import React from 'react';
import styled from 'styled-components';

const Header = props => {
  const title = props.title || 'Default title';

  return (
    <Strip>
      <Title>{title.toUpperCase()}</Title>
    </Strip>
  );
};

const Strip = styled.div`
  background-color: var(--darkBlue);
  padding-top: 3rem;
  padding-bottom: 1rem;
  margin-bottom: 3rem;
  justify-content: center;
  align-self: stretch;
`;

const Title = styled.div`
  font-size: 3.5rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: var(--lightBlue);
  text-align: center;
`;

export default Header;
