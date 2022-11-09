import React from "react";

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const blockStyle = {
      position: 'absolute',
      left: '30%',
      width: '40%',
      borderRadius: '20px',
      border: '1px solid black',
      backgroundColor: '#cacaca'
    }
  
    const fillerStyles = {
      height: 'auto',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: '20px',
      textAlign: 'center'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div>
        <div style={blockStyle}>
          <div style={fillerStyles}>
              <span style={labelStyles}>{`${completed}hp`}</span>
          </div>
        </div>
      </div>
    );
};
  
export default ProgressBar;