import React from 'react'
import BaseAlert from './BaseAlert'
import SuccessAlert from './SuccessAlert'
import { SeverityType } from './types'
import { getAlertComponent } from './utils'

type Props = {
    severity: SeverityType
}

const Alert : React.FunctionComponent<Props> = ({severity, children}) => {
    const AlertComponent = getAlertComponent(severity)
    return <AlertComponent>{children}</AlertComponent>
}

export default Alert