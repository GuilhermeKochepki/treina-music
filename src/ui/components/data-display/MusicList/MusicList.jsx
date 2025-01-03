import styles from './MusicList.module.css'

export default function MusicList (props) {
    function isSelected(music) {
        return  music === props.selectedMusic ? styles.selected : ''
    }

    return (
        <ul className={styles.musicList}>
            {props.musics.map(music => (
                <li
                    key={music.id}
                    className={[styles.musicListItem, isSelected(music)].join(' ')}
                    onClick={() => props.OnSelect(music)}
                >
                    <div className={styles.information}>
                        <div className={styles.title}>{music.title}</div>
                        <div className={styles.artist}>{music.artist}</div>
                        <div className={styles.time}>{music.time}</div>
                    </div>
                </li>
            ))}
        </ul>
    )
}