---
title: "O fim do texto enrolado: como tirar respostas úteis da IA"
date: "2026-10-28"
excerpt: "Uns dias atrás esbarrei num artigo do Andrej Karpath (Anthropic, ex-OpenAI), onde ele lista várias sugestões de como otimizar de como obter respostas mais claras e úteis da IA usando instruções simples, diagramas, páginas interativas e animações sob medida."
---

Todo mundo que usa ferramentas como ChatGPT ou Claude já passou pela mesma situação: você faz uma pergunta técnica ou pede para explicar um conceito e recebe de volta três ou quatro parágrafos longos, cheios de voltas, voz passiva e termos difíceis.

No fim, você gastou tempo lendo e continuou sem entender direito.

O erro aqui não está no modelo em si, mas na forma como pedimos a resposta. Se você manda apenas um "me explica isso aqui", a IA assume o tom padrão de redação: prolixo e genérico.

Andrej Karpathy, que esteve na fundação da OpenAI e hoje trabalha no time de pré-treino do Claude na Anthropic, compartilhou uma abordagem muito boa para resolver isso. A ideia principal é mudar o formato de saída. Em vez de aceitar parágrafos soltos, você força o modelo a responder com regras específicas ou em outros formatos de dados.

Abaixo estão algumas técnicas práticas que você pode aplicar no dia a dia.

---

### 1. ASD-STE100 (a especificação da aviação)

Na indústria aeroespacial, instruções ambíguas custam vidas. Por conta disso, criaram nos anos 1980 uma norma internacional chamada ASD-STE100 (Simplified Technical English).

Ela tem regras rígidas para manuais de manutenção:

- Vocabulário controlado (cada palavra tem apenas um significado fixo).
- Frases curtas e ordem direta.
- Proibição de termos vagos ou floreios.
- Apenas uma ideia por frase.

Os modelos conhecem essa especificação a fundo. Quando você pede para o modelo explicar algo nesse formato, ele corta todo o excesso.

O prompt básico fica assim:

```text
Explique [seu tema aqui] utilizando a especificação ASD-STE100.
```

O detalhe importante: seguir 100% da regra pode deixar o texto seco demais, parecendo um robô antigo. O truque que o Karpathy sugeriu é dosar a rigidez:

```text
Explique [seu tema aqui]. Siga as regras da ASD-STE100 em cerca de 80% para manter a clareza, mas sem perder a fluidez da leitura.
```

Com isso, você ganha explicações limpas, frases diretas e zero enrolação.

---

### 2. Peça diagramas em vez de parágrafos

Mesmo um texto bem escrito ainda precisa ser lido linha a linha. Se o assunto envolve dependências, ordem de execução ou causa e efeito, parágrafos são o pior formato possível.

Em vez de pedir uma explicação textual, peça um diagrama.

Você pode pedir em formato visual direto ou em código Mermaid (que o GitHub, Notion e a maioria dos renderizadores de Markdown suportam nativamente):

```text
Crie um diagrama de blocos simples mostrando como funciona [o ciclo de vida do componente / o fluxo da requisição / a fotossíntese].
```

Bater o olho em caixas conectadas com setas resolve o entendimento em três segundos, sem precisar montar o esquema na cabeça enquanto lê um bloco de texto.

---

### 3. Exija uma página web interativa (HTML simples)

A IA evoluiu muito na geração de frontend sem frameworks. Texto explica como algo deveria ser em teoria, mas uma interface interativa mostra como aquilo funciona na prática.

Se você está estudando uma fórmula, um algoritmo ou lógica financeira, peça uma página interativa com sliders:

```text
Crie uma página em arquivo único HTML com JavaScript puro que funcione como uma calculadora de juros compostos. Adicione sliders para aporte mensal, taxa e prazo, exibindo o resultado em tempo real.
```

Você pega o código gerado, salva como `.html` e abre no navegador. Mexendo nos controles e vendo o resultado mudar em tempo real, você absorve a lógica muito mais rápido do que lendo fórmulas matemáticas.

---

### 4. Crie animações explicativas sob medida

Esse é o formato favorito do Karpathy e onde a tecnologia está avançando rápido. Em vez de procurar um vídeo no YouTube que talvez não responda à sua dúvida exata, você pode fazer a IA montar uma explicação animada sob medida.

Um exemplo prático é pedir código para bibliotecas de animação matemática como o Manim (a engine usada pelo canal 3Blue1Brown):

```text
Escreva um script em Python usando Manim para animar visualmente o conceito de [X].
```

Se quiser ir além, dá para usar APIs de voz como a ElevenLabs para narrar o roteiro gerado pela máquina. O conteúdo deixa de ser genérico e passa a resolver a sua lacuna exata de conhecimento.

---

### O trabalho subiu de nível

O ponto de virada dessa mudança é claro: tarefas operacionais pesadas como escrever o código inicial, gerar documentação ou sintetizar textos estão ficando automatizadas.

O nosso trabalho agora fica um nível acima:

1. Definir o problema com clareza.
2. Escolher o formato de saída certo para cada situação.
3. Supervisionar e validar o resultado final.

Além disso, como o custo de gerar código e interfaces caiu para quase zero, entramos na era do software descartável. Ferramentas que antes levariam três semanas para serem desenvolvidas e nunca sairiam do papel (como um organizador temporário de mesas de evento ou uma calculadora de conversão de dados pontual) agora são geradas em três minutos, usadas em uma tarde e depois descartadas.

Teste trocar o "me explica isso" pelo formato ASD-STE100 ou por um diagrama na próxima vez que abrir o chat. A diferença na utilidade da resposta é imediata.
