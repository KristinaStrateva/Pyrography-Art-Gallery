import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        }
    }

    static getDerivedStateFromError(err) {
        console.log(err);

        return {
            hasError: true,
            error: err,
        }
    }

    componentDidCatch(err, errInfo) {
        this.setState({
            hasError: true,
            error: err,
            errorInfo: errInfo,
        });

        if (this.props.onError) {
            this.props.onError(err);
        }
    }

    componentDidMount() {
        window.addEventListener('unhandledrejection', this.handlePromiseError);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.handlePromiseError);
    }

    handlePromiseError = (event) => {
        const err = event.reason;
        this.setState({
            hasError: true,
            error: err,
        });

        if (this.props.onError) {
            this.props.onError(err);
        }
    };

    render() {
        return this.props.children;
    }
}