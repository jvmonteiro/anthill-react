import Link from 'next/link';
import { Card, Row, Col, Space } from 'antd';
import { HistoryOutlined, BranchesOutlined, GithubFilled } from '@ant-design/icons';
export function ProjectCard({ title, description, progress, features, url }) {
  const projectTitle = (
    <div>
      <span>{title}</span>
      <GithubFilled style={{ marginLeft: '0.75em' }} onClick={() => window.open(url)} />
    </div>
  );
  return (
    <>
      <Card title={projectTitle} style={{ minHeight: '200px', width: '310px' }}>
        <Card.Meta
          description={description}
          style={{ marginBottom: '2em', minHeight: '80px' }}
        ></Card.Meta>

        <Row justify='space-around' align='bottom'>
          <Col md={10}>
            <div>
              <HistoryOutlined style={{ marginRight: '1.25em' }} />
              {progress}
            </div>
          </Col>
          <Col md={10}>
            <div>
              <BranchesOutlined style={{ marginRight: '1.25em' }} />
              {features}
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default ProjectCard;
