/*import React from 'react'
import Form from '../../components/shared/Form/Form'

const Login = () => {
  return (
    <>
      <div className='row g-0 '>
    <div className='col-md-8 form-banner'>
         <img src="./assests/images/banner1.jpg" alt="LoginImage"/>  </div>
    <div className='col-md-4 form-container'>
 <Form formTitle={'login page'} submitBtn={'login'} formType={'login'}/>
    </div>
      </div>
    </>
  )
}

export default Login
*/
import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src='./assests/images/banner1.jpg' alt="" />
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;

