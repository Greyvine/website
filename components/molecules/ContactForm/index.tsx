import Button from "@components/atoms/Button"
import { Space } from "@components/styles/config"
import styled from "@emotion/styled"
import React from "react"
import { Form, Field } from 'react-final-form'
import TextField from "@components/molecules/TextField"
import emailjs from "emailjs-com"

const Root = styled.form`
    > * {
        margin-bottom: ${Space.X5};
    }
`

const serviceId = 'service_rh51n8b'
const templateId = 'template_xneltv8'
const userId = 'user_8BSb3CUDWlMVWRUYcLUHt'

const ContactForm: React.FunctionComponent = () => {
    const onSubmit = (values: any) => {
        emailjs.send(serviceId, templateId, values, userId)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }
    return (
        <Form onSubmit={onSubmit} render={({ handleSubmit }) => 
            <Root onSubmit={handleSubmit}>
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
                <Button type="submit">Send</Button>
            </Root>
        } />
    )
}

export default ContactForm