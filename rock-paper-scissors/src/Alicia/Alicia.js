import React,{useState} from 'react';
import Tozny from '@toznysecure/sdk/node'
let myClient=null
const Aliciatoken ='64814a8fe3deea8c879c9ea433021a0c2670cbe94d0b9a326aadc55e65e37c13'
const ClarenceId = '50dbb9ad-6cf8-48ff-8dcc-b4b491b9f058'

window.Buffer = window.Buffer || require("buffer").Buffer;
export const Alicia= () =>{

    const [AliciaChoice, setAliciaChoice] = useState(null)
    const [AliciaRound, setAliciaRound] =useState(null)
    const AliciaClick = (value) =>{
        setAliciaChoice(value)
      }
    const AliciaInput = event => {
        setAliciaRound(event.target.value)
      }

    
  //create client account and store the choice
  async function writeT(AliciaRound,AliciaChoice,amyClient,ClarenceId){
  if(amyClient==null){
    console.log('enter if block')
    
    const cryptoKeys  = await Tozny.crypto.generateKeypair();
    const signingKeys = await Tozny.crypto.generateSigningKeypair();
    const clientInfo  = await Tozny.storage.register(Aliciatoken, 'Alicia', cryptoKeys, signingKeys)

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
      'Alicia',
      {
        round: AliciaRound,
        choice:AliciaChoice,
      }
    )
    console.log(`Wrote record ${written.meta.recordId}`)
    const read = await amyClient.readRecord(written.meta.recordId)
    console.log(`Alicia: ${read.data.round} ${read.data.choice}`)
    const request = new Tozny.types.Search(true) // includeDate = true
    request.match({ type: 'Alicia' })
    const resultQuery = await amyClient.search(request)
    const found = await resultQuery.next()
    for (let record of found) {
      console.log(
      `Found record Alicia round: ${record.data.round} plays ${record.data.choice}`)}
      return amyClient
  }
  else{
    console.log('enter else block')
    console.log('output amyclient: ',amyClient )
    amyClient.then(client => {
      client.writeRecord(
        'Alicia',
        {
          round: AliciaRound,
          choice:AliciaChoice,
        }
      ).then(written => {
        console.log(`Wrote record ${written.meta.recordId}`)
        client.readRecord(written.meta.recordId).then(read => {
          console.log(`Alicia: ${read.data.round} ${read.data.choice}`)
          const request = new Tozny.types.Search(true) // includeDate = true
          request.match({ type: 'Alicia' })
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
      //share with Clarence
      this.props.history.push({Alicia:myClient})
      console.log(this.props.location.Alicia)
      return amyClient
      }

    return (
    <div>
        <h1> Alice choice is: {AliciaChoice}</h1>
        <h1> Round: {AliciaRound}</h1>
        <button onClick={()=> AliciaClick('rock')}>Rock</button>
        <button onClick={()=> AliciaClick('paper')}>Paper</button>
        <button onClick={()=> AliciaClick('scissors')}>Scissors</button>
        <h1>Please enter Round</h1>
        <input onChange={AliciaInput} placeholder="Enter number"/>

        <button onClick={()=>myClient=writeT(AliciaRound,AliciaChoice,myClient,ClarenceId)}>Submit</button>
    </div>
    )

  }
 