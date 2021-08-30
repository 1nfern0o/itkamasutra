import React, {ChangeEvent, FC, useEffect, useState} from "react";
import "./ProfileStatus.css";

type PropsType = {
    status: string,
    updateStatus: (status: string) => void,
};

const ProfileStatus: FC<PropsType> = (props) => {
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

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    };

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    return (
        <div className="profile-status">
            {!editMode &&
                <div>
                    <b>Status: </b><span onDoubleClick={activeEditMode}>{props.status || "No status"}</span>
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