import { Layout, Menu, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import styles from './Header.module.css';

export function SiteHeader() {
  return (
    <Layout.Header>
      <Row justify='space-around' align='middle'>
        <Col md={4}>
          {/* Convert to styled-component */}
          <div className={styles.logo}>
            <Link className='anchor' href='/'>
              ANTHILL
            </Link>
          </div>
        </Col>
        <Col md={{ span: 8 }}>
          <Menu theme='dark' mode='horizontal'>
            <Menu.Item key='1'>
              <Link href='/projects'>Projects</Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Link href='/features'>Features</Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col md={{ span: 2, offset: 10 }}>
          <UserOutlined style={{ fontSize: '28px', color: '#fff' }} />
        </Col>
      </Row>
    </Layout.Header>
  );
}

export default SiteHeader;
