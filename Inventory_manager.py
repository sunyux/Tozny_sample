#read json file
from hashlib import new
import json
from re import search
import re

f = open('./Tozny_sample.json')
data = json.load(f)

#a search function work for search a value
def search_function(data,category,type):
    new_list=[]
    for i in data:
        if i[type]==category:
            new_list.append(i)
    return new_list

#get value function         
def get_price(p):
    return p['price']

#print a list
def print_list(result):
    for i in result:
        print(i)
#check a number 
def check_year(number):
    if(number>1000 and number<3000):
        return True
    else:
        return False

#1. What are the 5 most expensive items from each category?
def expensive5(category):
    sort_list=search_function(data,category,'type')
    sort_list.sort(key=get_price,reverse=True)
    if(len(sort_list)>=5):
        top_five=[x for x in sort_list[0:5]]
    else:
        top_five=sort_list
    return top_five
print("Question1: What are the 5 most expensive items from each category?")   
category_list=['dvd','book','cd']
for i in category_list:
    print("The 5 most expensive items for ",i, "are :" )
    print_list(expensive5(i))

#2. Which cds have a total running time longer than 60 minutes?
print("\nQuestion2:Which cds have a total running time longer than 60 minutes?\n")
cd_list=search_function(data,'cd','type')
for i in cd_list:
    total=0
    for j in i['tracks']:
        total+=j['seconds']
        if(total>60*60):
            print(i,"\ntotal running time is", total,"\n")

#Which authors have also released cds?
print("\nQuestion3:Which authors have also released cds?\n")
book_list=search_function(data,'book','type')
for i in book_list:
    for j in cd_list:
        if(i['author']==j['author']):
          print(i['author'], "\nhave book" ,i, "\nand cd:\n", j)
# Which items have a title, track, or chapter that contains a year.
print("\nQuestion4:Which items have a title, track, or chapter that contains a year?\n")
dvd_list=search_function(data,'dvd','type')
#check book title and chapters
for i in book_list:
    if(i['title'].isdigit()):
        if(check_year(int(i['title']))):
            print(i)
    for j in i['chapters']:
        if(j.isdigit()):
            if(check_year(int(j))):
                print(i)
#check cd tracks' name
for i in cd_list:
    for j in i['tracks']:
        if(j['name'].isdigit()):
            if(check_year(int(j['name']))):
                print(i)

#check dvd's title
for i in dvd_list:
#using regular expressions find a number
    if(re.findall('[0-9]+', i['title'])):
        print(i)



f.close()
