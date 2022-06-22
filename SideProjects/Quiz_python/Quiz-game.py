print('Welcome to my Quiz!')

playing = input('Do you want to play? ')

if playing.lower() != 'yes':
    quit()

print('okay, lets play')
score = 0

answer = input("quantos anos tem o léo? ")
if answer.lower() == "sete":
    print("Acertou!")
    score += 1
else:
    print("Errou, Tente novamente")

answer = input("qual o nome do léo? ")
if answer.lower() == "leonardo":
    print("Acertou!")
    score += 1
else:
    print("Errou, Tente novamente")

if score == 1:
    print ('Voce acertou ' + str(score)+ ' Pergunta')
else:
    print ('Voce acertou ' + str(score)+ ' Perguntas')


    