import React, { FC } from 'react'
import { Menu } from 'antd'
import { useRouter } from 'next/router'

interface Props {
  menuItems: MenuGlobal.MenuItem[]
}

const NavMenu: FC<Props> = ({ menuItems }) => {
  const router = useRouter()
  const onClick = (e) => {
    const { push, route } = router
    if (route === e.key) return
    push(e.key)
  }

  return (
    <Menu mode="horizontal" defaultSelectedKeys={['/']} selectedKeys={[router.pathname]}>
      {menuItems?.map((item) => (
        <Menu.Item key={item.key} onClick={() => onClick(item)}>
          {item.title}
          {/* <Link href={item.pathname}>{item.title}</Link> */}
        </Menu.Item>
      ))}
    </Menu>
    // <Menu
    //   defaultSelectedKeys={['1']}
    //   defaultOpenKeys={['sub1']}
    //   mode="inline"
    //   theme="dark"
    //   items={menuItems}
    //   onClick={onClick} // 点击子菜单触发
    //   // inlineCollapsed={false}
    // ></Menu>
  )
}
export default NavMenu
