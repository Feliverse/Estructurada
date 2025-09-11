number_to_check = 25465
print(number_to_check)
print(
    'es   multiplo de 2' if number_to_check % 2 == 0 else
    'es   multiplo de 3' if number_to_check % 3 == 0 else
    'es   multiplo de 5' if number_to_check % 5 == 0 else
    'es   multiplo de 7' if number_to_check % 7 == 0 else
    'no    es múltiplo de 2, 3, 5 ni 7'
)