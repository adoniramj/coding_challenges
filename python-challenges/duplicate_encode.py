def duplicate_encode(word):
    arr = list(word.lower())
    for i in range(len(arr)):
      arr[i] = '-' if arr[i] == ')' else arr[i]
      arr[i] = '+' if arr[i] == '(' else arr[i]

    obj = {}
    for i in range(len(arr)):
        if arr[i] in obj.keys():
            obj[arr[i]] = obj[arr[i]] + 1
        else:
            obj[arr[i]] = 1
    print(obj)

    for key, value in obj.items():
      if value > 1:
          for i in range(len(arr)):
              if arr[i] == key:
                  arr[i] = ')'
      else:
        for i in range(len(arr)):
          if arr[i] == key:
            arr[i] = '('
    return "".join(arr)


