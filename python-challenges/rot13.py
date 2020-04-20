def rot13(message):
    thisdict = {
        "A": "N",
        "B": "O",
        "C": "P",
        "D": "Q",
        "E": "R",
        "F": "S",
        "G": "T",
        "H": "U",
        "I": "V",
        "J": "W",
        "K": "X",
        "L": "Y",
        "M": "Z",
        "N": "A",
        "O": "B",
        "P": "C",
        "Q": "D",
        "R": "E",
        "S": "F",
        "T": "G",
        "U": "H",
        "V": "I",
        "W": "J",
        "X": "K",
        "Y": "L",
        "Z": "M"

    }
    newmsg = ''
    for letter in message:
        convToLower = False
        if letter.islower():
            letter = letter.upper()
            convToLower = True
        if letter in thisdict:
            if convToLower:
                newmsg += thisdict[letter].lower()
                convToLower = False
            else:
                newmsg += thisdict[letter]
        else:
            newmsg += letter
    return newmsg


print(rot13('AB5 ACcasfsddfd344  fsfsdFEREReffa'))

def rot13(message):
    alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    outputMessage = ""
    for letter in message:
        if letter in alpha.lower():
            outputMessage += alpha[(alpha.lower().index(letter) +13) % 26].lower()
        elif letter in alpha:
            outputMessage += alpha[(alpha.index(letter) +13) % 26]
        else:
            outputMessage += letter
    return outputMessage
 