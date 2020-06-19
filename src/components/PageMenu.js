import React from 'react'
import { Container, Menu, Image } from 'semantic-ui-react'

const PageMenu = () => {
  return (
    <Menu secondary borderlexx fixed="top">
      <Container text>
        <Menu.Item as="a">resume</Menu.Item>
        <Menu.Item position="right">
          <Image size="mini" src="./imgs/favicon.png" />
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default PageMenu
