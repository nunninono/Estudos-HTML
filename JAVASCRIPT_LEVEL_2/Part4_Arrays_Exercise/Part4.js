alert("Digite 'inicializar()' no console para usar o sistema!!");
let array = [];

function inicializar() {
    while (true) {
        let escolha = prompt("Escolha entre add, remove, show e quit (insira o numero): ");
    
        switch (escolha) {
            case "add":
                let atribuicao = prompt("Insira o nome do novo aluno: ");
                array.push(atribuicao);
                alert("O novo aluno foi inserido");
                break;
            
            case "remove":
                array.pop();
                alert("O aluno de cima foi remoivido");
                break;
            
            case "show":
                console.log(array);
                break;
            
            case "quit":
                console.log("Saindo do programa...")
                return;
                break;
    
            default:
                alert("Insira uma entrada válida!!");
                break;
        }
        
    }
}
