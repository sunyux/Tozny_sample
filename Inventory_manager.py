#read json file
import json
f = open('./Tozny_sample.json')
data = json.load(f)
for i in data:
    print(i)

f.close()

