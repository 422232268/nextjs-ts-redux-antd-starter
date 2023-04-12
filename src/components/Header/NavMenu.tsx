import React, { FC } from 'react'
import { Menu } from 'antd'
import { useRouter } from 'next/router'
import Link from 'src/components/Link'
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

interface Props {
  menuItems: MenuGlobal.MenuItem[]
}
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
// {
//   key: '/',
//   title: '主页',
//   desc: '项目主页面',
//   pathname: '/',
// },
// {
//   key: '/user',
//   title: '用户页',
//   desc: '用户信息',
//   pathname: '/user',
// },
// {
//   key: '/articles',
//   title: '文章列表页',
//   desc: '文章列表来展示请求数据',
//   pathname: '/articles',
// },
const items: MenuItem[] = [
  getItem('Option 1', '/user', <PieChartOutlined />),
  getItem('Option 2', '/', <DesktopOutlined />),
  getItem('Option 3', '/articles', <ContainerOutlined />),

  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),

    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];
const NavMenu: FC<Props> = ({ menuItems }) => {
  console.log('menuItems', menuItems)
  const router = useRouter()
  const onClick = (MenuItem) => {
    console.log(MenuItem)
    router.push(MenuItem.key)
  }

  return (
    // <Menu mode="horizontal" defaultSelectedKeys={['/']} selectedKeys={[router.pathname]}>
    //   {menuItems?.map((item) => (
    //     <Menu.Item key={item.key} onClick={() => onClick(item)}>
    //       {item.title}
    //       {/* <Link href={item.pathname}>{item.title}</Link> */}
    //     </Menu.Item>
    //   ))}
    // </Menu>
        <Menu style={{ width: 256 }} mode="vertical" defaultSelectedKeys={['/']} selectedKeys={[router.pathname]} items={items} onClick={onClick} />
    // <Menu
    //   mode="horizontal"
    //   // defaultSelectedKeys={['/']}
    //   // defaultOpenKeys={['/']}
    //   // theme="dark"
    //   items={items}
    //   onClick={onClick} // 点击子菜单触发
    //   // inlineCollapsed={false}
    // ></Menu>
  )
}
export default NavMenu
