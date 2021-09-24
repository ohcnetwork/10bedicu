from shared import dump_data, get_json_data

# Association of Donors with Hospital
hospital_data = get_json_data("hospitals.json")
donors_data = get_json_data("donors.json")


def associate_donor(hospital: dict):
    donors = hospital.get("donors", [])
    hospital.update({
        "donors": [
            donors_data[donor]
            for donor in donors
            if donor in donors_data
        ]
    })
    return hospital


hospital_data = list(map(associate_donor, hospital_data))

dump_data("hospitals.json", hospital_data)

print("Donors data associated with Hospital List")
