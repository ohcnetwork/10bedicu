from config import DONORS_SHEET
from shared import clean_value, get_data, dump_data


def model_donor(row):
    # Transform a row into Donor object
    # according to the schema in /schemas/donors.json
    # Make sure update /schemas/donors.json while changing here

    return {
        "uuid": clean_value(row[0]),
        "name": clean_value(row[1]),
        "location": clean_value(row[2]),
        "image": clean_value(row[3]),
    }


csv_data = get_data(DONORS_SHEET)

json_data = {}

for row in csv_data:
    donor = model_donor(row)
    uuid = donor["uuid"]
    if uuid:
        json_data[uuid] = donor

dump_data("donors.json", json_data)

print(f"Dumped all {len(json_data)} Donors Data")
