import ProjectCard from './ProjectCard';
import { Col } from 'antd';
export default function ProjectList({ projects }) {
  let latestProjects = projects
    .sort((a, b) => {
      return a.updated_at < b.updated_at ? -1 : a.updated_at > b.updated_at ? 1 : 0;
    })
    .reverse()
    .slice(0, 10);
  let renderProjects = latestProjects.map((p) => {
    return (
      <Col xs={24} md={12} lg={8} xl={6} key={p.name}>
        <ProjectCard
          title={p.name}
          description={p.description}
          progress={0}
          features={p.open_issues_count}
          url={p.html_url}
          style={{ margin: '0 3em' }}
        />
      </Col>
    );
  });
  return <>{renderProjects}</>;
}
