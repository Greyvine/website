import BaseAlert from './BaseAlert'
import ErrorAlert from './ErrorAlert'
import SuccessAlert from './SuccessAlert'
import { SeverityType } from './types'

export const getAlertComponent = (severity: SeverityType) => {
    if (severity === 'success') {
        return SuccessAlert
    } else if (severity === 'error') {
        return ErrorAlert
    } else {
        return BaseAlert
    }
}
