import React from 'react';
import styles from './FeatureSection.module.css';
import SocialLinks from './SocialLinks';

function FeatureSection() {
  return (
    <main className={styles.wrapper}>
      <h1> Will Luft</h1>
      <SocialLinks />
      <section>
        <h3>
          Information & Business Technology | Leathercrafter | Cantor
          | Soccer & Volleyball Player | Dad | Long Islander | Chelsea
          FC & NY Islanders & Green Bay Packers Fan | Runner
        </h3>
      </section>
    </main>
  );
}

export default FeatureSection;
