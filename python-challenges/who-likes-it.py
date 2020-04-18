# def likes(names):
#   x = len(names)
#   if (x == 0):
#     return 'no one likes this'
#   if (x == 1):
#     return names[0] + ' likes this'
#   if (x == 2):
#     return names[0] + ' and ' + names[1] + ' like this'
#   if (x == 3):
#     return names[0] + ", " + names[1] + ' and ' + names[2] + ' like this'
#   if (x > 3):
#     return names[0] + ", " + names[1] + ' and ' + str(x-2)  + ' others like this'

def likes(names):
  switcher = {
    0: 'no one likes this',
    1: "{} likes this",
    2: "{} and {} like this",
    3: "{}, {} and {} like this"
  }
  return switcher.get(len(names), "{}, {} and {length} others like this").format(*names, length=len(names) -2)

print(likes(['Peter', 'Jacob', 'John']))