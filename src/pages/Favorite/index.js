import styles from './Favorite.module.css'
import Banner from '../../components/Banner';
import Title from '../../components/Title';
import Card from '../../components/Card';

function Favorite() {
    return (
        <>
        <Banner image="Fav"/>
            <Title>
                <h1>My Favorites</h1>
            </Title>
                <section className={styles.container}>
                    <Card id='1' titulo='Gato bonifácio' capa='https://thecatapi.com/api/images/get?format=src&type=png' />
                </ section>    
        </>
    )
}

export default Favorite;