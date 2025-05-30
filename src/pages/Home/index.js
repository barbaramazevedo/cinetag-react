import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Title from '../../components/Title';

function Home() {
    return (
        <>
            <Header />
            <Banner image="Home"/>
            <Title>
                <h1>A place to store your videos and movies!</h1>
            </Title>
            <Footer />
        </>
    );
}

export default Home;