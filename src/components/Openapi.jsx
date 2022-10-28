import { API } from "@stoplight/elements";
import '@stoplight/elements/styles.min.css';
import React from "react"


export function OpenAPI({ url }) {

    return (
        <API
            apiDescriptionUrl={url}
            router="memory"
        />
    )
}

