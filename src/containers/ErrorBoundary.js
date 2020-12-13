import { Component } from 'react';

import Bunny from '../assets/images/bunny.png';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary__content">
            <p className="error-boundary__message">We're sorry, but something went terribly wrong...</p>
            <img className="error-boundary__image" src={Bunny} alt="error" />
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
