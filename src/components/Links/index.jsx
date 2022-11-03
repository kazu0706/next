import styles from 'src/components/Links/Links.module.css';

const  ITEMS = [
    {
        id: 1,
        href: "https://nextjs.org/docs",
        title: "Documentation \u2192",
        description: "Find in-depth information about Next.js features and API."
    },
    {
        id: 2,
        href: "https://nextjs.org/learn",
        title: "Learn \u2192",
        description: "Learn about Next.js in an interactive course with quizzes!"
    },
    {
        id: 3,
        href: "https://github.com/vercel/next.js/tree/canary/examples",
        title: "Examples \u2192",
        description: "Discover and deploy boilerplate example Next.js projects."
    },
    {
        id: 4,
        href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        title: "Deploy \u2192",
        description: "Instantly deploy your Next.js site to a public URL with Vercel."
    },
];

export function Links() {
    return (
        <div className={styles.grid}>
            {ITEMS.map(item => {
                return (
                    <a key={item.id} href={item.href} className={styles.card}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </a>
                )
            })}
        </div>
    );
};
