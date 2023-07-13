Bem-vindo ao Multi-form, uma single page application(SPA) de formulários.

Projeto construído a partir do desafio disponível da [FrontendMentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Utilizei o design fornecido pela plataforma e elaborei a página da maneira mais fidedigna possível, desenvolvido com React.js e Bootstrap. E esse foi o meu resultado final 💻<https://multi-form-theta.vercel.app/>.

![#](./public/frame-1.png)
![#](./public/frame-2.png)

</br>

## 🎯 Objetivos

Os usuários devem ser capazes de:

> - Complete cada etapa da sequência
> - Volte para uma etapa anterior para atualizar suas seleções
> - Veja um resumo de suas seleções na etapa final e confirme o pedido
> - Veja o layout ideal para a interface de acordo com o tamanho de tela do seu dispositivo
> - Veja os estados de "hover" e "focus" para todos os elementos interativos na página
- Receba mensagens de validação do formulário se:
> - Um campo foi deixado em branco
> - O endereço de e-mail não está formatado corretamente
> - Uma etapa é enviada, mas nenhuma seleção foi feita

O objetivo é replicar o design fornecido o mais fielmente possível e garantir o funcionamento das rotas entre cada página e a continuidade de suas informações

</br>

## 🔧 Propriedades e Tecnologias

> - Vite
> - React
> - React Router DOM v6
> - React Hook Form
> - Yup
> - Validation
> - Bootstrap 4
> - SASS
> - Mobile-first
> - Semântica HTML



</br>

## 🧠 Meu aprendizado

> - React Hook Form

O React Hook Form é uma biblioteca que oferece uma abordagem prática e eficiente para lidar com validação, envio de dados e manipulação de estado de formulários.

React.js:
```js
...
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
...
const {
  register,
  handleSubmit: onSubmit,
  formState: { errors },
} = useForm({ resolver: yupResolver(schema) })
...
...
<input
  {...register('name')} 
  id='name'
  type='text'
  placeholder='e.g. Stephen King'
/>
...
```

Acima estão seus componentes básicos, onde "register" é responsável por registrar a propriedade "name" de cada input, para assim termos o controle.

```js
...
const handleSubmit = () => {
  navigate("/select-plan")
}
...
<form onSubmit={onSubmit(handleSubmit)}>...
...
```

"handleSubmit: onSubmit", é uma função que recebe outra função como argumento, responsável pelo controle do submit do formulário. Aqui reatribuimos ela a "onSubmit", para não entrar em conflito com nossa função de mesmo nome já existente.

```js
...
<input className={errors?.name?.message ? 'w-100 p-1 px-2 border border-danger rounded' : 'w-100 border rounded p-1 px-2'}
  id='name'
  type='text'
  placeholder='e.g. Stephen King'
  {...register('name')}
/>
...
```

"formState: { errors }", formState guarda o estados de todas os elementos registrados e dele, atravéz da atribuição desestruturada, pedemos extrair os erros, para assim como no exemplo acima, rederizarmos na página.

```js
...
const schema = object({
  name: string().required("This field is required"),
  email: string().required("This field is required"),
  phone: string().required("This field is required"),
})
...
```

"useForm({ resolver: yupResolver(schema) })", a própria biblioteca recomenda outra biblioteca chamada Yup, para estruturar a base de dados do formulário, semelhante a um objeto, chamado de "schema". Assim a validação fica mais intuitiva.

[saiba mais!](https://react-hook-form.com/get-started)

</br>

## 💻 Rodando o projeto

Para conferir a versão final é só acessar o link: 💻<https://multi-form-theta.vercel.app/>.

Aqui está uma prévia em vídeo

<video src="./public/preview.mp4" width="1024" height="720" controls>
  Video not supported
</video>

</br>

## Autor

- LinkedIn - [Pedro A. Lima](https://www.linkedin.com/in/pedroalima6/)
