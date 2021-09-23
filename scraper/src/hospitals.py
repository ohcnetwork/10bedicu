import requests
import csv
from io import StringIO
import json

root_dir = "data"

def dump_data(filename, data):
    with open(f"{root_dir}/{filename}", "w") as json_file:
        json_file.write(json.dumps(data, sort_keys=True))

csv_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQF7T3mxoUlKREnTLa4LXv6HHzWBe8UGz0gKp0t0mdaUqtc1jDNk5Fs6EjmuivzH0deMqDtW5WMYSWO/pub?gid=172030202&single=true&output=csv'
response = requests.get(csv_url)
csv_data = csv.reader(StringIO(response.text))
data = []
for row in list(csv_data)[1:]:
    if row[0].strip() != "":
        data.append({
            "state": row[1],
            "district": row[2],
            "hospital_name": row[3],
            "hospital_type": row[4],
            "summary": row[5],
            "funding_status": row[6],
            "status": row[7],
            "launch_date": row[8],
            "collector_name": row[9],
            "collector_photo": row[10],
            "hospital_photos": row[11],
            "latitude": row[12],
            "longitude": row[13],
        })

dump_data("hospitals.json", data)
