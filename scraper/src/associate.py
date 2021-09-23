
from shared import get_json_data

# Association of Donors with Hospital
hospital_data = get_json_data("hospitals.json")
donors_data = get_json_data("donors.json")

print(hospital_data[0])
