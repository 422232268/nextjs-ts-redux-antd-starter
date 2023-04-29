import { NextPage } from 'next'
import { Button, Space, ConfigProvider, Divider } from 'antd'
const Home: NextPage = () => {
  return (
    <>
      <Space.Compact direction="vertical" size={'large'}>
        <Button type="primary">primary</Button>
        <Divider></Divider>
        <Button type="dashed">dashed</Button>
        <Divider></Divider>
        <Button>ghost</Button>
        <Divider></Divider>
        <Button type="text">text</Button>
        <Divider></Divider>
        <Button type="link">link</Button>
      </Space.Compact>

      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#2fbaa1',
          },
        }}
      >
        <Space.Compact direction="vertical" size={'large'}>
          <Button type="primary">primary</Button>
          <Divider></Divider>

          <Button type="dashed">dashed</Button>
          <Divider></Divider>

          <Button>ghost</Button>
          <Divider></Divider>

          <Button type="text">text</Button>
          <Divider></Divider>

          <Button type="link">link</Button>
        </Space.Compact>
      </ConfigProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#b9263d',
          },
        }}
      >
        <Space.Compact direction="vertical" size={'large'}>
          <Button type="primary">primary</Button>
          <Divider></Divider>

          <Button type="dashed">dashed</Button>
          <Divider></Divider>

          <Button>ghost</Button>
          <Divider></Divider>

          <Button type="text">text</Button>
          <Divider></Divider>

          <Button type="link">link</Button>
        </Space.Compact>
      </ConfigProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#edc688',
          },
        }}
      >
        <Space.Compact direction="vertical" size={'large'}>
          <Button type="primary">primary</Button>
          <Divider></Divider>

          <Button type="dashed">dashed</Button>
          <Divider></Divider>

          <Button>ghost</Button>
          <Divider></Divider>

          <Button type="text">text</Button>
          <Divider></Divider>

          <Button type="link">link</Button>
        </Space.Compact>
      </ConfigProvider>
    </>
  )
}

export default Home
