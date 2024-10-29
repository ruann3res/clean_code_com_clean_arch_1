TypeScript e um superset, que suporta JavaScript e agrega novas funcionalidades.. por exemplo Decorators, Generics, etc.

Tambem pode ser considerado uma linguagem que é transpliada para JavaScript, ou seja, o código TypeScript é convertido para JavaScript. 

## Testes

- Given/Arrange: Definiçao de todas as informaçoes necessarias para executar o comportamento que sera testado

- When/Act Executar o comportamento 

- Then/Assert: Verificar o que aconteceu apos a execuçao, comparando as informaçoes retornadas com a expectativa que foi criada

### First

- Fast: Testes devem rodar rapido
- Independent: Nao deve existir dependencia entre os testes eles devem poder ser executados de forma isolada
- Repeatable: O resultado deve ser o mesmo independente da quantidade de vezes que sera executado
- Self Validating: O Proprio teste deve ter uma saida bem definida que é valida ou nao fazendo que com que ele passe ou falhe
- Timely: Os testes devem ser escritos antes do codigo-fonte

### TDD: Feito para construir software nao para testa-los

Escrever codigo onde os testes falham -> Fazer o codigo onde o teste passe -> Eliminar as redundancias(Refatorar o codigo)