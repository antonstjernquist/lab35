import React, {Component} from "react";

export function WarningMessage(props) {
    if (props.warnings.length > 0) {
        const wrappedWarnings = props.warnings.map((warning, index) => {
            return <li key={index}> {warning} </li>
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
            success: false,
            props: { // hehe
                alreadyInUseMails: ['berra@gmail.com', 'steve@lit.com', 'majBoiz@gmail.com']
            }
        };
    }

    handleEmailChange = event => {
        const val = event.target.value;
        this.setState({warnings:[]})
        if (typeof val !== 'string') {
            this.setState({emailCheck: false});
            return;
        }
        if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(val)) {
            if (!this.state.props.alreadyInUseMails.includes(val)) {
                this.setState({emailValue: val, emailCheck: true});
            }
        } else {
            console.log("You have entered an invalid email address!");
            this.setState({emailCheck: false});
        }


    };
    handleImageChange = event => {
        /* Only accept safe files */
        this.setState({warnings: []});
        const url = event.target.value;
        if ((url.includes('jpg') || url.includes('jpeg') || url.includes('png')) && url.includes('https://')) {
            this.setState({imageCheck: true, imageValue: url});
        } else {
            this.setState({imageCheck: false});
            console.log('Bad image URL. Note: It has to be a secure image.');
        }
    };

    handleSave = event => {
        if (this.state.imageCheck && this.state.emailCheck) {
            console.log("Tillägget lyckades")
            this.setState({success: ["Tilläget lyckades"]});
        }else {
            console.log("Check your email and img")
            if (!this.state.imageCheck) {
            this.setState({warnings: [...this.state.warnings, 'Bad image URL. Note: It has to be a secure image.']})
            }
            if (!this.state.emailCheck) {
                this.setState({warnings: [...this.state.warnings, 'Bad email or already used.']})
            }
        }
    };

    render() {
        return (
            <div className="theWrapperOfDoom">
                <WarningMessage warnings={this.state.warnings}/>
                <div>{this.state.success ? this.state.success : false}</div>
                <input type="text" onChange={this.handleEmailChange} value={this.emailValue}/>
                <input type="text" onChange={this.handleImageChange} value={this.imageValue}/>
                <button onClick={this.handleSave}> Save changes</button>
            </div>
        )
    }
}

export default UserProfile;
