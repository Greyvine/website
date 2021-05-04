import React from "react"
import BaseAlert from "./BaseAlert"
import ErrorAlert from "./ErrorAlert"
import SuccessAlert from "./SuccessAlert"
import {SeverityType} from "./types"

export function getAlertComponent(severity: SeverityType): React.FC {

    if (severity === "success") {

        return SuccessAlert

    } else if (severity === "error") {

        return ErrorAlert

    }
    return BaseAlert

}
