import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'BTC',
          type: 'withdraw',
          category: 'Investimentos',
          amount: 500,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'ETHERIUM',
          type: 'deposit',
          category: 'Investimentos',
          amount: 500,
          createdAt: new Date('2024-02-12 02:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'; //endereço base das chamadas vindas do front
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody);

        return schema.create('transaction', data);
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);