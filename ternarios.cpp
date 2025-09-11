#include <iostream>

int main() {
    int numberToCheck = 25465;
    std::cout << numberToCheck << std::endl;
    (numberToCheck % 2 == 0) ? std::cout << "es multiplo de 2" << std::endl :
    (numberToCheck % 3 == 0) ? std::cout << "es multiplo de 3" << std::endl :
    (numberToCheck % 5 == 0) ? std::cout << "es multiplo de 5" << std::endl :
    (numberToCheck % 7 == 0) ? std::cout << "es multiplo de 7" << std::endl :
    std::cout << "no es múltiplo de 2, 3, 5 ni 7" << std::endl;
    return 0;
}