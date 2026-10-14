let num1 = Number(prompt ("Digite o primeiro número: "))
let num2 = Number(prompt ("Digite o segundo número: "))
let oprt = prompt ("Informe a operação: \n[+]\n[-]\n[*]\n[/]\n[**]\n[raiz]")

if(oprt == "+") {
    alert(num1 + num2)
} else if(oprt == "-") {
    alert(num1 - num2)
} else if(oprt == "*") {
    alert(num1 * num2)
} else if(oprt == "/") {
    alert(num1 / num2)
} else if(oprt == "**") {
    alert(num1 ** num2)
} else if(oprt == "raiz") {
    alert(num1 ** (1/num2))
}