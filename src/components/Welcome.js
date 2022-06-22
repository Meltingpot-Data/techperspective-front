import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Welcome extends React.Component {
  render() {
    return (
      <>
      <br />
      <br />
      <h2>Welcome!</h2>

      {!this.props.auth0.isAuthenticated &&

      <h4>Please login to access your surveys.</h4>
  }
      </>
    );
  }
}

export default withAuth0(Welcome);