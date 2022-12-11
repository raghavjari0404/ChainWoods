## Inspiration
In spite of the fact that authorities, a task force, and forest organisations are all working together to put a stop to it, individuals continue to steal important trees all around the globe.
The recent arrests of interstate smugglers, woodcutters, and members of local gangs demonstrate the significant amount of smuggling that is taking place.

As a result of the possibility of smuggling wood or difficulties in the supply chain of the wood market, we have made the decision to construct a wood chain.
to put a halt to the illegal trafficking of timber.

## What it does
Here, any importer or exporter may monitor every step of the process, from manufacturing to shipping through customs clearance.
The government will recognise only imported timber that has been thoroughly inspected. During the current worldwide wood shortage, this will effectively put an end to the smuggling of wood.

With the use of chain wood, an exporter may make his wood trades public on a public blockchain by disclosing data like productionID, quantity, exporting licence, bill amount, origin, and destination. IPFS decentralised storage is where we are putting all of our one-of-a-kind QR codes. The QR Code will be printed on the forest lot for further security. Then, with the aid of Meta Mask, the exporter may send the product across to the Ethereum Blockchain.

However, the importer will use the same ProductionID to validate the lot by scanning the QR code they were given.

There will be no evidence of smuggling until the QR code has been validated, at which point the importer may check the lot data by supplying importer requirements.

After everything has been checked and double checked, the importer will give the import the green light by submitting their importer licence.

## How we built it
To store the QR codes issued by Exporters of Wood, we utilised the IPFS decentralised blockchain network.
We utilised the Etherium blockchain network to trade wood imports and exports. We utilise React.js everywhere to run their company and tender to present users with an accessible interface. The software uses your Metamask wallet to initiate a transaction on the blockchain network. The public key is used for transaction verification, and to commence the transaction, we send a request to Metamask, and the user confirms it through wallet, thus they control the wallet and therefore not needed to disclose the secret key.

## Challenges we ran into
- Encountered some problems when installing smart contracts on the Polygon Mumbai Testnet using Truffle, however these problems were resolved by utilising the MaticVigil RPC URL.
- We are having problems acquiring content with minimum latency from IPFS, Filecoin, and the Estuary, so we adjusted the public gateway URI and achieved some speed compared to the Estuary's default gateway.
- Because it was tricky to validate a partial exchange of a single unit of timber, we had to come up with workarounds and compute the entire quantity of timber that was consumed as well as the amount that was left over in order to evaluate whether or not the wood was legally harvested.

## Accomplishments that we're proud of
We were able to finish the project within the allotted amount of time and successfully use the Inter Planetary File System. We pinned the content in the  system to make sure it was always available and used metamask to sign the transaction without keeping the private key in our possession.

## What we learned
We became familiar with the Remix IDE, as well as the fundamentals of IPFS and Estuary's cloud storage. In its place, we became familiar with Web Storage. We learnt how to link the Metamask wallet with the app and begin the transaction to sign it by authorising it from the user end using Metamask. This was done by connecting the wallet to the app.

## What's next for chainwood

Developing a mobile application to make it easier for authorities to scan the QR code, and linking this application with the web application so that it can be tracked and generated more quickly so that statistics can be seen, We will have the data essential to research the forest, plan the forestation, conserve the forest, and plant new trees to combat climate change as the app will be used to monitor the trees that are being chopped down and utilised for industry and the house.
