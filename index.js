const dev_client = require ('./client/dev_client.js')
const user_client = require ('./client/user_client.js')

const {ETwitterStreamEvent} = require ('twitter-api-v2')

async function main () {
    // user
    const user = await user_client.v2.me();
    // console.log(user)

    const user_id = "1046754517113602049";

// reglas

    await dev_client.v2.updateStreamRules({
        delete: { ids: rules.data.map( rule => rule.id)}
    })

    // const rules = await dev_client.v2.streamRules();
    // console.log(rules)

    // await dev_client.v2.updateStreamRules({
    //     add:[{value: "Varela"},{value: "Boca"}]
    // })




    // const stream = dev_client.v2.searchStream({
    //     'tweet.fields' : ['referenced_tweets', 'author_id']
    // });

    // (await stream).on(ETwitterStreamEvent.Data, async tweet => {
    //     console.log(tweet.data.author_id)
    //     console.log(tweet.data.text)

    // })





};

main()