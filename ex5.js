
    //EX 1
    var a = {
      nome: "Pedro",
    };

    var b = {
      nome: a.nome,
    };

    console.info(a === b);
    console.info(a.nome === b.nome);

    a.nome = "Maria";

    console.dir(a);
    console.dir(b);

    console.info(a.nome === b.nome);

    /* false
    true
    { nome: 'Maria' }
    { nome: 'Pedro' }
    false
  */