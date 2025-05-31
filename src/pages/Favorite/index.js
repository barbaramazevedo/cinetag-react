import styles from './Favorite.module.css'
import Banner from '../../components/Banner';
import Title from '../../components/Title';
import Card from '../../components/Card';
import { useFavoriteContext } from '../../contexts/favorites';

function Favorite() {
    const { favorite } = useFavoriteContext();

    return (
        <>
            <Banner image="Fav"/>
            <Title>
                <h1>My Favorites</h1>
            </Title>
            <section className={styles.container}>
                { favorite.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>    
        </>
    )
}

export default Favorite;