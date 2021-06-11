import requests
from bs4 import BeautifulSoup

URL = 'https://www.walmart.com/?&adid=22222222220447883240&wmlspartner=wmtlabs&wl0=e&wl1=g&wl2=c&wl3=481505735209&wl4=aud-1183291748582:kwd-29126550&wl5=9060358&wl6=&wl7=&wl8=&veh=sem&gclid=Cj0KCQjwk4yGBhDQARIsACGfAes9rapqoEJCw7GrrrXBAgZcY7Yc1gwdwBePOtZ23x-frY7jCuCeuBcaAtsOEALw_wcB&gclsrc=aw.ds'
page = requests.get(URL)

soup = BeautifulSoup(page.content, 'html.parser')
results = soup.find(id='ResultsContainer')
print(results.prettify())
elems = results.find_all('section', class_='card-content')
for elem in elems:
    print(elem, end='\n'*2)

for elem in elems:
    # Each job_elem is a new BeautifulSoup object.
    # You can use the same methods on it as you did before.
    brand_elem = elem.find('h2', class_='brand')
    price_elem = elem.find('div', class_='price')
    delivery_elem = elem.find('div', class_='delivery')
    print(brand_elem)
    print(price_elem)
    print(delivery_elem)
    print()
for prod_elem in elems:
    brand_elem = prod_elem.find('h2', class_='brand')
    price_elem = prod_elem.find('div', class_='price')
    deliery_elem = prod_elem.find('div', class_='delivery')
    print(brand_elem.text)
    print(price_elem.text)
    print(delivery_elem.text)
    print()
for web_elem in elems:
    brand_elem = web_elem.find('h2', class_='brand')
    price_elem = web_elem.find('div', class_='price')
    delivery_elem = web_elem.find('div', class_='delivery')

    if None in (brand_elem, price_elem, delivery_elem):
        continue
    print(brand_elem.text.strip())
    print(price_elem.text.strip())
    print(delivery_elem.text.strip())
    print()
python_prod = results.find_all('h2',string=lambda text: 'python' in text.lower())
print(len(python_prod))
python_prod = results.find_all('h2',
                               string=lambda text: "python" in text.lower())

for p_prod in python_prod:
    link = p_prod.find('a')['href']
    print(p_prod.text.strip())
    print(f"find here: {link}\n")