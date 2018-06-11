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
            alreadyInUseMails: ['berra@gmail.com', 'steve@lit.com', 'majBoiz@gmail.com']
          }
        };
    }

    handleEmailChange = event => {
        const val = event.target.value;
        if (typeof val !== 'string') {
            this.setState({emailCheck: false});
            return;
        }
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
            if (!this.state.props.alreadyInUseMails.includes(val)) {
                this.setState({emailValue: val, emailCheck: true });
            }
        } else {
            alert("You have entered an invalid email address!")
            this.setState({emailCheck: false});
        }


    }
    handleImageChange = event => {
      /* Only accept safe files */
      const url = event.target.value;
      if(url.includes('jpg') && url.includes('https://')){
        this.setState({imageCheck: true, imageValue: url });
      } else {
        this.setState({imageCheck: false});
        console.log('Bad image URL. Note: It has to be a secure image.');
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
