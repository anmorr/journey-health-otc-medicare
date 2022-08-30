import { Fragment, useState } from "react";
import Head from 'next/head'
import IndexView from  '../views/IndexView/IndexView'

import React from 'react';
import Home from '../views/Home';

const HomePage = () => {
  // return <Home />;
  return <IndexView />
};

export default HomePage;