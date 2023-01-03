import React,{useState} from 'react';
import Tozny from '@toznysecure/sdk/node'
const ClarenceId = '50dbb9ad-6cf8-48ff-8dcc-b4b491b9f058'
const token ='3c57d25b36474458d821da94b05dda61897bc04c977d6fc67fabdc1c0cd60897'
let myClient=null
//chrome show 'Uncaught ReferenceError: Buffer is not defined', but console didn't show
window.Buffer = window.Buffer || require("buffer").Buffer;

export const Bruce= () =>{

    const [BruceChoice, setBruceChoice] = useState(null)
    const [BruceRound, setBruceRound] =useState(null)
    const BruceClick = (value) =>{
        setBruceChoice(value)
      }
    const BruceInput = event => {
        setBruceRound(event.target.value);
    }
    async function writeT(BruceRound,BruceChoice,amyClient){
        if(amyClient==null){
          console.log('enter if block')
          
          const cryptoKeys  = await Tozny.crypto.generateKeypair();
          const signingKeys = await Tozny.crypto.generateSigningKeypair();
          const clientInfo  = await Tozny.storage.register(token, 'Bruce', cryptoKeys, signingKeys)
      
          // Create a full client instance with the returned client details
          const myconfig = new Tozny.storage.Config(
            clientInfo.clientId,
            clientInfo.apiKeyId,
            clientInfo.apiSecret,
            cryptoKeys.publicKey,
            cryptoKeys.privateKey,
            signingKeys.publicKey,
            signingKeys.privateKey
          )
          const amyClient = new Tozny.storage.Client(myconfig)
          const typeToShare = 'reader'
          await amyClient.share(typeToShare, ClarenceId)
          console.log(`${typeToShare} shared with ${ClarenceId}`)
          const written = await amyClient.writeRecord(
            'Bruce',
            {
              round: BruceRound,
              choice:BruceChoice,
            }
          )
          console.log(`Wrote record ${written.meta.recordId}`)
          const read = await amyClient.readRecord(written.meta.recordId)
          console.log(`Bruce: ${read.data.round} ${read.data.choice}`)
          const request = new Tozny.types.Search(true) // includeDate = true
          request.match({ type: 'Bruce' })
          const resultQuery = await amyClient.search(request)
          const found = await resultQuery.next()
          for (let record of found) {
            console.log(
            `Found record ${record.meta.recordId}: ${record.data.round} plays ${record.data.choice}`)}
            console.log('output amyclient inside if block',amyClient )
            return amyClient
        }
        else{
          console.log('enter else block')
          console.log('output amyclient: ',amyClient )
          amyClient.then(client => {
            client.writeRecord(
              'Bruce',
              {
                round: BruceRound,
                choice:BruceChoice,
              }
            ).then(written => {
              console.log(`Wrote record ${written.meta.recordId}`)
              client.readRecord(written.meta.recordId).then(read => {
                console.log(`Bruce: ${read.data.round} ${read.data.choice}`)
                const request = new Tozny.types.Search(true) // includeDate = true
                request.match({ type: 'Bruce' })
                client.search(request).then(resultQuery => {
                  resultQuery.next().then(found => {
                    for (let record of found) {
                      console.log(
                      `Found record ${record.meta.recordId}: ${record.data.round} plays ${record.data.choice}`)
                    }
                  });
                });
              });
            });
                });
        }
            return amyClient
            }
    return (
    <div>
        <h1> Bruce choice is: {BruceChoice}</h1>
        <h1> Round: {BruceRound}</h1>
        <button onClick={()=> BruceClick('rock')}>Rock</button>
        <button onClick={()=> BruceClick('paper')}>Paper</button>
        <button onClick={()=> BruceClick('scissors')}>Scissors</button>
        <h1>Please enter Round</h1>
        <input onChange={BruceInput} placeholder="Enter number"/>
        <button onClick={()=>myClient=writeT(BruceRound,BruceChoice,myClient)}>Submit</button>
    </div>
    )
     
}