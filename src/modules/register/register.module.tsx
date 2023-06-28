'use client';
import React, {useEffect, useRef, useState} from 'react';
import Layout from '../../common/components/layout';
import FormRegister from '../register/components/form.component';
import Header from '../register/components/header.component';

export default function Home() {
  return (
    <Layout effect="fade">
      <div className='register'>
        <Header />
        <FormRegister />
      </div>
    </Layout>
  );
}
