import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from "src/components/Footer";
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';
import { useEffect, useState } from 'react';

export default function Home() {
    // カウント状態管理
    const [count, setCount] = useState(0);

    /**
     * カウント増加処理
     */
    const handleClickCount = () => {
        setCount(prevState => prevState + 1);
    }

    useEffect(() => {
        document.body.style.backgroundColor = "lightblue";

        console.log("マウント");

        return () => {
            document.body.style.backgroundColor = "";

            console.log("アンマウント");
        }
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Index Page</title>
            </Head>

            <Header />

            <button onClick={handleClickCount}>カウント</button>
            <h1>{count}</h1>

            <Main page={"index"} />

            <Footer />
        </div>
    );
};
