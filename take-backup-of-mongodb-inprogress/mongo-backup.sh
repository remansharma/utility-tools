USERNAME=easyres
PASSWORD=GPvcYwJ9a9mtERGu
DATABASE_NAME=dev-inbound
COLLECTION_NAME=bookings
CLUSTER_NAME=cluster0.xra9v.mongodb.net

# documentation: https://www.mongodb.com/docs/database-tools/mongodump/
mongodump --uri mongodb+srv://$USERNAME:$PASSWORD@$CLUSTER_NAME/$DATABASE_NAME --quiet --collection=$COLLECTION_NAME