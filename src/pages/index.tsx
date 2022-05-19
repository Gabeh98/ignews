import type { NextPage } from "next";
import { SubscribeButton } from "src/components/SubscribeButton";
import styles from "./home.module.scss";

const Home: NextPage = () => {
  return (
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👋 Hey, welcome</span>
        <h1>
          News about the <span>React</span> world.
        </h1>
        <p>
          Get acess for all applications <br />
          <span>for $9.99/month</span>
        </p>
        <SubscribeButton />
      </section>
      <img src="/images/avatar.svg" alt="avatar" />
    </main>
  );
};

export default Home;
