import React, { FC, useEffect, useState } from 'react'
import { Space, Typography } from 'antd'
import { FormOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'
import { MANAGE_INDEX_PATHNAME } from '../router'

const { Title } = Typography

const Logo: FC = () => {
  return (
    <div className={styles.container}>
      <Link to={MANAGE_INDEX_PATHNAME}>
        <Space>
          <Title>
            <FormOutlined />
          </Title>
          <Title>小治问卷</Title>
        </Space>
      </Link>
    </div>
  )
}

export default Logo
