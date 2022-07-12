from config import HOSPITALS_SHEET
from shared import clean_value, get_data, dump_data, split_entities, filter_none


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
        "hospital_photos": split_entities(clean_value(row[11]), ","),
        "latitude": clean_value(row[12]),
        "longitude": clean_value(row[13]),
        "donors": split_entities(clean_value(row[14])),
        "site_space": clean_value(row[15]),
        "site_electrical": clean_value(row[16]),
        "site_internet": clean_value(row[17]),
        "site_oxygen": clean_value(row[18]),
        "equipment_ordered": clean_value(row[19]),
        "equipment_delivered": clean_value(row[20]),
        "equipment_installed": clean_value(row[21]),
        "equipment_staff_trained": clean_value(row[22]),
        "tech_trained": clean_value(row[23]),
        "tech_hospital_registration": clean_value(row[24]),
        "tech_patient_management": clean_value(row[25]),
        "tech_tele_icu_live": clean_value(row[26]),
        "hospital_gallery": [
            clean_value(row[27]),
            clean_value(row[28]),
            clean_value(row[29]),
            clean_value(row[30]),
            clean_value(row[31]),
            clean_value(row[32]),
            clean_value(row[33]),
            clean_value(row[34]),
            clean_value(row[35]),
        ]
    }


csv_data = get_data(HOSPITALS_SHEET)

json_data = []

for row in csv_data:
    # Checking whether it's live
    if clean_value(row[0]):
        hospital = model_hospital(row)
        json_data.append(hospital)

dump_data("hospitals.json", json_data)

print(f"Dumped all {len(json_data)} Hospitals Data")
