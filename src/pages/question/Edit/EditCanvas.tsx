import { FC } from 'react'
import QuestionTitle from '../../../components/QuestionComponents/QuestionTitle/Component'
import styles from './EditCanvas.module.scss'
import QuestionInput from '../../../components/QuestionComponents/QuestionInput/Component'
import { Spin } from 'antd'

type PropsType = {
  loading: boolean
}

const EditCanvas: FC<PropsType> = ({ loading }) => {
  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <Spin></Spin>
      </div>
    )
  }
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
