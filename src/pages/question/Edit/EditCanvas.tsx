import { FC, MouseEvent } from 'react'
import QuestionTitle from '../../../components/QuestionComponents/QuestionTitle/Component'
import styles from './EditCanvas.module.scss'
import QuestionInput from '../../../components/QuestionComponents/QuestionInput/Component'
import { Spin } from 'antd'
import {
  ComponentInfoType,
  changeSelectedId,
  moveComponent,
} from '../../../store/componentsReducer'
import { getComponentConfByType } from '../../../components/QuestionComponents'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'
import useBindCanvasKeyPress from '../../../hooks/useBindCanvasKeyPress'
import SortableContainer from '../../../components/DragSortable/SortableContainer'
import SortableItem from '../../../components/DragSortable/SortableItem'

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
  const dispatch = useDispatch()

  const handleClick = (event: MouseEvent, id: string) => {
    event.stopPropagation()
    dispatch(changeSelectedId(id))
  }

  // 绑定快捷键
  useBindCanvasKeyPress()

  // SortableContainer 组件的 items 属性，需要每个 item 都有 id
  const componentListWithId = componentList.map(c => {
    return { ...c, id: c.fe_id }
  })

  // 拖拽排序结束
  function handleDragEnd(oldIndex: number, newIndex: number) {
    dispatch(moveComponent({ oldIndex, newIndex }))
  }

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <Spin></Spin>
      </div>
    )
  }
  return (
    <SortableContainer items={componentListWithId} onDragEnd={handleDragEnd}>
      <div className={styles.canvas}>
        {componentList
          .filter(c => !c.isHidden)
          .map(c => {
            const { fe_id, isLocked } = c
            // 拼接 class name
            const wrapperDefaultClassName = styles['component-wrapper']
            const selectedClassName = styles.selected
            const lockedClassName = styles.locked
            const wrapperClassName = classNames({
              [wrapperDefaultClassName]: true,
              [selectedClassName]: fe_id === selectedId,
              [lockedClassName]: isLocked,
            })
            return (
              <SortableItem key={fe_id} id={fe_id}>
                <div className={wrapperClassName} onClick={e => handleClick(e, fe_id)}>
                  <div className={styles.component}>{genComponent(c)}</div>
                </div>
              </SortableItem>
            )
          })}
      </div>
    </SortableContainer>
  )
}

export default EditCanvas
