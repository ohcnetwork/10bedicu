import requests
import csv
from io import StringIO
import json

root_dir = "data"

def dump_data(filename, data):
    with open(f"{root_dir}/{filename}", "w") as json_file:
        json_file.write(json.dumps(data, sort_keys=True))

csv_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQF7T3mxoUlKREnTLa4LXv6HHzWBe8UGz0gKp0t0mdaUqtc1jDNk5Fs6EjmuivzH0deMqDtW5WMYSWO/pub?gid=1517149316&single=true&output=csv'
response = requests.get(csv_url)
csv_data = csv.reader(StringIO(response.text))
data = []
for row in list(csv_data)[1:]:
    if row[0].strip() != "":
        data.append({
            "state": row[0],
            "name": row[1],
            "description": row[2],
            "image": row[3]
        })

dump_data("pmu.json", data)
