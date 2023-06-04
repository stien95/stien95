import ProjectsContainer from '@/containers/ProjectsContainer'
import Head from 'next/head'

export default function index() {
  return (
    <main>
      <Head>
        <title>Stien95 - Main Page</title>
      </Head>
      <h1>Stien95 - Main Page</h1>
      <h2>React Developer, currently doing a project on Next JS</h2>
      <ProjectsContainer />
    </main>
  )
}
