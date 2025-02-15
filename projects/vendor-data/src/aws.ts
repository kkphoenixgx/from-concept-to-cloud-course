import AWS from "aws-sdk";
import { AwsRegions } from "./types/aws";
const {DynamoDB} = AWS;

AWS.config.update({
  region: AwsRegions.SA_EAST_1
})
const DB = new DynamoDB();


//TODO: CRUD AWS

export const dynamodbCreateTable = async (params :AWS.DynamoDB.CreateTableInput) => {

  try {
    
    const result = await DB.createTable(params).promise();
    return result;

  } catch (error) {
    
    if(error instanceof Error) throw error;
    else throw new Error(`ERROR: dynamodbCreateTable have a unknown type of error: ` + error)
    
  }

}

