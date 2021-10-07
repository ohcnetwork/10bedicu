from config import STATES_SHEET
from shared import clean_value, get_data, get_data_header_status, dump_data, split_entities


def model_state(row):
    # Transform a row into Hospital object
    # according to the schema in /schemas/hospital.json
    # Make sure update /schemas/hospital.json while changing here

    return {
        "state": clean_value(row[0]),
        "sheet": clean_value(row[1]),
    }

def model_hospital_status(state, row):
    # Transform a row into Hospital object
    # according to the schema in /schemas/hospital.json
    # Make sure update /schemas/hospital.json while changing here

    return {
        "state": clean_value(state[0]),
        "district": clean_value(row[5]),
        "pincode": clean_value(row[4]),
        "hospital_name": clean_value(row[1]),
        "hospital_type": clean_value(row[3]),
        "site_space": clean_value(clean_value(row[31])),
        "site_electrical": clean_value(clean_value(row[36])),
        "site_internet": clean_value(clean_value(row[38])),
        "site_oxygen": clean_value(clean_value(row[37])),
        "site_ready": clean_value(clean_value(row[45])),
        "equipment_ordered": clean_value(clean_value(row[48])),
        "equipment_delivered": clean_value(clean_value(row[49])),
        "equipment_installed": clean_value(clean_value(row[51])),
        "equipment_staff_trained": clean_value(clean_value(row[53])),
        "tech_trained": clean_value(clean_value(row[58])),
        "tech_hospital_registration": clean_value(clean_value(row[60])),
        "tech_patient_management": clean_value(clean_value(row[61])),
        "tech_tele_icu_live": clean_value(clean_value(row[62])),
        "icu_live": clean_value(clean_value(row[64])),
    }

sheet_data = get_data(STATES_SHEET)

json_data = []
for sheet in sheet_data:
    print(model_state(sheet)["sheet"])
    csv_data = get_data_header_status(model_state(sheet).get("sheet"))
    for row in csv_data:
        # Checking whether it's live
        if clean_value(row[0]):
            hospital = model_hospital_status(sheet,row)
            json_data.append(hospital)

dump_data("hospital_status.json", json_data)

print(f"Dumped all {len(json_data)} State Hospitals Data")
