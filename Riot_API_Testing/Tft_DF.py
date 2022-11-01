import requests
import json
import pandas as pd

api_param={
    "api_key":'RGAPI-9df515b4-1a58-46c7-ba20-6d20eae13aa2',
}
tft_match_number = "NA1_4466962742"
tft_match_info_url = "https://americas.api.riotgames.com/tft/match/v1/matches/{}".format(tft_match_number)
tft_match_info_api = requests.get(tft_match_info_url,api_param)
tft_match_info = tft_match_info_api.json()

table1 = json_normalize(tft_match_info['info']['participants'])