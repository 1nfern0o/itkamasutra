import React, {Component} from "react";
import "./ProfileStatus.css";

class ProfileStatus extends Component {

    state = {
        editMode: false
    }

    activeEditMode() {
        this.setState({
            editMode: true
        });
    }

    deactiveEditMode() {
        this.setState({
            editMode: false
        });
    }

    render() {
        return (
            <div className="profile-status">
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activeEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactiveEditMode.bind(this)} type="text" value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;