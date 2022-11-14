---
title: Data Sync Schedule
description: Finch syncs data with providers on a 24 hour cadence and stores the responses in a temporary data store.
---

Finch syncs data with providers on a 24 hour cadence and stores the responses in a temporary data store. We do this strictly for performance reasons. Finch API responses will return data from the most recent successful sync. You can use several Finch response headers to determine the freshness of the data you receive:

Response Header | Description
-------|--------------
`Finch-Data-Retrieved` | The date/time that the data was retrieved from the employment system.
`Finch-Last-Attempted-Update-Date` | The date/time that Finch last attempted to sync the data for this endpoint.
`Finch-Last-Attempted-Update-Result` | The result of Finch’s last attempted update. Possible values: `success`: The last attempt succeeded. `error`: The last attempt errored. `partial_error`: (batch requests only) The last attempt succeeded for some items in the batch and failed for others.

For batch endpoints (`/employment`, `/individual`, `/pay-statement`) Finch syncs all of the data for the connection in one atomic operation. This ensures that all items in the batch response you receive are from the same data sync.

Performing data syncs in this way ensures that latency for all Finch API requests should remain under 200ms.
