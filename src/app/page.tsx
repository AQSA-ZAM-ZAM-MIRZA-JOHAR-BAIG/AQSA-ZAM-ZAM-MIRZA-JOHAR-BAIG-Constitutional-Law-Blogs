import Link from "next/link";
import styles from './page.module.css';
import connectToDatabase from "@/lib/db";
import { Post } from "@/models/Post";
import { User } from "@/models/User"; // Import User to register the schema before populating

export default async function Home() {
  let recentPosts: any[] = [];
  let dbError = false;

  try {
    // Always connect to DB and register models on home entry
    await connectToDatabase();
    // Fetch only 3 recent published posts
    recentPosts = await Post.find({ published: true })
      .populate('author', 'name')
      .sort({ publishedAt: -1, createdAt: -1 })
      .limit(3)
      .lean();
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    dbError = true;
  }

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Indian Constitutional Law Insights</h1>
          <p className={styles.heroSubtitle}>
            Dive deep into precise analyses of provisions, landmark cases, and pivotal amendments shaping the legal landscape.
          </p>
          <div className={styles.heroActions}>
            <Link href="/posts" className={styles.primaryButton}>Explore Articles</Link>
            <Link href="/posts?category=Case+Analysis" className={styles.secondaryButton}>Recent Case Laws</Link>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className={styles.recentSection}>
        <div className={styles.sectionHeader}>
          <h2>Latest Insights</h2>
          <Link href="/posts" className={styles.viewAll}>View All</Link>
        </div>
        
        <div className={styles.grid}>
          {dbError ? (
            <p className={styles.error}>Unable to load recent articles. Please check database connection.</p>
          ) : recentPosts.length === 0 ? (
            <p className={styles.empty}>No articles available at the moment. Visit the admin panel to seed or create posts.</p>
          ) : (
            recentPosts.map((post: any) => (
              <Link href={`/posts/${post.slug || post._id}`} key={post._id.toString()} className={styles.card}>
                <div className={styles.cardTag}>{post.category}</div>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardSummary}>{post.summary}</p>
                <div className={styles.cardFooter}>
                  <span>{post.author?.name || 'Editorial Board'}</span>
                  <span>{new Date(post.publishedAt || post.createdAt).toLocaleDateString()}</span>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
      {/* Online Profiles and Projects Section */}
      <section className={styles.profilesSection}>
        <div className={styles.profilesHeader}>
          <span className={styles.profilesBadge}>FIND ME ONLINE</span>
          <h2 className={styles.profilesTitle}>Online Profiles & Projects</h2>
          <p className={styles.profilesSubtitle}>
            Connect with me across the web — from legal publications and academic repositories to code and content platforms.
          </p>
        </div>

        <div className={styles.sectionHeader}>
          <h2>Profiles</h2>
        </div>
        <div className={styles.profileGrid}>
          <a href="https://www.linkedin.com/in/aqsa-zam-zam-mirza-johar-baig-28501b3b6/?isSelfProfile=true" target="_blank" rel="noopener noreferrer" className={styles.profileCard}>
            <div className={styles.profileIcon} style={{backgroundColor: '#0077B5'}}>in</div>
            <div className={styles.profileInfo}>
              <h4>LINKEDIN</h4>
              <p>Aqsa Zam Zam Mirza Johar Baig</p>
            </div>
            <span className={styles.profileArrow}>↗</span>
          </a>
          <a href="https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG" target="_blank" rel="noopener noreferrer" className={styles.profileCard}>
            <div className={styles.profileIcon} style={{backgroundColor: '#333'}}>🐙</div>
            <div className={styles.profileInfo}>
              <h4>GITHUB</h4>
              <p>@AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG</p>
            </div>
            <span className={styles.profileArrow}>↗</span>
          </a>
          <a href="https://aqsamirza08.medium.com/" target="_blank" rel="noopener noreferrer" className={styles.profileCard}>
            <div className={styles.profileIcon} style={{backgroundColor: '#000'}}>M</div>
            <div className={styles.profileInfo}>
              <h4>MEDIUM BLOG</h4>
              <p>@aqsamirza08</p>
            </div>
            <span className={styles.profileArrow}>↗</span>
          </a>
          <a href="https://www.kaggle.com/aqsamirza08" target="_blank" rel="noopener noreferrer" className={styles.profileCard}>
            <div className={styles.profileIcon} style={{backgroundColor: '#20BEFF'}}>K</div>
            <div className={styles.profileInfo}>
              <h4>KAGGLE</h4>
              <p>@aqsamirza08</p>
            </div>
            <span className={styles.profileArrow}>↗</span>
          </a>
          <a href="https://stackoverflow.com/users/32468898/aqsa-zam-zam-mirza-johar-baig" target="_blank" rel="noopener noreferrer" className={styles.profileCard}>
            <div className={styles.profileIcon} style={{backgroundColor: '#F48024'}}>so</div>
            <div className={styles.profileInfo}>
              <h4>STACK OVERFLOW</h4>
              <p>Aqsa Zam Zam Mirza Johar Baig</p>
            </div>
            <span className={styles.profileArrow}>↗</span>
          </a>
          <a href="https://www.youtube.com/@aqsamirza08" target="_blank" rel="noopener noreferrer" className={styles.profileCard}>
            <div className={styles.profileIcon} style={{backgroundColor: '#FF0000'}}>▶</div>
            <div className={styles.profileInfo}>
              <h4>YOUTUBE</h4>
              <p>@aqsamirza08</p>
            </div>
            <span className={styles.profileArrow}>↗</span>
          </a>
        </div>

        <div className={styles.sectionHeader} style={{marginTop: '4rem'}}>
          <h2>Projects</h2>
        </div>
        <div className={styles.profileGrid}>
          <a href="https://aqsa-zam-zam-mirza-johar-baig-portf.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.profileCard}>
            <div className={styles.profileIcon} style={{backgroundColor: '#1E3A8A'}}>🌐</div>
            <div className={styles.profileInfo}>
              <h4>PORTFOLIO SITE</h4>
              <p>aqsa-...mirza-johar-baig-portf</p>
            </div>
            <span className={styles.profileArrow}>↗</span>
          </a>
          <a href="https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.profileCard}>
            <div className={styles.profileIcon} style={{backgroundColor: '#B45309'}}>📜</div>
            <div className={styles.profileInfo}>
              <h4>URDU SHAYARI</h4>
              <p>Beautiful Poetry Collection</p>
            </div>
            <span className={styles.profileArrow}>↗</span>
          </a>
          <a href="https://aqsa-zam-zam-mirza-johar-baig-law-d.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.profileCard}>
            <div className={styles.profileIcon} style={{backgroundColor: '#4B5563'}}>⚖️</div>
            <div className={styles.profileInfo}>
              <h4>LAW DICTIONARY</h4>
              <p>Legal Terminology Reference</p>
            </div>
            <span className={styles.profileArrow}>↗</span>
          </a>
          <a href="https://aqsa-zam-zam-mirza-johar-baig-blogs.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.profileCard}>
            <div className={styles.profileIcon} style={{backgroundColor: '#047857'}}>📝</div>
            <div className={styles.profileInfo}>
              <h4>PERSONAL BLOG</h4>
              <p>Articles and Thoughts</p>
            </div>
            <span className={styles.profileArrow}>↗</span>
          </a>
        </div>
      </section>

    </div>
  );
}


