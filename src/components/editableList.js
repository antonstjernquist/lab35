import React, {Component} from 'react';

function AddButtonsAndRenderList(props) {
    const formatted = props.texts.map((text) => {
        return (
            <td>{text} <button onClick={props.removePerson()}></button></td>
        )
    })

}

function DisplayList(props) {
    return (
        <table>
            <thead>
            <tr>
                <th>Text data</th>
            </tr>
            </thead>
            <tbody>
                <AddButtonsAndRenderList removePerson={props.callback}/>
            </tbody>
        </table>
    )
}

class EditableList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            texts: [],
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.removeText = this.removeText.bind(this);
    }

    handleInput = event => {
        this.setState({value: event.target.value});
    };

    handleAdd(val) {
        this.setState(prevState => ({
            texts: [...prevState.texts, val]
        }))
    };

    removeText(val) {
        console.log(val);
        // const stateArray = [...this.state.texts];
        // const index = stateArray.indexOf(val);
        // stateArray.splice(index, 1);
        // this.setState({texts: stateArray});
    };


    render() {
        return (
            <div>
                <input value={this.state.value} onChange={this.handleInput}/>
                <button onClick={this.handleAdd} type="button">Add text</button>
                <DisplayList callback={removeText} texts={this.texts}/>
            </div>
        )
    }
}

export default EditableList;