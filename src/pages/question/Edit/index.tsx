import React, { useEffect, useState } from 'react'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'
import styles from './index.module.scss'
import EditCanvas from './EditCanvas'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import EditHeader from './EditHeader'
import { useDispatch } from 'react-redux'
import { changeSelectedId } from '../../../store/componentsReducer'
import { useTitle } from 'ahooks'
import useGetPageInfo from '../../../hooks/useGetPageInfo'

const Edit: React.FC = () => {
  const { loading } = useLoadQuestionData()
  const dispatch = useDispatch()

  function clearSelectedId() {
    dispatch(changeSelectedId(''))
  }

  // 修改标题
  const { title } = useGetPageInfo()
  useTitle(`问卷编辑 - ${title}`)

  return (
    <div className={styles.container}>
      <div style={{ backgroundColor: '#fff' }}>
        <EditHeader />
      </div>
      <div className={styles['content-wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>
            <LeftPanel />
          </div>
          <div className={styles.main} onClick={clearSelectedId}>
            <div className={styles['canvas-wrapper']}>
              <EditCanvas loading={loading} />
            </div>
          </div>
          <div className={styles.right}>
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit
