import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error in ErrorBoundary:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-red-900 text-white p-4">
          <h2 className="text-xl font-bold mb-2">Something went wrong with the 3D model.</h2>
          <p className="text-sm mb-4">Please try refreshing the page or contact support if the issue persists.</p>
          {this.props.showDetails && this.state.error && (
            <details className="text-xs text-red-200">
              <summary>Error Details</summary>
              <pre className="whitespace-pre-wrap break-all">{this.state.error.toString()}</pre>
              <pre className="whitespace-pre-wrap break-all">{this.state.errorInfo.componentStack}</pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
