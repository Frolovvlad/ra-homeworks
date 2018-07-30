/* 
class SearchBox extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            query: this.props.value,
        }
    }

    searchText = event => {
        this.props.filterBooks(event.currentTarget.value)
    }

    render() {
        return (
            <input type="text" placeholder="Поиск по названию или автору" value={this.props.value} onChange={this.searchText}/>
        );
    }
}
 */



const SearchBox = (props) => {
    const searchText = event => {
        props.filterBooks(event.currentTarget.value)
    }
    
    return (
        <input type="text" placeholder="Поиск по названию или автору" value={props.value} onChange={searchText}/>
    );
}