import React from 'react';
import { Toaster } from 'react-hot-toast'

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <>
    <div className="club-layout">
      {children}
    </div>
    <Toaster toastOptions={{ className: 'club-toast', duration: 1500 }} />
  </>;
}
