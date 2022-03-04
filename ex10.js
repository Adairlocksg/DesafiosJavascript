
const teste = [1, 2, 4, 5, 5];

const booleanos = teste.map((element, index) => {
  const arrayToCheck = teste.splice(index, 1);
  const repete = teste.splice(index, 1).includes(element);

  return repete;
});

if(booleanos.includes(true) === true){
    console.log("repete");
}else{
    console.log("não repete");
}
