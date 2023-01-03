import React, { Suspense } from 'react';
import Tozny from '@toznysecure/sdk/node'

const config = Tozny.storage.Config.fromObject({
  "private_signing_key": "Vj4NcSB6kjoJvxtfy5lm21yVCIJrVozHrHOSHmv6eOdTKwtrAalPXIgYrqT4wTVWXf04qLqpayfi5vkCf-GM4Q",
  "public_signing_key": "UysLawGpT1yIGK6k-ME1Vl39OKi6qWsn4ub5An_hjOE",
  "private_key": "JnoXBVJFT__1vrq2YwTQ4qBv5j7FZDZIT-U_xS4Kw0g\"",
  "api_secret": "8b8171b8d2739f4a310012508b1aff25c52d57ba282336fb7f9cfb341776e033",
  "client_id": "50dbb9ad-6cf8-48ff-8dcc-b4b491b9f058",
  "public_key": "m6MODC5JaVHh3VyFgPjkF8HS0IiZVpXN_IadAio-Lw0",
  "api_key_id": "8f3a216680ccc4c5c669aec38cd5d2abcb341da51d6b698d152564430ad48171",
  "api_url": "https://api.e3db.com",
  })

const client = new Tozny.storage.Client(config)

export const Clarencefunction = async (client) => {
    const request = new Tozny.types.Search(true, true, 10);
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    request.match({ type: 'Alicia' });
  
    const resultQuery = await client.search(request);
    const found = await resultQuery.next();
  
    const records = found.map((record) => (
      <div key={record.meta.recordId}>
        {record.data.first_name} plays {record.meta.plain.instrument}
      </div>
    ));
  
    return records;
  };

const ClarenceResult = () => {
  const result = Clarencefunction(client);
  console.log(result)
  return <div>{result}</div>;
};

export const Clarence= () =>{
    return (

      <Suspense fallback={<div>Loading...</div>}>
        <div>
        <h1> Welcome Clarence!</h1>
        <button onClick={()=> <ClarenceResult />}>Juige</button>
    </div>
      </Suspense>

    );
  };
  
  
  
  
  
  
  
  
