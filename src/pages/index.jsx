import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from "src/components/Footer";
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';
import { useCallback } from 'react';

export default function Home() {
    /**
     * ボタンをクリックした際の処理
     */
    const handleClickButton = useCallback((e) => {
        e.preventDefault();

        console.log("ボタン");
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Index Page</title>
            </Head>

            <Header />

            <button onClick={handleClickButton}>ボタン</button>
            
            <Main page={"index"} />

            <Footer />
        </div>
    );
};
