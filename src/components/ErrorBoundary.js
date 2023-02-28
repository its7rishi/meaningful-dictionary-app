import React from 'react'
import NotFound from './NotFound'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    const { text } = this.props
    if (this.state.hasError) {
      return (
        <>
          <NotFound text={text} />
        </>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
