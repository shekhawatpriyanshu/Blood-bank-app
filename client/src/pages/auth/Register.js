/*import React from 'react'
import Form from '../../components/shared/Form/Form'

const Register = () => {
  return (
    <>
      <div className='row g-0'>
        <div className='col-md-8 form-banner'>
          <img src="./assests/images/banner2.jpg" alt="register"/>
        </div>
        <div className='col-md-4 form-container'>
          <Form formTitle={'Register'} submitBtn={'Register'} formType={'register'}/>

        </div>

      </div>
    </>
  )
}

export default Register
*/
import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";
const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner ">
            <img src="./assests/images/banner2.jpg" alt="registerImage" />
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Register"}
              submitBtn={"Register"}
              formType={"register"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;

