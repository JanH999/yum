import classNames from 'classnames';
import styles from './card.module.scss';
import UltraprocessedFood58D54C3Jpg from '../../assets/ultraprocessed-food-58d54c3.jpg';

export interface CardProps {
    imageUrl?: string;
    children?: React.ReactNode;
    className?: string;
}

export const Card = ({ imageUrl = UltraprocessedFood58D54C3Jpg, children = "SuperDefault", className }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={imageUrl} alt="" className={styles.image} />
            <div className={styles.content}>{children}</div>
        </div>
    );
};
