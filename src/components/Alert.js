// import React from 'react'

// const Alert = (props) => {
//   return (
// <div>
//             <div className="alert alert-primary" role="alert">
//                 {props.message}
//             </div>
//         </div>
//           )
// }

// export default Alert
import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"></i> {alert.msg}
      </div>
    )
  );
};

export default Alert;

