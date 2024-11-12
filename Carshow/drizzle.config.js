/** @type {import("drizzle-kit").Config} */

export default{
    schema:"./configs/schema.js",
    dialect:'postgresql',
    dbCredentials:{
    url:'postgresql://carscity_owner:UqAaYjlf2O9H@ep-curly-unit-a54rvfz5.us-east-2.aws.neon.tech/carscity?sslmode=require'
    }
};