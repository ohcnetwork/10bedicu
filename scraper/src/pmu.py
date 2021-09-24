from config import PMUS_SHEET
from shared import clean_value, get_data, dump_data


def model_pmu(row):
    # Transform a row into PMU object
    # according to the schema in /schemas/pmu.json
    # Make sure update /schemas/pmu.json while changing here

    return {
        "state": clean_value(row[0]),
        "name": clean_value(row[1]),
        "description": clean_value(row[2]),
        "image": clean_value(row[3])
    }


csv_data = get_data(PMUS_SHEET)

json_data = []

for row in csv_data:
    pmu = model_pmu(row)
    state = pmu["state"]
    if state:
        json_data.append(pmu)

dump_data("pmu.json",  json_data)

print(f"Dumped all {len(json_data)} PMUs Data")
