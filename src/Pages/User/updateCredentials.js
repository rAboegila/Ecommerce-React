import React, { useState, useRef } from "react";
import { Button, Modal,notification } from "antd";
import {CheckCircleTwoTone , InfoCircleFilled} from '@ant-design/icons'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "./MyTextInput";
import api from "../../Lib/api";
import { LoadingOutlined } from "@ant-design/icons";


export default function UpdateCredentials() {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [submiting, setSubmitting] = useState(false);
  const formRef = useRef();

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

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    setConfirmLoading(true);
    setSubmitting(true);
    const data = formRef.current.values;
    api.post("account/change_password/", data).then(()=>{
      setSubmitting(false);  
      successNotification("Passowrd Updated Successfully");
        setOpen(false);
    })
    .catch(()=>{
        errorNotification("Old Password is incorrect")
    })

  };

  const handleCancel = () => {
    setOpen(false);
  };

  const initialValues = {
    old_password: "",
    new_password: "",
    confirm_new_password: "",
  };

  const PasswordSchema = Yup.object().shape({
    old_password: Yup.string()
      .min(8, "It should be more than 8 Alphanumeric")
      .required("Required"),

    new_password: Yup.string()
      .min(8, "It should be more than 8 Alphanumeric")
      .required("Required"),

    confirm_new_password: Yup.string()
      .min(8, "It should be more than 8 Alphanumeric")
      .required("Required"),
  });

  return (
    <>
    {contextHolder}
      <Button onClick={showModal} danger className="my-3 mx-1">
        Change Password
      </Button>

      <Modal
        title="Change Password"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" danger onClick={handleOk}>
            {(submiting && <LoadingOutlined />) || (!submiting && "Change")}
          </Button>,
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={PasswordSchema}
          innerRef={formRef}
        >
          {() => (
            <Form>
              <MyTextInput
                label="Old Password"
                name="old_password"
                type="password"
                placeholder=""
              />

              <MyTextInput
                label="New Password"
                name="new_password"
                type="password"
                placeholder=""
              />

              <MyTextInput
                label="Confirm Password"
                name="confirm_new_password"
                type="password"
                placeholder=""
              />
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
}
