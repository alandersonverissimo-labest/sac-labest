# Site de Solicitação de Compra/Pagamento

## Descrição
Este é um site simples com formulário para solicitação de compras e pagamentos que envia os dados via webhook. O design foi baseado na imagem fornecida, mantendo o layout de duas colunas e o esquema de cores laranja.

## Características
- **Layout responsivo**: Funciona em desktop e mobile
- **Design clean**: Baseado na imagem fornecida com cores e layout similares
- **Validação de campos**: Todos os campos obrigatórios são validados
- **Envio via webhook**: Os dados são enviados para o endpoint configurado
- **Feedback visual**: Mensagens de sucesso e erro para o usuário

## Campos do Formulário
O formulário coleta as seguintes informações:

- **Solicitante**: Nome da pessoa que está fazendo a solicitação
- **Solicitado Em**: Data da solicitação (preenchida automaticamente com a data atual)
- **Vencimento**: Data de vencimento da solicitação
- **Favorecido**: Nome da empresa ou pessoa favorecida
- **Centro de Custo**: Departamento responsável (Financeiro, Marketing, Vendas, etc.)
- **Linha Orçamento**: Linha orçamentária relacionada
- **Competência**: Mês/ano de competência
- **Forma de Pagamento**: Método de pagamento (Boleto, Cartão, PIX, etc.)
- **Detalhamento**: Descrição detalhada do produto/serviço
- **Quantidade**: Quantidade de itens
- **Valor Unitário**: Valor por unidade em reais
- **Descrição/Justificativa**: Justificativa para a compra

## Configuração do Webhook
O formulário está configurado para enviar os dados para:
```
https://mentally-bursting-grouper.ngrok-free.app/webhook-test/c380e20a-6277-4b48-87f3-bccdeda00c57
```

### Formato dos Dados Enviados
Os dados são enviados via POST em formato JSON:

```json
{
  "Solicitante": "João da Silva",
  "SolicitadoEm": "2025-08-29",
  "Vencimento": "2025-07-24",
  "Favorecido": "Empresa ABC LTDA",
  "CentroCusto": "Financeiro",
  "LinhaOrcamento": "Marketing 2025",
  "Competencia": "2025-07-01",
  "FormaPagamento": "Boleto 30 dias",
  "Detalhamento": "Notebook Dell Inspiron",
  "Quantidade": 2,
  "ValorUnitario": 3500,
  "DescricaoJustificativa": "Compra necessária para home office"
}
```

## Como Usar
1. Abra o arquivo `formulario.html` em qualquer navegador web
2. Preencha todos os campos obrigatórios (marcados com *)
3. Clique em "Enviar Solicitação"
4. Aguarde a confirmação de envio

## Personalização
Para alterar o webhook de destino, edite a URL na linha 235 do arquivo `formulario.html`:

```javascript
const response = await fetch('SEU_WEBHOOK_AQUI', {
```

## Arquivos Incluídos
- `formulario.html`: Arquivo principal com HTML, CSS e JavaScript
- `README.md`: Esta documentação

## Tecnologias Utilizadas
- HTML5
- CSS3 (com Grid Layout e Flexbox)
- JavaScript (ES6+)
- Fetch API para requisições HTTP

## Compatibilidade
- Navegadores modernos (Chrome, Firefox, Safari, Edge)
- Dispositivos móveis e tablets
- Não requer servidor web (pode ser aberto diretamente no navegador)

