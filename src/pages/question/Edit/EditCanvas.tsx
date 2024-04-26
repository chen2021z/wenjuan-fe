import { FC } from 'react'
import QuestionTitle from '../../../components/QustionComponents/QuestionTitle/Component'
import styles from './EditCanvas.module.scss'
import QuestionInput from '../../../components/QustionComponents/QuestionInput/Component'

const EditCanvas: FC = () => {
  return (
    <div className={styles.canvas}>
      <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <QuestionTitle />
        </div>
      </div>
      <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <QuestionInput />
        </div>
      </div>
    </div>
  )
}

export default EditCanvas
