import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Volunteers',
    Svg: require('@site/static/img/team.svg').default,
    description: (
      <>
        Join the team to help us make this project a reality.
        You can help us to review hospital websites, write code 
        and help us to publish findings.
      </>
    ),
  },
  {
    title: 'Hospitals',
    Svg: require('@site/static/img/building.svg').default,
    description: (
      <>
        Work with us to fix issues identified by the community.
        Use our tools, code and/or contribute your tools, code.
      </>
    ),
  },
  {
    title: 'Researchers',
    Svg: require('@site/static/img/search.svg').default,
    description: (
      <>
        Access all the data we have on hospitals and their prices
        and share your insights and strategies to make this mission a reality.
      </>
    ),
  },
  {
    title: 'Media',
    Svg: require('@site/static/img/publisher.svg').default,
    description: (
      <>
        Access all the data we have on hospitals and their prices
        and share your analysis and commentary to inform the public.
      </>
    ),
  },
  {
    title: 'Sponsors',
    Svg: require('@site/static/img/show_support.svg').default,
    description: (
      <>
        Support us by donating to our project or sponsor us, to make this mission of 
        hospital price transparency a reality.
      </>
    ),
  },
  {
    title: 'Supporters',
    Svg: require('@site/static/img/social.svg').default,
    description: (
      <>
      Access all the data we have on hospitals and their prices and spread the word 
      in your social circles to make this information accessible to all.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
