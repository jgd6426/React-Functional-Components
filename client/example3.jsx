const React = require('react');
const ReactDOM = require('react-dom');

const {useState} = React;

const SongContainer = (props) => {
    const [songs, setSongs] = useState(props.songs);

    useEffect( async () => {
        const response = await fetch('/getSongs');
        setSongs(await response.json());
    }, []);

    if (props.songs.length === 0) {
        return (
            <div>
                <h3>No Songs Yet!</h3>
            </div>
        );
    }

    const songList = props.songs.map(song => {
        return (
            <div key={song.title}>
                <h2>{song.artist} - <i>{song.title}</i></h2>
            </div>
        );
    });

    return (
        <div>
            <h1>My Favorite Songs!</h1>
            {songList}
        </div>
    );
};

const init = () => {
    ReactDOM.render(<SongContainer songs={[]} />,
        document.getElementById('app'));
};

window.onload = init;
