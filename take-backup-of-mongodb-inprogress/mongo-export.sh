USERNAME=easyres
PASSWORD=GPvcYwJ9a9mtERGu
DATABASE_NAME=dev-inbound
COLLECTION_NAME=bookings
CLUSTER_NAME=cluster0.xra9v.mongodb.net
OUTPUT_FILE=bookings.json

# documentation: 
mongoexport --uri="mongodb://$USERNAME:$PASSWORD@$CLUSTER_NAME/$DATABASE_NAME" --collection $COLLECTION_NAME --type json --out $OUTPUT_FILE

