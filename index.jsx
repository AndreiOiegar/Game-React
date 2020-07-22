class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = { full: false };
    }

    render() {
        console.log(this.state.full);
        const myStyle = {
            marginTop: "20px",
        }

        const nonfull = (<div className="game"
            style={myStyle}>

            <h1> {this.props.title} </h1>
            <div className="details">
                <img src={this.props.imageUrl} />
                <p> {this.props.description}</p>
            </div>

        </div >)

        let toDisplay = nonfull;

        return toDisplay;
    }
}

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