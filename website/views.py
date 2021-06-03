from flask import Blueprint, render_template, request
import requests
import json

views = Blueprint('views', __name__)

@views.route('/')
def home():
    if 'keywords' in request.args:
        vil_nomi = request.args.get('keywords')
        api = '54da0b4f9f19bfefbf0ee570c4bd79ef'
        param = {'q': vil_nomi, 'appid': api}
        url = 'https://api.openweathermap.org/data/2.5/weather'

        response = requests.get(url, param)
        json_content = json.loads(response.content)

        lontitude = json_content['coord']['lon']
        latitude = json_content['coord']['lat']
        temp = json_content['main']['temp']-273.15
        region_name = json_content['name']

    return render_template('index.html', region=region_name, shimoliy_uzunlik=lontitude, sharqiy_kenglik=latitude, temperature=int(temp) )
