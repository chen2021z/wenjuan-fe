import { FC } from 'react'
import QuestionTitle from '../../../components/QuestionComponents/QuestionTitle/Component'
import styles from './EditCanvas.module.scss'
import QuestionInput from '../../../components/QuestionComponents/QuestionInput/Component'
import { Spin } from 'antd'
import { ComponentInfoType } from '../../../store/componentsReducer'
import { getComponentConfByType } from '../../../components/QuestionComponents'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
type PropsType = {
  loading: boolean
}

function genComponent(componentInfo: ComponentInfoType) {
  const { type, props } = componentInfo // 每个组件的信息，是从 redux store 获取的（服务端获取）

  const componentConf = getComponentConfByType(type)
  if (componentConf == null) return null

  const { Component } = componentConf
  return <Component {...props} />
}

const EditCanvas: FC<PropsType> = ({ loading }) => {
  const { componentList, selectedId } = useGetComponentInfo()

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <Spin></Spin>
      </div>
    )
  }
  return (
    <div className={styles.canvas}>
      {componentList.map(c => {
        const { fe_id } = c
        return (
          <div key={fe_id} className={styles['component-wrapper']}>
            <div className={styles.component}>{genComponent(c)}</div>
          </div>
        )
      })}
    </div>
  )
}

export default EditCanvas
