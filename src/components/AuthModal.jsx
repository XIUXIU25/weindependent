/*
 * Author: Yifan/Evan
 * Created: Tue Feb 25 2025
 * Updated: Tue Feb 25 2025
 */

import React, { useState } from "react"
import { Modal, Form, Input, Button, Divider, Checkbox } from "antd"
import { googleLogout, useGoogleLogin } from "@react-oauth/google"
import { google_client_id } from "../utils/config.js"
// import jwtDecode from 'jwt-decode'
import { FcGoogle } from "react-icons/fc"

// TODO: import { FaApple } from "react-icons/fa" Stop Apple Integration for now
import "../styles/fonts.css"


/**
 * 
 * @param {Object} options - The options object
 * @param {boolean} options.visible - The visibility of the modal
 * @param {Function} options.onContinue - The function to call when the user continues
 * @param {string} options.type - The type of the modal
 * @returns {JSX.Element} The AuthModal component  
 */

const AuthModal = ({ visible, onClose, type, setModalType }) => {
  console.log(visible, type)
  console.log(google_client_id)

  const [form] = Form.useForm()
  const [user, setUser] = useState(null)

  // -------------- Function: Switch between Sign Up and Log In ------------------
  const onFinish = (values) => {
    console.log(type === "Sign Up" ? "Sign Up" : "Log In", values)
    // Call the onContinue function after the form is submitted
    onContinue()
  }


  // -------------- Function: Switch between Sign Up and Log In ------------------
  const onSwitchType = () => {
    setModalType(type === "Sign Up" ? "Log In" : "Sign Up")
  }


  // -------------- Function: handle Google Login Success ------------------
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (response) => {
      console.log('Google login success:', response)
      // Handle success (e.g., send token to backend)
    },
    onError: (error) => {
      console.error('Google login error:', error)
    },
  })

  return (
    // -------------- Modal Start ------------------
    <Modal
      open={visible}
      onCancel={onClose}
      style={{ borderRadius: "100px" }}
      title={
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Montserrat",
            fontWeight: 600,
            fontSize: "32px",
            lineHeight: "35.2px",
            letterSpacing: "-4%",
            marginTop: "2rem",
            marginBottom: "1rem",
          }}
        >
          {type}
        </h1>
      }
      footer={null}
      centered
      width={724}
      height={722}
    >
      {/* --------------The subtitle of the modal------------------ */}
      <div
        style={{
          fontFamily: "Mulish",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "0%",
          textAlign: "center",
          marginBottom: "2rem",
          fontWeight: 300
        }}
      >
        Welcome! Start your new journey in
        <span style={{ color: "#FF5634" }}> We Independent</span>
      </div>
      {/* -------------- Inline Form Start ----------------------- */}
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        style={{ maxWidth: "50%", margin: "auto", color: "#9A9A9A" }}
      >
        {/* --------------- Email Input ----------------------- */}
        <Form.Item
          label="Email"
          name="email"
          labelStyle={{
            fontWeight: 300,
            color: "#9A9A9A",
          }}
          width={424}
          rules={[{ required: true, message: 'Please enter your email!' }]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        {/* --------------- Password Input ------------------ */}
        <Form.Item
          label="Password"
          name="password"
          labelStyle={{
            fontWeight: 300,
            color: "#9A9A9A",
          }}
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        {/* --------------- if register, password comfirm input -------------------------- */}
        {/* if modal's for signup, users needs to enter password twice for confirmation */}
        {type === "Sign Up" && (
          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            labelStyle={{
              fontWeight: 300,
              color: "#9A9A9A",
            }}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator (_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error("Passwords do not match!"))
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>
        )}
        {/* --------------- if register, checkbox for newsletter -------------------------- */}
        {type === "Sign Up" && (
          <div>
            <Checkbox
              style={{
                padding: 0,
                marginRight: "0.5rem",
                transform: "scale(0.8)"
              }}
            >
            </Checkbox>
            <span style={{ color: "#9A9A9A", size: "14px", lineHeight: "20px", display: "inline", }}>
              <small>
                Subscribe our news letter and never miss what matters to you
              </small>
            </span>
          </div>)}

        {/* --------------- Submit Button -------------------------- */}
        <Form.Item style={{ textAlign: 'center' }}>
          <Button
            styles={{}}
            // type="primary"
            htmlType="submit"
            size="large"
            block
            style={{ marginTop: "1rem", backgroundColor: "#FF5634", color: "white", borderRadius: "100px", width: "220px" }}
          >
            Continue
          </Button>
        </Form.Item>
        {/* --------------- if Register, Terms of Service -------------------------- */}
        {type === "Sign Up" && (
          <span style={{ textAlign: "center", marginBottom: 24 }}>
            <small>
              By creating an account, you agree to the Terms of Service and Privacy Policy
            </small>
          </span>
        )}
        <Divider>or</Divider>
        {/* --------------- Register/Login with Google -------------------------- */}
        <Form.Item style={{ textAlign: "center" }}>
          <Button
            onClick={() => handleGoogleLogin()}
            icon={<FcGoogle />}
            block
            style={{ borderRadius: "100px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}
          >
            Continue with Google
          </Button>
        </Form.Item>
        {/* --------------- TODO: Register/Login with Apple -------------------------- */}
        {/* </Form.Item>
          <Button
            icon={<FaApple />}
            // size="large"
            block
          >
            Continue with Apple
          </Button>
        </Form.Item> */}
        {/* --------------- Switch between Sign Up and Log In -------------------------- */}
        <div style={{ textAlign: "center", marginTop: 24 }}>
          {type === "Sign Up"
            ? "Already have an account? "
            : "Don't have an account? "}

          <Button
            type="link"
            onClick={onSwitchType}
            style={{ padding: 0 }}
          >
            {type === "Sign Up" ? "Login" : "Sign Up"}
          </Button>
        </div>
      </Form>
    </Modal>
  )
}
export default AuthModal