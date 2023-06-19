import React from 'react';

import ButtonGroop from '@/app/common/components/button-group'
import InputIcon from '@/app/common/components/input'
import Image from 'next/image'
import styles from './page.module.css'
import { React } from 'react';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <InputIcon/>
        <ButtonGroop/>
      </div>
    </main>
  )
}
