import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// Professional Header Component - NO EMOJIS
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/chapter-1">
            Begin with Chapter 1
          </Link>
          <Link
            className="button button--secondary button--lg"
            style={{ marginLeft: '1rem' }}
            to="/docs/intro">
            View Syllabus
          </Link>
        </div>
      </div>
    </header>
  );
}

// Data for Professional Feature Blocks - NO EMOJIS
const CHAPTERS = [
  {
    title: 'Chapter 1: Foundations',
    description: 'The convergence of AI and mechanical engineering. Understand embodiment, history, and key definitions.',
    link: '/docs/chapter-1',
  },
  {
    title: 'Chapter 2: Mathematics',
    description: 'Linear algebra, calculus, kinematics, and dynamics. The language of physical motion.',
    link: '/docs/chapter-2',
  },
  {
    title: 'Chapter 3: Perception',
    description: 'How robots see the world. Vision systems, LiDAR, SLAM, and sensor fusion.',
    link: '/docs/chapter-3',
  },
  {
    title: 'Chapter 4: Control',
    description: 'From PID to Model Predictive Control. Architectures for stable and robust action.',
    link: '/docs/chapter-4',
  },
  {
    title: 'Chapter 5: Learning',
    description: 'Reinforcement Learning, Sim-to-Real transfer, and maximum entropy policies.',
    link: '/docs/chapter-5',
  },
];

function ChapterGrid() {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <div className="row">
        {CHAPTERS.map((chapter, idx) => (
          <div key={idx} className={clsx('col col--4 margin-bottom--lg')}>
            <Link to={chapter.link} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card h-100">
                <div className="card__header">
                  <h3>{chapter.title}</h3>
                </div>
                <div className="card__body">
                  <p>{chapter.description}</p>
                </div>
                <div className="card__footer">
                  <span className="button button--link">Read Chapter &rarr;</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="The Definitive Guide to Physical AI and Humanoid Robotics">
      <HomepageHeader />
      <main>
        <ChapterGrid />
      </main>
    </Layout>
  );
}
