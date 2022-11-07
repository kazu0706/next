import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from "src/components/Footer";
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';
import { useEffect } from 'react';

export default function Home() {
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

            <Main page={"index"} />

            <Footer />
        </div>
    );
};
