import styles from '../styles/Main.module.css'
import { FaAngleDown } from 'react-icons/fa'

export default function Main({ user }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Hello, {user.firstName}</h1>
            <div className={styles.userinfo}>
                <p className={styles.text}>Browse available products below</p>
                <button className={styles.button}>
                    <FaAngleDown color='black' size={24} />
                </button>
            </div>
        </div>
    )
}