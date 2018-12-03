import requests
session = requests.session()

url = 'http://localhost:3000/test'
print(session.post(url,json={'ahy':'bye'}).text)
