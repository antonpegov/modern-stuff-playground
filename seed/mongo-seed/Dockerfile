FROM mongo
# Copy seed data to main mongo db
COPY init.json /init.json
CMD mongoimport --host mongo --username root --password pass --db my_db --authenticationDatabase admin --collection MyDummyCollection --type json --file /init.json --jsonArray