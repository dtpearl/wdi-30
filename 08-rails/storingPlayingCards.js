class PlayingCards extends Component {
  constructor () {
    super();
    this.state = {
      response_ids_current: [],
      response_ids_burnt: []
    }
    console.log(this.props);

    const fetchBurns = () => {
      const game_id = this.props.game_id;

      axios.get("http://localhost:3000/burns.json").then(json => {
        const data = json.data;

        const burnt_response_ids = data.filter( (el) => {
          return el.game_id === game_id;
        });

        const response_ids = burnt_response_ids.map(a => a.response_id);

        this.setState({ response_ids_burnt: response_ids });
        console.log("Fetch Burns");
      });

    } // End of fetchBurns()

    // fetchBurns();

    const fetchResponse = () => {
      const deck_id = this.props.deck_id;

      axios.get("http://localhost:3000/deck/"+ deck_id +".json").then(json => {
        const deck_data = json.data;
        const response_ids_current = this.state.response_ids_current

        while (response_ids_current.length < 7 ) {
          const index_random = Math.floor(Math.random() * deck_data.responses.length);
          const response_id = deck_data.responses[index_random];

          if (!response_ids_current.includes(response_id)) {
            response_ids_current.push(response_id);
          }

        }

        this.setState({ response_ids_current });
      });
    } // End of fetchResponse()

    // fetchResponse();


  } // End of Constructor


  render() {
    return (
      <h1>Playing Cards</h1>
    );
  }
} // End of Class PlayingCards
