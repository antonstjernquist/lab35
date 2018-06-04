import React, {Component} from "React";

export function WarningMessage(props) {
    if (props.warnings.length > 0) {
        const wrappedWarnings = props.warnings.map((warning, index) => {
            <li key={index}> { warning } </li>
        });

        return (
            <div>
                <h3> Warnings </h3>
                <ul>
                    {wrappedWarnings}
                </ul>
            </div>

        )
    }
    return null;
}

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          emailValue: '',
          imageValue: '',
          emailCheck: false,
          imageCheck: false,
          warnings: [],
          props: { // hehe
            alreadyInUseMails: ['berra@gmail.com', 'steve@lit.com']
          }
        };
    }

    handleEmailChange = event => {
        const val = event.target.value;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
            if (this.state.props.alreadyInUseMails.includes(val)) {
                this.setState({emailValue: val });
            }
        } else {
            alert("You have entered an invalid email address!")

        }


    }
    handleImageChange = event => {
      const url = event.target.value;
      if(url.includes('jpg') && url.includes('http')){
        this.setState({imageCheck: true});
        this.setState({imageValue: url });
      } else {
        this.setState({imageCheck: false});
      }
    }

    handleSave = event => {
      console.log('Saved', event);
    }


    render() {
      return (
        <div className="theWrapperOfDoom">
        <WarningMessage warnings={this.state.warnings}/>
          <input type="text" onChange={this.handleEmailChange} value={this.emailValue} />
          <input type="text" onChange={this.handleImageChange} value={this.imageValue} />
          <button onClick={this.handleSave} > Save changes </button>
        </div>
      )
    }
}

export default UserProfile;
