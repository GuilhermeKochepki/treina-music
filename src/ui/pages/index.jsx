import MusicList from "../components/data-display/MusicList/MusicList";

const musics = [
    {
        id: 1,
        title: "Astroscape Motivation",
        artist: "No Copyrighter",
        time: 150
    },
    {
        id: 2,
        title: "Tokyo Cafe",
        artist: "Tvari",
        time: 153
    }
]

export default function Index() {
    return (
        <MusicList
            musics={musics}
            selectedMusic={musics[0]}
            OnSelect={() => {}}
        />
    )
}