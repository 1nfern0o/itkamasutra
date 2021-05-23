import React, {useEffect, useState} from "react";
import "./ProfileStatus.css";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activeEditMode = () => {
        setEditMode(true);
    };
    //
    const deactiveEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    return (
        <div className="profile-status">
            {!editMode &&
                <div>
                    <span onDoubleClick={activeEditMode}>{props.status || "No status"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deactiveEditMode}
                           type="text" value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatus;