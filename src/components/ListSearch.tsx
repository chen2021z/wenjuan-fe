import { ChangeEvent, FC, useEffect, useState } from 'react'
import { Input } from 'antd'
import { LIST_SEARCH_PARAM_KEY } from '../constant'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

const { Search } = Input

const ListSearch: FC = () => {
  const [value, setValue] = useState('')
  const { pathname } = useLocation()
  const nav = useNavigate()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleSearch = (value: string) => {
    // 跳转页面，新增url参数
    nav({
      pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`,
    })
  }

  // 获取 url search参数，并设置到 input 的value
  const [searchParams] = useSearchParams()
  useEffect(() => {
    const curVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
    setValue(curVal)
  }, [searchParams])

  return (
    <Search
      placeholder="输入关键字"
      size="large"
      allowClear
      value={value}
      onChange={handleChange}
      onSearch={handleSearch}
      style={{ width: '260px' }}
    />
  )
}

export default ListSearch
