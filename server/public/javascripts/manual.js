
var manual = [
    [ "Base Operations" , [
        [ "Integer Operations" , {
          "ADD": "takes n and m from the pile and stacks the result m + n",
          "SUB": "takes n and m from the pile and stacks the result m - n",
          "MUL": "takes n and m from the pile and stacks the result m x n",
          "DIV": "takes n and m from the pile and stacks the result m / n",
          "MOD": "takes n and m from the pile and stacks the result m mod n",
          "NOT": "takes n from the pile and stacks the result n = 0",
          "INF": "takes n and m from the pile and stacks the result m < n",
          "INFEQ": "takes n and m from the pile and stacks the result m <= n",
          "SUP": "takes n and m from the pile and stacks the result m > n",
          "SUPEQ": "takes n and m from the pile and stacks the result m >= n",
        }],
        [ "Float Operations" , {
          "FADD": "takes n and m from the pile and stacks the result m + n",
          "FSUB": "takes n and m from the pile and stacks the result m - n",
          "FMUL": "takes n and m from the pile and stacks the result m x n",
          "FDIV": "takes n and m from the pile and stacks the result m / n",
          "FCOS": "takes n from the pile and stacks the result cos(n)",
          "FSIN": "takes n from the pile and stacks the result sin(n)",
          "FINF": "takes n and m from the pile and stacks the result m < n",
          "FINFEQ": "takes n and m from the pile and stacks the result m <= n",
          "FSUP": "takes n and m from the pile and stacks the result m > n",
          "FSUPEQ": "takes n and m from the pile and stacks the result m >= n",
        }],
        [ "Address Operations" , {
          "PADD": "takes an Integer n and an address a from the pile and stacks the address a + n",
        }],
        [ "String Operations" , {
          "CONCAT": "takes n and m, from the pile and stacks the concatenated strings (string ns + string ms) address",
          "CHRCODE": "takes n from the pile, which must be a string, and stacks the ASCII code from the first character",
          "STRLEN": "takes n, from the pile and stacks the size of the string",
          "CHARAT": "takes n and m, from the pile and stacks the ASCII code from the character in the string m at the position n"
        }],
        [ "Heap Operations" , {
          "ALLOC": "integer_n :: allocates a structured block, sized n, and stacks its address",
          "ALLOCN": "takes an integer n from the pile and allocates a structured block, sized n, and stacks its address",
          "FREE": "takes an address a from the pile and frees its allocated structured block",
          "POPST": "removes the last structured block from the heap",
        }],
        [ "Equality" , {
          "EQUAL": "takes n and m from the pile and stacks the result n = m",
        }],
        [ "Conversions" , {
          "ATOI": "takes a String Heap address from the pile and stacks its string's conversion to an integer (it fails if the string doesn't represent an integer)",
          "ATOF": "takes a String Heap address from the pile and stacks its string's conversion to a real number (it fails if the string doesn't represent a real number)",
          "ITOF": "takes an integer from the pile and stacks its conversion to a real number",
          "FTOI": "takes a real number from the pile and stacks its conversion to a whole number - by removing its decimals",
          "STRI": "takes an integer from the pile, converts it to a string and stacks its address",
          "STRF": "takes a real number from the pile, converts it to a string and stacks its address",
        }],
      ]
    ],
    [ "Data Manipulation", [
        ["Stacking" , {
          "PUSHI": "integer_n :: stacks n",
          "PUSHN": "integer_n :: stacks n times the integer 0",
          "PUSHF": "real_number_n :: stacks n",
          "PUSHS": "string_n :: archives s in the String Heap and stacks its address",
          "PUSHG": "integer_n :: stacks the value found in gp[n]",
          "PUSHL": "integer_n :: stacks the value found in fp[n]",
          "PUSHSP": "stacks the value of the register sp",
          "PUSHFP": "stacks the value of the register fp",
          "PUSHGP": "stacks the value of the register gp",
          "PUSHST": "integer_n :: pushes the address of the struct heap at index n to the stack",
          "LOAD": "integer_n :: takes an address a from the pile and stacks the value found in a[n] in the pile or in the heap (depending on a) ",
          "LOADN": "takes an integer n and an address a from the pile and stacks the value found in a[n] in the pile or in the heap (depending on a) ",
          "DUP": "integer_n :: duplicates and stacks n times the value of the top of the pile",
          "DUPN": "takes the integer n from the pile and duplicates and stacks n times the value of the top of the pile",
          "COPY": "integer_n :: copies the n values of the top of the pile and stacks them in the same order",
          "COPYN": "takes the integer n from the pile and copies and stacks the n values of the top of the pile in the same order",
        }],
        [ "Taking from Stack" , {
          "POP": "integer_n :: takes n values from the pile",
          "POPN": "takes the integer n from the pile and takes n values m from the pile",
        }],
        [ "Archiving" , {
          "STOREL": "integer_n :: takes a value from the pile and stores it in fp[n]",
          "STOREG": "integer_n :: takes a value from the pile and stores it in gp[n]",
          "STORE": "integer_n :: takes a value v and an address a and stores v in a[n] in the pile or the heap (depending on a) ",
          "STOREN": "takes a value v, an integer n and an address a and stores v in a[n] in the pile or the heap (depending on a) ",
        }],
        [ "Miscellaneous" , {
          "CHECK": "integer_n , integer_p :: checks that at the top of the pile there's an integer i such that n <= i <= p (it throws an error if this is false)",
          "SWAP": "takes the values v and m from the pile and stacks m followed by n",
          "AND": "takes n and m from the pile and stacks the result n && m",
          "OR": "takes n and m from the pile and stacks the result n || m",
        }],
      ]
    ],
    [ "Input-Output" , {
      "WRITEI": "takes an integer from the pile and prints its value",
      "WRITEF": "takes a real number from the pile and prints its value",
      "WRITES": "takes a String Heap address from the pile and prints its string",
      "WRITELN": "prints \\n",
      "WRITECHR": "takes an integer from the pile and prints its corresponding ASCII character",
      "READ": "reads a string from the keyboard, stores it in the String Heap and stacks its address",
    }],
    [ "Control Operations" , [
        ["Program Counter Register Alteration", {
          "PUSHA": "label :: stacks label's code address",
          "JUMP": "label :: assigns the label's code address to the register pc ",
          "JZ": "label :: takes a value v from the pile and if:\nv = 0, assigns the label's code address to the register pc\n v != 0, increments register pc by 1",
        }],
        [ "Procedures" , {
          "CALL": "takes an label's address a from the pile, saves pc and fp in the Call Stack and assigns a to pc and the current sp's value to fp.",
          "RETURN": "assigns the current fp's value to sp, reinstates the values fp and pc from the Call Stack and increments pc by 1",
        }],
      ]
    ],
    [ "Beginning and End" , {
      "START": "assigns sp's value to fp",
      "NOP": "doesn't do anything",
      "ERR": "string_x :: throws an error with message x",
      "STOP": "stops program execution",
    }],
  ]


module.exports = {manual};

function hide_div(arrow, div){
  $(arrow).toggleClass('fa-angle-down fa-angle-up');

  var x = document.getElementById(div);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}