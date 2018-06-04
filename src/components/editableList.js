import React, {Component} from 'react';
import "./editableList.css";

export function AddButtonsAndRenderList(props) {
    let formatted = [];
    if (props.texts.length > 0) {
        formatted = props.texts.map((text, index) => {
            return (
                <tr key={index}>
                    <td>
                        {text}
                    </td>
                    <td>
                     <button onClick={props.handleRemove.bind(this)}>X</button>
                    </td>
                </tr>
            )
        });
    }
    return formatted;

}

export function DisplayList(props) {
    return (
        <table className="leTable">
            <thead>
            <tr>
                <th>Text data</th>
            </tr>
            </thead>
            <tbody>
            <AddButtonsAndRenderList texts={props.texts} handleRemove={props.callback}/>
            </tbody>
        </table>
    )
}

class EditableList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            texts: [],
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleInput(event) {
        this.setState({value: event.target.value});
    };

    handleAdd() {
        this.setState({texts: [...this.state.texts, this.state.value]});
    };

    handleRemove(val) {
        const stateArray = [...this.state.texts];
        const index = stateArray.indexOf(val);
        stateArray.splice(index, 1);
        this.setState({texts: stateArray});
    };


    render() {
        return (
            <div className="theHolyFuckingWrapper">
                <input value={this.state.value} onChange={this.handleInput}/>
                <button onClick={this.handleAdd} type="button">Add text</button>
                <DisplayList callback={this.handleRemove} texts={this.state.texts}/>
            </div>
        )
    }
}

export default EditableList;
