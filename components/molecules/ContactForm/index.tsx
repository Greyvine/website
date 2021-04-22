import Button from "@components/atoms/Button"
import { Space } from "@components/styles/config"
import styled from "@emotion/styled"
import React, { useState } from "react"
import { Form, Field } from 'react-final-form'
import TextField from "@components/molecules/TextField"
import emailjs from "emailjs-com"
import Alert from "@components/atoms/Alert"
import { required } from "utils"

const serviceId = 'service_rh51n8b'
const templateId = 'template_xneltv8'
const userId = 'user_8BSb3CUDWlMVWRUYcLUHt'

const Fieldset = styled.fieldset`
    margin-bottom: ${Space.X5};
`

const ContactForm: React.FunctionComponent = () => {
    const [hasSucceeded, setHasSucceeded] = useState(false)
    const [hasFailed, setHasFailed] = useState(false)
    const onSubmit = (values: any) => {
        emailjs.send(serviceId, templateId, values, userId)
            .then((response) => {
                setHasSucceeded(true)
                setHasFailed(false)
            }, (err) => {
                setHasFailed(true)
                setHasSucceeded(false)
            });
    }
    return (
        <Form onSubmit={onSubmit} render={({ handleSubmit }) => 
            <form onSubmit={handleSubmit}>
                <Fieldset disabled={hasSucceeded}>
                    <Field 
                        id="name"
                        name="name" 
                        component={TextField} 
                        label="Name" 
                        placeholder="Jane Doe"
                        validate={required} />
                    <Field 
                        id="email"
                        name="email" 
                        type="email"
                        component={TextField}
                        label="Email" 
                        placeholder="jane@example.com"
                        validate={required} />
                    <Field 
                        id="message"
                        name="message" 
                        component={TextField}
                        multiline={true}
                        label="How can we help?"
                        validate={required} />
                </Fieldset>
                <Button type="submit" disabled={hasSucceeded}>Send</Button>
                {hasSucceeded && <Alert severity="success">Your message was sent successfully!</Alert>}
                {hasFailed && <Alert severity="error">Could not send message!</Alert>}
            </form>
        } />
    )
}

export default ContactForm