import React from 'react';

interface Props {
  children?: JSX.Element | string;
}

export const Text: React.SFC<Props> = ({
  children
}) => (
  <span>{children}</span>
);
