import React from 'react';

export class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Atualiza o state para que a próxima renderização mostre a UI alternativa.
    return { hasError: true };
  }

  componentDidCatch() {
    // Você também pode registrar o erro em um serviço de relatórios de erro
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <h1>Algo deu errado.</h1>;
    }

    const { children } = this.props;
    return children;
  }
}
