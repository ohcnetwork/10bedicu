from config import HOSPITALS_SHEET
from shared import clean_value, get_data, dump_data, split_entities


def model_hospital(row):
    # Transform a row into Hospital object
    # according to the schema in /schemas/hospital.json
    # Make sure update /schemas/hospital.json while changing here

    return {
        "state": clean_value(row[1]),
        "district": clean_value(row[2]),
        "hospital_name": clean_value(row[3]),
        "hospital_type": clean_value(row[4]),
        "summary": clean_value(row[5]),
        "funding_status": clean_value(row[6]),
        "status": clean_value(row[7]),
        "launch_date": clean_value(row[8]),
        "collector_name": clean_value(row[9]),
        "collector_photo": clean_value(row[10]),
        "hospital_photos": split_entities(clean_value(row[11])),
        "latitude": clean_value(row[12]),
        "longitude": clean_value(row[13]),
        "donors": split_entities(clean_value(row[14])),
    }


csv_data = get_data(HOSPITALS_SHEET)

json_data = []

for row in csv_data:
    # Checking whether it's live
    if clean_value(row[0]):
        hospital = model_hospital(row)
        json_data.append(hospital)

dump_data("hospitals.json", json_data)
