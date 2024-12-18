const main = document.querySelector("main");

/* async function connect(clientId, clientSecret){
  await fetch(`https://api.artsy.net/api/tokens/xapp_token?client_id=${clientId}&client_secret=${clientSecret}`,{
    method:"POST"
  }
  )
}

async function fetchArtworks(url){

}

var request = require("superagent");

var clientID = "338123372568216d96a3",
  clientSecret = "e988efd6020a5de16a19b5ead953daf1",
  apiUrl = "https://api.artsy.net/api/tokens/xapp_token",
  xappToken;

request
  .post(apiUrl)
  .send({ client_id: clientID, client_secret: clientSecret })
  .end(function (res) {
    xappToken = res.body.token;
  });


curl "https://api.artsy.net/api/artworks" -H "X-XAPP-Token: XAPP_TOKEN"
curl -L https://api.artsy.net/api/artists/andy-warhol -H 'X-Xapp-Token:123456'


var traverson = require("traverson"),
  JsonHalAdapter = require("traverson-hal"),
  xappToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiIxNTY0MDFlOC0yZDJhLTRjM2MtYjUzMC00NmZiNTg4MDFkYjUiLCJleHAiOjE3MzQwODAwNzcsImlhdCI6MTczMzQ3NTI3NywiYXVkIjoiMTU2NDAxZTgtMmQyYS00YzNjLWI1MzAtNDZmYjU4ODAxZGI1IiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY3NTJiYmNkODQ0ZWIzMDAwZjM2NGQ5MyJ9.3SP339dX4jBxAaIyNMKQsf4luRurQPEEi9s8egnt2gE";

traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);
api = traverson.from("https://api.artsy.net/api").jsonHal();

api
  .newRequest()
  .follow("artist")
  .withRequestOptions({
    headers: {
      "X-Xapp-Token": xappToken,
      Accept: "application/vnd.artsy-v2+json",
    },
  })
  .withTemplateParameters({ id: "andy-warhol" })
  .getResource(function (error, andyWarhol) {
    console.log(
      andyWarhol.name +
        "was born in " +
        andyWarhol.birthday +
        " in " +
        andyWarhol.hometown
    );
  });
 */
