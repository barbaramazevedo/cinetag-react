import Banner from '../../components/Banner';
import Title from '../../components/Title';
import Card from '../../components/Card';
import styles from './Home.module.css';
import { useEffect, useState } from 'react';

function Home() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/barbaramazevedo/db-cinetag/videos')
            .then(response => response.json())
            .then(data => {
                setVideos(data)
            })
    }, [])

    return (
        <>
            <Banner image="Home"/>
            <Title>
                <h1>A place to store your videos and movies!</h1>
            </Title>
                <section className={styles.container}>
                    {videos.map((video) => {
                        return <Card {...video} key={video.id} />
                    })}
                </ section>    
        </>
    );
}

export default Home;