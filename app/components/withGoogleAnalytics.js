import React from 'react';
import Router from 'next/router';
import withGA from 'next-ga';

const GOOGLE_ANALYTICS_ID = 'UA-XXXXXXXXX-X'; // Replace with your Google Analytics tracking ID

const withGoogleAnalytics = (WrappedComponent) => {
  return withGA(GOOGLE_ANALYTICS_ID, Router)(WrappedComponent);
};

export default withGoogleAnalytics;
