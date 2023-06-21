import React from 'react';
import classNames from 'classnames'

type Props = {
  children: React.ReactNode;
  effect?: 'fade' | 'blur'
};

export default function Layout({ children , effect }: Props) {
  return <>
    <div className={classNames("house-layout" , effect)}>
      {children}
    </div>
  </>;
}
