import { useEffect, useState } from 'react';
import Head from 'next/head';
import { getUserRepos } from '../src/api/octokit';
import SiteHeader from '../src/components/Header/Header';
import ProjectList from '../src/components/Project/ProjectList';
import { Layout, Row } from 'antd';

export default function MainPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const result = await getUserRepos('jvmonteiro');
      if (!result) {
        console.log('Couldnt fetch projects');
      } else {
        setProjects(result.data);
      }
    };
    fetchProjects();
  }, []);
  const renderProjectList =
    projects.length > 0 ? <ProjectList projects={projects} /> : <div>Loading...</div>;
  return (
    <>
      <Head>
        <title>Anthill | Project Manager</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <SiteHeader />
        <Layout.Content style={{ margin: '5em' }}>
          <Row
            gutter={[
              { xs: 24, md: 40, lg: 32, xl: 40 },
              { xs: 24, md: 40, lg: 32, xl: 40 },
            ]}
          >
            {renderProjectList}
          </Row>
        </Layout.Content>
      </Layout>
    </>
  );
}
