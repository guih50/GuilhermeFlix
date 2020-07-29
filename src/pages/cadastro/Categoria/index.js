import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
    const valoresIniciais ={
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState(['teste']);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handlerChanger(infosDoEvento){
        const {getAttribute, value} = infosDoEvento.target;
        setValue(
            getAttribute('name'),
            value
        );
    }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome} </h1>

      <form onSubmit={function handlerSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
              ...categorias,
              values
          ]);

          setValues(valoresIniciais)
      }}>
        <div>
            <label>
            Nome da Categoria:
            <input
                type="text"
                name="nome"
                value={values.nome}
                onChange={handlerChanger}
            />
            </label>
        </div>

        <div>
            <label>
            Descrição:
            <input
                type="text"
                name="descricao"
                value={values.descricao}
                onChange={handlerChanger}
            />
            </label>
        </div>

        <div>
            <label>
            Cor:
            <input
                type="color"
                name="cor"
                value={values.cor}
                onChange={handlerChanger}
            />
            </label>
        </div>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
          {categorias.map((categoria, indice) => {
              return(
                  <li key={`${categoria}${indice}`}>
                      {categoria.nome}
                  </li>
              )
            })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;