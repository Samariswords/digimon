from flask import Flask, render_template, request,json
import os
import requests
import random

app = Flask(__name__, static_folder="web/build/static", template_folder="web/build")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template("index.html")

def random_digimon():
    digid = random.randint(1, 1422)
    with open('digimon.json') as json_file:
        data = json.load(json_file)
        try:
            if data[str(digid)].squidScore != 1:
                random_digimon()
        except:
            r = requests.get('https://digi-api.com/api/v1/digimon/'+str(digid))
            digimon = r.json()
            return digimon



@app.route('/get_digimon', methods=['GET'])
def get():
    return random_digimon()

@app.route('/write_digimon', methods=['POST'])
def write():
    with open('digimon.json') as json_file:
        data = json.load(json_file)
    print(request.json)
    print(request.json['id'])

    data[str(request.json['id'])] = request.json
    print(data)
    with open("digimon.json", "w") as jsonFile:
        json.dump(data, jsonFile)
    return "good"

# Press the green button in the gutter to run the script.
if __name__ == '__main__':
   app.run(host="0.0.0.0", port=5000)

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
