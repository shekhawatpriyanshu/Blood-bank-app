import React, { useEffect, useState, useCallback } from "react";
import Layout from "./../../components/shared/Layout/Layout";
import moment from "moment";
import { useSelector } from "react-redux";
import API from "../../services/API";

const OrganisationPage = () => {
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  // ✅ Wrap getOrg with useCallback to safely use it in useEffect
  const getOrg = useCallback(async () => {
    try {
      if (user?.role === "donar") {
        const { data } = await API.get("/inventory/get-orgnaisation");
        if (data?.success) {
          setData(data?.organisations);
        }
      } else if (user?.role === "hospital") {
        const { data } = await API.get(
          "/inventory/get-orgnaisation-for-hospital"
        );
        if (data?.success) {
          setData(data?.organisations);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [user?.role]); // ✅ Depend on user.role

  useEffect(() => {
    getOrg();
  }, [getOrg]); // ✅ Now safe

  return (
    <Layout>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((record) => (
            <tr key={record._id}>
              <td>{record.organisationName}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{record.address}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default OrganisationPage;
