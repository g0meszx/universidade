class Universidade {
    constructor(nome) {
      this.nome = nome;
      this.departamentos = [];
    }

    adicionarDepartamento(departamento) {
      if (!this.departamentos.includes(departamento)) {
        this.departamentos.push(departamento);
        console.log(`Departamento "${departamento}" adicionado à universidade ${this.nome}.`);
      } else {
        console.log(`O departamento "${departamento}" já existe na universidade ${this.nome}.`);
      }
    }
  
    removerDepartamento(departamento) {
      const index = this.departamentos.indexOf(departamento);
      if (index !== -1) {
        this.departamentos.splice(index, 1);
        console.log(`Departamento "${departamento}" removido da universidade ${this.nome}.`);
      } else {
        console.log(`O departamento "${departamento}" não foi encontrado na universidade ${this.nome}.`);
      }
    }
  
    exibirDepartamentos() {
      if (this.departamentos.length > 0) {
        console.log(`Departamentos da universidade ${this.nome}:`);
        this.departamentos.forEach((departamento, index) => {
          console.log(`${index + 1}. ${departamento}`);
        });
      } else {
        console.log(`Não há departamentos na universidade ${this.nome}.`);
      }
    }
  }

  const universidade = new Universidade("UniAraxá");
 
  universidade.adicionarDepartamento("Engenharia de Software");
  universidade.adicionarDepartamento("Desenvolvimento de Sistemas");
  universidade.adicionarDepartamento("Programação Web");
  
  universidade.exibirDepartamentos();
  
  universidade.removerDepartamento("Desenvolvimento de Sistemas");

  universidade.exibirDepartamentos();