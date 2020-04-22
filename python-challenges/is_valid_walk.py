def is_valid_walk(walk):
  n = 0
  s = 0
  e = 0
  w = 0
  
  for direction in walk:
    if direction == 'n':
      n += 1
    elif direction == 's':
      s -= 1
    elif direction == 'e':
      e += 1
    elif direction == 'w':
      w -= 1
  if len(walk) == 10 and (n + s) == 0 and (e + w) == 0:
    return True
  else:
    return False





test = ['n','s','n','s','n','s','n','s','n','s']
result = is_valid_walk(test)
print(result)