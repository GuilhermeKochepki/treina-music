import styles from './Timeline.module.css'

export default function Timeline() {
    return (
        <div className={styles.container}>
            <div className={styles.timelineLine} />
            <input type="range" className={styles.timelineSlider} />
        </div>
    )
}