const { ECRClient, ListImagesCommand } = require("@aws-sdk/client-ecr");


const region = "eu-west-1"
const repository = "ros"

const client = new ECRClient({ region: region });
const command = new ListImagesCommand({
    repositoryName: repository
});

function processData(dataString) {
    // console.log(dataString)
    dataJson = JSON.parse(JSON.stringify(dataString))
    // console.log(dataJson)
    imagesIdList = JSON.parse(JSON.stringify(dataJson.imageIds))
     // console.log(imagesIdList)
    imageTagList = []
    for (let idx in imagesIdList) {
        imageTagList[idx]  = imagesIdList[idx].imageTag
    }
    console.log(imageTagList)
}

client
    .send(command)
    .then((data) => { processData(data) })
    .catch((error) => {})
    .finally(() => {});