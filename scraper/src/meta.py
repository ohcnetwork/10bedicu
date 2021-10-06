from config import META_SHEET
from shared import clean_value, get_data, dump_data, number


def model_meta(row):
    # Transform a row into Meta (state) object
    # according to the schema in /schemas/meta.json
    # Make sure update /schemas/meta.json while changing here

    return {
        "name": clean_value(row[0]),
        "path": clean_value(row[1]),
        "number_of_hospitals": number(clean_value(row[2])),
        "state_summary": clean_value(row[3]),
        "state_logo": clean_value(row[4]),
        "pmu_summary": clean_value(row[5]),
        "state_donor_map": clean_value(row[6]),
    }


csv_data = get_data(META_SHEET)

json_data = []

for row in csv_data:
    state = model_meta(row)
    name = state["name"]
    if name:
        json_data.append(state)

dump_data("meta.json", json_data)

print(f"Dumped all {len(json_data)} Meta Data")
