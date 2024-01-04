import Mock from 'mockjs'

Mock.mock('/api/test', 'get', () => ({
  error: 0,
  data: {
    name: '如约而至' + Date.now()
  }
}))