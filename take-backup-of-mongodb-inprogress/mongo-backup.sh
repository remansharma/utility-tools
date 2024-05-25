USERNAME=bhavya
PASSWORD=
DATABASE_NAME=test-db
CLUSTER_NAME=cluster0.xra9v.mongodb.net

# documentation: https://www.mongodb.com/docs/database-tools/mongodump/
mongodump --uri mongodb+srv://$USERNAME:$PASSWORD@$CLUSTER_NAME/$DATABASE_NAME --quiet