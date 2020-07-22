
class App extends React.Component {
    state = {
        data: [],
    }

    componentDidMount() {
        const url = "https://games-app-siit.herokuapp.com";

        fetch(url + "/games", {
            method: "GET",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then(response => response.json())
            .then(response => this.setState({ data: response }));

    }

    render() {
        const { data } = this.state;

        let divs = data.map(gameJson => {
            return (<Game id={gameJson._id} title={gameJson.title} description={gameJson.description} imageUrl={gameJson.imageUrl} />);
        });

        console.log(divs)
        return (
            <div>
                {divs}
            </div>
        )
    }
}

const appDOM = document.getElementById('container');
ReactDOM.render(<App />, appDOM)