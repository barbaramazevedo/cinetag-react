import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Title from '../../components/Title';
import Card from '../../components/Card';

function Home() {
    return (
        <>
            <Header />
            <Banner image="Home"/>
            <Title>
                <h1>A place to store your videos and movies!</h1>
            </Title>
                <Card id='1' titulo='bonifácio cat' cover='https://thecatapi.com/api/images/get?format-src&type=png' />
            <Footer />
        </>
    );
}

export default Home;