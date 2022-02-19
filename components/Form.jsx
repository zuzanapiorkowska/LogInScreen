import React from "react"
import { Input } from "./Input"
import { checkPropTypes } from "prop-types"

export function Form(props) {
    return (<form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {props.isRegistered && <Input type="password" placeholder="Confirm password"/>}
        <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
      </form>)
}