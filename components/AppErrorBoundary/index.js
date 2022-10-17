import React from 'react';

export class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    document.body.classList.remove('routing');
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
