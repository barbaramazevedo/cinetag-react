import Banner from '../../components/Banner';
import Title from '../../components/Title';
import Card from '../../components/Card';
import videos from '../../json/db.json';
import styles from './Home.module.css';

function Home() {
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