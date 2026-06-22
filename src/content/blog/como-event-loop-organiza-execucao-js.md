---
title: "Como o event loop organiza a execução do JavaScript"
date: "2026-04-15"
excerpt: "Shipping quickly is a skill. So is knowing when not to."
---

Faaala, pessoal. Tudo certo?

Este ano, decidi finalmente iniciar um projeto que estava engavetado há muito tempo: uma série de conteúdos sobre conceitos fundamentais para entrevistas técnicas de front-end (e também dar aquela força para identificar problemas reais em aplicações JavaScript).

A ideia é simples: em cada post, explorar um conceito recorrente nessas entrevistas, com exemplos práticos, erros comuns e aprendizados que tive ao longo da carreira.

Começando por um clássico que muita gente acha que entende, mas nem sempre domina: o event loop.

A maioria dos devs JavaScript sabe que o event loop existe. Poucos sabem exatamente o que ele faz.

---

O JavaScript é single-threaded, ou seja, significa que ele executa uma coisa por vez, e o event loop é o mecanismo que
decide o quê e quando. Ele coordena três camadas: a call stack, a fila de microtasks e a fila de macrotasks.

A call stack executa o código síncrono e quando ela esvazia, o event loop não vai direto para a próxima macrotask, ele
primeiro percorre completamente a fila de microtasks. Só depois, com a fila de microtasks vazia, é que a fila de
macrotasks é processada.

Microtasks incluem callbacks de Promises (.then, .catch, .finally) e queueMicrotask. Macrotasks incluem setTimeout,
setInterval e eventos de I/O.

É por isso que Promise.resolve().then() sempre roda antes de setTimeout(() => {}, 0), mesmo que o timeout seja zero. O
zero não significa "imediato", significa "na próxima macrotask disponível".

```ts
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");

// Saída: 1 -> 4 -> 3 -> 2
```

O erro clássico em entrevista: afirmar que setTimeout com delay zero executa logo após o código síncrono. Na prática, ele
entra na fila de macrotasks e aguarda todas as microtasks pendentes serem resolvidas, inclusive microtasks que geram
outras microtasks.

Entender de verdade o event loop faz diferença na prática, separa quem apenas decora sintaxe de quem realmente entende
como o código se comporta por baixo dos panos. Mais do que um detalhe técnico, esse conhecimento é a base para prever a
ordem de execução e evitar bugs silenciosos em aplicações assíncronas complexas.

Hora do Desafio: Qual é a ordem de saída deste código?

```ts
console.log("start");

setTimeout(() => console.log("timeout 1"), 100);

setTimeout(() => console.log("timeout 2"), 0);

Promise.resolve()
  .then(() => console.log("promise 1"))
  .then(() => console.log("promise 2"));

console.log("end");
```

📚 Referências para aprofundar:

- [Event loop: microtasks and macrotasks — javascript.info](https://javascript.info/event-loop)
- [In depth: Microtasks and the JavaScript runtime environment — MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth)
