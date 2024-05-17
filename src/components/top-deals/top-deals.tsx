import classNames from 'classnames';
import styles from './top-deals.module.scss';
import { Card } from '../card/card';
import Article291139TheTop10HealthiestFoodsForKids024B745E57928C4786A61B47D8Ba920058Jpg from '../../assets/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg';
import ImagesJpg from '../../assets/images.jpg';
import BurgerWithMeltedCheeseWebp from '../../assets/burger-with-melted-cheese.webp';
import UltraprocessedFood58D54C3Jpg from '../../assets/ultraprocessed-food-58d54c3.jpg';

export interface TopDealsProps {
    className?: string;
}

export const TopDeals = ({ className }: TopDealsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames(styles.container, styles.root)}>
                <h2>Today&apos;s Top Deals</h2>
                <div className={styles.cards}>
                    <Card imageUrl={Article291139TheTop10HealthiestFoodsForKids024B745E57928C4786A61B47D8Ba920058Jpg}>Breakfast</Card>
                    <Card imageUrl={ImagesJpg}>Hotdogs</Card>
                    <Card imageUrl={BurgerWithMeltedCheeseWebp}>Burger</Card>
                    <Card imageUrl={UltraprocessedFood58D54C3Jpg}>Menu 2</Card>
                    <Card imageUrl={Article291139TheTop10HealthiestFoodsForKids024B745E57928C4786A61B47D8Ba920058Jpg}>Breakfast 2</Card>
                </div>
            </div>
        </div>
    );
};
