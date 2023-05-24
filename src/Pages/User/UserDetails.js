import React, { useEffect, useState } from 'react';
import { Formik, Form} from "formik";
import {notification, Card } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import {CheckCircleTwoTone , InfoCircleFilled} from '@ant-design/icons'
import api from "../../Lib/axios";
import MyTextInput from'./MyTextInput'
import * as Yup from "yup";
import UpdateCredentials from './updateCredentials';
import { useSelector,useDispatch } from 'react-redux';
import { fetchProfile} from '../../Features/user/userSlice';

export default function Details (){
  const [submiting, setLoader] = useState(false);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const [antApi, contextHolder] = notification.useNotification();
  const successNotification =  (Msg) => {
    antApi.info({
      message: Msg,
      placement:'top',
      icon:(<CheckCircleTwoTone twoToneColor="#52c41a" />),
      style:{backgroundColor:'#43b47f'}
    });
  };

  const errorNotification =  (Msg) => {
    antApi.info({
      message: Msg,
      placement:'top',
      style:{color:'#ec6060'},
      icon:(<InfoCircleFilled/>)
    });
  };

    const [isLoading, setIsLoading] = useState(true);

    const [user,setUser] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        phone: "",
        dateOfBirth: new Date(),
      });

       function fetchData(){
        setUser({
          firstName: profile.profile.first_name,
          lastName: profile.profile.last_name,
          username: profile.profile.username,
          email: profile.profile.email,
          phone: profile.profile.phone,
          dateOfBirth: profile.profile.date_of_birth,
          })
          setIsLoading(false);
      }
      useEffect(()=>{
        if(profile.loading === false) 
          fetchData();
      },[])
      const validatePhoneNumber = (value, ctx) => {
        const phonePattern =
          /^\+?[0-9]{1,3}?[-\s\.]?(\([0-9]{3}\)|[0-9]{3})[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
        if (phonePattern.test(value)) {
          return true;
        } else {
          return ctx.createError({ message: "invalid phone number" });
        }
      };
      const UserSchema = Yup.object().shape({
        firstName: Yup.string()
          .min(2, "It should be between 2 and 15 characters")
          .max(15, "It should be between 2 and 15 characters")
          .required("Required"),
    
        lastName: Yup.string()
          .min(2, "It should be between 2 and 15 characters")
          .max(15, "It should be between 2 and 15 characters")
          .required("Required"),
    
        username: Yup.string()
          .min(2, "it should be between 2 and 15 characters")
          .required("Required"),
    
        dateOfBirth: Yup.date(),
        phone: Yup.number().test({
          name: "valid-number",
          test: validatePhoneNumber,
        }),
        email: Yup.string().email("Invalid email").required("Required"),
      });
    
      const formSubmit = (values,{setSubmitting}) => {
        setSubmitting(true);
        setLoader(true)
         api.put('account/profile_update/',values).then(() => {
          successNotification('Updated Successfully');
          dispatch(fetchProfile());
        })
        .catch(()=>{
          errorNotification('Error updating profile');
        })
        .finally(()=>{
          setLoader(false);
          setSubmitting(false);
        });
      };

      if (isLoading) {
        return <Card loading></Card>;
      }
  return (
    <>
    {contextHolder}
    <Formik
        initialValues={user}
        validationSchema={UserSchema}
        onSubmit={formSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <MyTextInput
              label="Username"
              name="username"
              type="text"
              placeholder=""
            />

            <MyTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder=""
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder=""
            />

            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder=""
            />

            <MyTextInput
              label="Phone Number"
              name="phone"
              type="text"
              placeholder=""
            />

            <MyTextInput
              label="Date Of Birth"
              name="dateOfBirth"
              type="date"
              placeholder=""
            />

            <button
              type="submit"
              className="btn btn-success"
              disabled={isSubmitting}
            >
              {(submiting && <LoadingOutlined />) || (!submiting && "Update")}
            </button>
          </Form>
        )}
      </Formik>
      <UpdateCredentials/>
    </>
  )
}
