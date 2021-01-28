import ProjectCard from './ProjectCard';
import { Col } from 'antd';
import { getRepoInfo } from '../../api/octokit';
import { useState, useEffect } from 'react';
export default function ProjectList({ projects }) {
  const [render, setRender] = useState([]);
  let latestProjects = projects
    .sort((a, b) => {
      return a.updated_at < b.updated_at ? -1 : a.updated_at > b.updated_at ? 1 : 0;
    })
    .reverse()
    .slice(0, 8);
  let renderProjects = () =>
    latestProjects.map((p) => {
      return (
        <Col xs={24} md={12} lg={8} xl={6} key={p.name}>
          <ProjectCard
            title={p.name}
            description={p.description}
            progress={p.commits || 0}
            features={p.branches || 0}
            url={p.html_url}
            style={{ margin: '0 3em' }}
          />
        </Col>
      );
    });
  useEffect(() => {
    const fetchRepoInfo = (projects) => {
      projects.forEach(async (p) => {
        const owner = p.owner.login;
        const info = await getRepoInfo(owner, p.name);
        const [commits, branches] = info;
        p.commits = commits.length;
        p.branches = branches.length;
      });
    };
    fetchRepoInfo(latestProjects);
    setRender(renderProjects());
  }, [latestProjects]);

  return <>{render}</>;
}
