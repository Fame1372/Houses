import Image from 'next/image'
import styles from './page.module.css'
import ButtonGroop from './common/components/button-group/Button-group.component';
import InputIcon from './common/components/input/Input.component';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* <InputIcon/>
        <ButtonGroop/> */}
      </div>
    </main>
  )
}
