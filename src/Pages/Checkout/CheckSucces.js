import React from 'react'
import { Card} from 'antd';
import { NavLink } from "react-router-dom";
import {CheckCircleOutlined} from '@ant-design/icons'
import './Checkout.css'
export default function CheckSucces () {

  return (
    <>
    <Card title="Payment Done Successfully" className='success-checkout'>
    <CheckCircleOutlined />
        <NavLink to="/">
            <button className='btn btn-secondary mx-5' style={{backgroundColor:"GrayText"}}>Return Home</button>
        </NavLink>
    </Card>
    </>
  )
}
