import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from "src/components/Footer";
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';
import { useCallback, useEffect, useState } from 'react';

export default function Home() {
    // カウント状態管理
    const [count, setCount] = useState(0);

    // 入力文字状態管理
    const [text, setText] = useState("");

    // カウント表示状態管理
    const [isShow, setIsShow] = useState(true);

    /**
     * カウント増加処理
     */
    const handleClickCount = useCallback(() => {
        if(count < 10)
        {
            setCount(prevState => prevState + 1);
        }
    }, [count]);

    /**
     * 入力要素に文字列を入力した際の処理
     */
    const handleInputText = useCallback((e) => {
        if(e.target.value.length > 5)
        {
            alert("5文字以内で入力してください。");

            return;
        }

        setText(e.target.value.trim());
    }, []);

    /**
     * 表示・非表示をクリックした際の処理
     */
    const handleClickShow = () => {
        setIsShow(prevState => !prevState);
    }

    useEffect(() => {
        document.body.style.backgroundColor = "lightblue";

        return () => {
            document.body.style.backgroundColor = "";
        }
    }, [count]);

    return (
        <div className={styles.container}>
            <Head>
                <title>Index Page</title>
            </Head>

            <Header />

            <button onClick={handleClickCount}>カウント</button>
            {isShow ? <h1>{count}</h1> : null} 
            <input type="text" name="" id="" value={text} onChange={handleInputText} />

            <div>
                <button onClick={handleClickShow}>{isShow ? "非表示" : "表示"}</button>
            </div>

            <Main page={"index"} />

            <Footer />
        </div>
    );
};
