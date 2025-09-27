import { FiHeart as HeartIcon } from 'react-icons/fi';
import { GoPaperAirplane as ShareIcon } from 'react-icons/go';
import { LuUserCircle as ProfileIcon } from 'react-icons/lu';
import styles from './styles.module.css';
import '../assets/global.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.accountDetails}>
          <div className={styles.accountPicture}>
            <ProfileIcon size={24} />
          </div>
          <div className={styles.accountName}>
            <p>rbeggs</p>
          </div>
          <div className={styles.accountDate}>
            <p>September 19</p>
          </div>
        </div>
        <div className={styles.mainContent}>
          <p>
            In response to the growing homelessness crisis in San Francisco, a
            local nonprofit organization, Code Tenderloin, has launched a
            comprehensive initiative aimed at providing long-term solutions for
            individuals experiencing homelessness. The organization, founded in
            2015, is dedicated to addressing both immediate needs and underlying
            causes of homelessness through a combination of shelter services,
            job training programs, and mental health support. Read more online:
            https://www.codetenderloin.org/
          </p>
        </div>

        <img
          src="https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg"
          alt="San Francisco"
          className={styles.image}
        ></img>

        <div className={styles.reactions}>
          <div className={styles.heart}>
            <HeartIcon size={24} />
          </div>
          <div className={styles.likes}>
            <p>256 Likes</p>
          </div>
          <div className={styles.shareIcon}>
            <ShareIcon size={24} />
          </div>
        </div>

        <div className={styles.commentPage}>
          <div className={styles.accountDetails}>
            <div className={styles.accountPicture}>
              <ProfileIcon size={24} />
            </div>
            <div className={styles.accountName}>
              <p>daviddd</p>
            </div>
            <div className={styles.accountDate}>
              <p>September 20</p>
            </div>
          </div>
          <div className={styles.comments}>
            <p>
              This organization is doing amazing work tackling the complex root
              causes of the issue.
            </p>
          </div>

          <div className={styles.accountDetails}>
            <div className={styles.accountPicture}>
              <ProfileIcon size={24} />
            </div>
            <div className={styles.accountName}>
              <p>vppraggie</p>
            </div>
            <div className={styles.accountDate}>
              <p>September 21</p>
            </div>
          </div>
          <div className={styles.comments}>
            <p>Thanks for sharing!</p>
          </div>
        </div>
      </div>
    </main>
  );
}
