import React from 'react'
import PropTypes from 'prop-types'
//
const ProfileChild = (props) => {
const {fullName,bio,profession,handelAlerte}=props;

    return (
        <div className="profileclasse">
            <div  className="profileclasse1">
            <h2>My name is : {fullName}</h2>
            <h2>Bio : {bio}</h2>
            <h2>Profession : {profession}</h2>
            </div>
            {props.children}
            <button className="btna" onClick={()=>handelAlerte(fullName)}>Alert</button>

        </div>
    )
}

ProfileChild.defaultProps={
    fullName: "the Best Author in the World"
}

ProfileChild.propTypes={
    fullName:PropTypes.string.isRequired,
    bio: PropTypes.string,
    profession: PropTypes.string
    
    }

export default ProfileChild
