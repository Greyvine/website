import BaseAlert from './BaseAlert'
import SuccessAlert from './SuccessAlert'
import { SeverityType } from './types'

export const getAlertComponent = (severity: SeverityType) => {
    if (severity === 'success') {
        return SuccessAlert
    } else {
        return BaseAlert
    }
}
