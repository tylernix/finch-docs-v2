import { OpenAPI } from "@/components/openapi"
import Head from 'next/head'

export default function ApiReference() {

    return (
        <>
            <Head>
                <title>API Reference</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <OpenAPI url="https://raw.githubusercontent.com/Finch-API/finch-docs/main/reference/employer/openapi.yaml" />
        </>
    )
}