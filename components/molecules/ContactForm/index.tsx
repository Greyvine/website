import Button from "@components/atoms/Button"
import { Space } from "@components/styles/config"
import styled from "@emotion/styled"
import React, { useState } from "react"
import { Form, Field } from 'react-final-form'
import TextField from "@components/molecules/TextField"
import emailjs from "emailjs-com"
import Alert from "@components/atoms/Alert"

const FormRoot = styled.form`
    > * {
        margin-bottom: ${Space.X5};
    }
`

const serviceId = 'service_rh51n8b'
const templateId = 'template_xneltv8'
const userId = 'user_8BSb3CUDWlMVWRUYcLUHt'

const ContactForm: React.FunctionComponent = () => {
    const [hasSucceeded, setHasSucceeded] = useState(false)
    const onSubmit = (values: any) => {
        emailjs.send(serviceId, templateId, values, userId)
            .then((response) => {
                setHasSucceeded(true)
            }, (err) => {
                console.log('FAILED...', err)
            });
    }
    return (
        <Form onSubmit={onSubmit} render={({ handleSubmit }) => 
            <FormRoot onSubmit={handleSubmit}>
                <fieldset disabled={hasSucceeded}>
                    <Field 
                        id="name"
                        name="name" 
                        component={TextField} 
                        label="Name" 
                        placeholder="Jane Doe" />
                    <Field 
                        id="email"
                        name="email" 
                        type="email"
                        component={TextField}
                        label="Email" 
                        placeholder="jane@example.com" />
                    <Field 
                        id="message"
                        name="message" 
                        component={TextField}
                        multiline={true}
                        label="How can we help?" />
                </fieldset>
                <Button type="submit" disabled={hasSucceeded}>Send</Button>
                {hasSucceeded && <Alert severity="success">Your message was sent successfully!</Alert>}
            </FormRoot>
        } />
    )
}

export default ContactForm