# ReactJS / Next single-page static cloudstore
AWS Lambda/S3/EC2, Serverless, Stripe Checkout


## Use this as a template
*In order to use Stripe Checkout you will need a stripe developer account, an aws account for lambda and ec2, and you will want a serverless account to deploy your function to lambda using the serverless cli*

```
# Clone the repo
git clone https://github.com/celloworld/product-page.git

# Move into the new directory
cd product-page/

# Install npm packages
npm install

# Start up the next.js dev server, browse to http://localhost:3000/
npm run dev
```


## Generating the Static Site

```
# Build and export the site, the static files are generated in the out/ folder
npm run export
```

## Start using Serverless.js

Follow the steps in the getting started link below
https://serverless.com/framework/docs/getting-started/

## Set up AWS service

Lambda, Cloudwatch

## Secrets Management with AWS
Push your stripe secret Test key to aws-serverless
`aws ssm put-parameter --name stripeSecretTestKey --type String --value <your stripe secret key here>`



*Thank you to Patrick Michelberger for his [tutorial on medium](https://medium.com/@patrickmichelberger/building-a-serverless-e-commerce-app-with-aws-lambda-stripe-and-react-4663e241710b) and demo [serverless-shop repo](https://github.com/patrick-michelberger/serverless-shop)

*Site design based on the Dimension site template by [HTML5 UP](https://html5up.net/dimension)*
