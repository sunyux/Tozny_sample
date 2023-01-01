import React,{useState} from 'react';
import Tozny from '@toznysecure/sdk/node'
export const Alicia= () =>{

    const token = '64814a8fe3deea8c879c9ea433021a0c2670cbe94d0b9a326aadc55e65e37c13'
    const [AliciaChoice, setAliciaChoice] = useState(null)
    const [AliciaRound, setAliciaRound] =useState(null)
    const AliciaClick = (value) =>{
        setAliciaChoice(value)
      }
    const AliciaInput = event => {
        setAliciaRound(event.target.value);
      };
    async function main(name) {
        try {
          const cryptoKeys  = await Tozny.crypto.generateKeypair();
          const signingKeys = await Tozny.crypto.generateSigningKeypair();
          const clientInfo  = await Tozny.storage.register(token, name, cryptoKeys, signingKeys)
      
          // Create a full client instance with the returned client details
          const config = new Tozny.storage.Config(
            clientInfo.clientId,
            clientInfo.apiKeyId,
            clientInfo.apiSecret,
            cryptoKeys.publicKey,
            cryptoKeys.privateKey,
            signingKeys.publicKey,
            signingKeys.privateKey
          )
          const client = new Tozny.storage.Client(config)
      
          // Perform additional storage actions with this client...
        } catch(e) {
          console.error(e)
        }
        main('Alicia1')
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
    </div>
    )
     
}